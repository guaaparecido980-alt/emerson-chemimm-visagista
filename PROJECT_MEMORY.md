# Memória do Projeto — Site Emerson Chemimm

Este documento serve como a memória central do projeto para garantir consistência em futuras iterações e desenvolvimento continuado.

## Cliente
**Emerson Chemimm** — Barbeiro Visagista especialista em imagem masculina.

## Objetivo do Projeto
Construir um site institucional premium de alta conversão que:
1. Posicione Emerson Chemimm como um especialista em visagismo masculino (não apenas um barbeiro tradicional).
2. Gere alta confiança e credibilidade através de fotos de antes e depois reais e depoimentos.
3. Estimule a conversão imediata, direcionando o visitante para o agendamento no WhatsApp ou Instagram.

## Perfil do Público-Alvo
Homens profissionais e exigentes que desejam uma imagem alinhada, confiante e adequada para sua profissão, estilo de vida e formato de rosto.

## Promessa Central
> "Seu corte não precisa apenas ficar bom. Ele precisa combinar com você."
> *Visagismo masculino personalizado de acordo com o rosto, rotina e personalidade.*

## Identidade Visual e Estilo
- **Tema**: Dark mode sofisticado, premium, masculino.
- **Paleta**:
  - Preto profundo (`#05070a` ou `#070a0f`)
  - Azul premium (`#007bff`, `#0a84ff`)
  - Azul escuro (`#071b33`)
  - Branco gelo (`#f4f7fb`)
  - Cinza sofisticado (`#a7b0be`)
  - Detalhes sutis em neon azul.
- **Regras Visuais**: Nada exageradamente futurista ou com cara de template genérico. Muito respiro, bordas finas, cards premium com sombras suaves e contraste marcante.

## Principal Chamada para Ação (CTA)
- Agendamento de avaliação ou horário diretamente no WhatsApp.

## Conteúdos Pendentes (Placeholders)
As seguintes informações estão configuradas como placeholders e precisam ser fornecidas pelo cliente ou preenchidas em `src/data/site.ts` antes de subir em produção:
- `WHATSAPP`: Número com DDI/DDD.
- `CIDADE` e `BAIRRO`: Informações para SEO local.
- `ENDERECO`: Endereço completo físico da barbearia.
- `HORARIOS`: Grade de atendimento semanal.
- `GOOGLE_BUSINESS_PROFILE` e `MAPS`: Links para o perfil oficial e localização.
- `FOTOS` e `DEPOIMENTOS`: Imagens e textos reais coletados do Instagram/clientes.

## Diretrizes de Implementação
- **Não inventar prova social falsa** ou depoimentos de clientes que não existem. Use placeholders elegantes marcados para substituição.
- **Não usar fotos genéricas de banco de imagem** que pareçam artificiais ou artificiais geradas por IA.
- **Prioridade Mobile-First**: O site precisa carregar instantaneamente no celular (4G) e possuir excelente usabilidade móvel.
- **SEO Local**: Assegurar a otimização de termos de busca integrando palavras-chave como "barbeiro visagista em [cidade]" sem exagerar no keyword stuffing.
