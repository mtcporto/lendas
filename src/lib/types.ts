
export interface Origem {
  periodo: string;
  contexto: string;
  influencias: string[];
}

export interface Referencia {
  titulo: string;
  autor?: string;
  editora?: string;
  ano?: number;
  url?: string;
}

export interface Myth {
  id: string;
  slug: string;
  name: string;
  tipo: string;
  regiao: string;
  description: string;
  origem: Origem;
  simbolismo: string[];
  referencias: Referencia[];
  image: string;
  imageAiHint: string;
}
