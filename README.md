# Emerson Chemimm — Barbeiro Visagista (Premium Website)

Este é o projeto do site institucional do barbeiro visagista **Emerson Chemimm**. Trata-se de uma aplicação institucional desenvolvida com Next.js (App Router), TypeScript, Tailwind CSS e Framer Motion. 

O site é focado em design editorial premium de alto padrão, conversão de leads para WhatsApp e otimização avançada para SEO local e técnico.

## Stack Utilizada
- **Next.js 14+** (App Router, Server Components por padrão)
- **TypeScript** para tipagem estática e segurança do código
- **Tailwind CSS** para estilização utilitária responsiva e premium
- **Framer Motion** para micro-animações fluidas e transições
- **Lucide React** para iconografia minimalista
- **Next.js Metadata API** para SEO dinâmico completo

## Instruções de Setup Local

### 1. Pré-requisitos
- Node.js instalado (v18+)
- Gerenciador de pacotes npm (já incluso no Node)

### 2. Instalação e Execução
Na pasta raiz do projeto, execute os seguintes comandos:

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar o servidor de desenvolvimento local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### 3. Build de Produção
Para compilar e otimizar o projeto para produção:

```bash
npm run build
```

## Como Editar Conteúdos e Configurações

O projeto foi projetado para que todas as informações dinâmicas e textos fiquem isolados em arquivos de dados TypeScript em `src/data/`:
- **Gerais (Nome, Contato, Horário, Cidade, Endereço)**: [site.ts](file:///src/data/site.ts)
- **Serviços**: [services.ts](file:///src/data/services.ts)
- **Depoimentos**: [testimonials.ts](file:///src/data/testimonials.ts)
- **Sliders de Antes e Depois**: [transformations.ts](file:///src/data/transformations.ts)
- **Fotos do Portfólio**: [gallery.ts](file:///src/data/gallery.ts)
- **Perguntas Frequentes (FAQ)**: [faqs.ts](file:///src/data/faqs.ts)
- **Metadados base e SEO**: [seo.ts](file:///src/data/seo.ts)

## Otimizações Pendentes
Antes do deploy definitivo de produção, certifique-se de:
1. Abrir `src/data/site.ts` e preencher os placeholders `[INSERIR_WHATSAPP]`, `[INSERIR_CIDADE]`, `[INSERIR_ENDERECO]` com os dados reais de funcionamento do barbeiro.
2. Inserir imagens reais e comprimidas em `.jpg`/`.png`/`.webp` na pasta `/public/images/` correspondentes às fotos de portfólio e antes/depois, atualizando seus caminhos em `gallery.ts` e `transformations.ts`.
3. Atualizar os depoimentos reais recebidos em `testimonials.ts`.

## Deploy na Vercel
Este projeto está estruturado de forma ideal para hospedagem na Vercel:
1. Conecte seu repositório Git à Vercel.
2. Defina o diretório raiz como o diretório deste projeto Next.js.
3. A Vercel detectará automaticamente a configuração do Next.js e executará o build de forma otimizada.
