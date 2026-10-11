
import type { Myth, Referencia } from '@/lib/types';

const genericReference: Referencia = {
  titulo: "Lendas do folclore brasileiro - Wikipédia",
  url: "https://pt.wikipedia.org/wiki/Lendas_do_folclore_brasileiro"
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
    subtitle: 'O travesso de uma perna só',
    fonteHistorica: 'O Saci-Pererê: Resultado de um Inquérito, São Paulo, 1917.',
    description: "Pequeno, ágil e imprevisível, o Saci-Pererê é uma das figuras mais conhecidas do folclore brasileiro. Tem apenas uma perna, usa uma carapuça vermelha e costuma aparecer com um cachimbo.\n\nSua carapuça é a fonte de seus poderes mágicos. Quem conseguir tomá-la poderá exigir, em troca de sua devolução, uma recompensa em ouro.\n\nO Saci gosta de provocar confusões. À noite, pode trançar as crinas dos animais, soltá-los das correias e assustar viajantes em caminhos solitários. Também é conhecido por criar dificuldades domésticas, apagando o fogo, queimando alimentos e espalhando pequenos transtornos pela casa.\n\nEmbora seja lembrado principalmente por suas travessuras, nem todas as tradições o apresentam como uma criatura inofensiva. Há relatos em que ele aparece como um ser noturno, assustador e até capaz de se tornar invisível.\n\nSua origem reúne diferentes influências culturais. Cascudo registra a associação do Saci ao Fradinho da Mão Furada, personagem do imaginário português, e menciona tradições em que o Saci assume outras formas, inclusive a de uma mulher.\n\nEm uma dessas histórias, uma mulher preparava cachimbos todas as noites e os encontrava vazios pela manhã. Decidida a descobrir o responsável, escondeu-se para observar. Viu então o Saci fumando tranquilamente. Quando tentou surpreendê-lo, ele escapou, deixando apenas o susto e o mistério.\n\nEntre brincadeiras, sustos e encantamentos, o Saci permanece como uma criatura difícil de compreender — e ainda mais difícil de capturar.",
    origem: {
      periodo: 'Pós-colonial',
      contexto: 'Originário de mitos indígenas (como o Yacy Yaterê dos Guarani), o Saci foi transformado pela cultura africana no Brasil, ganhando suas características mais conhecidas. É um símbolo da mistura cultural brasileira.',
      influencias: ['Cultura indígena (espíritos da floresta)', 'Cultura africana (entidades travessas, gorro mágico)', 'Folclore europeu (elementos de duendes)'],
    },
    simbolismo: ['Travessura', 'Inteligência', 'Liberdade', 'Guardião dos segredos da floresta', 'Mistura cultural'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Saci”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/saci.png',
    imageAiHint: 'Saci Pererê',
  },
  {
    id: '2',
    slug: 'curupira',
    name: 'Curupira',
    tipo: 'Mito Indígena',
    regiao: 'Amazônia (presente em todo Brasil)',
    subtitle: 'O misterioso guardião das matas',
    fonteHistoricaTitulo: 'Registro histórico mencionado',
    fonteHistorica: 'José de Anchieta, carta de São Vicente, 30 de maio de 1560.',
    description: "Nas profundezas das florestas brasileiras vive uma criatura que confunde os caçadores, assusta os viajantes e protege os animais.\n\nÉ o Curupira, um dos seres mais antigos e misteriosos do folclore brasileiro.\n\nSegundo a tradição, ele tem o corpo de um menino, a cabeça raspada e os pés voltados para trás. Essa característica extraordinária faz com que seus rastros apontem na direção contrária àquela em que realmente caminha, confundindo quem tenta segui-lo.\n\nO Curupira é conhecido por desorientar caçadores, fazê-los perder o caminho e assustá-los com assobios e sinais misteriosos. Em algumas tradições, também castiga aqueles que entram na mata sem respeitar seus habitantes.\n\nHá relatos de que ele aprecia fumo e pinga. Por isso, algumas pessoas costumavam deixar pequenas oferendas na floresta, buscando evitar suas travessuras ou conquistar sua proteção.\n\nSua presença pode ser anunciada por gritos longos e estridentes, que ecoam entre as árvores. Às vezes, imita a voz humana, chamando pessoas para o interior da mata.\n\nO Curupira não é apenas uma criatura assustadora. É também uma representação do respeito que os seres humanos devem ter pela natureza.\n\nMuito antes de se tornar personagem de livros e histórias infantis, já era conhecido pelos povos indígenas. Em 1560, o padre José de Anchieta registrou relatos sobre o Curupira, descrevendo o temor que sua presença despertava entre os habitantes da região.\n\nAo longo dos séculos, sua lenda se espalhou pelo Brasil, assumindo diferentes características, mas conservando sua ligação com os mistérios e perigos da floresta.",
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Uma das figuras mais antigas do folclore brasileiro, representando a profunda conexão dos povos indígenas com a natureza e a necessidade de sua preservação.',
      influencias: ['Cosmovisão indígena', 'Espíritos guardiões da natureza'],
    },
    simbolismo: ['Proteção da natureza', 'Guardião da floresta', 'Justiça ambiental', 'Astúcia', 'Respeito aos animais'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Curupira”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/Curupira2.png',
    imageAiHint: 'Curupira forest',
  },
  {
    id: '3',
    slug: 'iara',
    name: "Iara — A Mãe-d'Água",
    tipo: 'Lenda Indígena',
    regiao: 'Amazônia',
    subtitle: 'A voz encantadora das águas brasileiras',
    description: "Nas águas dos rios brasileiros, conta-se que vive uma criatura misteriosa, capaz de atrair os homens com seu canto.\n\nÉ a Mãe-d'Água, também conhecida pelo nome de Iara.\n\nSegundo a tradição popular, ela aparece como uma bela mulher de longos cabelos, muitas vezes louros, com o corpo terminando em uma cauda de peixe. Sua voz possui um encanto irresistível: quem a escuta pode esquecer o mundo ao redor e seguir seu chamado até desaparecer nas águas.\n\nMas a figura da Iara, como é conhecida atualmente, reúne influências de diferentes tradições.\n\nA imagem da mulher com cauda de peixe e canto sedutor aproxima-se das sereias europeias. Nas culturas africanas também existem importantes divindades e espíritos associados às águas, entre eles Iemanjá, embora suas características e significados não sejam os mesmos.\n\nJá entre os povos indígenas brasileiros, existiam outros seres aquáticos, alguns assustadores e perigosos, que não correspondiam à imagem da sereia encantadora.\n\nAo longo do tempo, essas diferentes tradições contribuíram para o imaginário popular brasileiro, no qual a Mãe-d'Água passou a ocupar um lugar especial.\n\nA Iara representa o fascínio e o mistério das águas: belas e sedutoras à primeira vista, mas capazes de esconder perigos desconhecidos.",
    origem: {
      periodo: 'Pré-colonial (com transformações pós-coloniais)',
      contexto: 'Baseada em mitos indígenas sobre seres aquáticos (como o Ipupiara), a figura da Iara foi influenciada pelas sereias europeias, tornando-se a sedutora que conhecemos hoje. Representa os perigos e encantos dos rios.',
      influencias: ['Mitologia indígena (Mãe d\'água, Ipupiara)', 'Sereias europeias'],
    },
    simbolismo: ['Sedução perigosa', 'Beleza fatal', 'Mistérios dos rios', 'Protetora das águas', 'Transformação cultural'],
    referencias: [{
      titulo: "Dicionário do Folclore Brasileiro. Verbetes “Iara” e “Mãe-d'Água”.",
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/Iara.png',
    imageAiHint: 'Iara mermaid',
  },
  {
    id: '4',
    slug: 'boitata',
    name: 'Boitatá',
    tipo: 'Lenda Indígena/Afro-brasileira',
    regiao: 'Todo o Brasil',
    subtitle: 'A serpente de fogo que percorre os campos',
    fonteHistoricaTitulo: 'Registro histórico mencionado',
    fonteHistorica: 'José de Anchieta, carta de 31 de maio de 1560.',
    description: "Quando a noite cai sobre os campos brasileiros, uma luz misteriosa pode surgir entre a vegetação.\n\nÀs vezes parece uma chama que corre pelo chão. Outras vezes, assume a forma de uma serpente luminosa, deslizando rapidamente pela escuridão.\n\nÉ o Boitatá, uma das criaturas mais antigas do imaginário popular brasileiro.\n\nSeu nome aparece em diferentes regiões do país, com variações como Batatá, Bitatá e Batatão. Apesar das diferenças, as histórias frequentemente descrevem uma manifestação de fogo que percorre campos e caminhos durante a noite.\n\nO Boitatá pode assustar quem o encontra. Em algumas tradições, porém, não é apenas uma criatura ameaçadora: atua como protetor dos campos, perseguindo aqueles que provocam incêndios.\n\nSua presença já era conhecida no Brasil colonial. Em 1560, o padre José de Anchieta registrou relatos sobre uma aparição luminosa chamada Baetatá, associada ao medo que os indígenas sentiam diante daquele fenômeno.\n\nAo longo dos séculos, diferentes explicações surgiram para essas luzes misteriosas. Algumas tradições as associaram às almas penadas; outras, a fenômenos naturais conhecidos como fogos-fátuos.\n\nAssim, o Boitatá reúne duas imagens aparentemente contraditórias: a do fogo que ameaça e a do fogo que protege.\n\nUma serpente luminosa que atravessa a noite, lembrando que a natureza pode ser tão misteriosa quanto poderosa.",
    origem: {
      periodo: 'Indeterminado (elementos pré e pós-coloniais)',
      contexto: 'Associado ao fenômeno do fogo-fátuo (gases inflamáveis dos pântanos). A lenda expressa o medo e o respeito pelo fogo e a necessidade de proteger a natureza.',
      influencias: ['Crenças indígenas (fogo fátuo, cobras sagradas)', 'Relatos de jesuítas', 'Folclore europeu (serpentes de fogo)'],
    },
    simbolismo: ['Proteção contra incêndios', 'Guardião dos campos', 'Punição aos maus', 'Luz na escuridão', 'Mistério natural'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Boitatá”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/boitata.png',
    imageAiHint: 'Boitatá snake',
  },
  {
    id: '5',
    slug: 'mula-sem-cabeca',
    name: 'Mula-sem-Cabeça',
    tipo: 'Lenda',
    regiao: 'Todo o Brasil',
    subtitle: 'A maldição que galopa pela madrugada',
    description: "Dizem que, nas noites de quinta para sexta-feira, uma criatura assustadora percorre os caminhos escuros do interior do Brasil.\n\nSeu galope é tão violento que pode ser ouvido de longe. Faíscas de fogo escapam de seu corpo, enquanto seus cascos golpeiam o chão com força. Às vezes, entre os ruídos da corrida, ouve-se um som parecido com o soluço de uma pessoa.\n\nÉ a Mula-sem-Cabeça.\n\nSegundo uma das tradições mais conhecidas, a criatura é uma mulher condenada por manter um relacionamento amoroso com um sacerdote. Como castigo, transforma-se em um animal encantado que corre sem descanso durante a madrugada.\n\nO nome sugere uma mula sem cabeça, mas os relatos populares nem sempre concordam sobre sua aparência. Alguns descrevem um animal que relincha e lança fogo pelas narinas e pela boca.\n\nA maldição, porém, não é necessariamente eterna.\n\nConta-se que alguém suficientemente corajoso pode desfazer o encantamento retirando o freio de ferro da criatura. Quando isso acontece, ela recupera sua forma de mulher.\n\nOutras versões dizem que o encanto também pode ser quebrado se a criatura sangrar.\n\nA lenda chegou ao Brasil por meio de antigas tradições europeias, nas quais pessoas eram transformadas em animais como punição por comportamentos considerados proibidos.\n\nCom o passar do tempo, a Mula-sem-Cabeça tornou-se uma das aparições mais temidas das noites brasileiras, misturando medo, religião e a esperança de libertação de uma terrível maldição.",
    origem: {
      periodo: 'Colonial',
      contexto: 'Trazida pelos portugueses, a lenda servia como uma história de aviso para reforçar as regras da Igreja Católica e o comportamento moral da época. É uma das lendas de punição mais conhecidas.',
      influencias: ['Folclore ibérico (lobisomens, almas penadas)', 'Moralismo católico medieval'],
    },
    simbolismo: ['Punição por transgressão', 'Medo do pecado', 'Controle social e religioso', 'Terror noturno'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Mula-sem-Cabeça”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/MulaSemCabeca.png',
    imageAiHint: 'Headless Mule',
  },
  {
    id: '6',
    slug: 'boto-cor-de-rosa',
    name: 'Boto',
    tipo: 'Lenda Amazônica',
    regiao: 'Amazônia',
    subtitle: 'O encantado dos rios amazônicos',
    nomePopular: 'Boto-cor-de-rosa',
    origemResumo: 'Tradições populares amazônicas',
    description: "Nas águas da Amazônia vive um animal cercado de mistérios e histórias extraordinárias: o boto.\n\nSegundo a tradição popular, ele não é apenas um habitante dos rios. É um ser encantado, capaz de assumir a forma humana e caminhar entre as pessoas sem revelar sua verdadeira natureza.\n\nDizem que o boto pode transformar-se em um rapaz bonito e sedutor. Aparece nas festas, aproxima-se das moças e conquista sua atenção. Depois, desaparece misteriosamente, retornando às águas de onde veio.\n\nNas comunidades amazônicas, a expressão filho de boto tornou-se uma explicação popular para o nascimento de crianças cuja paternidade era desconhecida. A crença também servia para encobrir situações que a sociedade da época considerava difíceis de admitir.\n\nMas nem todas as histórias apresentam o boto como um conquistador encantador.\n\nHá relatos em que ele persegue embarcações, assusta pescadores e exerce uma influência misteriosa sobre as pessoas. Em algumas tradições, seu encantamento é associado a comportamentos inexplicáveis, desaparecimentos e acontecimentos assustadores.\n\nO boto também aparece em crenças relacionadas à sexualidade, à gravidez e aos perigos das águas. Nem sempre suas ações são descritas como românticas: algumas narrativas atribuem a ele comportamentos violentos e ameaçadores.\n\nAo reunir esses relatos, Câmara Cascudo mostra que o boto ocupa um lugar complexo no imaginário amazônico. Ele pode ser sedutor, enganador ou perigoso, dependendo da tradição e da região.\n\nSuas histórias revelam uma relação profunda entre as populações ribeirinhas e os rios, vistos não apenas como fontes de alimento e caminhos de transporte, mas também como lugares habitados por forças misteriosas.\n\nEntre o fascínio e o temor, o Boto permanece como um dos encantados mais conhecidos do folclore brasileiro.",
    origem: {
      periodo: 'Popularizado nos séculos XIX/XX',
      contexto: 'A lenda reflete o mistério dos rios amazônicos e a figura carismática do boto. Servia como uma forma de explicar acontecimentos sociais, como gravidezes inesperadas, em comunidades ribeirinhas.',
      influencias: ['Cultura ribeirinha amazônica', 'Observação dos botos e seu comportamento social', 'Contos europeus de metamorfos e sedutores'],
    },
    simbolismo: ['Sedução', 'Encantamento', 'Mistério dos rios', 'Transformação', 'Paternidade desconhecida'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Boto”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/boto.png',
    imageAiHint: 'Pink Dolphin',
  },
  {
    id: '7',
    slug: 'vitoria-regia',
    name: 'Vitória-Régia',
    tipo: 'Lenda Indígena',
    regiao: 'Amazônia',
    subtitle: 'A flor que nasceu de um amor perdido',
    personagensTradicao: 'Moroti e Pitá.',
    description: "Nas águas tranquilas da Amazônia cresce uma planta extraordinária, de folhas imensas e flores delicadas, brancas e rosadas, que parecem flutuar sobre a superfície dos rios.\n\nÉ a vitória-régia, conhecida como a rainha das flores amazônicas.\n\nConta uma antiga lenda que sua origem está ligada ao amor entre uma jovem indígena chamada Moroti e um guerreiro chamado Pitá.\n\nMoroti desejava que todos em sua tribo soubessem o quanto era amada. Para demonstrar a intensidade dos sentimentos de Pitá, decidiu submetê-lo a uma prova.\n\nRetirou uma pulseira de seu braço e lançou-a nas águas profundas do rio, pedindo que o guerreiro a recuperasse.\n\nApaixonado, Pitá não hesitou. Mergulhou nas águas caudalosas em busca do presente, mas a correnteza o levou, e ele desapareceu.\n\nAo perceber o que havia acontecido, Moroti foi tomada pelo desespero. Arrependida de seu gesto, lançou-se ao rio para procurar o amado.\n\nEla também não voltou.\n\nNa manhã seguinte, quando os habitantes da tribo foram até o lugar onde o casal havia desaparecido, encontraram algo inesperado.\n\nUma enorme flor havia surgido sobre as águas.\n\nSeu centro era branco, lembrando Moroti, enquanto suas pétalas rosadas evocavam Pitá. Era como se a natureza tivesse transformado aquele amor perdido em uma beleza que permaneceria para sempre.\n\nSegundo a lenda, a flor abria suas pétalas à luz do sol e voltava a fechá-las quando a noite chegava.\n\nAssim teria nascido a vitória-régia, a rainha das flores amazônicas, guardando em suas pétalas a lembrança de dois jovens que desapareceram nas águas por amor.",
    origem: {
      periodo: 'Não especificado na tradição apresentada',
      contexto: 'Tradição sobre a origem da vitória-régia, associada ao amor e ao desaparecimento de Moroti e Pitá nas águas.',
      influencias: ['Tradições indígenas', 'Imaginário das águas amazônicas', 'Transformação pela natureza'],
    },
    simbolismo: ['Amor perdido', 'Transformação pela natureza', 'Beleza e tragédia', 'Memória', 'Arrependimento'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Vitória-Régia”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/VitoriaRegia.png',
    imageAiHint: 'Vitória Régia',
  },
  {
    id: '8',
    slug: 'caipora',
    name: 'Caipora',
    tipo: 'Mito Indígena',
    regiao: 'Todo o Brasil',
    subtitle: 'A misteriosa dona da caça',
    variantesRegionais: 'Caipora, Caapora, Caiçara, conforme os registros reunidos pelo autor.',
    description: "Nas matas brasileiras vive uma criatura conhecida por muitos nomes e muitas aparências: a Caipora.\n\nEm algumas regiões, dizem que é um pequeno indígena de pele escura, ágil e difícil de encontrar, que percorre a floresta fumando seu cachimbo. Em outras, aparece como uma criatura peluda, de olhos brilhantes, ou mesmo como uma figura gigantesca que assusta os viajantes.\n\nHá também histórias em que a Caipora cavalga um porco-do-mato, atravessando a vegetação com incrível rapidez.\n\nApesar das diferenças, quase todas essas tradições a relacionam aos animais selvagens e à caça.\n\nA Caipora conhece os caminhos secretos da floresta. Pode confundir os caçadores, fazer os cães perderem o rastro dos animais e impedir que uma caçada tenha sucesso.\n\nQuem entra na mata sem respeitar suas regras corre o risco de encontrar dificuldades inexplicáveis. Em certas regiões, os caçadores procuram conquistar sua boa vontade oferecendo fumo ou outros presentes.\n\nMas a Caipora nem sempre é uma guardiã amigável. Algumas histórias a descrevem como uma criatura perigosa, capaz de perseguir e castigar aqueles que a desagradam.\n\nSua aparência e seu comportamento variam conforme a região. Pode ser pequena ou gigantesca, humana ou coberta de pelos, solitária ou acompanhada de animais.\n\nCâmara Cascudo registra uma ligação especialmente próxima entre a Caipora e o Curupira. Em uma das distinções tradicionais, a Caipora seria o próprio Curupira, mas com os pés voltados para a frente, enquanto seu parente teria os pés virados para trás.\n\nAssim, mais do que uma personagem de aparência fixa, a Caipora representa os mistérios da floresta e o poder que a natureza exerce sobre aqueles que se aventuram em seus domínios.",
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Figura indígena que representa o espírito da floresta e a necessidade de respeito pela caça, assegurando que não haja excessos. Muitas vezes confundida com o Curupira, mas com características próprias, como a montaria em um porco selvagem.',
      influencias: ['Cosmovisão indígena (Tupi-Guarani principalmente)', 'Espíritos da floresta', 'Rituais de caça'],
    },
    simbolismo: ['Proteção da caça e da floresta', 'Astúcia', 'Vínculo com animais selvagens', 'Equilíbrio ecológico', 'Respeito às tradições'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Caipora”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/Caipora.png',
    imageAiHint: 'Caipora spirit',
  },
  {
    id: '9',
    slug: 'negrinho-do-pastoreio',
    name: 'Negrinho do Pastoreio',
    tipo: 'Lenda',
    regiao: 'Sul do Brasil',
    subtitle: 'O menino que encontrou proteção depois da morte',
    origemResumoTitulo: 'Origem registrada',
    origemResumo: 'Tradição popular do Rio Grande do Sul.',
    description: "Nos campos do Rio Grande do Sul, conta-se a história de um menino negro que vivia escravizado por um estancieiro rico, avarento e cruel.\n\nO menino tinha a tarefa de cuidar dos cavalos de seu senhor. Trabalhava pelos campos, conduzindo a tropilha e obedecendo às ordens que recebia.\n\nCerto dia, porém, perdeu os animais que estavam sob sua responsabilidade.\n\nFurioso, o estancieiro castigou-o brutalmente. Mesmo ferido e sangrando, o menino foi levado até um formigueiro e ali abandonado, sem possibilidade de escapar.\n\nFoi nesse lugar que sua vida terminou.\n\nMas, segundo a tradição, a morte não foi o fim de sua história.\n\nO Negrinho reapareceu nos campos, montado em um cavalo baio e conduzindo uma nova tropilha, invisível aos olhos das pessoas.\n\nAgora estava livre do sofrimento que havia conhecido em vida.\n\nDizia-se que ele era afilhado de Nossa Senhora e que recebia sua proteção. Sua história passou a ser lembrada não apenas pela crueldade que sofreu, mas também pela esperança de justiça e amparo divino.\n\nCom o tempo, surgiu uma devoção popular ao Negrinho do Pastoreio. Pessoas que perdiam objetos passaram a pedir sua ajuda para encontrá-los, acendendo velas em sua homenagem.\n\nAssim, o menino que um dia perdeu os cavalos de seu senhor tornou-se, na tradição popular, aquele que ajuda os outros a encontrar o que perderam.\n\nSua lenda atravessou gerações como uma lembrança do sofrimento causado pela escravidão e da esperança de que a injustiça não tenha a última palavra.",
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
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Negrinho do Pastoreio”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/negrinhodopastoreiro.png',
    imageAiHint: 'Negrinho Pastoreio'
  },
  {
    id: '10',
    slug: 'cuca',
    name: 'Cuca',
    tipo: 'Lenda',
    regiao: 'Todo o Brasil (popularizada por Monteiro Lobato)',
    subtitle: 'A criatura que espreita o sono das crianças',
    tradicoesRelacionadas: 'Coca, Coco e Papão, presentes no folclore português e brasileiro.',
    description: "Quando a noite chega e as crianças resistem ao sono, uma antiga ameaça pode surgir nas palavras dos adultos: cuidado, porque a Cuca vem pegar!\n\nA Cuca é uma das figuras mais antigas e assustadoras das histórias populares brasileiras.\n\nDiferentemente de outros personagens do folclore, ela não possui uma aparência única. Em muitas tradições, é descrita como um fantasma feminino, sem forma definida, que ameaça levar ou devorar crianças desobedientes.\n\nSua presença tornou-se conhecida principalmente por meio das cantigas de ninar, transmitidas de geração em geração.\n\nNessas canções, a Cuca aparece como uma criatura que ronda as casas durante a noite, esperando encontrar crianças que ainda não adormeceram.\n\nA origem dessa figura está ligada às tradições portuguesas da Coca e do Coco, seres assustadores usados para provocar medo e impor obediência.\n\nEm algumas regiões de Portugal, a Coca assumia formas monstruosas, semelhantes a dragões, aparecendo até mesmo em celebrações populares.\n\nAo chegar ao Brasil, essas tradições se misturaram a outras histórias de assombrações e criaturas noturnas. A Cuca passou a ocupar um lugar especial no imaginário infantil, muitas vezes confundida com outros seres conhecidos como papões.\n\nSua aparência mudou ao longo do tempo, mas sua função permaneceu semelhante: representar os medos que surgem na escuridão, especialmente quando chega a hora de dormir.\n\nA Cuca não precisa mostrar o rosto para assustar. Basta que seu nome seja pronunciado em uma cantiga, enquanto a noite cai e a casa fica silenciosa.",
    origem: {
      periodo: 'Pós-colonial (com raízes ibéricas)',
      contexto: 'Originada da "Coca" ou "Coco", um bicho-papão do folclore de Portugal e Espanha. No Brasil, ganhou características próprias e se tornou uma das vilãs mais famosas do imaginário infantil, especialmente através da literatura.',
      influencias: ['Folclore ibérico (Coca, Bicho-Papão)', 'Lendas de monstros raptores de crianças', 'Literatura infantil brasileira (Monteiro Lobato)']
    },
    simbolismo: ['Medo infantil', 'Ameaça e perigo', 'Bruxaria', 'Castigo para desobediência', 'Astúcia maligna'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Cuca”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/cuca.png',
    imageAiHint: 'Cuca witch'
  },
  {
    id: '11',
    slug: 'lobisomem',
    name: 'Lobisomem',
    tipo: 'Lenda Universal (versão brasileira)',
    regiao: 'Todo o Brasil (especialmente áreas rurais)',
    subtitle: 'A maldição das sete encruzilhadas',
    description: "Dizem que algumas pessoas já nascem destinadas a carregar uma maldição.\n\nEntre as antigas crenças populares brasileiras, uma delas conta que o menino nascido depois de sete irmãs poderá tornar-se um lobisomem quando completar treze anos.\n\nDurante o dia, parece um homem comum, embora algumas histórias o descrevam como pálido, magro, de orelhas compridas e nariz levantado.\n\nMas, em determinadas noites, seu destino se transforma.\n\nAo encontrar um lugar onde um jumento tenha rolado pelo chão, o amaldiçoado assume a forma de uma criatura assustadora. Nem sempre se parece com um lobo: pode surgir como um cachorro enorme, um animal peludo ou uma figura de aparência monstruosa.\n\nA partir de então, nas noites de terça e sexta-feira, entre a meia-noite e as duas horas, precisa cumprir uma corrida sobrenatural.\n\nPercorre cemitérios, igrejas, vilas, morros e encruzilhadas, sempre perseguido pelos latidos dos cães. Somente depois de retornar ao lugar onde começou a transformação poderá recuperar sua aparência humana.\n\nEm algumas tradições, o lobisomem ataca animais e assusta os moradores das pequenas comunidades. Em outras, sua existência é menos uma escolha do que uma condenação: ele não consegue escapar do destino que lhe foi imposto.\n\nMas existe uma maneira de quebrar o encantamento.\n\nSegundo a crença popular, um ferimento que faça a criatura sangrar pode libertá-la da maldição. Quem a ferir, porém, deverá tomar cuidado para não entrar em contato com seu sangue, pois corre o risco de herdar o mesmo destino.\n\nO Lobisomem brasileiro faz parte de uma tradição muito antiga, encontrada também em diferentes regiões da Europa, África e Ásia. Ao chegar ao Brasil, essas histórias ganharam novas formas, incorporando os medos, os costumes e as crenças das comunidades rurais.\n\nMais do que um monstro que aparece na escuridão, o Lobisomem representa o temor de um destino inevitável: o de alguém condenado a se transformar em uma criatura que nem ele próprio consegue controlar.",
    origem: {
      periodo: 'Colonial (origem europeia medieval)',
      contexto: 'Lenda muito antiga, presente em várias culturas do mundo, especialmente na Europa. Foi trazida ao Brasil pelos colonizadores portugueses e se adaptou às crenças locais, tornando-se muito popular nas zonas rurais.',
      influencias: ['Folclore europeu medieval (Licantropia)', 'Crenças em metamorfose', 'Medo do desconhecido e da noite']
    },
    simbolismo: ['Maldição', 'Força bruta e selvagem', 'Dualidade (homem e besta)', 'Terror noturno rural', 'Instintos primitivos'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Lobisomem”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/Lobisomem.png',
    imageAiHint: 'Lobisomem werewolf'
  },
  {
    id: '12',
    slug: 'mapinguari',
    name: 'Mapinguari',
    tipo: 'Lenda Amazônica',
    regiao: 'Amazônia',
    subtitle: 'O monstro invulnerável das matas',
    description: "Nas florestas brasileiras, conta-se a história de uma criatura tão assustadora que poucos teriam coragem de enfrentá-la: o Mapinguari.\n\nSeu corpo lembra o de um homem, mas é inteiramente coberto por uma espessa camada de pelos. Grande, forte e feroz, percorre as matas como uma ameaça a qualquer pessoa que encontre pelo caminho.\n\nDizem que seus pelos são tão resistentes que as balas não conseguem atravessá-los. Apenas uma pequena região, próxima ao umbigo, permanece vulnerável.\n\nO Mapinguari é considerado um terrível inimigo dos seres humanos. Segundo a tradição, quando captura uma pessoa, devora somente sua cabeça.\n\nEm um dos relatos recolhidos por Câmara Cascudo, a criatura aparece como um monstro enorme, coberto de pelos, com pés de burro voltados para trás.\n\nSuas unhas lembram as garras de uma onça, e sua boca é descomunal, com uma abertura que se estende até a altura do estômago.\n\nNessa história, o Mapinguari surge carregando debaixo do braço o corpo de um homem que havia matado. Suas garras e sua boca monstruosa tornam a cena ainda mais aterrorizante.\n\nA criatura reúne características humanas e animais, mas não pertence inteiramente a nenhum dos dois mundos.\n\nSua força, sua aparência e a resistência de seu corpo fazem dela um dos seres mais temidos das narrativas sobre os perigos escondidos nas florestas.\n\nO Mapinguari representa o medo do desconhecido: aquilo que pode estar à espreita entre as árvores, longe dos caminhos conhecidos, onde nem mesmo as armas humanas parecem oferecer proteção.",
    origem: {
      periodo: 'Pré-colonial/Contemporâneo',
      contexto: 'Lenda indígena amazônica sobre um ser monstruoso e guardião da floresta. Alguns pesquisadores, como Câmara Cascudo, sugerem que a lenda pode ter sido inspirada em memórias distorcidas de animais pré-históricos, como a preguiça gigante (megatério).',
      influencias: ['Folclore indígena amazônico', 'Possível memória de megafauna extinta']
    },
    simbolismo: ['Mistério da selva profunda', 'Guardião da floresta', 'Força primitiva', 'Medo do desconhecido', 'Elo com o passado'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Mapinguari”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/mapinguari.png',
    imageAiHint: 'Mapinguari monster'
  },
  {
    id: '13',
    slug: 'matinta-perera',
    name: 'Matintapereira',
    tipo: 'Lenda Amazônica/Nordestina',
    regiao: 'Norte e Nordeste',
    subtitle: 'O pássaro agourento que vem cobrar tabaco',
    nomesAssociados: 'Mati, Matitaperê e Mati-taperê.',
    description: "Nas horas mais silenciosas da noite, quando as casas estão fechadas e a escuridão cobre os caminhos, um canto estranho pode ser ouvido entre as árvores.\n\nÉ o chamado da Matintapereira.\n\nSegundo a tradição popular, esse pássaro anuncia uma presença misteriosa. Seu canto é considerado de mau agouro, e quem o escuta pode tentar afastar a ameaça fazendo uma promessa.\n\nBasta dizer que, na manhã seguinte, a Matinta poderá voltar para buscar tabaco.\n\nMas há um detalhe inquietante nessa promessa.\n\nDizem que a primeira pessoa a aparecer na casa no dia seguinte será a própria Matintapereira, agora sob aparência humana.\n\nA crença também conta que feiticeiros e pajés conseguem transformar-se nesse pássaro para atravessar grandes distâncias durante a noite e realizar suas vinganças.\n\nEm outras versões, a Matinta nem sequer é uma ave comum. Pode ser um velho ou uma velha com apenas uma perna, que se desloca aos pulos, surgindo inesperadamente na escuridão.\n\nSua verdadeira aparência permanece incerta.\n\nAlguns a associam a uma pequena coruja. Outros identificam seu canto com o de uma ave conhecida como saci ou sem-fim.\n\nEssa ligação não é apenas uma coincidência de nomes. Câmara Cascudo registra a Matintapereira como uma manifestação do mito do Saci-pererê em forma de pássaro.\n\nAssim, a criatura que canta durante a noite e a pessoa misteriosa que aparece pela manhã podem ser duas faces de um mesmo encantamento.\n\nA Matintapereira permanece escondida entre o mundo das aves, das feitiçarias e dos presságios, deixando uma pergunta para quem escuta seu chamado:\n\nQuem será que virá buscar o tabaco amanhã?",
    origem: {
      periodo: 'Indeterminado',
      contexto: 'Crença popular que mistura elementos de bruxaria, metamorfose e espíritos noturnos. O assobio de certas aves noturnas é interpretado como o chamado da Matinta.',
      influencias: ['Folclore indígena (seres da noite)', 'Crenças europeias em bruxaria e metamorfos', 'Aves de mau agouro']
    },
    simbolismo: ['Agouro e presságio', 'Bruxaria popular', 'Transformação', 'Pacto e promessa', 'Espírito da noite'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Matintapereira”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/MatintaPereira.png',
    imageAiHint: 'Matinta Perera'
  },
  {
    id: '14',
    slug: 'corpo-seco',
    name: 'Corpo-Seco',
    tipo: 'Lenda',
    regiao: 'Sudeste e Centro-Oeste',
    subtitle: 'Aquele que nem a terra quis receber',
    tradicoesRegistradas: 'uma versão atribuída a Leôncio de Oliveira, em Vida Roceira, e outra associada às crenças europeias sobre amaldiçoados.',
    description: "Conta a tradição que um homem passou a vida praticando maldades. Sua crueldade era tamanha que chegou a maltratar a própria mãe.\n\nQuando morreu, não encontrou descanso. Nem Deus nem o Diabo o quiseram, e até a terra recusou receber seu corpo.\n\nRejeitado pela própria natureza, permaneceu com a pele ressequida e encolhida sobre os ossos. Certa noite, levantou-se da sepultura e começou a vagar, assombrando os vivos pelas estradas e caminhos solitários.\n\nMas essa não é a única versão da lenda.\n\nEm outra tradição, conta-se a história de uma mulher que se transformava em lobisomem enquanto dormia, sem ter consciência disso. Depois de sua morte, seu corpo começou a diminuir até ficar do tamanho de uma criança.\n\nAcreditava-se que ela estava possuída por um demônio. Quando morreu, nem os corvos, nem as formigas, nem as vespas tocaram seu cadáver. A própria terra o rejeitou.\n\nAs duas histórias compartilham uma mesma condenação: a impossibilidade de encontrar repouso depois da morte.\n\nO Corpo-Seco faz parte das tradições sobre almas amaldiçoadas, nas quais a morte não encerra o castigo de quem viveu sob uma maldição.",
    origem: {
      periodo: 'Colonial/Pós-colonial',
      contexto: 'Lenda moralizante que expressa a crença na punição pós-morte para indivíduos extremamente perversos. A ideia de que a própria terra rejeita o corpo reforça a gravidade dos pecados cometidos.',
      influencias: ['Catolicismo popular (almas penadas, purgatório)', 'Moralidade e punição exemplar', 'Contos de assombração']
    },
    simbolismo: ['Punição eterna para maldade extrema', 'Rejeição pela terra', 'Assombração', 'Peso dos pecados', 'Alma penada'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Corpo-Seco”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/corposeco.png',
    imageAiHint: 'Corpo Seco'
  },
  {
    id: '15',
    slug: 'caboclo-dagua',
    name: "Caboclo-d'Água",
    tipo: 'Lenda Ribeirinha',
    regiao: 'Rio São Francisco',
    subtitle: 'O gigante misterioso do rio São Francisco',
    nomesAssociados: "Caboclo-d'Água, Bicho-d'Água, Negro-d'Água, Romão e outros nomes regionais registrados por Cascudo.",
    description: "Nas águas profundas do rio São Francisco vive uma criatura que inspira tanto respeito quanto temor entre pescadores e barqueiros: o Caboclo-d'Água.\n\nDizem que ele mora nas partes mais fundas do rio, perto de barrancos altos e margens escarpadas, onde as águas escondem seus segredos.\n\nSeu corpo é descomunal, de músculos poderosos e pele da cor do cobre. Tem a cabeça disforme, aparência robusta e movimentos surpreendentemente rápidos.\n\nNas noites de luar, pode ser visto caminhando pelos bancos de areia claros e prateados que surgem no meio do rio. De longe, sua enorme figura parece uma casa em movimento.\n\nO Caboclo-d'Água nem sempre é inimigo dos seres humanos.\n\nAqueles que conquistam sua amizade são conhecidos como seus compadres e podem receber sua proteção. Mas quem desperta sua antipatia precisa tomar cuidado.\n\nQuando se enfurece, o Caboclo-d'Água persegue pescadores, vira canoas, levanta ondas e derruba barrancos. Também pode afugentar os peixes, deixando os pescadores sem nada para levar para casa.\n\nSeu poder sobre o rio faz dele uma presença temida por quem depende das águas para viver e trabalhar.\n\nPara se proteger, os barqueiros do São Francisco passaram a colocar carrancas na proa das embarcações: figuras de madeira com rostos ameaçadores, destinadas a afastar a criatura.\n\nA tradição também reúne outras histórias de seres misteriosos que percorrem o fundo do rio, assustando aqueles que navegam por suas águas.\n\nAssim, o Caboclo-d'Água permanece como um dos grandes encantados do São Francisco, capaz de oferecer amizade e proteção, mas também de mostrar toda a força e o perigo das águas.",
    origem: {
      periodo: 'Indeterminado',
      contexto: 'Lenda típica das comunidades ribeirinhas do Rio São Francisco, personificando os perigos do rio, a necessidade de respeito pela natureza e a figura de um protetor fluvial. Mistura elementos indígenas e africanos.',
      influencias: ['Folclore ribeirinho', 'Espíritos protetores da água (africanos e indígenas)', 'Carrancas do São Francisco']
    },
    simbolismo: ['Guardião do rio', 'Protetor dos peixes', 'Força da natureza fluvial', 'Respeito aos recursos naturais', 'Perigos do rio'],
    referencias: [{
      titulo: "Dicionário do Folclore Brasileiro. Verbete “Caboclo-d'Água”.",
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/cablocodagua.png',
    imageAiHint: 'Caboclo Dagua'
  },
  {
    id: '16',
    slug: 'boiuna',
    name: 'Boiúna',
    tipo: 'Lenda',
    regiao: 'Amazônia brasileira',
    subtitle: 'A serpente gigantesca das águas amazônicas',
    nomesAssociados: 'Boiúna, Cobra-Grande, Cobra-Preta e Mboi.',
    description: "Nas profundezas dos rios da Amazônia vive uma criatura tão imensa que sua passagem pode ser confundida com o movimento de uma embarcação.\n\nÉ a Boiúna, também conhecida como Cobra-Grande ou Cobra-Preta.\n\nSegundo a tradição popular, trata-se de uma serpente gigantesca, de corpo escuro e olhos luminosos que brilham sobre as águas como dois faróis.\n\nEla habita rios, lagos, igarapés e igapós, surgindo inesperadamente diante de pescadores e viajantes.\n\nMas a Boiúna nem sempre se apresenta como uma serpente.\n\nAlgumas histórias contam que ela pode assumir a aparência de uma embarcação a vapor ou de um barco à vela, navegando silenciosamente pelos rios durante a noite.\n\nQuem avista suas luzes à distância pode acreditar que está diante de outro barco. Somente quando a criatura se aproxima é que o engano se revela.\n\nA presença da Cobra-Grande inspira medo entre aqueles que vivem e trabalham nas águas amazônicas. Suas histórias falam de encontros misteriosos, perigos da navegação e forças que parecem escapar à compreensão humana.\n\nEm diferentes regiões, a serpente aparece associada a acontecimentos extraordinários, e sua fama atravessa gerações de narrativas contadas à beira dos rios.\n\nCâmara Cascudo registra a Boiúna como uma das criaturas aquáticas mais populares do imaginário amazônico, conhecida por diferentes nomes e descrições.\n\nEnorme, escura e misteriosa, ela representa aquilo que as águas profundas escondem dos olhos humanos.\n\nE, quando duas luzes surgem ao longe durante uma noite sem luar, ninguém pode ter certeza de que se trata realmente de uma embarcação.",
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Lenda indígena poderosa que representa a força imensa e os perigos dos grandes rios amazônicos e suas profundezas desconhecidas. A sucuri, uma cobra real e enorme da Amazônia, é uma forte inspiração.',
      influencias: ['Mitologia indígena amazônica (Sucuri, Anaconda)', 'Relatos de grandes serpentes', 'Medo das águas profundas']
    },
    simbolismo: ['Poder primordial da natureza', 'Mãe dos peixes', 'Perigo oculto nas águas', 'Força selvagem e indomável', 'Mistério amazônico'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Boiúna”, com referências a “Cobra-Grande”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/boiuna.png',
    imageAiHint: 'Boiuna snake'
  },
  {
    id: '17',
    slug: 'anhanga',
    name: 'Anhangá',
    tipo: 'Mito Indígena Tupi-Guarani',
    regiao: 'Presente na cosmovisão Tupi-Guarani (Brasil)',
    subtitle: 'O espírito que assombra os caminhos',
    nomesAssociados: 'Anhanga, Anhangá e outras variantes indígenas registradas pelo autor.',
    description: "Nas antigas tradições indígenas brasileiras, o Anhangá é uma presença misteriosa, capaz de surgir diante dos seres humanos sob diferentes aparências.\n\nSeu nome está associado a espectros, fantasmas e espíritos que provocam medo e perturbação.\n\nNão possui uma forma única. Pode manifestar-se de maneiras diferentes, assumindo a aparência de animais ou de figuras assustadoras.\n\nSegundo algumas crenças, o Anhangá aparece para atormentar aqueles que encontra, causando espanto e sofrimento. Sua presença é temida, especialmente por quem atravessa lugares afastados e caminhos solitários.\n\nAo longo dos séculos, cronistas e missionários tentaram compreender essa entidade a partir de suas próprias crenças religiosas. Por isso, muitas vezes traduziram seu nome como diabo ou espírito maligno.\n\nMas as interpretações não são todas iguais.\n\nEm uma das tradições registradas por Câmara Cascudo, o Anhangá aparece como uma força que protege os animais contra os caçadores, assustando aqueles que tentam capturá-los.\n\nEssa relação com a caça aproxima a entidade de outros seres misteriosos das florestas brasileiras, embora sua natureza seja diferente.\n\nO Anhangá também pode ser entendido como uma presença espiritual ligada ao mundo dos mortos, aos temores humanos e às forças invisíveis que habitam a natureza.\n\nAssim, mais do que uma criatura de aparência definida, ele representa aquilo que não pode ser facilmente visto ou compreendido.\n\nUma presença que pode surgir inesperadamente, assumir diferentes formas e transformar um caminho silencioso em um lugar de medo.",
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Na cosmovisão Tupi-Guarani, Anhangá é um espírito ambivalente, por vezes associado ao mal ou ao mundo dos mortos (Anhang), mas também um forte protetor da fauna. Representa a necessidade de equilíbrio na caça e o respeito aos seres da floresta.',
      influencias: ['Cosmovisão Tupi-Guarani', 'Dualidade bem/mal nos espíritos da natureza', 'Relação de respeito com a caça']
    },
    simbolismo: ['Proteção animal e da caça', 'Espírito da floresta', 'Equilíbrio ecológico', 'Justiça da natureza', 'Dualidade espiritual'],
    referencias: [{
      titulo: 'Dicionário do Folclore Brasileiro. Verbete “Anhangá”.',
      autor: 'Luís da Câmara Cascudo',
      editora: 'Global Editora'
    }],
    image: '/images/anhanga.png',
    imageAiHint: 'Anhangá spirit'
  }
];

export function getMythBySlug(slug: string): Myth | undefined {
  return myths.find((myth) => myth.slug === slug);
}

export function getAllMyths(): Myth[] {
  return myths;
}

