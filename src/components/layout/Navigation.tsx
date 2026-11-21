import type { MouseEvent } from 'react';
import { useRouter } from '../../context/RouterContext';

interface NavigationProps {
  onNavigate?: () => void;
}

export function DesktopNavigation({ onNavigate }: NavigationProps) {
  const { navItems, routeId, navigate } = useRouter();

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    navigate(path);
    onNavigate?.();
  };

  return (
    <nav aria-label="Navigazione principale" className="hidden md:flex items-center gap-6">
      {navItems.map((item) => {
        const isActive = routeId === item.id;
        return (
          <a
            key={item.id}
            href={item.path}
            onClick={(event) => handleLinkClick(event, item.path)}
            aria-current={isActive ? 'page' : undefined}
            className={`py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordeaux ${
              isActive
                ? 'border-b border-bordeaux text-bordeaux'
                : 'border-b border-transparent text-antracite/80 hover:text-bordeaux'
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

export function MobileNavigation({ onNavigate }: NavigationProps) {
  const { navItems, routeId, navigate } = useRouter();

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    navigate(path);
    onNavigate?.();
  };

  return (
    <nav
      id="mobile-navigation"
      aria-label="Menu mobile"
      className="border-t border-oro/25 bg-avorio px-4 py-4 md:hidden"
    >
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = routeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={item.path}
                onClick={(event) => handleLinkClick(event, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-[44px] items-center px-3 text-base font-medium transition-colors ${
                  isActive
                    ? 'text-bordeaux font-semibold'
                    : 'text-antracite hover:text-bordeaux'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
