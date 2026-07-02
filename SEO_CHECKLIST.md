# SEO_CHECKLIST.md — Checklist de SEO Técnico e Local

Guia de conformidade técnica de SEO para o site **Emerson Chemimm — Barbeiro Visagista**.

## SEO Local (Meta)
- [ ] Configurar a constante `CIDADE` em `src/data/site.ts` com a cidade de atuação (ex: "Curitiba").
- [ ] Configurar a constante `BAIRRO` em `src/data/site.ts` (ex: "Batel").
- [ ] Assegurar que os termos `"barbeiro visagista em [cidade]"`, `"corte masculino personalizado em [cidade]"`, e `"visagismo masculino em [cidade]"` apareçam organicamente no conteúdo da página.
- [ ] Vincular o link de mapas do Google Business Profile e do Google Maps nas seções do rodapé e sobre.

## SEO Técnico
- [ ] **H1 único por página**: A Home Page deve possuir exatamente uma tag `<h1>` (localizada no Hero Section).
- [ ] **Estrutura de Headings**: Garantir que a ordem dos títulos siga a hierarquia semântica correta (`h1` -> `h2` -> `h3`).
- [ ] **Metadata API**: Configurar metadados base e alternativos no `layout.tsx` e nas páginas internas (`page.tsx`).
- [ ] **Sitemap.xml**: Geração automática de URLs amigáveis via `src/app/sitemap.ts`.
- [ ] **Robots.txt**: Geração de regras de indexação via `src/app/robots.ts`.
- [ ] **Tags Open Graph & Twitter**: Definir títulos, descrições e caminhos de imagens de compartilhamento para redes sociais.
- [ ] **JSON-LD Schema**:
  - [ ] `LocalBusiness` / `HairSalon`: Nome, endereço completo, telefone, faixa de preço, coordenadas geográficas e horário de funcionamento.
  - [ ] `Person`: Perfil do Emerson Chemimm com link para redes sociais.
  - [ ] `FAQPage`: Lista de perguntas e respostas relevantes estruturadas na home.
  - [ ] `BreadcrumbList`: Caminho de navegação estruturado.
  - [ ] `Service`: Serviços oferecidos estruturados com faixas de preço ou categorias.

## Performance & UX (Web Vitals)
- [ ] Usar imagens otimizadas com o `<Image />` do Next.js.
- [ ] Adicionar atributo `loading="lazy"` para imagens abaixo da dobra de tela (as que estão fora do viewport inicial).
- [ ] Garantir carregamento assíncrono de scripts terceiros.
- [ ] Verificar CLS (Cumulative Layout Shift) próximo a zero (reservando espaço para imagens que carregam de forma assíncrona).
- [ ] Lighthouse: Rodar auditoria final do Google Lighthouse visando pontuações acima de 95% em SEO, Acessibilidade e Melhores Práticas.
