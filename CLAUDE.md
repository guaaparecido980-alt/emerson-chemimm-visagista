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

## Marca
Em 6 de agosto de 2026 o Emerson trocou a logo por uma versão **dourada**:
- `static-site/images/logo.webp` — assinatura horizontal (proporção ~4,4:1)
- `static-site/apple-touch-icon.png` e `favicon.ico` — monograma "EM"

Os originais vieram em PNG com fundo preto chapado. A transparência foi extraída
por **luminância** (alfa proporcional ao brilho), e não por limiar de cor — recorte
por limiar comeria o degradê dourado e o relevo das letras.

No mesmo dia o site inteiro migrou do azul para o dourado, para acompanhar a logo.

## Identidade Visual (Dark & Gold)
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#05070A` | fundo |
| `--bg-elevated` | `#0D121F` | cartões, campos |
| `--surface` | `#12182A` | superfície elevada |
| `--line` | `#1E293B` | bordas |
| `--text` | `#F4F7FB` | texto |
| `--muted` | `#9AA5B8` | texto secundário |
| **`--accent`** | **`#C4976B`** | dourado — a mediana exata da logo |
| **`--accent-soft`** | **`#E3BE8C`** | realce, links, hover |
| **`--accent-ink`** | **`#0B0A07`** | **texto que fica SOBRE o dourado** |

⚠️ **Nunca use texto branco sobre o dourado.** Dá 2,6:1 de contraste e reprova em
qualquer critério de legibilidade. Todo texto sobre fundo dourado — botões, o
cursor do comparador antes/depois, o ícone de play — usa `var(--accent-ink)`.
Como referência: dourado sobre o fundo escuro dá 7,7:1 e tinta sobre dourado, 7,5:1.

Os cinzas continuam **puxados para o azul-marinho** de propósito: a própria logo
combina dourado com um azul ardósia (`#374F65`), então os neutros frios são parte
da identidade, não sobra do tema antigo.

No formulário, a cor de alerta é laranja queimado (`#E2703A`) e não âmbar: âmbar
ficaria perto demais do dourado e o aviso perderia a distinção.

- **Tipografia**: Títulos `Fraunces` (serifada, editorial) / Textos `Newsreader`
- **Estética**: sofisticado, editorial, alto contraste, luzes discretas (sem neon).

## Estrutura de Pastas
```
static-site/            <- ISTO vai para o ar
  index.html            página única do site
  politica-de-privacidade.html
  formulario/index.html formulário privado de pré-entrevista
  CNAME .nojekyll robots.txt sitemap.xml
  images/  videos/
google-meu-negocio/     material do Perfil da Empresa (não publicado)
src/                    Next.js LEGADO, não publicado — ver aviso no topo
out/  .next/            resíduo de build do Next, no .gitignore
```

## Comandos Úteis
Não há build nem dev server: é HTML estático. Para ver localmente, basta abrir
`static-site/index.html` no navegador, ou servir a pasta:

```bash
npx serve static-site        # ou: python -m http.server -d static-site
```

Servir por HTTP é melhor que abrir o arquivo direto — `file://` quebra caminhos
absolutos e a área de transferência do formulário.

Os comandos `npm run dev` / `build` / `lint` pertencem ao projeto Next legado em
`src/` e **não afetam o site publicado**.

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
Tudo do site público vive em **`static-site/index.html`** — um arquivo único, sem build.
Use busca por texto para achar a seção.

| O quê | Onde |
|---|---|
| Textos, serviços, depoimentos, FAQ, Antes/Depois | seções correspondentes do `index.html` |
| Endereço, telefone, horários | aparecem em **5 lugares** — veja a regra abaixo |
| Imagens | `static-site/images/` |
| Vídeo do depoimento | `static-site/videos/depoimento-cliente.mp4`, carregado sob demanda por JS |
| SEO (title, description, Open Graph, JSON-LD) | `<head>` do `index.html` |
| Política de privacidade | `static-site/politica-de-privacidade.html` |
| Formulário de pré-entrevista | `static-site/formulario/index.html` |
| Material do Perfil da Empresa (logo, capa, descrição, foto) | `google-meu-negocio/` (não vai para o ar) |

### ⚠️ Endereço aparece em 5 lugares
Ao mudar, altere **todos**, senão o Google vê divergência e derruba a confiança:
1. JSON-LD no `<head>` (`streetAddress` + `postalCode`)
2. Seção Localização
3. Embed do mapa
4. Resposta do FAQ "onde fica"
5. vCard da função `salvarContato()` (o "Salvar Contato no Celular")

Endereço correto: **Rua Jacarezinho, 21 — Mercês, Curitiba/PR, CEP 80710-150**
(Barbearia Clube). O site já teve `Av. Cândido Hartmann, 1580`, que é o endereço de
um supermercado — errado.

O bloco `geo` do JSON-LD foi **removido de propósito**: as coordenadas antigas apontavam
para o estacionamento do supermercado, e é melhor omitir do que declarar errado.
Repor com o valor certo quando o Perfil da Empresa estiver verificado, junto com
`sameAs` e `hasMap` apontando para o perfil.

## Formulário de pré-entrevista (privado)
`static-site/formulario/index.html`, publicado em `/formulario`. Link enviado a dedo
pelo Emerson, **não é linkado em lugar nenhum do site**.

- `noindex, nofollow` no `<head>`; fora do `sitemap.xml`
- **Não colocar no `robots.txt`**: aquele arquivo é público e um `Disallow` anunciaria
  o caminho para qualquer um
- 6 etapas, 17 perguntas, rascunho em `localStorage` (chave `ec-preentrevista`)
- Não existe servidor: o envio monta uma mensagem e o cliente escolhe WhatsApp,
  copiar, ou PDF (via `window.print()`, sem biblioteca externa)
- O botão do WhatsApp é um `<a>` com `href` montado antes do clique, **não**
  `window.open` — bloqueador de pop-up cancelaria em silêncio
- Testes de simulação em jsdom foram usados no desenvolvimento; se mexer bastante,
  vale refazer

## Onde Editar Estilos
Bloco `<style>` único no `<head>` do `index.html` (tokens em `:root`).
O formulário e a política de privacidade têm o próprio `<style>`, com os mesmos tokens.

## Armadilhas já corrigidas — não repetir
- **Bibliotecas de animação ficam no fim do `<body>`, sem `defer`.** No `<head>` elas
  travam a renderização. Com `defer` o código de animação, que roda durante o parse e
  checa `typeof gsap !== 'undefined'`, encontraria `undefined` e as animações parariam
  **sem erro no console**. Foi o que quebrou o mobile no commit revertido `16e2ff8`.
- **Barra de urgência (z-index 101) e header (100) ficam acima do menu mobile (99).**
  Qualquer painel em tela cheia precisa reservar o espaço deles via `--altura-topo`,
  medida em `positionHeader()`. Idem `scroll-margin-top` em campos de formulário.
- **`justify-content: center` corta os dois extremos quando o conteúdo estoura a tela**,
  e o topo cortado fica inalcançável no scroll. Em listas verticais que podem crescer,
  use margem automática no primeiro e último filho.
- **`scrollHeight` vale 0 em elemento escondido.** Alturas automáticas precisam ser
  recalculadas no momento em que o bloco aparece.

## Regra de Ouro: Nunca Mostrar Placeholder
**Nunca** deixe strings como `"[INSERIR_X]"`, `"Endereço Pendente"` visíveis no site.
Se um dado não existir, esconda o bloco inteiro ou troque por uma frase institucional
que não dependa dele.

## Outras Regras de Ouro
- **Acessibilidade**: `aria-label` em links/botões sem texto, `aria-expanded`/`aria-controls` em accordions, `role="slider"` + teclado no comparador antes/depois, foco visível (`focus-visible`).
- **Copy Humana**: sem clichê, sem "cara de IA", sem promessa não confirmada.
- **Não Inventar Dados**: nada de número fictício de clientes, avaliações, certificações, preços ou duração de serviço.
- **Imagens**: container com proporção fixa para evitar layout shift; só a foto do hero carrega com prioridade.
- **Fallback de imagem**: mostra a imagem OU o fallback, nunca os dois empilhados.
