import { useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/business';
import { useRouter } from '../../context/RouterContext';
import { buildClothingStoreJsonLd } from '../../utils/seo';

function upsertMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function SeoHead() {
  const { routeId, isDesignSystemPreview, pathname, t } = useRouter();
  const pageMeta = routeId ? t.meta.pages[routeId] : null;
  const title = isDesignSystemPreview
    ? 'Design System — Maison Karima (Anteprima Fase 2)'
    : pageMeta?.title ?? t.meta.defaultTitle;
  const description = pageMeta?.description ?? t.meta.defaultDescription;

  useEffect(() => {
    document.title = title;
    upsertMetaTag('name', 'description', description);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);

    if (isDesignSystemPreview) {
      upsertMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      const robotsMeta = document.head.querySelector<HTMLMetaElement>(
        'meta[name="robots"]'
      );
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }

    if (typeof window !== 'undefined') {
      const canonicalUrl = `${window.location.origin}${pathname}`;
      upsertMetaTag('property', 'og:url', canonicalUrl);
      let canonicalLink = document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    const scriptId = 'maison-karima-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(buildClothingStoreJsonLd(BUSINESS_INFO));
  }, [title, description, pathname, isDesignSystemPreview]);

  return null;
}
