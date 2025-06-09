import { getMythBySlug, getAllMyths } from '@/data/myths';
import type { Myth } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpenText } from 'lucide-react';
import { notFound } from 'next/navigation';

interface MythPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const myths = getAllMyths();
  return myths.map((myth) => ({
    slug: myth.slug,
  }));
}

export default function MythPage({ params }: MythPageProps) {
  const myth = getMythBySlug(params.slug);

  if (!myth) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar para a lista
          </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary mb-6 text-center">
          {myth.name}
        </h1>
        
        <div className="relative aspect-video w-full max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={myth.image}
            alt={myth.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={myth.imageAiHint}
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="prose prose-lg max-w-none mx-auto text-foreground/90 leading-relaxed">
            <p className="text-lg whitespace-pre-line">
              {myth.description}
            </p>
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
  const myth = getMythBySlug(params.slug);
  if (!myth) {
    return {
      title: 'Lenda não encontrada',
    };
  }
  return {
    title: `${myth.name} | Lendas Brasileiras`,
    description: `Saiba mais sobre ${myth.name}: ${myth.description.substring(0, 160)}...`,
  };
}
