# Apresentações

Cada apresentação é **um diretório** aqui dentro, servido em
`https://migaczbrothers.com/apresentacao/<slug>` atrás de senha.

```
presentations/
  cs-armarinho-e-presentes/
    apresentacao.md     # descritor: slug + senha (não é servido)
    index.html          # o deck, documento HTML completo
```

## O descritor `.md`

O primeiro arquivo `.md` do diretório (em ordem alfabética) é o descritor. O
frontmatter é `chave: valor` simples:

```md
---
slug: cs-armarinho-e-presentes   # opcional; padrão = nome do diretório
password: armarinho-123          # obrigatório — sem senha a apresentação não é servida
title: CS Armarinhos Online      # mostrado na tela de senha
client: CS Armarinhos & Presentes
entry: index.html                # opcional; padrão = index.html
---

Qualquer texto abaixo do frontmatter é anotação interna.
```

O `.md` nunca é servido pela rota — ele contém a senha.

## Adicionar uma apresentação

1. `mkdir presentations/<slug>`
2. Coloque o deck como `index.html` (documento completo, com `<head>`). Arquivos
   extras no diretório — imagens, css, fontes, pdf — são servidos em
   `/apresentacao/<slug>/<caminho>`, com a mesma senha.
3. Crie o `.md` com `password:` e `title:`.
4. Commit e deploy. Não há registro central para atualizar.

## Como o acesso funciona

- `/apresentacao/<slug>` mostra uma tela de senha na identidade do site.
- Senha correta → cookie `httpOnly` de 30 dias com escopo só daquela
  apresentação → o deck é servido na mesma URL.
- `/apresentacao/<slug>?k=<senha>` abre direto e limpa a query: é o link de um
  clique para entregar ao vivo.
- Trocar a senha no `.md` invalida os cookies já emitidos (a senha é a chave do
  HMAC do cookie).
- Toda resposta sai com `Cache-Control: private, no-store` e
  `X-Robots-Tag: noindex, nofollow`; a tela de senha também tem `<meta robots>`.

As senhas ficam em texto puro no repositório — o que só é aceitável porque este
repositório é privado. Use senhas descartáveis, específicas por cliente, e não
reaproveitadas de outro lugar.

## Regenerar o deck da CS Armarinhos

A fonte é o repo da cliente (`Migacz-Brothers/cs-armarinho-e-presentes`),
arquivo `docs/apresentacao/deck.html`, que é conteúdo de corpo sem `<head>`
próprio. `docs/apresentacao/publicacao/build.sh` naquele repo faz o embrulho e
gera o `dist/index.html` que foi copiado para cá.
