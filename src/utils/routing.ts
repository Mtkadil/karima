import type { Locale, NavItem, RouteId, TranslationDictionary } from '../types/i18n';

export const DESIGN_SYSTEM_PREVIEW_PATH = '/design-system';

const ROUTE_SLUGS: Record<Locale, Record<RouteId, string>> = {
  it: {
    home: '/',
    collezioni: '/collezioni',
    servizi: '/servizi',
    'chi-siamo': '/chi-siamo',
    contatti: '/contatti',
  },
  fr: {
    home: '/fr',
    collezioni: '/fr/collections',
    servizi: '/fr/services',
    'chi-siamo': '/fr/a-propos',
    contatti: '/fr/contact',
  },
};

export interface ResolvedRoute {
  locale: Locale;
  routeId: RouteId | null;
  isDesignSystemPreview: boolean;
  normalizedPath: string;
}

export function normalizePathname(pathname: string): string {
  const withoutQuery = pathname.split('?')[0]?.split('#')[0] ?? '/';
  if (withoutQuery.length > 1 && withoutQuery.endsWith('/')) {
    return withoutQuery.slice(0, -1);
  }
  return withoutQuery || '/';
}

export function getRoutePath(routeId: RouteId, locale: Locale): string {
  return ROUTE_SLUGS[locale][routeId];
}

export function resolvePath(pathname: string): ResolvedRoute {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === DESIGN_SYSTEM_PREVIEW_PATH) {
    return {
      locale: 'it',
      routeId: null,
      isDesignSystemPreview: true,
      normalizedPath,
    };
  }

  if (normalizedPath === '/fr' || normalizedPath.startsWith('/fr/')) {
    const frEntries = Object.entries(ROUTE_SLUGS.fr) as [RouteId, string][];
    const match = frEntries.find(([, path]) => path === normalizedPath);
    return {
      locale: 'fr',
      routeId: match ? match[0] : null,
      isDesignSystemPreview: false,
      normalizedPath,
    };
  }

  const itEntries = Object.entries(ROUTE_SLUGS.it) as [RouteId, string][];
  const match = itEntries.find(([, path]) => path === normalizedPath);
  return {
    locale: 'it',
    routeId: match ? match[0] : null,
    isDesignSystemPreview: false,
    normalizedPath,
  };
}

export function getNavigationItems(
  dictionary: TranslationDictionary,
  locale: Locale
): NavItem[] {
  const order: RouteId[] = ['home', 'collezioni', 'servizi', 'chi-siamo', 'contatti'];
  return order.map((id) => ({
    id,
    label: dictionary.nav.items[id],
    path: getRoutePath(id, locale),
  }));
}
