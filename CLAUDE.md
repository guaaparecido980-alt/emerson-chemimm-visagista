# CLAUDE.md — Guia de Desenvolvimento

Este arquivo contém as diretrizes e referências rápidas para o desenvolvimento continuado do site de **Emerson Chemimm**.

## Resumo do Projeto
Site institucional premium e otimizado para Emerson Chemimm, Barbeiro Visagista. O objetivo é estabelecer autoridade e capturar leads para agendamento no WhatsApp.

Domínio oficial: **https://emersonvisagista.com.br**
(URL antiga do GitHub Pages, ainda ativa como redirecionamento: https://guaaparecido980-alt.github.io/emerson-chemimm-visagista/)

## ⚠️ ATENÇÃO: qual código está realmente no ar

O site publicado é a **página única em `static-site/index.html`** (HTML + CSS + GSAP/Lenis, sem build).
É esse arquivo que deve ser editado para qualquer mudança no site real.

A pasta `src/` contém um projeto **Next.js legado que NÃO está publicado** — foi substituído
pela versão em `static-site/`. O `sitemap.ts`, o `robots.ts` e as páginas em `src/app/`
nunca chegaram a ir ao ar. Não edite `src/` esperando ver o resultado no site.

### Arquivos de SEO/infra em `static-site/`
- `CNAME` — domínio customizado do GitHub Pages (`emersonvisagista.com.br`). **Não apagar.**
- `.nojekyll` — impede o Jekyll de ignorar arquivos iniciados com `_`.
- `robots.txt` — libera indexação e aponta o sitemap.
- `sitemap.xml` — atualizar a `<lastmod>` quando o conteúdo mudar de verdade.
- `politica-de-privacidade.html` — política LGPD + cookies (linkada no rodapé e no aviso de cookies).

### Analytics
No `<head>` do `index.html`, nesta ordem obrigatória:

1. **Consent Mode v2** — tudo negado por padrão até o visitante aceitar no aviso de cookies.
   Precisa vir **antes** de qualquer biblioteca carregar.
2. **GTM** `GTM-P5P6H8HQ` — reservado para pixels e tags futuras.
3. **GA4** `G-Y82QCMP0DF` — instalado direto via `gtag.js`.

⚠️ **Nunca criar uma tag do GA4 dentro do GTM.** O GA4 já está no HTML; ter os dois
faz cada visita contar duas vezes.

**Eventos:** `clique_whatsapp` (agendamento iniciado) e `consentimento_cookies`.
O `clique_whatsapp` é disparado pelos dois caminhos de propósito — `gtag('event', ...)`
para chegar ao GA4 e `dataLayer.push` para o GTM. Um `dataLayer.push` sozinho **não**
vira evento no GA4 quando o GA4 está via `gtag.js`; se mexer nesse handler, mantenha a
linha do `gtag`.

## Identidade Visual (Premium Dark & Blue)
- **Fundo**: Preto Profundo (`#05070A`)
- **Accent**: Azul Premium (`#0A84FF`)
- **Secundário**: Azul Escuro (`#071B33`)
- **Tipografia**: Títulos: `Fraunces` (serifada, variável, editorial) / Textos: `Inter`
- **Estética**: Visual sofisticado, editorial, alto contraste, luzes discretas (evitar neon exagerado).

## Estrutura de Pastas
- `src/app/`: Rotas, layouts e metadados.
- `src/components/`:
  - `sections/`: Seções específicas da landing page.
  - `ui/`: Componentes genéricos de UI (botões, cards, sliders, lightbox).
- `src/data/`: Arquivos TS contendo os dados estáticos editáveis.
- `src/lib/paths.ts`: Helper `withBasePath()` para caminhos de imagem locais (necessário por causa do `basePath` do GitHub Pages).

## Comandos Úteis
- **Dev Server**: `npm run dev`
- **Build do Projeto (local, sem basePath)**: `npm run build`
- **Build para GitHub Pages (com basePath)**: `NEXT_PUBLIC_BASE_PATH=/emerson-chemimm-visagista npm run build`
- **Linting**: `npm run lint`

## Como fazer o Deploy no GitHub Pages
O deploy é a publicação do conteúdo de `static-site/` na raiz do branch `gh-pages`.
Não há build — é HTML estático.

```bash
# 1. Commitar o código-fonte no master
git add -A && git commit -m "Descrição da mudança" && git push origin master

# 2. Publicar static-site/ na raiz do gh-pages
git push -f origin `git subtree split --prefix static-site master`:gh-pages
```

O GitHub Pages já está habilitado apontando para o branch `gh-pages` (source: `/`).
Não precisa reconfigurar.

**Importante:** o `CNAME` e o `.nojekyll` precisam estar dentro de `static-site/` para irem
junto no deploy. Se o domínio customizado "sumir" das configurações do GitHub Pages depois de
um deploy, é porque o `CNAME` não subiu.

## Onde Editar Conteúdos
- **Dados institucionais, WhatsApp, endereço/localização**: `src/data/site.ts`
- **Serviços**: `src/data/services.ts`
- **Depoimentos (texto)**: `src/data/testimonials.ts`
- **Depoimento em vídeo**: `public/videos/depoimento-cliente.mp4` + poster em `public/images/depoimento-poster.jpg`, renderizado em `TestimonialsSection.tsx`
- **Antes e Depois**: `src/data/transformations.ts` (imagens em `public/images/transformations/`)
- **Perguntas Frequentes (FAQ)**: `src/data/faqs.ts`
- **Galeria do Portfólio**: `src/data/gallery.ts` (imagens em `public/images/gallery/`)
- **Foto do Emerson (hero)**: `public/images/emerson-hero.jpg`
- **Foto do Emerson (seção Sobre)**: `public/images/emerson-about.jpg`
- **Configurações Globais de SEO**: `src/data/seo.ts` (título, descrição, keywords, Open Graph — usa `siteUrl` como fonte única da URL do site)

## Onde Editar Estilos
- Tokens de tema (cores, fontes): `@theme` no `src/app/globals.css`.
- Fonte de título: `src/app/layout.tsx` (import do `next/font/google`).
- Estilos Globais / glow: `src/app/globals.css`.

## Dados que ainda faltam confirmar (NÃO estão preenchidos de propósito)
Em `src/data/site.ts`, os campos abaixo estão vazios (`""`) até que os dados reais sejam confirmados:
- `location.city`, `location.neighborhood`, `location.address`, `location.zipCode`
- `location.latitude` / `longitude`
- `googleBusinessProfile`, `googleMaps`

Enquanto esses campos estiverem vazios, o site **automaticamente** esconde ou troca esses blocos por uma versão elegante (ex: "Local de atendimento informado no agendamento"), em vez de mostrar texto quebrado. Isso é feito pelos helpers `hasCity`, `hasAddress`, `hasNeighborhood`, `hasZipCode`, `hasCoordinates`, `hasGoogleBusinessProfile` exportados de `src/data/site.ts` — use-os em qualquer componente novo que dependa desses dados.

## Regra de Ouro: Nunca Mostrar Placeholder
**Nunca** deixe strings como `"[INSERIR_X]"`, `"Endereço Pendente"`, `"Substituir por foto real"` visíveis no site renderizado. Se um dado não existir:
1. Esconda o bloco inteiro (condicional), ou
2. Troque por uma frase institucional elegante que não dependa do dado faltante.

Nunca exiba a string vazia/placeholder diretamente. Use os helpers `has*` de `site.ts` para decidir.

## Outras Regras de Ouro
- **Acessibilidade**: `aria-label` em links/botões sem texto explícito, `aria-expanded`/`aria-controls` em accordions, `role="slider"` + navegação por teclado no comparador antes/depois, foco visível (`focus-visible`).
- **Copy Humana**: Sem termos clichês, sem "cara de IA", sem promessas não confirmadas (aromaterapia, estacionamento, lavagem premium, anos de experiência, etc. — só inclua se for real).
- **Não Inventar Dados**: Sem números fictícios de clientes atendidos, avaliações, certificações, preços ou duração de serviço não confirmados.
- **Imagens**: Sempre `next/image` com `fill` + container de aspect-ratio fixo (evita layout shift). `priority` **somente** na foto do hero — todo o resto é lazy por padrão. Caminhos de imagens locais devem passar por `withBasePath()` de `src/lib/paths.ts` (necessário por causa do `basePath` do GitHub Pages) — sem isso a imagem quebra quando publicada.
- **Fallback de imagem**: nunca deixe texto de placeholder atrás de uma imagem semi-transparente. O padrão correto é: mostra a imagem OU o fallback, nunca os dois empilhados.
