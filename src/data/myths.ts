
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
    simbolismo: ['Proteção da natureza', 'Justiça ambiental', 'Mistério da floresta', 'Consequências da ganância'],
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
    simbolismo: ['Proteção contra incêndios', 'Punição divina/natural', 'Guardião dos campos', 'Fenômeno natural mitificado'],
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
    simbolismo: ['Punição por pecado', 'Repreensão de desejos proibidos', 'Terror noturno', 'Controle social através do medo'],
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
      influencias: ['Cultura ribeirinha amazônica', 'Observação do comportamento dos botos', 'Contos europeus de metamorfos'],
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
    simbolismo: ['Amor impossível', 'Transformação pela natureza', 'Beleza trágica', 'Conexão céu-terra-água'],
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
    simbolismo: ['Proteção da caça e da floresta', 'Astúcia', 'Vínculo com animais selvagens', 'Equilíbrio ecológico'],
    referencias: [genericReference],
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
  }
];

export function getMythBySlug(slug: string): Myth | undefined {
  return myths.find((myth) => myth.slug === slug);
}

export function getAllMyths(): Myth[] {
  return myths;
}
