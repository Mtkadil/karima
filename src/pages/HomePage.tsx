import { ArrowRight, ExternalLink, MapPin, Phone, Star } from 'lucide-react';
import { useMemo } from 'react';
import { BUSINESS_INFO } from '../data/business';
import { CATALOG_CATEGORIES, PRODUCTS_CATALOG } from '../data/catalog';
import { useRouter } from '../context/RouterContext';
import { getFeaturedProducts } from '../utils/catalog';
import { getRoutePath } from '../utils/routing';
import { BrandMark } from '../components/ui/BrandMark';
import { Button } from '../components/ui/Button';
import { CollectionCard } from '../components/ui/CollectionCard';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { EditorialBlock } from '../components/ui/EditorialBlock';
import { Heading } from '../components/ui/Heading';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { ProductCard } from '../components/ui/ProductCard';
import { Section } from '../components/ui/Section';

export function HomePage() {
  const { locale, t, navigate, navigateToRoute } = useRouter();
  const page = t.pages.home;
  const featuredProducts = useMemo(
    () => getFeaturedProducts(PRODUCTS_CATALOG),
    []
  );

  const handleCategorySelect = (categoryId: string) => {
    const baseCollezioniPath = getRoutePath('collezioni', locale);
    navigate(`${baseCollezioniPath}?categoria=${encodeURIComponent(categoryId)}`);
  };

  const reputation = BUSINESS_INFO.googleReputation;
  const hasReputation =
    Boolean(reputation) &&
    reputation.reviewCount > 0 &&
    reputation.ratingValue > 0;

  return (
    <>
      {/* A. Hero principale */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col items-start lg:col-span-6">
              <Heading level={1} eyebrow={page.hero.location}>
                {page.hero.title}
              </Heading>
              <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-antracite-muted sm:text-lg">
                {page.hero.subtitle}
              </p>

              <Divider variant="ornament" className="my-6 w-full max-w-xs" />

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigateToRoute('collezioni')}
                >
                  <span>{page.hero.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigateToRoute('chi-siamo')}
                >
                  {page.hero.secondaryCta}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <PlaceholderFrame
                aspect="4:3"
                badgeText={page.hero.mediaBadge}
                title={page.hero.mediaTitle}
                description={page.hero.mediaDescription}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* B. Presentazione della boutique */}
      <Section surface="subtle">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <BrandMark variant="editorial" className="mb-6" />
            <EditorialBlock
              align="center"
              withOrnament
              eyebrow={page.intro.eyebrow}
              title={page.intro.title}
              body={page.intro.body}
            />
          </div>
        </Container>
      </Section>

      {/* C. Categorie principali */}
      <Section>
        <Container>
          <Heading level={2} eyebrow={page.categories.eyebrow} align="center">
            {page.categories.title}
          </Heading>
          <Divider variant="ornament" className="mx-auto my-6 max-w-xs" />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {CATALOG_CATEGORIES.map((category) => {
              const copy = page.categories.items[category.id];
              return (
                <CollectionCard
                  key={category.id}
                  categoryLabel={copy.label}
                  title={copy.title}
                  description={copy.description}
                  actionLabel={page.categories.actionLabel}
                  onSelect={() => handleCategorySelect(category.id)}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* D. Selezione collezioni */}
      <Section surface="subtle">
        <Container>
          {featuredProducts.length > 0 ? (
            <>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <Heading level={2} eyebrow={page.featured.eyebrow}>
                  {page.featured.title}
                </Heading>
                <Button
                  variant="ghost"
                  onClick={() => navigateToRoute('collezioni')}
                >
                  <span>{page.featured.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
              <Divider className="my-6" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    categoryDisplay={t.pages.collezioni.categoryNames[product.categoria]}
                    onInspect={() => handleCategorySelect(product.categoria)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <EditorialBlock
                  eyebrow={page.featured.emptyEyebrow}
                  title={page.featured.emptyTitle}
                  body={page.featured.emptyBody}
                  withOrnament
                  actions={
                    <Button
                      variant="primary"
                      onClick={() => navigateToRoute('collezioni')}
                    >
                      <span>{page.featured.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  }
                />
              </div>
              <div className="lg:col-span-5">
                <PlaceholderFrame
                  aspect="4:3"
                  badgeText={page.featured.eyebrow}
                  title={page.featured.emptyPlaceholderTitle}
                  description={page.featured.emptyPlaceholderDescription}
                />
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* E. Sezione identità e sartoria */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <PlaceholderFrame
                aspect="4:3"
                badgeText={page.identity.mediaBadge}
                title={page.identity.mediaTitle}
                description={page.identity.mediaDescription}
              />
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <Heading level={2} eyebrow={page.identity.eyebrow}>
                {page.identity.title}
              </Heading>
              <Divider variant="ornament" className="my-5 max-w-xs" />
              <p className="max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                {page.identity.body}
              </p>
              <p className="mt-4 max-w-[65ch] rounded-[4px] border border-oro/30 bg-avorio-caldo p-4 text-sm leading-relaxed text-antracite-muted">
                {page.identity.pendingNote}
              </p>
              <div className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => navigateToRoute('chi-siamo')}
                >
                  {page.identity.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* F. Reputazione e fiducia */}
      {hasReputation ? (
        <Section surface="subtle">
          <Container>
            <div className="mx-auto max-w-3xl rounded-[4px] border border-oro/35 bg-avorio p-8 text-center shadow-[var(--mk-shadow-card)] sm:p-10">
              <Heading level={2} eyebrow={page.reputation.eyebrow} align="center">
                {page.reputation.title}
              </Heading>

              <div
                className="mt-6 flex items-center justify-center gap-1.5 text-oro"
                aria-hidden="true"
              >
                {[0, 1, 2, 3, 4].map((index) => (
                  <Star
                    key={index}
                    className="h-5 w-5"
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="mt-4 font-display text-3xl font-medium text-antracite tabular-nums">
                {reputation.ratingValue.toFixed(1)} / 5
                <span className="mx-3 text-oro" aria-hidden="true">
                  ·
                </span>
                <span className="font-sans text-base font-medium text-antracite-muted">
                  {reputation.reviewCount} {page.reputation.reviewsUnit}
                </span>
              </p>

              <p className="mt-2 text-xs font-medium tracking-[0.12em] text-bordeaux uppercase">
                {page.reputation.sourcePrefix} {reputation.source}
              </p>

              <p className="mx-auto mt-4 max-w-[52ch] text-sm leading-relaxed text-antracite-muted">
                {page.reputation.note}
              </p>

              <div className="mt-6">
                <Button
                  variant="secondary"
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{page.reputation.linkLabel}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* G. Posizione e contatti */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Heading level={2} eyebrow={page.location.eyebrow}>
                {page.location.title}
              </Heading>
              <Divider className="my-5 max-w-xs" />
              <p className="max-w-[46ch] text-base leading-relaxed text-antracite-muted">
                {page.location.lead}
              </p>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  onClick={() => navigateToRoute('contatti')}
                >
                  {page.location.contactPageCta}
                </Button>
              </div>
            </div>

            <div className="rounded-[4px] border border-oro/35 bg-avorio-caldo p-6 sm:p-8 lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-bordeaux uppercase">
                    {page.location.addressLabel}
                  </p>
                  <address className="mt-2 not-italic text-base leading-relaxed text-antracite">
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city} ({BUSINESS_INFO.address.province}), {BUSINESS_INFO.address.country}
                  </address>
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-bordeaux uppercase">
                    {page.location.phoneLabel}
                  </p>
                  <p className="mt-2">
                    <a
                      href={BUSINESS_INFO.contacts.phone.href}
                      className="inline-flex items-center gap-2 text-base font-medium text-antracite underline-offset-4 transition-colors hover:text-bordeaux hover:underline tabular-nums"
                    >
                      <Phone className="h-4 w-4 text-bordeaux" aria-hidden="true" />
                      <span>{BUSINESS_INFO.contacts.phone.display}</span>
                    </a>
                  </p>
                </div>
              </div>

              <Divider className="my-6" />

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>{page.location.mapsLabel}</span>
                </Button>
                <Button
                  variant="outline"
                  href={BUSINESS_INFO.contacts.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{page.location.instagramLabel}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
