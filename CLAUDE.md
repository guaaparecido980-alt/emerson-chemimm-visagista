# CLAUDE.md — Guia de Desenvolvimento

Este arquivo contém as diretrizes e referências rápidas para o desenvolvimento continuado do site de **Emerson Chemimm**.

## Resumo do Projeto
Site institucional premium e otimizado para Emerson Chemimm, Barbeiro Visagista. O objetivo é estabelecer autoridade e capturar leads para agendamento no WhatsApp.

Publicado como export estático no GitHub Pages:
https://guaaparecido980-alt.github.io/emerson-chemimm-visagista/

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
1. Rodar o build com o basePath correto (comando acima). Isso gera a pasta `out/`.
2. Publicar o conteúdo de `out/` no branch `gh-pages`:
   ```
   cd out
   git init
   git checkout -b gh-pages
   git add -A
   git commit -m "Deploy"
   git remote add origin https://github.com/guaaparecido980-alt/emerson-chemimm-visagista.git
   git push -f origin gh-pages
   ```
3. O GitHub Pages já está habilitado apontando para o branch `gh-pages` (source: `/`). Não precisa reconfigurar.
4. Lembre de commitar e dar push também no `master` com o código-fonte (o `out/` não é versionado no master, está no `.gitignore`).

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
