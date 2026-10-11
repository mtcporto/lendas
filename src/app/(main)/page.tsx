import { getAllMyths } from '@/data/myths';
import { MythCard } from '@/components/myth-card';
import Image from 'next/image';

export default function HomePage() {
  const myths = getAllMyths();
  return (
    <>
      <section className="atlas-hero" aria-labelledby="atlas-title">
        <Image src="/images/hero-lendas-do-brasil.png" alt="Floresta encantada à noite com Saci, Anhangá, Iara e Boitatá nas margens de um rio" fill priority sizes="100vw" className="atlas-hero-image" />
        <div className="atlas-hero-shade" aria-hidden="true" />
        <div className="atlas-intro">
        <p className="eyebrow">Um imaginário que atravessa gerações</p>
        <h1 id="atlas-title">Onde a floresta<br /><em>guarda histórias.</em></h1>
        <p className="intro-description">Entre rios, matas e noites de luar, vivem os personagens do nosso folclore. Descubra as histórias, as origens e os mistérios das lendas brasileiras.</p>
        <a className="atlas-link" href="#colecao">Explore as lendas <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section id="colecao" className="atlas-container atlas-collection" aria-labelledby="collection-title">
        <div className="collection-heading"><h2 id="collection-title">O nosso imaginário</h2><span>{myths.length} histórias para descobrir</span></div>
        <div className="myth-grid">{myths.map(myth => <MythCard key={myth.id} myth={myth} />)}</div>
      </section>
    </>
  );
}
