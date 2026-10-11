
import { getMythBySlug, getAllMyths } from '@/data/myths';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpenText, MapPin, Tag, History, SparklesIcon, LinkIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

interface MythPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const myths = getAllMyths();
  return myths.map((myth) => ({
    slug: myth.slug,
  }));
}

export default async function MythPage({ params }: MythPageProps) {
  const { slug } = await params;
  const myth = getMythBySlug(slug);

  if (!myth) {
    notFound();
  }

  return (
    <div className="atlas-container myth-detail">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar para a lista
          </Link>
        </Button>
      </div>

      <article className="detail-layout">
        <div className="detail-art">

          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
            <Image
              src={myth.image}
              alt={myth.name}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 40vw"
              data-ai-hint={myth.imageAiHint}
              className="object-contain object-top"
            />
          </div>
        </div>

        <div className="detail-copy">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary mb-4 text-center md:text-left">
            {myth.name}
          </h1>

          {myth.subtitle && <p className="text-xl italic text-primary mb-6">{myth.subtitle}</p>}

          <div className="mb-6 flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-sm">
            <Badge variant="secondary" className="flex items-center gap-1 py-1 px-3">
              <Tag className="h-4 w-4" /> {myth.tipo}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 py-1 px-3">
              <MapPin className="h-4 w-4" /> {myth.regiao}
            </Badge>
          </div>

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed mb-8">
              {myth.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg mb-5">{paragraph}</p>
              ))}
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-headline text-foreground mb-3 flex items-center">
              <History className="mr-2 h-6 w-6 text-accent" /> Origem
            </h2>
            <Card className="p-4 sm:p-6 bg-background/50 border-border/50 shadow-sm">
              <p><strong>Período:</strong> {myth.origem.periodo}</p>
              <p className="mt-2"><strong>Contexto:</strong> {myth.origem.contexto}</p>
              <div className="mt-2">
                <strong>Influências:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {myth.origem.influencias.map((inf, index) => (
                    <Badge key={index} variant="outline" className="text-xs">{inf}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-headline text-foreground mb-3 flex items-center">
              <SparklesIcon className="mr-2 h-6 w-6 text-accent" /> Simbolismo
            </h2>
            <div className="flex flex-wrap gap-2">
              {myth.simbolismo.map((item, index) => (
                <Badge key={index} variant="default" className="text-sm bg-primary/80 hover:bg-primary text-primary-foreground py-1 px-3">{item}</Badge>
              ))}
            </div>
          </section>

          {myth.nomePopular && (
            <dl className="mt-8 border-t border-border pt-5 space-y-2">
              <div><dt className="inline font-semibold">Nome: </dt><dd className="inline">{myth.name}</dd></div>
              <div><dt className="inline font-semibold">Nome popular associado: </dt><dd className="inline">{myth.nomePopular}</dd></div>
              {myth.origemResumo && <div><dt className="inline font-semibold">Origem: </dt><dd className="inline">{myth.origemResumo}</dd></div>}
            </dl>
          )}

          {myth.personagensTradicao && (
            <section className="mt-8">
              <h2 className="text-2xl font-headline mb-3">Personagens da tradição registrada</h2>
              <p className="text-foreground/80">{myth.personagensTradicao}</p>
            </section>
          )}

          {myth.variantesRegionais && (
            <section className="mt-8">
              <h2 className="text-2xl font-headline mb-3">Nomes e variantes regionais</h2>
              <p className="text-foreground/80">{myth.variantesRegionais}</p>
            </section>
          )}

          {myth.origemResumo && !myth.nomePopular && (
            <section className="mt-8">
              <h2 className="text-2xl font-headline mb-3">{myth.origemResumoTitulo ?? 'Origem'}</h2>
              <p className="text-foreground/80">{myth.origemResumo}</p>
            </section>
          )}

          {myth.tradicoesRelacionadas && (
            <section className="mt-8">
              <h2 className="text-2xl font-headline mb-3">Tradições relacionadas</h2>
              <p className="text-foreground/80">{myth.tradicoesRelacionadas}</p>
            </section>
          )}

          {myth.nomesAssociados && (
            <section className="mt-8">
              <h2 className="text-2xl font-headline mb-3">Nomes associados</h2>
              <p className="text-foreground/80">{myth.nomesAssociados}</p>
            </section>
          )}

          {myth.tradicoesRegistradas && (
            <section className="mt-8">
              <h2 className="text-2xl font-headline mb-3">Tradições registradas</h2>
              <p className="text-foreground/80">{myth.tradicoesRegistradas}</p>
            </section>
          )}

          {myth.fonteHistorica && (
            <section className="mt-8">
              <h2 className="text-2xl font-headline mb-3">{myth.fonteHistoricaTitulo ?? 'Fonte histórica destacada no verbete'}</h2>
              <p className="text-foreground/80">{myth.fonteHistorica}</p>
            </section>
          )}

          {myth.referencias && myth.referencias.length > 0 && (
            <section className="mt-8">
              <h2 className="text-2xl font-headline text-foreground mb-3 flex items-center">
                 <LinkIcon className="mr-2 h-6 w-6 text-accent" /> Referências
              </h2>
              <ul className="list-none pl-0 space-y-2 text-foreground/80">
                {myth.referencias.map((ref, index) => (
                  <li key={index} className="bg-background/50 p-3 rounded-md border border-border/40 text-sm">
                    {ref.url ? (
                      <Link href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline font-medium flex items-center">
                        {ref.titulo} <LinkIcon className="ml-1 h-3 w-3"/>
                      </Link>
                    ) : (
                      <span className="font-medium">{ref.titulo}</span>
                    )}
                    {ref.autor && <span className="block text-xs text-muted-foreground">Autor: {ref.autor}</span>}
                    {ref.editora && <span className="block text-xs text-muted-foreground">Editora: {ref.editora}</span>}
                    {ref.ano && <span className="block text-xs text-muted-foreground">Ano: {ref.ano}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>

      <div className="mt-12 text-center">
         <Button variant="ghost" asChild className="text-accent hover:text-primary hover:bg-accent/10">
           <Link href="https://brasilescola.uol.com.br/folclore" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
             <BookOpenText className="mr-2 h-5 w-5" />
             Descubra mais sobre o Folclore Brasileiro
           </Link>
         </Button>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: MythPageProps) {
  const { slug } = await params;
  const myth = getMythBySlug(slug);
  if (!myth) {
    return {
      title: 'Lenda não encontrada',
    };
  }
  return {
    title: `${myth.name} - ${myth.tipo} | Lendas Brasileiras`,
    description: `Conheça a história de ${myth.name}, ${myth.tipo.toLowerCase()} da região ${myth.regiao.toLowerCase()}. ${myth.description.substring(0, 120)}...`,
  };
}
