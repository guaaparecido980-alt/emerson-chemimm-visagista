export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML ou Rich Text simulado
  date: string;
  readTime: string;
  imageUrl: string;
  faqs: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-e-visagismo-masculino",
    title: "O que é visagismo masculino e como ele ajuda a escolher o corte certo",
    excerpt: "Entenda o conceito de visagismo masculino e descubra por que ele é a ferramenta definitiva para harmonizar a sua imagem pessoal.",
    date: "02 de Julho de 2026",
    readTime: "5 min de leitura",
    imageUrl: "/images/blog/visagismo.jpg",
    content: `
      <p>Você já se perguntou por que alguns cortes de cabelo ficam excelentes em outras pessoas, mas parecem não funcionar no seu rosto? A resposta está na falta de adequação às suas linhas naturais. É aqui que entra o <strong>visagismo masculino</strong>.</p>
      
      <h3>O que é Visagismo?</h3>
      <p>Visagismo é um conceito criado pelo cabeleireiro francês Fernand Aubry na década de 1930. A palavra deriva de "visage", que significa rosto. Trata-se da arte de criar uma imagem pessoal personalizada, que revele a identidade e as qualidades internas de uma pessoa, através de técnicas de cabelo, barba, maquiagem e design de sobrancelhas.</p>
      
      <h3>Como o Visagismo ajuda na prática?</h3>
      <p>No público masculino, o visagismo não busca apenas seguir a última tendência das redes sociais, mas sim analisar a estrutura geométrica do seu crânio e os traços faciais (como o formato do nariz, tamanho da testa e força do maxilar). Com isso, podemos:</p>
      <ul>
        <li><strong>Suavizar traços:</strong> Rosto muito angular ou quadrado pode ter as linhas suavizadas com cortes texturizados ou barbas mais arredondadas.</li>
        <li><strong>Alongar rostos redondos:</strong> Cortes com mais volume no topo e laterais raspadas (fade) ajudam a alongar a silhueta facial.</li>
        <li><strong>Projetar autoridade:</strong> Linhas retas e marcadas na barba e costeletas transmitem estabilidade e liderança.</li>
      </ul>
      
      <p>Na próxima vez que for cortar o cabelo, não peça apenas um 'degradê na lateral'. Agende uma consultoria para descobrir o que realmente realça a sua imagem.</p>
    `,
    faqs: [
      {
        question: "Qualquer pessoa pode fazer visagismo?",
        answer: "Sim! O visagismo serve para qualquer pessoa, independente do tipo de cabelo, formato de rosto ou idade."
      },
      {
        question: "Preciso fazer a consultoria toda vez que cortar?",
        answer: "Não. A consultoria profunda é feita na primeira sessão para estabelecer o plano de imagem. Nos retornos seguintes, mantemos o visual planejado."
      }
    ]
  },
  {
    slug: "qual-corte-combina-com-meu-rosto",
    title: "Como saber qual corte masculino combina com o seu rosto",
    excerpt: "Um guia simples baseado em visagismo para você descobrir as proporções do seu rosto e escolher o corte que te valoriza.",
    date: "28 de Junho de 2026",
    readTime: "6 min de leitura",
    imageUrl: "/images/blog/cortes-rosto.jpg",
    content: `
      <p>Escolher o corte de cabelo ideal pode parecer difícil, mas existe uma ciência visual por trás disso. Analisando as proporções faciais, conseguimos determinar com alta precisão matemática o corte que melhor combina com você.</p>
      
      <h3>Mapeando os Formatos de Rosto mais Comuns</h3>
      <p>Identificar o formato do seu rosto é o primeiro passo para o visagismo. Aqui estão as diretrizes básicas:</p>
      
      <h4>1. Rosto Quadrado</h4>
      <p>Caracterizado por uma mandíbula larga e angular e testa na mesma proporção. É considerado o rosto mais masculino. <strong>Recomendação:</strong> Cortes curtos nas laterais com volume sutil no topo para ressaltar as linhas fortes do maxilar.</p>
      
      <h4>2. Rosto Redondo</h4>
      <p>Possui largura e comprimento semelhantes, com linhas suaves e sem ângulos definidos. <strong>Recomendação:</strong> Cortes volumosos no topo (como topetes) e laterais raspadas (fade). Isso ajuda a alongar verticalmente o visual.</p>
      
      <h4>3. Rosto Oval</h4>
      <p>É o formato mais equilibrado, com testa ligeiramente mais larga que o queixo e contornos arredondados. <strong>Recomendação:</strong> Praticamente qualquer corte combina com este rosto. Evite apenas franjas muito pesadas que ocultem a testa.</p>
      
      <h4>4. Rosto Retangular</h4>
      <p>Semelhante ao quadrado, mas mais longo. <strong>Recomendação:</strong> Cortes que não adicionem muita altura no topo para não alongar ainda mais o rosto. Laterais levemente mais cheias ajudam no equilíbrio.</p>
      
      <h3>Conclusão</h3>
      <p>O corte ideal é aquele que equilibra as proporções. Se você quer ter certeza de qual é o seu formato e o corte correspondente, faça uma visita para um diagnóstico completo.</p>
    `,
    faqs: [
      {
        question: "Como medir meu rosto em casa?",
        answer: "Fique de frente para um espelho, amarre ou puxe o cabelo para trás e observe a proporção entre a largura da testa, maçãs do rosto e maxilar."
      }
    ]
  },
  {
    slug: "barba-combina-com-formato-do-rosto",
    title: "Como escolher a barba certa para o formato do rosto",
    excerpt: "Descubra como desenhar a barba para criar simetria, disfarçar imperfeições e projetar uma mandíbula mais forte.",
    date: "25 de Junho de 2026",
    readTime: "5 min de leitura",
    imageUrl: "/images/blog/barba-rosto.jpg",
    content: `
      <p>A barba é considerada a maquiagem do homem. Através do visagismo de barba, podemos redesenhar completamente o terço inferior do rosto, alterando a percepção do queixo e da mandíbula.</p>
      
      <h3>Harmonizando a Barba</h3>
      <p>O segredo para uma barba perfeita está no alinhamento das linhas da bochecha e do pescoço, além do gradiente de volume.</p>
      
      <h4>Barba para Rosto Redondo</h4>
      <p>Para quem tem rosto redondo, a dica é deixar a barba mais curta nas laterais (nas costeletas e bochechas) e mais longa na região do queixo. Isso cria um efeito visual alongado e pontudo que afina as bochechas.</p>
      
      <h4>Barba para Rosto Quadrado</h4>
      <p>Se o seu rosto já é naturalmente angular, você pode optar por uma barba mais cheia e arredondada no queixo para suavizar as pontas, ou ressaltar a estrutura com linhas retas e bem marcadas na bochecha.</p>
      
      <h4>Disfarçando a Papada</h4>
      <p>Um erro comum é marcar a linha da barba no pescoço muito alta (perto do maxilar), o que salienta a papada. O alinhamento correto deve ser feito exatamente um ou dois dedos acima do pomo de adão, criando uma sombra que disfarça o volume sob o queixo.</p>
    `,
    faqs: [
      {
        question: "O visagismo ajuda quem tem barba falhada?",
        answer: "Sim. Desenhamos a barba contornando as falhas e ajustando o gradiente de volume para criar uma aparência mais preenchida."
      }
    ]
  },
  {
    slug: "corte-masculino-personalizado",
    title: "Por que o corte masculino personalizado valoriza mais sua imagem",
    excerpt: "Ir além do básico. Descubra os benefícios de investir em um visual estratégico pensado exclusivamente para você.",
    date: "15 de Junho de 2026",
    readTime: "4 min de leitura",
    imageUrl: "/images/blog/corte-personalizado.jpg",
    content: `
      <p>Cortar o cabelo em uma barbearia tradicional costuma ser um processo automático: você senta, escolhe um modelo da cartela ou explica de forma genérica e sai com o mesmo corte de outras dezenas de clientes. Mas por que o corte personalizado é superior?</p>
      
      <h3>Os Diferenciais da Personalização</h3>
      <p>Um corte personalizado leva em conta fatores biológicos e comportamentais únicos:</p>
      <ul>
        <li><strong>Caimento Natural:</strong> Respeitamos o crescimento dos fios e os redemoinhos do seu couro cabeludo, o que significa que o cabelo não perde a forma facilmente após a primeira lavagem em casa.</li>
        <li><strong>Praticidade de Estilização:</strong> Se você não gosta de perder tempo secando o cabelo, projetamos um corte que fique bem secando ao natural ou com uso rápido de pomada.</li>
        <li><strong>Duração do Corte:</strong> Cortes executados com técnicas geométricas de tesoura crescem de forma harmoniosa, mantendo um bom visual por mais tempo do que cortes raspados rapidamente à máquina.</li>
      </ul>
      
      <p>Ao investir em personalização, você não está comprando apenas um serviço estético de 30 minutos, mas sim uma assinatura de estilo que facilita o seu dia a dia.</p>
    `,
    faqs: [
      {
        question: "Corte personalizado demora mais?",
        answer: "Apenas alguns minutos a mais devido à consultoria inicial, mas a economia de tempo para arrumar o cabelo no dia a dia compensa amplamente."
      }
    ]
  },
  {
    slug: "visagismo-barba-e-cabelo",
    title: "Visagismo para barba e cabelo: como alinhar proporção, estilo e personalidade",
    excerpt: "Conectando o cabelo e a barba de forma fluida. Entenda como criar um visual coerente e integrado para sua imagem facial.",
    date: "10 de Junho de 2026",
    readTime: "6 min de leitura",
    imageUrl: "/images/blog/visagismo-barba-cabelo.jpg",
    content: `
      <p>Cabelo e barba não devem ser vistos como duas partes desconectadas. No visagismo avançado, integramos ambos os elementos para criar uma transição fluida que respeite a estrutura geral do rosto do cliente.</p>
      
      <h3>A Transição Perfeita (Costeletas)</h3>
      <p>A costeleta é a ponte que une o cabelo à barba. Se você usa degradê (fade) no cabelo e uma barba cheia, é essencial trabalhar um degradê na costeleta para evitar cortes secos e demarcações desarmônicas.</p>
      
      <h3>Equilibrando Volumes</h3>
      <p>Se o seu corte de cabelo possui muito volume no topo, a barba deve ser controlada nas pontas para não alongar excessivamente a cabeça. Por outro lado, se você tem pouco cabelo (ou é calvo), uma barba bem desenhada e com boa densidade serve para desviar o ponto focal e dar força visual ao seu rosto.</p>
      
      <p>Cada detalhe conta para projetar a mensagem de imagem que você deseja, seja ela profissional, casual ou moderna. O alinhamento mútuo de cabelo e barba é a chave para o sucesso visual masculino.</p>
    `,
    faqs: [
      {
        question: "Sou careca, o visagismo funciona?",
        answer: "Com certeza! O visagismo ajuda a desenhar a barba e alinhar os formatos para valorizar a cabeça raspada e as expressões faciais."
      }
    ]
  }
];
