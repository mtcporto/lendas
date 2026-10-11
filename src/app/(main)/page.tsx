import { getAllMyths } from '@/data/myths';
import { MythCard } from '@/components/myth-card';

export default function HomePage() {
  const myths = getAllMyths();
  return (
    <div className="atlas-container">
      <section className="atlas-intro" aria-labelledby="atlas-title">
        <p className="eyebrow">Um imaginário que atravessa gerações</p>
        <h1 id="atlas-title">Onde a floresta<br /><em>guarda histórias.</em></h1>
        <p className="intro-description">Entre rios, matas e noites de luar, vivem os personagens do nosso folclore. Descubra as histórias, as origens e os mistérios das lendas brasileiras.</p>
        <a className="atlas-link" href="#colecao">Explore as lendas <span aria-hidden="true">↓</span></a>
      </section>
      <section id="colecao" className="atlas-collection" aria-labelledby="collection-title">
        <div className="collection-heading"><h2 id="collection-title">O nosso imaginário</h2><span>{myths.length} histórias para descobrir</span></div>
        <div className="myth-grid">{myths.map(myth => <MythCard key={myth.id} myth={myth} />)}</div>
      </section>
    </div>
  );
}
