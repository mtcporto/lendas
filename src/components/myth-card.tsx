
import Link from 'next/link';
import Image from 'next/image';
import type { Myth } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface MythCardProps {
  myth: Myth;
}

export function MythCard({ myth }: MythCardProps) {
  return (
    <Link href={`/lendas/${myth.slug}`} className="group block">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-[3/2] relative w-full overflow-hidden">
            <Image
              src={myth.image}
              alt={myth.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={myth.imageAiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors">
              {myth.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
              {myth.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Badge variant="outline" className="border-primary/50 text-primary/90">{myth.tipo}</Badge>
              <Badge variant="outline" className="border-accent/50 text-accent/90">{myth.regiao}</Badge>
            </div>
          </div>
          <div className="mt-4 text-sm font-semibold text-accent group-hover:text-primary flex items-center">
            Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
