import type { Myth } from '@/lib/types';

export const myths: Myth[] = [
  {
    id: '1',
    slug: 'saci-perere',
    name: 'Saci-Pererê',
    description: 'O Saci-Pererê é uma figura icônica do folclore brasileiro. Negro, de uma perna só, fuma cachimbo e usa um gorro vermelho que lhe concede poderes mágicos, como o de desaparecer e aparecer onde quiser. Conhecido por suas travessuras, como esconder objetos, trançar a crina dos cavalos e assustar viajantes com assobios agudos, o Saci é um espírito brincalhão e muitas vezes malévolo da floresta.',
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Saci Pererê drawing',
  },
  {
    id: '2',
    slug: 'curupira',
    name: 'Curupira',
    description: 'O Curupira é o protetor das matas e dos animais. Possui cabelos vermelhos como fogo e pés virados para trás, que servem para confundir caçadores e lenhadores, fazendo-os seguir na direção errada. Ele pune severamente aqueles que desrespeitam a natureza, caçam por prazer ou derrubam árvores desnecessariamente.',
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Curupira illustration',
  },
  {
    id: '3',
    slug: 'iara',
    name: 'Iara',
    description: 'Também conhecida como Mãe d\'água, Iara é uma sereia de beleza estonteante que habita os rios da Amazônia. Com longos cabelos negros e olhos castanhos, ela atrai os homens com seu canto hipnótico e sua beleza irresistível. Os que sucumbem aos seus encantos são levados para o fundo do rio, de onde raramente retornam.',
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Iara mermaid drawing',
  },
  {
    id: '4',
    slug: 'boitata',
    name: 'Boitatá',
    description: 'O Boitatá é uma gigantesca cobra de fogo que protege os campos contra aqueles que provocam queimadas. Seus olhos flamejantes podem cegar ou enlouquecer quem o encara. Diz a lenda que o Boitatá é a alma de pessoas más que, após a morte, foram transformadas nesta criatura para pagar por seus pecados.',
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Boitatá fire snake',
  },
  {
    id: '5',
    slug: 'mula-sem-cabeca',
    name: 'Mula Sem Cabeça',
    description: 'A Mula Sem Cabeça é uma maldição que recai sobre mulheres que se envolvem romanticamente com padres. Nas noites de quinta para sexta-feira, a mulher se transforma em uma mula que galopa desembestada, soltando fogo pelas narinas e pelo pescoço decapitado. Seu relincho é aterrador e pode ser ouvido a grandes distâncias.',
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Mula Sem Cabeça myth',
  },
  {
    id: '6',
    slug: 'boto-cor-de-rosa',
    name: 'Boto Cor-de-Rosa',
    description: 'Lenda amazônica sobre um boto que, durante as festas juninas, transforma-se em um belo e charmoso rapaz vestido de branco. Ele seduz as moças desacompanhadas, leva-as para o fundo do rio e, muitas vezes, as engravida. Antes do amanhecer, ele retorna à forma de boto, desaparecendo nas águas.',
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Boto Cor de Rosa legend',
  },
  {
    id: '7',
    slug: 'vitoria-regia',
    name: 'Vitória Régia',
    description: 'A lenda da Vitória Régia conta a história de Naiá, uma bela índia que se apaixonou pela lua (Jaci). Desejando ser transformada em estrela pela lua, Naiá se afogou ao tentar beijar o reflexo de Jaci nas águas. Compadecida, a lua a transformou na Vitória Régia, a "estrela das águas", uma planta aquática de rara beleza.',
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Vitória Régia plant illustration',
  },
  {
    id: '8',
    slug: 'caipora',
    name: 'Caipora',
    description: 'A Caipora é outra entidade protetora das florestas, muitas vezes confundida com o Curupira. Pode ser representada como um índio pequeno e ágil, ou uma mulher com corpo coberto de pelos. Montada em um porco selvagem, a Caipora dificulta a vida dos caçadores, desviando seus tiros e escondendo os rastros dos animais.',
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'Caipora forest spirit',
  },
];

export function getMythBySlug(slug: string): Myth | undefined {
  return myths.find((myth) => myth.slug === slug);
}

export function getAllMyths(): Myth[] {
  return myths;
}
