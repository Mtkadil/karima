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
  search: string;
  locale: Locale;
  routeId: RouteId | null;
  isDesignSystemPreview: boolean;
  t: TranslationDictionary;
  navItems: NavItem[];
  navigate: (to: string) => void;
  replaceUrl: (to: string) => void;
  navigateToRoute: (routeId: RouteId, targetLocale?: Locale) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function getWindowLocationUrl(): string {
  if (typeof window === 'undefined') {
    return '/';
  }
  return `${window.location.pathname}${window.location.search}`;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [locationUrl, setLocationUrl] = useState<string>(getWindowLocationUrl);

  useEffect(() => {
    const handlePopState = () => {
      setLocationUrl(getWindowLocationUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const search = useMemo(() => {
    const queryIndex = locationUrl.indexOf('?');
    return queryIndex >= 0 ? locationUrl.slice(queryIndex) : '';
  }, [locationUrl]);

  const resolved = useMemo(() => resolvePath(locationUrl), [locationUrl]);
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
    if (getWindowLocationUrl() !== to) {
      window.history.pushState({}, '', to);
      setLocationUrl(to);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const replaceUrl = useCallback((to: string) => {
    if (typeof window === 'undefined') {
      return;
    }
    if (getWindowLocationUrl() !== to) {
      window.history.replaceState({}, '', to);
      setLocationUrl(to);
    }
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
      search,
      locale: resolved.locale,
      routeId: resolved.routeId,
      isDesignSystemPreview: resolved.isDesignSystemPreview,
      t,
      navItems,
      navigate,
      replaceUrl,
      navigateToRoute,
    }),
    [resolved, search, t, navItems, navigate, replaceUrl, navigateToRoute]
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
