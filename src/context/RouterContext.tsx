import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getDictionary } from '../data/i18n';
import type { Locale, NavItem, RouteId, TranslationDictionary } from '../types/i18n';
import { getNavigationItems, getRoutePath, resolvePath } from '../utils/routing';

interface RouterContextValue {
  pathname: string;
  locale: Locale;
  routeId: RouteId | null;
  isDesignSystemPreview: boolean;
  t: TranslationDictionary;
  navItems: NavItem[];
  navigate: (to: string) => void;
  navigateToRoute: (routeId: RouteId, targetLocale?: Locale) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const resolved = useMemo(() => resolvePath(pathname), [pathname]);
  const t = useMemo(() => getDictionary(resolved.locale), [resolved.locale]);
  const navItems = useMemo(
    () => getNavigationItems(t, resolved.locale),
    [t, resolved.locale]
  );

  useEffect(() => {
    document.documentElement.lang = resolved.locale;
  }, [resolved.locale]);

  const navigate = useCallback((to: string) => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
      setPathname(to);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const navigateToRoute = useCallback(
    (routeId: RouteId, targetLocale?: Locale) => {
      const nextLocale = targetLocale ?? resolved.locale;
      navigate(getRoutePath(routeId, nextLocale));
    },
    [navigate, resolved.locale]
  );

  const value = useMemo<RouterContextValue>(
    () => ({
      pathname: resolved.normalizedPath,
      locale: resolved.locale,
      routeId: resolved.routeId,
      isDesignSystemPreview: resolved.isDesignSystemPreview,
      t,
      navItems,
      navigate,
      navigateToRoute,
    }),
    [resolved, t, navItems, navigate, navigateToRoute]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
