import fs from 'fs';
import path from 'path';
import { type NextRequest, NextResponse } from 'next/server';

import { gatePage } from '@/lib/presentation-gate';
import {
  accessToken,
  cookieName,
  getPresentation,
  PRESENTATIONS_BASE_PATH,
  secretsMatch,
  type Presentation,
} from '@/lib/presentations';

// lê o disco a cada request (fs não existe no runtime edge)
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Params = { params: { slug: string; file?: string[] } };

const CONTENT_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
};

function privateHeaders(extra: HeadersInit = {}): Headers {
  const headers = new Headers(extra);
  headers.set('Cache-Control', 'private, no-store');
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  return headers;
}

function notFound(): Response {
  return new Response('Apresentação não encontrada.', {
    status: 404,
    headers: privateHeaders({ 'Content-Type': 'text/plain; charset=utf-8' }),
  });
}

function presentationUrl(slug: string): string {
  return `${PRESENTATIONS_BASE_PATH}/${slug}`;
}

function isAuthorized(request: NextRequest, presentation: Presentation): boolean {
  const cookie = request.cookies.get(cookieName(presentation.slug))?.value;
  return !!cookie && secretsMatch(cookie, accessToken(presentation));
}

function grantAccess(response: NextResponse, presentation: Presentation): NextResponse {
  response.cookies.set({
    name: cookieName(presentation.slug),
    value: accessToken(presentation),
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: presentationUrl(presentation.slug),
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}

// Resolve o arquivo pedido dentro do diretório da apresentação, recusando
// qualquer caminho que escape dele (`..`, links, barras exóticas).
function resolveFile(presentation: Presentation, segments: string[]): string | null {
  const relative = segments.length ? segments.join('/') : presentation.entry;
  const target = path.resolve(presentation.dir, relative);
  const root = path.resolve(presentation.dir);

  if (target !== root && !target.startsWith(root + path.sep)) return null;
  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) return null;
  // o .md é o descritor (contém a senha) — nunca é servido
  if (target.toLowerCase().endsWith('.md')) return null;

  return target;
}

function serveFile(presentation: Presentation, segments: string[]): Response {
  const file = resolveFile(presentation, segments);
  if (!file) return notFound();

  const contentType =
    CONTENT_TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';

  return new Response(new Uint8Array(fs.readFileSync(file)), {
    headers: privateHeaders({ 'Content-Type': contentType }),
  });
}

function serveGate(presentation: Presentation, error?: string): Response {
  return new Response(
    gatePage({ presentation, action: presentationUrl(presentation.slug), error }),
    {
      status: error ? 401 : 200,
      headers: privateHeaders({ 'Content-Type': 'text/html; charset=utf-8' }),
    },
  );
}

export async function GET(request: NextRequest, { params }: Params) {
  const presentation = getPresentation(params.slug);
  if (!presentation) return notFound();

  const segments = params.file ?? [];

  // `?k=<senha>` existe para entregar o link com um clique na reunião:
  // troca a senha por cookie e limpa a query da barra de endereço.
  const key = request.nextUrl.searchParams.get('k');
  if (key && secretsMatch(key, presentation.password)) {
    const clean = new URL(request.nextUrl);
    clean.searchParams.delete('k');
    return grantAccess(NextResponse.redirect(clean, 303), presentation);
  }

  if (!isAuthorized(request, presentation)) {
    // sub-arquivo sem acesso não vira formulário: o pedido não é navegação
    if (segments.length) {
      return new Response('Acesso restrito.', {
        status: 401,
        headers: privateHeaders({ 'Content-Type': 'text/plain; charset=utf-8' }),
      });
    }
    return serveGate(presentation);
  }

  return serveFile(presentation, segments);
}

export async function POST(request: NextRequest, { params }: Params) {
  const presentation = getPresentation(params.slug);
  if (!presentation) return notFound();

  const form = await request.formData();
  const password = String(form.get('password') ?? '');

  if (!secretsMatch(password, presentation.password)) {
    return serveGate(presentation, 'Senha incorreta. Tente novamente.');
  }

  const target = new URL(presentationUrl(presentation.slug), request.nextUrl.origin);
  return grantAccess(NextResponse.redirect(target, 303), presentation);
}
