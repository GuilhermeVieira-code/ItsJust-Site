---
created: 2026-03-27
status: em-planejamento
prioridade: alta
---

# Site ItsJust — itsjust.com.br

## Objetivo
Blog pessoal em Astro + Vercel. Tecnologia emergente acessível para todos.

## Stack
Astro · MDX · Vercel · GitHub Actions · Domínio: itsjust.com.br (a comprar no Registro.br)

## Pipeline de publicação
```
status: approved (frontmatter) → GitHub Actions detecta → build Astro → Vercel deploy
```

## Status
- [ ] Comprar domínio itsjust.com.br no Registro.br
- [ ] Criar repositório Astro no GitHub
- [ ] Configurar Vercel + GitHub Actions
- [ ] Migrar 7 artigos do Notion
- [ ] Configurar tradução automática PT → EN

## Decisões tomadas
- Framework: Astro + MDX
- Hospedagem: Vercel
- Idioma fonte: PT — tradução automática no site (sem arquivos duplicados)
- Frontmatter: `section` + `subtopic` (sem `lang:`)
- Slugs: `/tech/ai/[slug]`, `/innovation/future/[slug]` etc.
