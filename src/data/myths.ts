
import type { Myth, Referencia } from '@/lib/types';

const genericReference: Referencia = {
  titulo: "Lendas do folclore brasileiro - Wikipédia",
  url: "https://pt.wikipedia.org/wiki/Lendas_do_folclore_brasileiro"
};

const multirioReference: Referencia = {
  titulo: "Diz a Lenda - Multirio",
  url: "https://www.multirio.rj.gov.br/index.php/multiclube/9a11/diz-a-lenda"
};

const cascudoDicionarioReference: Referencia = {
  titulo: "Dicionário do Folclore Brasileiro",
  autor: "Luís da Câmara Cascudo",
  editora: "Global Editora",
  ano: 2012 // Usando uma edição de exemplo.
};

export const myths: Myth[] = [
  {
    id: '1',
    slug: 'saci-perere',
    name: 'Saci-Pererê',
    tipo: 'Lenda',
    regiao: 'Sudeste/Sul (popular em todo Brasil)',
    description: 'O Saci-Pererê é um menino negro muito esperto que tem uma perna só e usa um gorro vermelho mágico. Ele adora fazer travessuras, como dar nós na crina dos cavalos, esconder objetos e assustar as pessoas com seu assobio fininho. Dizem que ele aparece e desaparece nos redemoinhos de vento e que seu gorro lhe dá poderes, como o de ficar invisível. Apesar de brincalhão, o Saci conhece todos os segredos da floresta e das plantas medicinais.',
    origem: {
      periodo: 'Pós-colonial',
      contexto: 'Originário de mitos indígenas (como o Yacy Yaterê dos Guarani), o Saci foi transformado pela cultura africana no Brasil, ganhando suas características mais conhecidas. É um símbolo da mistura cultural brasileira.',
      influencias: ['Cultura indígena (espíritos da floresta)', 'Cultura africana (entidades travessas, gorro mágico)', 'Folclore europeu (elementos de duendes)'],
    },
    simbolismo: ['Travessura', 'Inteligência', 'Liberdade', 'Guardião dos segredos da floresta', 'Mistura cultural'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/SACI-int.jpg',
    imageAiHint: 'Saci Pererê',
  },
  {
    id: '2',
    slug: 'curupira',
    name: 'Curupira',
    tipo: 'Mito Indígena',
    regiao: 'Amazônia (presente em todo Brasil)',
    description: 'O Curupira é o guardião das florestas e dos animais. Ele tem cabelos vermelhos como fogo e seus pés são virados para trás, o que confunde os caçadores que tentam segui-lo, pois suas pegadas apontam para o lado errado! Ele não gosta de quem destrói a natureza ou maltrata os animais, e usa sua astúcia para proteger seu lar, podendo até mesmo punir os desrespeitosos. Às vezes, pede fumo ou cachaça como oferenda.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Uma das figuras mais antigas do folclore brasileiro, representando a profunda conexão dos povos indígenas com a natureza e a necessidade de sua preservação.',
      influencias: ['Cosmovisão indígena', 'Espíritos guardiões da natureza'],
    },
    simbolismo: ['Proteção da natureza', 'Guardião da floresta', 'Justiça ambiental', 'Astúcia', 'Respeito aos animais'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/CURUPIRA-int.jpg',
    imageAiHint: 'Curupira forest',
  },
  {
    id: '3',
    slug: 'iara',
    name: 'Iara',
    tipo: 'Lenda Indígena',
    regiao: 'Amazônia',
    description: 'Iara, a Mãe d\'Água, é uma linda sereia de longos cabelos negros que vive nos rios da Amazônia. Antigamente, era um peixe-homem guerreiro chamado Ipupiara, mas a lenda se transformou. Com seu canto mágico e beleza, ela encanta os homens, principalmente pescadores, e os leva para o fundo do rio, de onde poucos voltam. Dizem que ela é protetora dos rios e dos peixes.',
    origem: {
      periodo: 'Pré-colonial (com transformações pós-coloniais)',
      contexto: 'Baseada em mitos indígenas sobre seres aquáticos (como o Ipupiara), a figura da Iara foi influenciada pelas sereias europeias, tornando-se a sedutora que conhecemos hoje. Representa os perigos e encantos dos rios.',
      influencias: ['Mitologia indígena (Mãe d\'água, Ipupiara)', 'Sereias europeias'],
    },
    simbolismo: ['Sedução perigosa', 'Beleza fatal', 'Mistérios dos rios', 'Protetora das águas', 'Transformação cultural'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/IARA-int.jpg',
    imageAiHint: 'Iara mermaid',
  },
  {
    id: '4',
    slug: 'boitata',
    name: 'Boitatá',
    tipo: 'Lenda Indígena/Afro-brasileira',
    regiao: 'Todo o Brasil',
    description: 'O Boitatá é uma enorme cobra de fogo que protege os campos e as matas contra quem provoca queimadas. Seus olhos parecem duas tochas acesas e podem deixar cego ou louco quem o encara diretamente. Dizem que o Boitatá é feito dos olhos de pessoas más ou de animais que morreram em inundações, e que ele pode se transformar em um tronco em chamas para enganar os perseguidores. Ele também ajuda a encontrar pessoas perdidas na escuridão, iluminando o caminho.',
    origem: {
      periodo: 'Indeterminado (elementos pré e pós-coloniais)',
      contexto: 'Associado ao fenômeno do fogo-fátuo (gases inflamáveis dos pântanos). A lenda expressa o medo e o respeito pelo fogo e a necessidade de proteger a natureza.',
      influencias: ['Crenças indígenas (fogo fátuo, cobras sagradas)', 'Relatos de jesuítas', 'Folclore europeu (serpentes de fogo)'],
    },
    simbolismo: ['Proteção contra incêndios', 'Guardião dos campos', 'Punição aos maus', 'Luz na escuridão', 'Mistério natural'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/BOITATA-int.jpg',
    imageAiHint: 'Boitatá snake',
  },
  {
    id: '5',
    slug: 'mula-sem-cabeca',
    name: 'Mula Sem Cabeça',
    tipo: 'Lenda',
    regiao: 'Todo o Brasil',
    description: 'A Mula Sem Cabeça é uma mulher que foi amaldiçoada por ter um romance proibido com um padre. Como castigo, em certas noites, geralmente de quinta para sexta-feira, ela se transforma numa mula forte que não tem cabeça, mas solta fogo pelo pescoço! Ela galopa sem parar, assustando a todos com seu relincho alto e arrastando correntes. Para quebrar o encanto, é preciso tirar o freio de ferro da sua boca ou feri-la com algo pontudo.',
    origem: {
      periodo: 'Colonial',
      contexto: 'Trazida pelos portugueses, a lenda servia como uma história de aviso para reforçar as regras da Igreja Católica e o comportamento moral da época. É uma das lendas de punição mais conhecidas.',
      influencias: ['Folclore ibérico (lobisomens, almas penadas)', 'Moralismo católico medieval'],
    },
    simbolismo: ['Punição por transgressão', 'Medo do pecado', 'Controle social e religioso', 'Terror noturno'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/MULA-SEM-CABECA-int.jpg',
    imageAiHint: 'Headless Mule',
  },
  {
    id: '6',
    slug: 'boto-cor-de-rosa',
    name: 'Boto Cor-de-Rosa',
    tipo: 'Lenda Amazônica',
    regiao: 'Amazônia',
    description: 'Na Amazônia, conta-se que o Boto Cor-de-Rosa, um golfinho de rio, tem o poder de se transformar em um rapaz muito bonito e charmoso nas noites de festa. Ele sai dos rios, sempre bem vestido de branco e usando um chapéu para esconder o buraco de respirar que tem no topo da cabeça. Ele dança, conversa e encanta as moças, e às vezes, antes do amanhecer, leva uma delas para o fundo do rio. Muitos mistérios e histórias de bebês sem pai são atribuídos a ele.',
    origem: {
      periodo: 'Popularizado nos séculos XIX/XX',
      contexto: 'A lenda reflete o mistério dos rios amazônicos e a figura carismática do boto. Servia como uma forma de explicar acontecimentos sociais, como gravidezes inesperadas, em comunidades ribeirinhas.',
      influencias: ['Cultura ribeirinha amazônica', 'Observação dos botos e seu comportamento social', 'Contos europeus de metamorfos e sedutores'],
    },
    simbolismo: ['Sedução', 'Encantamento', 'Mistério dos rios', 'Transformação', 'Paternidade desconhecida'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/BOTO-int-002.jpg',
    imageAiHint: 'Pink Dolphin',
  },
  {
    id: '7',
    slug: 'vitoria-regia',
    name: 'Vitória Régia',
    tipo: 'Lenda Indígena',
    regiao: 'Amazônia',
    description: 'Esta é a história de Naiá, uma jovem índia que era apaixonada pela Lua (Jaci). Ela acreditava que se a Lua a tocasse, ela viraria uma estrela no céu. Todas as noites, Naiá perseguia a Lua. Um dia, viu o reflexo da Lua nas águas de um lago e, pensando que podia alcançá-la, mergulhou e se afogou. A Lua, com pena, transformou Naiá na Vitória Régia, uma flor aquática gigante e linda, com formato de estrela, que se abre à noite para admirar a Lua.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Uma bela explicação mítica para a origem da impressionante planta aquática Vitória Régia, ligando sua beleza e ciclo de vida aos astros e ao amor trágico.',
      influencias: ['Mitologia indígena Tupi-Guarani', 'Culto à lua (Jaci)', 'Poesia e beleza da natureza amazônica'],
    },
    simbolismo: ['Amor impossível', 'Transformação pela natureza', 'Beleza e tragédia', 'Conexão céu-terra-água', 'Sacrifício'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/VITORIA-REGIA-int.jpg',
    imageAiHint: 'Vitória Régia',
  },
  {
    id: '8',
    slug: 'caipora',
    name: 'Caipora',
    tipo: 'Mito Indígena',
    regiao: 'Todo o Brasil',
    description: 'A Caipora é mais uma protetora das matas e dos animais, parecida com o Curupira. Algumas vezes é um índio pequeno e ágil, outras uma mulher forte com o corpo coberto de pelos. Ela anda montada num porco-do-mato e adora fumar cachimbo. A Caipora atrapalha os caçadores que querem fazer mal à floresta, escondendo os rastros dos bichos ou fazendo barulhos para assustá-los. Dizem que, para agradá-la, os caçadores devem deixar presentes como fumo de corda nas trilhas.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Figura indígena que representa o espírito da floresta e a necessidade de respeito pela caça, assegurando que não haja excessos. Muitas vezes confundida com o Curupira, mas com características próprias, como a montaria em um porco selvagem.',
      influencias: ['Cosmovisão indígena (Tupi-Guarani principalmente)', 'Espíritos da floresta', 'Rituais de caça'],
    },
    simbolismo: ['Proteção da caça e da floresta', 'Astúcia', 'Vínculo com animais selvagens', 'Equilíbrio ecológico', 'Respeito às tradições'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Caipora spirit',
  },
  {
    id: '9',
    slug: 'negrinho-do-pastoreio',
    name: 'Negrinho do Pastoreio',
    tipo: 'Lenda',
    regiao: 'Sul do Brasil',
    description: 'O Negrinho do Pastoreio era um menino escravizado que cuidava dos cavalos de um fazendeiro muito mau. Um dia, ele perdeu um cavalo e foi castigado cruelmente, sendo deixado em um formigueiro. No dia seguinte, o fazendeiro o encontrou vivo, sem nenhum machucado, ao lado de Nossa Senhora, com todos os cavalos e uma luzinha de vela na mão. Desde então, o Negrinho ajuda a encontrar coisas perdidas. As pessoas acendem uma vela e pedem sua ajuda, e ele sempre atende.',
    origem: {
      periodo: 'Século XIX',
      contexto: 'Lenda surgida no Rio Grande do Sul, reflete a dura realidade da escravidão e a fé popular. Mistura elementos do catolicismo com a esperança de justiça e proteção divina para os oprimidos.',
      influencias: ["Cristianismo Popular (Nossa Senhora)", "Cultura africana (resiliência, espiritualidade)", "Cultura gaúcha (vida nos pampas)", "Realidade da escravidão"]
    },
    simbolismo: [
      "Justiça divina",
      "Esperança dos oprimidos",
      "Proteção e auxílio",
      "Fé popular",
      "Encontrar objetos perdidos"
    ],
    referencias: [
      cascudoDicionarioReference,
      multirioReference,
      genericReference
    ],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/NEGRINHO-int.jpg',
    imageAiHint: 'Negrinho Pastoreio'
  },
  {
    id: '10',
    slug: 'cuca',
    name: 'Cuca',
    tipo: 'Lenda',
    regiao: 'Todo o Brasil (popularizada por Monteiro Lobato)',
    description: 'A Cuca é uma bruxa velha e assustadora, com cabeça de jacaré e unhas enormes! Ela é famosa por pegar crianças desobedientes e levá-las para sua caverna. Dizem que a Cuca dorme muito pouco, apenas uma noite a cada sete anos, e quando está acordada, fica de olho em tudo. No Brasil, ela ficou ainda mais conhecida por causa das histórias do Sítio do Picapau Amarelo, de Monteiro Lobato, onde ela faz feitiços e vive aprontando.',
    origem: {
      periodo: 'Pós-colonial (com raízes ibéricas)',
      contexto: 'Originada da "Coca" ou "Coco", um bicho-papão do folclore de Portugal e Espanha. No Brasil, ganhou características próprias e se tornou uma das vilãs mais famosas do imaginário infantil, especialmente através da literatura.',
      influencias: ['Folclore ibérico (Coca, Bicho-Papão)', 'Lendas de monstros raptores de crianças', 'Literatura infantil brasileira (Monteiro Lobato)']
    },
    simbolismo: ['Medo infantil', 'Ameaça e perigo', 'Bruxaria', 'Castigo para desobediência', 'Astúcia maligna'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/CUCA-int.jpg',
    imageAiHint: 'Cuca witch'
  },
  {
    id: '11',
    slug: 'lobisomem',
    name: 'Lobisomem',
    tipo: 'Lenda Universal (versão brasileira)',
    regiao: 'Todo o Brasil (especialmente áreas rurais)',
    description: 'O Lobisomem é um homem que sofre uma terrível maldição. Em noites de lua cheia, ele se transforma numa criatura assustadora, meio homem, meio lobo (ou cachorro grande e feroz). Ele sai uivando pelos campos e estradas, procurando por sangue de animais ou até de pessoas. Dizem que a maldição pode acontecer com o sétimo filho homem de uma família, ou se alguém for mordido por outro lobisomem. Para quebrar o feitiço, é preciso acertá-lo com uma bala de prata ou algo feito de prata.',
    origem: {
      periodo: 'Colonial (origem europeia medieval)',
      contexto: 'Lenda muito antiga, presente em várias culturas do mundo, especialmente na Europa. Foi trazida ao Brasil pelos colonizadores portugueses e se adaptou às crenças locais, tornando-se muito popular nas zonas rurais.',
      influencias: ['Folclore europeu medieval (Licantropia)', 'Crenças em metamorfose', 'Medo do desconhecido e da noite']
    },
    simbolismo: ['Maldição', 'Força bruta e selvagem', 'Dualidade (homem e besta)', 'Terror noturno rural', 'Instintos primitivos'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/LOBISOMEM-int.jpg',
    imageAiHint: 'Lobisomem werewolf'
  },
  {
    id: '12',
    slug: 'mapinguari',
    name: 'Mapinguari',
    tipo: 'Lenda Amazônica',
    regiao: 'Amazônia',
    description: 'O Mapinguari é uma criatura gigante e peluda que vive escondida nas profundezas da floresta amazônica. Dizem que ele tem um olho só no meio da testa e uma boca enorme na barriga! Ele solta um grito apavorante e tem um cheiro muito forte que afasta os outros animais. É muito forte e bravo, e muitos acreditam que ele protege a floresta de quem quer destruí-la. Alguns acham que o Mapinguari pode ser uma lembrança de animais gigantes que viveram na região há muito tempo.',
    origem: {
      periodo: 'Pré-colonial/Contemporâneo',
      contexto: 'Lenda indígena amazônica sobre um ser monstruoso e guardião da floresta. Alguns pesquisadores, como Câmara Cascudo, sugerem que a lenda pode ter sido inspirada em memórias distorcidas de animais pré-históricos, como a preguiça gigante (megatério).',
      influencias: ['Folclore indígena amazônico', 'Possível memória de megafauna extinta']
    },
    simbolismo: ['Mistério da selva profunda', 'Guardião da floresta', 'Força primitiva', 'Medo do desconhecido', 'Elo com o passado'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/MAPINGUARI-int.jpg',
    imageAiHint: 'Mapinguari monster'
  },
  {
    id: '13',
    slug: 'matinta-perera',
    name: 'Matinta Perera',
    tipo: 'Lenda Amazônica/Nordestina',
    regiao: 'Norte e Nordeste',
    description: 'A Matinta Perera (ou Matim-Taperê) é uma velha misteriosa que, durante a noite, se transforma em um pássaro de assobio agourento, como uma coruja ou rasga-mortalha. Ela voa sobre as casas, e quem ouve seu assobio e pergunta "Matinta, o que você quer?", ela responde pedindo fumo ou café. Se a pessoa prometer e não der, a Matinta pode jogar uma praga! De dia, ela pode aparecer como uma velha pedindo o que foi prometido.',
    origem: {
      periodo: 'Indeterminado',
      contexto: 'Crença popular que mistura elementos de bruxaria, metamorfose e espíritos noturnos. O assobio de certas aves noturnas é interpretado como o chamado da Matinta.',
      influencias: ['Folclore indígena (seres da noite)', 'Crenças europeias em bruxaria e metamorfos', 'Aves de mau agouro']
    },
    simbolismo: ['Agouro e presságio', 'Bruxaria popular', 'Transformação', 'Pacto e promessa', 'Espírito da noite'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/MATINTA-int.jpg',
    imageAiHint: 'Matinta Perera'
  },
  {
    id: '14',
    slug: 'corpo-seco',
    name: 'Corpo-Seco',
    tipo: 'Lenda',
    regiao: 'Sudeste e Centro-Oeste',
    description: 'O Corpo-Seco é a alma de uma pessoa que foi tão má em vida, que nem a terra quis recebê-la depois da morte! Seu corpo não apodrece normalmente, mas fica seco e vagando pelas estradas e matas, assombrando as pessoas. Dizem que ele se agarra nas costas dos viajantes para sugar sua energia ou para que o carreguem, pois ele não consegue se mover sozinho por muito tempo. É uma figura muito assustadora, representando a punição para quem foi cruel.',
    origem: {
      periodo: 'Colonial/Pós-colonial',
      contexto: 'Lenda moralizante que expressa a crença na punição pós-morte para indivíduos extremamente perversos. A ideia de que a própria terra rejeita o corpo reforça a gravidade dos pecados cometidos.',
      influencias: ['Catolicismo popular (almas penadas, purgatório)', 'Moralidade e punição exemplar', 'Contos de assombração']
    },
    simbolismo: ['Punição eterna para maldade extrema', 'Rejeição pela terra', 'Assombração', 'Peso dos pecados', 'Alma penada'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/CORPO-SECO-int.jpg',
    imageAiHint: 'Corpo Seco'
  },
  {
    id: '15',
    slug: 'caboclo-dagua',
    name: 'Caboclo D\'água',
    tipo: 'Lenda Ribeirinha',
    regiao: 'Bacia do Rio São Francisco (Nordeste/Sudeste)',
    description: 'O Caboclo D\'água é um ser misterioso que vive no Rio São Francisco. Pescadores contam que ele é forte, musculoso, com pele cor de cobre e cabelos longos. Ele é o guardião do rio: protege os peixes, afunda barcos de quem pesca demais ou usa explosivos, e pode até virar as canoas. Alguns dizem que ele tem um olho só e garras afiadas. Para se proteger, os barqueiros costumam pintar uma carranca na proa do barco ou oferecer fumo para ele.',
    origem: {
      periodo: 'Indeterminado',
      contexto: 'Lenda típica das comunidades ribeirinhas do Rio São Francisco, personificando os perigos do rio, a necessidade de respeito pela natureza e a figura de um protetor fluvial. Mistura elementos indígenas e africanos.',
      influencias: ['Folclore ribeirinho', 'Espíritos protetores da água (africanos e indígenas)', 'Carrancas do São Francisco']
    },
    simbolismo: ['Guardião do rio', 'Protetor dos peixes', 'Força da natureza fluvial', 'Respeito aos recursos naturais', 'Perigos do rio'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/CABOCLO-DAGUA-int-002.jpg',
    imageAiHint: 'Caboclo Dagua'
  },
  {
    id: '16',
    slug: 'boiuna',
    name: 'Boiúna (Cobra Grande)',
    tipo: 'Lenda Amazônica',
    regiao: 'Amazônia',
    description: 'A Boiúna, também chamada de Cobra Grande, é uma cobra gigantesca e escura que vive nos rios e igarapés da Amazônia. Ela é tão grande que pode virar barcos, criar ondas enormes e até engolir pessoas! Dizem que seus olhos brilham na escuridão como se fossem faróis e que ela pode se transformar em um navio fantasma para atrair suas vítimas. A Boiúna é uma das criaturas mais temidas e respeitadas da região, vista como a mãe de todos os peixes.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Lenda indígena poderosa que representa a força imensa e os perigos dos grandes rios amazônicos e suas profundezas desconhecidas. A sucuri, uma cobra real e enorme da Amazônia, é uma forte inspiração.',
      influencias: ['Mitologia indígena amazônica (Sucuri, Anaconda)', 'Relatos de grandes serpentes', 'Medo das águas profundas']
    },
    simbolismo: ['Poder primordial da natureza', 'Mãe dos peixes', 'Perigo oculto nas águas', 'Força selvagem e indomável', 'Mistério amazônico'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/BOIUNA-int.jpg',
    imageAiHint: 'Boiuna snake'
  },
  {
    id: '17',
    slug: 'anhanga',
    name: 'Anhangá',
    tipo: 'Mito Indígena Tupi-Guarani',
    regiao: 'Presente na cosmovisão Tupi-Guarani (Brasil)',
    description: 'Anhangá é um espírito muito importante na mitologia dos povos Tupi-Guarani. Ele é o protetor dos animais da floresta e da caça. Muitas vezes, aparece como um veado branco com olhos vermelhos como fogo, mas pode ser invisível. Anhangá não gosta de caçadores que matam por maldade ou mais do que precisam para comer. Ele pode assustá-los, fazê-los se perder na mata ou até mesmo deixá-los doentes. Para os indígenas, Anhangá é um espírito poderoso que garante o respeito pela natureza.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Na cosmovisão Tupi-Guarani, Anhangá é um espírito ambivalente, por vezes associado ao mal ou ao mundo dos mortos (Anhang), mas também um forte protetor da fauna. Representa a necessidade de equilíbrio na caça e o respeito aos seres da floresta.',
      influencias: ['Cosmovisão Tupi-Guarani', 'Dualidade bem/mal nos espíritos da natureza', 'Relação de respeito com a caça']
    },
    simbolismo: ['Proteção animal e da caça', 'Espírito da floresta', 'Equilíbrio ecológico', 'Justiça da natureza', 'Dualidade espiritual'],
    referencias: [genericReference, multirioReference, cascudoDicionarioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/ANHANGA-int.jpg',
    imageAiHint: 'Anhangá spirit'
  }
];

export function getMythBySlug(slug: string): Myth | undefined {
  return myths.find((myth) => myth.slug === slug);
}

export function getAllMyths(): Myth[] {
  return myths;
}

