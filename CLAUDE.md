# CLAUDE.md — Guia de Desenvolvimento

Este arquivo contém as diretrizes e referências rápidas para o desenvolvimento continuado do site de **Emerson Chemimm**.

## Resumo do Projeto
Site institucional premium e otimizado para Emerson Chemimm, Barbeiro Visagista. O objetivo é estabelecer autoridade e capturar leads para agendamento no WhatsApp.

## Identidade Visual (Premium Dark & Blue)
- **Fundo**: Preto Profundo (`#05070A`)
- **Accent**: Azul Premium (`#0A84FF`)
- **Secundário**: Azul Escuro (`#071B33`)
- **Tipografia**: Títulos: `Sora` / Textos: `Inter`
- **Estética**: Visual sofisticado, editorial, alto contraste, luzes neon sutis.

## Estrutura de Pastas
- `src/app/`: Rotas, layouts e metadados.
- `src/components/`:
  - `sections/`: Seções específicas da landing page.
  - `ui/`: Componentes genéricos de UI (botões, cards, sliders, lightbox).
- `src/data/`: Arquivos TS contendo os dados estáticos editáveis.

## Comandos Úteis
- **Dev Server**: `npm run dev`
- **Build do Projeto**: `npm run build`
- **Linting**: `npm run lint`

## Onde Editar Conteúdos
- **Textos Institucionais & Contato**: `src/data/site.ts`
- **Serviços**: `src/data/services.ts`
- **Depoimentos**: `src/data/testimonials.ts`
- **Antes e Depois**: `src/data/transformations.ts`
- **Perguntas Frequentes (FAQ)**: `src/data/faqs.ts`
- **Galeria do Portfólio**: `src/data/gallery.ts`
- **Configurações Globais de SEO**: `src/data/seo.ts`

## Onde Editar Estilos
- Configuração do Tailwind: `tailwind.config.ts` (ou a nova estrutura do Next.js se for CSS-based, no Tailwind v4 usamos `@theme` no `src/app/globals.css`).
- Estilos Globais: `src/app/globals.css`.

## Regras de Ouro
- **Acessibilidade**: Sempre use `aria-label` em links e botões sem texto explícito e mantenha alto contraste.
- **Copy Humana**: Nada de termos clichês como "eleve seu potencial ao próximo nível". Foque em alinhamento de imagem, profissionalismo e naturalidade.
- **Não Inventar Dados**: Sem números fictícios de clientes atendidos ou avaliações de mentira.
- **Imagens Otimizadas**: Sempre use o `<Image />` do `next/image` com `placeholder="blur"` (se estático) e tags `alt` descritivas.
