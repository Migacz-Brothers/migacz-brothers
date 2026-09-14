import { createHmac, timingSafeEqual } from 'crypto';
import fs from 'fs';
import path from 'path';

// Uma apresentação = um diretório em `presentations/`, contendo:
//   - um arquivo .md com frontmatter (slug + password, no mínimo)
//   - os arquivos servidos, sendo `entry` (padrão: index.html) a porta de entrada
export const PRESENTATIONS_DIR = path.join(process.cwd(), 'presentations');
export const PRESENTATIONS_BASE_PATH = '/apresentacao';

export type Presentation = {
  dir: string;
  slug: string;
  password: string;
  entry: string;
  title: string;
  client?: string;
};

type Frontmatter = Record<string, string>;

// Frontmatter simples `chave: valor` — sem listas, sem YAML aninhado.
// Aspas simples/duplas em volta do valor são opcionais e removidas.
function parseFrontmatter(source: string): Frontmatter {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source);
  if (!match) return {};

  const data: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const sep = trimmed.indexOf(':');
    if (sep < 0) continue;

    const key = trimmed.slice(0, sep).trim();
    let value = trimmed.slice(sep + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) data[key] = value;
  }
  return data;
}

function readPresentation(dirName: string): Presentation | null {
  const dir = path.join(PRESENTATIONS_DIR, dirName);
  if (!fs.statSync(dir).isDirectory()) return null;

  const mdFile = fs
    .readdirSync(dir)
    .filter((file) => file.toLowerCase().endsWith('.md'))
    .sort()[0];
  if (!mdFile) return null;

  const data = parseFrontmatter(fs.readFileSync(path.join(dir, mdFile), 'utf8'));

  // sem senha não existe apresentação: melhor sumir do que servir aberto
  if (!data.password) return null;

  const slug = data.slug || dirName;
  const entry = data.entry || 'index.html';
  if (!fs.existsSync(path.join(dir, entry))) return null;

  return {
    dir,
    slug,
    password: data.password,
    entry,
    title: data.title || slug,
    client: data.client,
  };
}

export function getAllPresentations(): Presentation[] {
  if (!fs.existsSync(PRESENTATIONS_DIR)) return [];

  return fs
    .readdirSync(PRESENTATIONS_DIR)
    .flatMap((dirName) => {
      if (dirName.startsWith('.') || dirName.startsWith('_')) return [];
      const presentation = readPresentation(dirName);
      return presentation ? [presentation] : [];
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getPresentation(slug: string): Presentation | null {
  return getAllPresentations().find((p) => p.slug === slug) ?? null;
}

// --- acesso -----------------------------------------------------------------

export function cookieName(slug: string): string {
  return `deck_${slug.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
}

// O próprio segredo é a chave do HMAC: nada de env var extra, e trocar a senha
// no .md invalida automaticamente os cookies já emitidos.
export function accessToken({ slug, password }: Presentation): string {
  return createHmac('sha256', password).update(`deck:${slug}`).digest('base64url');
}

export function secretsMatch(a: string, b: string): boolean {
  const x = Buffer.from(a, 'utf8');
  const y = Buffer.from(b, 'utf8');
  // timingSafeEqual exige mesmo tamanho; o length já vaza por outros canais
  if (x.length !== y.length) return false;
  return timingSafeEqual(x, y);
}
