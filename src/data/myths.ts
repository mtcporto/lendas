
import type { Myth, Referencia } from '@/lib/types';

const genericReference: Referencia = {
  titulo: "Lendas do folclore brasileiro - Wikipédia",
  url: "https://pt.wikipedia.org/wiki/Lendas_do_folclore_brasileiro"
};

const multirioReference: Referencia = {
  titulo: "Diz a Lenda - Multirio",
  url: "https://www.multirio.rj.gov.br/index.php/multiclube/9a11/diz-a-lenda"
};

export const myths: Myth[] = [
  {
    id: '1',
    slug: 'saci-perere',
    name: 'Saci-Pererê',
    tipo: 'Lenda',
    regiao: 'Sudeste/Sul (popular em todo Brasil)',
    description: 'O Saci-Pererê é uma figura icônica do folclore brasileiro. Negro, de uma perna só, fuma cachimbo e usa um gorro vermelho que lhe concede poderes mágicos, como o de desaparecer e aparecer onde quiser. Conhecido por suas travessuras, como esconder objetos, trançar a crina dos cavalos e assustar viajantes com assobios agudos, o Saci é um espírito brincalhão e muitas vezes malévolo da floresta.',
    origem: {
      periodo: 'Pós-colonial',
      contexto: 'Folclore afro-brasileiro e indígena, com influências europeias (elementos como o gorro). Surge da mistura cultural intensa do período.',
      influencias: ['Cultura africana (entidades travessas)', 'Cultura indígena (conhecimento da floresta)', 'Folclore europeu (seres mágicos)'],
    },
    simbolismo: ['Travessura', 'Imprevisibilidade', 'Espírito livre', 'Resistência cultural'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/SACI-int.jpg',
    imageAiHint: 'Saci Pererê',
  },
  {
    id: '2',
    slug: 'curupira',
    name: 'Curupira',
    tipo: 'Mito Indígena',
    regiao: 'Amazônia (presente em todo Brasil)',
    description: 'O Curupira é o protetor das matas e dos animais. Possui cabelos vermelhos como fogo e pés virados para trás, que servem para confundir caçadores e lenhadores, fazendo-os seguir na direção errada. Ele pune severamente aqueles que desrespeitam a natureza, caçam por prazer ou derrubam árvores desnecessariamente.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Crenças indígenas ancestrais sobre a necessidade de proteger a floresta e seus habitantes.',
      influencias: ['Cosmovisão indígena', 'Espíritos guardiões da natureza'],
    },
    simbolismo: ['Proteção da naturez', 'Justiça ambiental', 'Mistério da florest', 'Consequências ganância'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/CURUPIRA-int.jpg',
    imageAiHint: 'Curupira forest',
  },
  {
    id: '3',
    slug: 'iara',
    name: 'Iara',
    tipo: 'Lenda Indígena',
    regiao: 'Amazônia',
    description: 'Também conhecida como Mãe d\'água, Iara é uma sereia de beleza estonteante que habita os rios da Amazônia. Com longos cabelos negros e olhos castanhos, ela atrai os homens com seu canto hipnótico e sua beleza irresistível. Os que sucumbem aos seus encantos são levados para o fundo do rio, de onde raramente retornam.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Crenças indígenas sobre seres aquáticos perigosos e sedutores, personificando os perigos e encantos dos rios.',
      influencias: ['Mitologia indígena (Mãe d\'água)', 'Possível sincretismo com sereias europeias'],
    },
    simbolismo: ['Perigo dos rios', 'Sedução fatal', 'Beleza enganosa', 'Forças da água'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/IARA-int.jpg',
    imageAiHint: 'Iara mermaid',
  },
  {
    id: '4',
    slug: 'boitata',
    name: 'Boitatá',
    tipo: 'Lenda Indígena/Afro-brasileira',
    regiao: 'Todo o Brasil',
    description: 'O Boitatá é uma gigantesca cobra de fogo que protege os campos contra aqueles que provocam queimadas. Seus olhos flamejantes podem cegar ou enlouquecer quem o encara. Diz a lenda que o Boitatá é a alma de pessoas más que, após a morte, foram transformadas nesta criatura para pagar por seus pecados.',
    origem: {
      periodo: 'Indeterminado (elementos pré e pós-coloniais)',
      contexto: 'Medo do fogo fátuo e dos incêndios florestais; proteção dos campos e matas.',
      influencias: ['Crenças indígenas (fogo fátuo)', 'Relatos de jesuítas', 'Folclore europeu (serpentes de fogo)'],
    },
    simbolismo: ['Proteção incêndios', 'Punição divina', 'Guardião dos campos', 'Fenômeno mitificado'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/BOITATA-int.jpg',
    imageAiHint: 'Boitatá snake',
  },
  {
    id: '5',
    slug: 'mula-sem-cabeca',
    name: 'Mula Sem Cabeça',
    tipo: 'Lenda',
    regiao: 'Todo o Brasil',
    description: 'A Mula Sem Cabeça é uma maldição que recai sobre mulheres que se envolvem romanticamente com padres. Nas noites de quinta para sexta-feira, a mulher se transforma em uma mula que galopa desembestada, soltando fogo pelas narinas e pelo pescoço decapitado. Seu relincho é aterrador e pode ser ouvido a grandes distâncias.',
    origem: {
      periodo: 'Colonial',
      contexto: 'Moralismo religioso católico, visando coibir relações consideradas pecaminosas e reforçar o celibato clerical.',
      influencias: ['Folclore ibérico (lobisomens, almas penadas)', 'Moralismo católico medieval'],
    },
    simbolismo: ['Punição por pecado', 'Repreensão desejos', 'Terror noturno', 'Controle social'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/MULA-SEM-CABECA-int.jpg',
    imageAiHint: 'Headless Mule',
  },
  {
    id: '6',
    slug: 'boto-cor-de-rosa',
    name: 'Boto Cor-de-Rosa',
    tipo: 'Lenda Amazônica',
    regiao: 'Amazônia',
    description: 'Lenda amazônica sobre um boto que, durante as festas juninas, transforma-se em um belo e charmoso rapaz vestido de branco. Ele seduz as moças desacompanhadas, leva-as para o fundo do rio e, muitas vezes, as engravida. Antes do amanhecer, ele retorna à forma de boto, desaparecendo nas águas.',
    origem: {
      periodo: 'Popularizado nos séculos XIX/XX',
      contexto: 'Explicação mítica para gravidezes inesperadas em comunidades ribeirinhas e o fascínio pelos botos.',
      influencias: ['Cultura ribeirinha amazônica', 'Observação dos botos', 'Contos europeus de metamorfos'],
    },
    simbolismo: ['Sedução', 'Mistério dos rios', 'Transformação', 'Fertilidade', 'Encantamento'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/BOTO-int-002.jpg',
    imageAiHint: 'Pink Dolphin',
  },
  {
    id: '7',
    slug: 'vitoria-regia',
    name: 'Vitória Régia',
    tipo: 'Lenda Indígena',
    regiao: 'Amazônia',
    description: 'A lenda da Vitória Régia conta a história de Naiá, uma bela índia que se apaixonou pela lua (Jaci). Desejando ser transformada em estrela pela lua, Naiá se afogou ao tentar beijar o reflexo de Jaci nas águas. Compadecida, a lua a transformou na Vitória Régia, a "estrela das águas", uma planta aquática de rara beleza.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Explicação mítica para a origem da planta Vitória Régia e sua beleza singular, ligada a elementos celestiais.',
      influencias: ['Mitologia indígena Tupi-Guarani', 'Culto à lua (Jaci)'],
    },
    simbolismo: ['Amor impossível', 'Transformação natureza', 'Beleza trágica', 'Conexão céu-terra-água'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/VITORIA-REGIA-int.jpg',
    imageAiHint: 'Vitória Régia',
  },
  {
    id: '8',
    slug: 'caipora',
    name: 'Caipora',
    tipo: 'Mito Indígena',
    regiao: 'Todo o Brasil',
    description: 'A Caipora é outra entidade protetora das florestas, muitas vezes confundida com o Curupira. Pode ser representada como um índio pequeno e ágil, ou uma mulher com corpo coberto de pelos. Montada em um porco selvagem, a Caipora dificulta a vida dos caçadores, desviando seus tiros e escondendo os rastros dos animais.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Crenças indígenas sobre protetores da caça e da floresta, assegurando o equilíbrio e o respeito dos caçadores.',
      influencias: ['Cosmovisão indígena (Tupi-Guarani)', 'Espíritos da floresta'],
    },
    simbolismo: ['Proteção da caça', 'Astúcia', 'Vínculo com animais', 'Equilíbrio ecológico'],
    referencias: [genericReference, multirioReference],
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Caipora spirit',
  },
  {
    id: '9',
    slug: 'negrinho-do-pastoreio',
    name: 'Negrinho do Pastoreio',
    tipo: 'Lenda',
    regiao: 'Sul do Brasil',
    description: 'A história de um menino escravizado que, após ser punido injustamente por perder cavalos de seu patrão, é encontrado morto em um formigueiro, mas milagrosamente aparece montado em um cavalo baio, cercado pelos animais que havia perdido e por Nossa Senhora. Torna-se um protetor e ajudante para encontrar coisas perdidas.',
    origem: {
      periodo: 'Século XIX',
      contexto: 'Surge durante o Brasil escravocrata, misturando elementos do catolicismo popular com a dura realidade dos escravizados no sul do país, especialmente no Rio Grande do Sul.',
      influencias: ["Cristianismo Popular", "Cultura africana", "Cultura gaúcha", "Realidade da escravidão"]
    },
    simbolismo: [
      "Justiça divina",
      "Esperança",
      "Proteção aos oprimidos",
      "Encontrar objetos perdidos"
    ],
    referencias: [
      {
        titulo: "Dicionário do Folclore Brasileiro",
        autor: "Luís da Câmara Cascudo",
        editora: "Global Editora",
        ano: 2000
      },
      multirioReference
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
    description: 'A Cuca é uma velha bruxa com cabeça de jacaré e unhas compridas. Conhecida por raptar crianças desobedientes, sua figura é proeminente no folclore infantil, especialmente após as obras de Monteiro Lobato. Dizem que ela dorme apenas uma noite a cada sete anos, e quando está acordada, fica à espreita.',
    origem: {
      periodo: 'Pós-colonial (com raízes ibéricas)',
      contexto: 'Figura do "coco" ou "coca" do folclore ibérico, adaptada no Brasil. Ganhou popularidade nacional com Sítio do Picapau Amarelo.',
      influencias: ['Folclore ibérico (Coca)', 'Lendas de monstros raptores de crianças', 'Literatura infantil brasileira']
    },
    simbolismo: ['Medo infantil', 'Autoridade', 'Personificação perigo', 'Castigo desobediência'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/CUCA-int.jpg',
    imageAiHint: 'Cuca witch'
  },
  {
    id: '11',
    slug: 'lobisomem',
    name: 'Lobisomem',
    tipo: 'Lenda Universal (versão brasileira)',
    regiao: 'Todo o Brasil (especialmente áreas rurais)',
    description: 'O Lobisomem é um homem que, sob uma maldição (frequentemente o sétimo filho homem de uma prole só de homens, ou alguém mordido por outro lobisomem), transforma-se em uma criatura meio homem, meio lobo durante as noites de lua cheia. Ele vaga pelos campos e vilarejos, uivando e atacando animais e, às vezes, pessoas.',
    origem: {
      periodo: 'Colonial (origem europeia medieval)',
      contexto: 'Lenda trazida pelos colonizadores portugueses, adaptada à realidade e crenças locais.',
      influencias: ['Folclore europeu medieval', 'Licantropia', 'Crenças em metamorfose']
    },
    simbolismo: ['Maldição', 'Natureza selvagem', 'Dualidade humana', 'Terror rural'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/LOBISOMEM-int.jpg',
    imageAiHint: 'Lobisomem werewolf'
  },
  {
    id: '12',
    slug: 'mapinguari',
    name: 'Mapinguari',
    tipo: 'Lenda Amazônica',
    regiao: 'Amazônia',
    description: 'O Mapinguari é uma criatura gigante e peluda que habita as profundezas da floresta amazônica. Descrito com um olho só na testa e uma boca na barriga, ele emite um grito apavorante e exala um odor fétido. É temido por sua força e ferocidade, sendo considerado o guardião da floresta contra invasores.',
    origem: {
      periodo: 'Pré-colonial/Contemporâneo',
      contexto: 'Lendas indígenas sobre seres monstruosos da floresta, possivelmente inspirados em animais pré-históricos como a preguiça gigante.',
      influencias: ['Criptozoologia', 'Folclore indígena amazônico', 'Relatos de exploradores']
    },
    simbolismo: ['Mistério da selva', 'Proteção natureza', 'Força bruta', 'Medo desconhecido'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/MAPINGUARI-int.jpg',
    imageAiHint: 'Mapinguari monster'
  },
  {
    id: '13',
    slug: 'matinta-perera',
    name: 'Matinta Perera',
    tipo: 'Lenda Amazônica/Nordestina',
    regiao: 'Norte e Nordeste',
    description: 'A Matinta Perera é uma velha bruxa que se transforma em um pássaro agourento (geralmente um rasga-mortalha ou coruja) durante a noite. Ela voa sobre as casas assobiando e pedindo fumo ou café. Se não atendida, lança pragas. Pode também aparecer como uma velha sinistra.',
    origem: {
      periodo: 'Indeterminado',
      contexto: 'Crenças sobre bruxas e metamorfos, associadas a aves noturnas e seus cantos interpretados como presságios.',
      influencias: ['Folclore indígena', 'Crenças europeias em bruxaria', 'Aves de mau agouro']
    },
    simbolismo: ['Agouro', 'Bruxaria', 'Transformação', 'Barganha sobrenatural'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/MATINTA-int.jpg',
    imageAiHint: 'Matinta Perera'
  },
  {
    id: '14',
    slug: 'corpo-seco',
    name: 'Corpo-Seco',
    tipo: 'Lenda',
    regiao: 'Sudeste e Centro-Oeste',
    description: 'O Corpo-Seco é a alma penada de uma pessoa muito má em vida, tão ruim que nem a terra o aceita após a morte. Seu corpo ressecado e pútrido vaga pelas estradas e matas, assombrando e atacando os vivos. Diz-se que ele se agarra às pessoas para sugar sua energia vital.',
    origem: {
      periodo: 'Colonial/Pós-colonial',
      contexto: 'Moralismo religioso e crenças sobre punição pós-morte para indivíduos extremamente perversos.',
      influencias: ['Catolicismo popular', 'Lendas de almas penadas', 'Moralidade e punição']
    },
    simbolismo: ['Punição eterna', 'Mal que perdura', 'Assombração', 'Consequências vida ímpia'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/CORPO-SECO-int.jpg',
    imageAiHint: 'Corpo Seco'
  },
  {
    id: '15',
    slug: 'caboclo-dagua',
    name: 'Caboclo D\'água',
    tipo: 'Lenda Ribeirinha',
    regiao: 'Bacia do Rio São Francisco (Nordeste/Sudeste)',
    description: 'O Caboclo D\'água é uma criatura que habita o Rio São Francisco. Descrito como um ser forte, musculoso, de pele bronzeada e cabelos longos, ele protege o rio e seus peixes. Pescadores relatam que ele vira embarcações e afoga aqueles que pescam de forma predatória ou desrespeitam o rio.',
    origem: {
      periodo: 'Indeterminado',
      contexto: 'Crenças de comunidades ribeirinhas sobre um guardião do rio, personificando os perigos e a necessidade de respeito pela natureza fluvial.',
      influencias: ['Folclore ribeirinho', 'Espíritos protetores da água', 'Lendas indígenas locais']
    },
    simbolismo: ['Proteção fluvial', 'Guardião do rio', 'Força da natureza', 'Respeito recursos'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/CABOCLO-DAGUA-int-002.jpg',
    imageAiHint: 'Caboclo Dagua'
  },
  {
    id: '16',
    slug: 'boiuna',
    name: 'Boiúna (Cobra Grande)',
    tipo: 'Lenda Amazônica',
    regiao: 'Amazônia',
    description: 'A Boiúna, também conhecida como Cobra Grande, é uma gigantesca serpente escura que habita os rios e igarapés da Amazônia. Capaz de virar embarcações, criar tempestades e devorar pessoas, é uma das entidades mais temidas da região. Alguns dizem que seus olhos brilham na escuridão como faróis.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Lendas indígenas sobre serpentes ancestrais e poderosas, personificando a força e os perigos dos grandes rios amazônicos.',
      influencias: ['Mitologia indígena amazônica (Sucuri, Anaconda)', 'Relatos de grandes serpentes']
    },
    simbolismo: ['Poder primordial', 'Força natureza', 'Perigo oculto', 'Espírito ancestral'],
    referencias: [genericReference, multirioReference],
    image: 'https://www.multirio.rj.gov.br/images/img_2017_10/BOIUNA-int.jpg',
    imageAiHint: 'Boiuna snake'
  },
  {
    id: '17',
    slug: 'anhanga',
    name: 'Anhangá',
    tipo: 'Mito Indígena Tupi-Guarani',
    regiao: 'Presente na cosmovisão Tupi-Guarani (Brasil)',
    description: 'Anhangá é um espírito protetor dos animais da floresta na mitologia Tupi-Guarani. Geralmente invisível ou aparecendo como um veado branco com olhos de fogo, ele protege os animais contra caçadores cruéis ou aqueles que caçam mais do que o necessário. Pode confundir os caçadores ou até mesmo puni-los.',
    origem: {
      periodo: 'Pré-colonial',
      contexto: 'Crenças indígenas sobre espíritos guardiões da fauna e a necessidade de uma caça respeitosa e sustentável.',
      influencias: ['Cosmovisão Tupi-Guarani', 'Espíritos da natureza', 'Relação respeito caça']
    },
    simbolismo: ['Proteção animal', 'Equilíbrio da caça', 'Espírito da floresta', 'Justiça ecológica'],
    referencias: [genericReference, multirioReference],
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

