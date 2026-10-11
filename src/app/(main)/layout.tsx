import { SiteHeader } from '@/components/site-header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <footer className="atlas-footer">
        <div className="atlas-container"><span className="font-headline text-2xl">Lendas do Brasil</span><p>Histórias que fazem parte de quem somos.</p></div>
      </footer>
    </>
  );
}
