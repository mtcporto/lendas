import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="atlas-header">
      <div className="atlas-container header-inner">
        <Link href="/" className="atlas-brand" aria-label="Lendas do Brasil — início"><Leaf size={25} aria-hidden="true" /><span>Lendas<span className="brand-subtitle">DO BRASIL</span></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#colecao" className="atlas-link">Explore o folclore <span aria-hidden="true">↗</span></Link></nav>
      </div>
    </header>
  );
}
