import type { ReactNode } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Footer } from './Footer';
import { Header } from './Header';
import { SeoHead } from './SeoHead';
import { WhatsAppButton } from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-avorio text-antracite">
      <SeoHead />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-bordeaux focus:px-4 focus:py-2 focus:text-sm focus:text-avorio"
      >
        {t.nav.skipToContent}
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
