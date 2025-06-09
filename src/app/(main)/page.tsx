import { getAllMyths } from '@/data/myths';
import { MythCard } from '@/components/myth-card';
import type { Myth } from '@/lib/types';

export default function HomePage() {
  const myths: Myth[] = getAllMyths();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="font-headline text-5xl text-center mb-12 text-primary drop-shadow-sm">
        Mitos e Lendas do Brasil
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {myths.map((myth) => (
          <MythCard key={myth.id} myth={myth} />
        ))}
      </div>
    </div>
  );
}
