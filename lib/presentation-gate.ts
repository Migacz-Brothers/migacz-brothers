import type { Presentation } from '@/lib/presentations';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Página de senha servida como documento avulso, sem passar pelo layout do site:
// o deck também é um documento completo, então os dois vivem na mesma URL limpa.
// As cores e fontes abaixo espelham `app/[lang]/globals.css` e o layout raiz.
export function gatePage({
  presentation,
  action,
  error,
}: {
  presentation: Presentation;
  action: string;
  error?: string;
}): string {
  const title = escapeHtml(presentation.title);
  const client = presentation.client ? escapeHtml(presentation.client) : null;

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive, noimageindex">
<meta name="theme-color" content="#050505">
<title>${title} · Migacz Brothers</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@500;600&display=swap">
<style>
:root{
  --main-background:#050505; --main-foreground:#ede8ec;
  --purple:#8d5ac5; --blue:#4967fd;
  --line:rgba(255,255,255,.12); --muted:rgba(237,232,236,.62);
}
*{box-sizing:border-box}
body{
  margin:0; min-height:100svh; display:grid; place-items:center; padding:24px;
  background:var(--main-background); color:var(--main-foreground);
  font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif; line-height:1.6;
}
body::before{
  content:''; position:fixed; inset:0; pointer-events:none; z-index:0;
  background:
    radial-gradient(60% 45% at 18% 12%, rgba(141,90,197,.22) 0%, rgba(141,90,197,0) 100%),
    radial-gradient(55% 45% at 85% 88%, rgba(73,103,253,.20) 0%, rgba(73,103,253,0) 100%);
}
main{position:relative; z-index:1; width:100%; max-width:420px}
.eyebrow{
  margin:0 0 10px; font-size:.75rem; letter-spacing:.14em; text-transform:uppercase;
  color:var(--muted);
}
h1{
  margin:0 0 6px; font-family:Sora,Inter,sans-serif; font-weight:600; font-size:1.75rem;
  line-height:1.28;
}
.client{margin:0 0 28px; color:var(--muted); font-size:.9375rem}
form{display:flex; flex-direction:column; gap:12px}
label{font-size:.8125rem; color:var(--muted)}
input{
  width:100%; padding:13px 15px; border-radius:10px; font:inherit; font-size:1rem;
  color:var(--main-foreground); background:rgba(255,255,255,.05);
  border:1px solid var(--line); transition:border-color 160ms ease, background 160ms ease;
}
input:focus{outline:none; border-color:var(--blue); background:rgba(255,255,255,.08)}
button{
  margin-top:4px; padding:13px 16px; border:0; border-radius:10px; cursor:pointer;
  font:inherit; font-weight:500; color:#fff;
  background:linear-gradient(90deg, var(--purple) 0%, var(--blue) 100%);
  transition:filter 160ms ease;
}
button:hover{filter:brightness(1.1)}
.error{
  margin:0; padding:10px 14px; border-radius:10px; font-size:.875rem;
  color:#ffd7d7; background:rgba(255,92,92,.10); border:1px solid rgba(255,92,92,.28);
}
footer{margin-top:28px; font-size:.8125rem; color:var(--muted)}
footer a{color:inherit}
</style>
</head>
<body>
<main>
  <p class="eyebrow">Apresentação restrita</p>
  <h1>${title}</h1>
  ${client ? `<p class="client">${client}</p>` : '<p class="client">Migacz Brothers</p>'}
  ${error ? `<p class="error">${escapeHtml(error)}</p>` : ''}
  <form method="post" action="${escapeHtml(action)}">
    <label for="password">Senha de acesso</label>
    <input id="password" name="password" type="password" autocomplete="current-password"
           autofocus required>
    <button type="submit">Abrir apresentação</button>
  </form>
  <footer>Link privado · <a href="https://migaczbrothers.com">migaczbrothers.com</a></footer>
</main>
</body>
</html>`;
}
