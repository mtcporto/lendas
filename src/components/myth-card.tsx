import Link from 'next/link';
import Image from 'next/image';
import type { Myth } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';

export function MythCard({ myth }: { myth: Myth }) {
  return (
    <Link href={`/lendas/${myth.slug}`} className="myth-card group">
      <div className="myth-art">
        <Image src={myth.image} alt={myth.name} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" className="object-cover" />
        <span className="myth-type">{myth.tipo}</span>
      </div>
      <div className="myth-caption">
        <div className="myth-heading"><h3>{myth.name}</h3><ArrowUpRight size={20} aria-hidden="true" /></div>
        <p className="myth-region">{myth.regiao}</p>
        <p className="myth-summary">{myth.description}</p>
        <span className="myth-read">Conheça a lenda <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
