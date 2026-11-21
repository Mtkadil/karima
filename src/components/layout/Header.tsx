import { Menu, X } from 'lucide-react';
import { useState, type MouseEvent } from 'react';
import { BUSINESS_INFO } from '../../data/business';
import { useRouter } from '../../context/RouterContext';
import { getRoutePath } from '../../utils/routing';
import { Container } from '../ui/Container';
import { DesktopNavigation, MobileNavigation } from './Navigation';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, t, navigate, navigateToRoute } = useRouter();

  const homePath = getRoutePath('home', locale);
  const contactPath = getRoutePath('contatti', locale);

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMobileOpen(false);
    navigate(homePath);
  };

  const handleCtaClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMobileOpen(false);
    navigateToRoute('contatti');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-oro/30 bg-avorio/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:gap-8">
          <a
            href={homePath}
            onClick={handleBrandClick}
            className="font-display text-lg sm:text-xl font-semibold tracking-wider text-antracite whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordeaux"
          >
            {BUSINESS_INFO.brandName}
          </a>

          <DesktopNavigation onNavigate={() => setMobileOpen(false)} />

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={contactPath}
              onClick={handleCtaClick}
              className="hidden md:inline-flex items-center justify-center min-h-[40px] bg-bordeaux px-4 py-2 text-xs font-medium tracking-wide text-avorio whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#491624] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
            >
              {t.nav.primaryCta}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? t.nav.closeMenuLabel : t.nav.openMenuLabel}
              className="inline-flex h-11 w-11 items-center justify-center text-antracite hover:text-bordeaux focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux md:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen ? <MobileNavigation onNavigate={() => setMobileOpen(false)} /> : null}
    </header>
  );
}
