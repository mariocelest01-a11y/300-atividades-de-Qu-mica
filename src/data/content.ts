export interface ActivityPreview {
  id: string;
  number: string;
  title: string;
  topic: string;
  year: '1º Ano' | '2º Ano' | '3º Ano' | '2º e 3º Ano' | 'Todos os Anos';
  src: string;
  alt: string;
  description: string;
  howToUse: string;
  skillsBNCC: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  alt: string;
  text: string;
  howItHelps: string;
}

export interface TopicItem {
  id: string;
  title: string;
  icon: string;
  year: string;
  text: string;
  highlights: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  source: 'WhatsApp' | 'Instagram' | 'Facebook';
}

export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

// Configurable checkout URLs (defaults from user instructions)
export const CHECKOUT_CONFIG = {
  // Pacote básico de Entrada (R$ 10,00)
  basicUrl: 'https://checkout.escalepay.com/4610524',
  // Pacote completo (R$ 27,90)
  completeUrl: 'https://checkout.escalepay.com/2588418',
  // Oferta Especial (R$ 19,90)
  specialOfferUrl: 'https://checkout.escalepay.com/2588418',
  guaranteeDays: 7,
};

// 8 Preview activities from real material
export const PREVIEW_ACTIVITIES: ActivityPreview[] = [
  {
    id: 'evidencia-ou-nao',
    number: '01',
    title: 'Evidência ou Não?',
    topic: 'Reações Químicas',
    year: '1º Ano',
    src: '/assets/evidencia-ou-nao.webp',
    alt: 'Página real da Dinâmica 35 sobre evidências de transformações químicas',
    description: 'Atividade dinâmica para os estudantes analisarem situações do cotidiano e identificarem se houve ou não transformação química com base em evidências visuais (mudança de cor, liberação de gás, formação de precipitado, variação de temperatura).',
    howToUse: 'Pode ser projetada no quadro para discussão guiada com a turma, resolvida em duplas ou impressa como folha de atividade individual.',
    skillsBNCC: 'EM13CNT101 / EM13CNT102',
  },
  {
    id: 'reagente-ou-produto',
    number: '02',
    title: 'Reagente ou Produto?',
    topic: 'Equações e Reações Químicas',
    year: '1º Ano',
    src: '/assets/reagente-ou-produto.webp',
    alt: 'Página real da Dinâmica 36 sobre reagentes e produtos',
    description: 'Exercício visual que auxilia os alunos a compreenderem o sentido das reações químicas, a conservação das massas e a correta localização de reagentes e produtos em equações balanceadas.',
    howToUse: 'Ideal como verificação rápida de aprendizagem nos 15 minutos finais da aula ou para fixação antes de avançar para estequiometria.',
    skillsBNCC: 'EM13CNT301',
  },
  {
    id: 'bingo-tabela-periodica',
    number: '03',
    title: 'Bingo da Tabela Periódica',
    topic: 'Tabela Periódica',
    year: '1º Ano',
    src: '/assets/bingo-tabela-periodica.webp',
    alt: 'Página real da Dinâmica 02, Bingo da Tabela Periódica',
    description: 'Cartelas organizadas e prontas para transformar a memorização de símbolos, números atômicos e famílias em uma dinâmica descontraída e participativa.',
    howToUse: 'Imprima as cartelas ou sorteie na tela. Uma forma leve de fazer os alunos manusearem ativamente a tabela periódica durante a aula.',
    skillsBNCC: 'EM13CNT104',
  },
  {
    id: 'familia-periodica',
    number: '04',
    title: 'Família Periódica em Ação',
    topic: 'Propriedades Periódicas',
    year: '1º Ano',
    src: '/assets/familia-periodica.webp',
    alt: 'Página real da Dinâmica 05 sobre famílias da tabela periódica',
    description: 'Classificação orientada dos elementos em metais alcalinos, alcalino-terrosos, halogênios, gases nobres e suas propriedades periódicas mais recorrentes.',
    howToUse: 'Excelente para atividades em grupos de 3 a 4 alunos, incentivando a comparação de raios atômicos e eletronegatividades.',
    skillsBNCC: 'EM13CNT104 / EM13CNT201',
  },
  {
    id: 'caca-aos-ions',
    number: '05',
    title: 'Caça aos Íons',
    topic: 'Ligações Químicas',
    year: '1º Ano',
    src: '/assets/caca-aos-ions.webp',
    alt: 'Página real da Dinâmica 07 sobre cátions e ânions',
    description: 'Proposta gamificada para identificar cátions, ânions, cargas elétricas e entender como se formam as ligações iônicas a partir da atração eletrostática.',
    howToUse: 'Funciona perfeitamente como aquecimento no início da aula sobre ligações iônicas ou como revisão prévia antes de fórmulas de sais.',
    skillsBNCC: 'EM13CNT102',
  },
  {
    id: 'batalha-dos-elementos',
    number: '06',
    title: 'Batalha dos Elementos',
    topic: 'Tendências Periódicas',
    year: '1º Ano',
    src: '/assets/batalha-dos-elementos.webp',
    alt: 'Página real da Dinâmica 08 sobre tendências periódicas',
    description: 'Jogo no estilo card-game em que os alunos comparam raios atômicos, energias de ionização e eletronegatividades entre dois ou mais elementos químicos.',
    howToUse: 'Pode ser disputado em duplas na sala de aula. Garante que até alunos mais tímidos participem ativamente analisando as propriedades.',
    skillsBNCC: 'EM13CNT104',
  },
  {
    id: 'memoria-quimica',
    number: '07',
    title: 'Memória Química',
    topic: 'Nomenclatura & Fórmulas',
    year: '2º e 3º Ano',
    src: '/assets/memoria-quimica.webp',
    alt: 'Página real da Dinâmica 13, jogo de memória química',
    description: 'Pares de cartas combinando fórmulas moleculares, estruturas e nomes de substâncias inorgânicas e orgânicas.',
    howToUse: 'Atividade de fechamento de bloco temático. Estimula a associação direta entre representação gráfica e nomenclatura oficial IUPAC.',
    skillsBNCC: 'EM13CNT105',
  },
  {
    id: 'quantas-fases',
    number: '08',
    title: 'Quantas Fases Você Vê?',
    topic: 'Sistemas e Misturas',
    year: '1º Ano',
    src: '/assets/quantas-fases.webp',
    alt: 'Página real da Dinâmica 62 sobre fases e componentes',
    description: 'Representações visuais de misturas homogêneas e heterogêneas para contagem e diferenciação imediata entre fases e componentes.',
    howToUse: 'Projeção direta ou folha impressa para treino rápido de conceitos frequentemente cobrados em vestibulares e ENEM.',
    skillsBNCC: 'EM13CNT101',
  },
];

// The 4 exclusive bonuses from original
export const BONUSES: BonusItem[] = [
  {
    id: 'flashcards',
    title: 'FlashCards de Química',
    subtitle: 'Revisão Rápida & Retomada',
    cover: '/assets/bonus-flashcards.webp',
    alt: 'Flashcards ilustrados com símbolos de átomos, moléculas e laboratório',
    text: 'Cartões didáticos visuais com fórmulas, símbolos, vidrarias e conceitos-chave da Química.',
    howItHelps: 'Permite fazer revisões relâmpago de 5 a 10 minutos no início ou fim da aula, retomando pré-requisitos sem perder tempo criando cartões do zero.',
  },
  {
    id: 'exercicios',
    title: 'Exercícios Pedagógicos',
    subtitle: 'Fixação & Prática Direta',
    cover: '/assets/bonus-exercicios.webp',
    alt: 'Folhas de exercícios de Química com moléculas e materiais escolares',
    text: 'Listas de exercícios selecionados e diagramados com foco nos tópicos de maior dificuldade dos alunos.',
    howItHelps: 'Você já tem uma lista formatada pronta para imprimir ou passar no projetor para treino imediato dos alunos.',
  },
  {
    id: 'quizzes',
    title: 'Quizzes de Química',
    subtitle: 'Perguntas Prontas & Participativas',
    cover: '/assets/bonus-quizzes.webp',
    alt: 'Quizzes com perguntas de múltipla escolha para engajamento em sala',
    text: 'Perguntas formuladas no formato de quiz rápido para checagem de compreensão e diagnósticos em sala.',
    howItHelps: 'Economiza tempo na elaboração de avaliações formativas e permite medir o nível de retenção da turma em tempo real.',
  },
  {
    id: 'bingo',
    title: 'Bingo de Química',
    subtitle: 'Dinâmica Coletiva Leve',
    cover: '/assets/bonus-bingo.webp',
    alt: 'Tabuleiro de bingo ilustrado com elementos de Química',
    text: 'Cartelas e fichas de chamada prontas para dinâmicas em grupo envolvendo elementos, funções e fórmulas.',
    howItHelps: 'Oferece uma alternativa descontraída para aulas que caem em dias cansativos ou em encerramentos de bimestre sem trabalho extra de preparação.',
  },
];

// 8 Themes / Categories from original
export const THEMES: TopicItem[] = [
  {
    id: 'fundamentos',
    title: 'Fundamentos da Química',
    icon: '⚛️',
    year: '1º Ano do Ensino Médio',
    text: 'Conceitos essenciais para introduzir e revisar os conteúdos iniciais da disciplina.',
    highlights: ['Modelos Atômicos', 'Estados Físicos da Matéria', 'Substâncias Puras e Misturas', 'Separação de Misturas'],
  },
  {
    id: 'tabela',
    title: 'Tabela Periódica',
    icon: '📊',
    year: '1º Ano do Ensino Médio',
    text: 'Atividades de leitura, organização, localização e identificação dos elementos químicos.',
    highlights: ['Famílias e Períodos', 'Metais, Não-Metais e Gases Nobres', 'Propriedades Periódicas', 'Configuração Eletrônica'],
  },
  {
    id: 'ligacoes',
    title: 'Ligações e Estruturas',
    icon: '🔗',
    year: '1º Ano do Ensino Médio',
    text: 'Atividades sobre ligações iônicas, covalentes, metálicas e representação de estruturas.',
    highlights: ['Regra do Octeto', 'Fórmulas de Lewis', 'Geometria Molecular', 'Polaridade e Forças Intermoleculares'],
  },
  {
    id: 'reacoes',
    title: 'Reações Químicas',
    icon: '🧪',
    year: '1º Ano do Ensino Médio',
    text: 'Propostas práticas para identificar reagentes, produtos, balanceamento e evidências de transformação.',
    highlights: ['Classificação das Reações', 'Balanceamento por Tentativa', 'Leis Ponderais', 'Evidências Experimentais'],
  },
  {
    id: 'calculos',
    title: 'Cálculos Químicos',
    icon: '🧮',
    year: '2º Ano do Ensino Médio',
    text: 'Exercícios graduados para praticar os cálculos mais cobrados em avaliações e vestibulares.',
    highlights: ['Massa Molar e Mol', 'Constante de Avogadro', 'Cálculo Estequiométrico', 'Rendimento e Pureza'],
  },
  {
    id: 'solucoes',
    title: 'Soluções e Misturas',
    icon: '💧',
    year: '2º Ano do Ensino Médio',
    text: 'Atividades sobre concentração de soluções, solubilidade, diluição e misturas.',
    highlights: ['Concentração Comum e Molaridade', 'Curvas de Solubilidade', 'Diluição de Soluções', 'Titulação Ácido-Base'],
  },
  {
    id: 'termoquimica',
    title: 'Termoquímica',
    icon: '🔥',
    year: '2º Ano do Ensino Médio',
    text: 'Conteúdos sobre processos endotérmicos, exotérmicos, entalpia e variação de energia.',
    highlights: ['Variação de Entalpia (ΔH)', 'Equações Termoquímicas', 'Lei de Hess', 'Energia de Ligação'],
  },
  {
    id: 'organica',
    title: 'Química Orgânica',
    icon: '🧬',
    year: '3º Ano do Ensino Médio',
    text: 'Recursos estruturados para apoiar o estudo das cadeias carbônicas e funções orgânicas.',
    highlights: ['Classificação de Cadeias Carbônicas', 'Funções Oxigenadas e Nitrogenadas', 'Nomenclatura IUPAC', 'Isomeria'],
  },
];

// The 21 real testimonials from original material
export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Profª Ana C.',
    role: 'Professora de Química',
    quote: 'Gostei da organização por temas. Os exemplos deixam mais simples escolher uma atividade para cada aula.',
    source: 'WhatsApp',
  },
  {
    name: 'Prof. Marcos R.',
    role: 'Professor da rede pública',
    quote: 'O formato visual facilita bastante na hora de apresentar o conteúdo e envolver a turma.',
    source: 'Instagram',
  },
  {
    name: 'Profª Camila S.',
    role: 'Professora particular',
    quote: 'Encontrei ideias variadas para revisar conceitos sem repetir sempre o mesmo tipo de exercício.',
    source: 'WhatsApp',
  },
  {
    name: 'Prof. Renato M.',
    role: 'Professor do Ensino Médio',
    quote: 'O material está bem dividido e consigo localizar rapidamente o tema que estou trabalhando.',
    source: 'Facebook',
  },
  {
    name: 'Profª Luciana P.',
    role: 'Professora da rede pública',
    quote: 'As atividades ajudam a tornar assuntos mais abstratos em experiências mais visuais para os alunos.',
    source: 'WhatsApp',
  },
  {
    name: 'Prof. Daniel F.',
    role: 'Professor de Química',
    quote: 'Usei como apoio no planejamento e consegui preparar uma aula diferente em menos tempo.',
    source: 'Instagram',
  },
  {
    name: 'Profª Patrícia L.',
    role: 'Professora particular',
    quote: 'Achei interessante poder adaptar as propostas de acordo com o nível de cada turma.',
    source: 'WhatsApp',
  },
  {
    name: 'Prof. Eduardo N.',
    role: 'Professor da rede estadual',
    quote: 'A variedade é o ponto forte. Há opções para introdução, prática e revisão dos conteúdos.',
    source: 'Facebook',
  },
  {
    name: 'Profª Juliana A.',
    role: 'Professora do Ensino Médio',
    quote: 'Os alunos participaram mais quando usei uma dinâmica visual durante a revisão.',
    source: 'Instagram',
  },
  {
    name: 'Prof. André V.',
    role: 'Professor de Química',
    quote: 'O acesso foi simples e o conteúdo está organizado de uma forma fácil de consultar.',
    source: 'WhatsApp',
  },
  {
    name: 'Profª Beatriz T.',
    role: 'Professora da rede pública',
    quote: 'Gostei especialmente das propostas de tabela periódica e ligações químicas.',
    source: 'Facebook',
  },
  {
    name: 'Prof. Carlos H.',
    role: 'Professor particular',
    quote: 'É um bom apoio para variar as atividades e sair um pouco do formato tradicional.',
    source: 'WhatsApp',
  },
  {
    name: 'Profª Fernanda G.',
    role: 'Professora de Química',
    quote: 'As páginas são claras e funcionam bem tanto na tela quanto em atividades impressas.',
    source: 'Instagram',
  },
  {
    name: 'Prof. Gustavo B.',
    role: 'Professor da rede estadual',
    quote: 'As sugestões me deram novas ideias para trabalhar conteúdos que costumam gerar dúvidas.',
    source: 'Facebook',
  },
  {
    name: 'Profª Helena D.',
    role: 'Professora do Ensino Médio',
    quote: 'A separação por assunto tornou o planejamento da sequência de aulas mais prático.',
    source: 'WhatsApp',
  },
  {
    name: 'Prof. Igor C.',
    role: 'Professor de Química',
    quote: 'Consegui selecionar atividades compatíveis com o tempo disponível em cada turma.',
    source: 'Instagram',
  },
  {
    name: 'Profª Joana M.',
    role: 'Professora particular',
    quote: 'O material complementa minhas explicações com propostas mais participativas.',
    source: 'WhatsApp',
  },
  {
    name: 'Prof. Leandro P.',
    role: 'Professor da rede pública',
    quote: 'Gostei da possibilidade de adaptar as ideias e criar novas versões para as turmas.',
    source: 'Facebook',
  },
  {
    name: 'Profª Marina R.',
    role: 'Professora de Química',
    quote: 'Os bônus também são úteis para revisão e para os momentos finais da aula.',
    source: 'WhatsApp',
  },
  {
    name: 'Prof. Paulo S.',
    role: 'Professor do Ensino Médio',
    quote: 'As atividades têm uma apresentação agradável e os comandos são fáceis de entender.',
    source: 'Instagram',
  },
  {
    name: 'Profª Renata V.',
    role: 'Professora da rede estadual',
    quote: 'É uma coleção que oferece diferentes caminhos para ensinar o mesmo conteúdo.',
    source: 'Facebook',
  },
];

// FAQs: Clear, objective, answering core objections
export const FAQS: FaqItem[] = [
  {
    q: 'O que exatamente vou receber ao comprar?',
    a: 'Você recebe acesso a uma biblioteca digital completa com 300 atividades de Química organizadas por temas para o Ensino Médio. No Pacote Completo, você também recebe os 4 bônus exclusivos (Flashcards, Exercícios Pedagógicos, Quizzes e Bingo de Química), além de atualizações e acesso vitalício.',
  },
  {
    q: 'Para quais anos do Ensino Médio as atividades servem?',
    a: 'O material contempla todos os anos do Ensino Médio (1º, 2º e 3º ano). Os conteúdos cobrem desde Química Geral e Atomística até Físico-Química e Química Orgânica. Você escolhe livremente as atividades de acordo com o planejamento e a turma em que está atuando.',
  },
  {
    q: 'As atividades são digitais ou físicas? Como recebo o acesso?',
    a: 'O material é 100% digital. Imediatamente após a confirmação do pagamento, você recebe os dados de acesso e o link direto no seu e-mail cadastrado. Não há frete nem espera pelos Correios: você pode começar a consultar e baixar os arquivos no mesmo minuto.',
  },
  {
    q: 'Preciso imprimir todas as atividades ou posso usar na tela?',
    a: 'Você decide como prefere usar! As atividades podem ser projetadas diretamente no quadro/datashow para resolução coletiva, compartilhadas em ambiente virtual ou impressas em qualquer impressora comum para aplicação em folhas individuais ou duplas.',
  },
  {
    q: 'Qual é a diferença exata entre o Pacote Básico (R$ 10,00) e o Pacote Completo (R$ 27,90)?',
    a: 'No Pacote Básico (R$ 10,00), você recebe as 300 atividades de Química organizadas por temas para uso pontual. No Pacote Completo (R$ 27,90), além das 300 atividades completas, você garante Acesso Vitalício permanente, liberação imediata de todos os 4 bônus (FlashCards, Exercícios, Quizzes e Bingo) e suporte prioritário.',
  },
  {
    q: 'O acesso ao material tem prazo de validade?',
    a: 'No Pacote Completo, o acesso é vitalício: você compra uma única vez e pode consultar, baixar e utilizar o material em qualquer ano letivo, sem mensalidades ou taxas de renovação.',
  },
  {
    q: 'Preciso de algum programa específico ou computador potente?',
    a: 'Não. O material pode ser visualizado em qualquer celular, tablet ou computador. Os arquivos estão em formato padrão compatível com qualquer leitor de PDF e navegador web atualizado.',
  },
  {
    q: 'Como funciona a garantia de 7 dias?',
    a: 'Você tem 7 dias corridos após a compra para abrir o material, analisar as atividades e avaliar se elas atendem à sua rotina escolar. Se por qualquer motivo achar que o material não facilitou o seu planejamento, basta solicitar o reembolso na plataforma e 100% do seu dinheiro é devolvido, sem burocracia.',
  },
];
