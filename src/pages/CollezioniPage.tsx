import { ArrowRight, Check, MapPin, Phone } from 'lucide-react';
import { useCallback, useMemo } from 'react';
import { BUSINESS_INFO } from '../data/business';
import { CATALOG_CATEGORIES, PRODUCTS_CATALOG } from '../data/catalog';
import { useRouter } from '../context/RouterContext';
import {
  buildCategoryFilterUrl,
  filterVisibleProducts,
  resolveCategoryFromSearch,
  type CategoryFilter,
} from '../utils/catalog';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { ProductCard } from '../components/ui/ProductCard';
import { Section } from '../components/ui/Section';

export function CollezioniPage() {
  const { t, pathname, search, replaceUrl, navigateToRoute } = useRouter();
  const page = t.pages.collezioni;

  const activeCategory = useMemo(
    () => resolveCategoryFromSearch(search, CATALOG_CATEGORIES),
    [search]
  );

  const handleCategorySelect = useCallback(
    (category: CategoryFilter) => {
      replaceUrl(buildCategoryFilterUrl(pathname, category));
    },
    [pathname, replaceUrl]
  );

  const handleLineCardSelect = useCallback(
    (category: CategoryFilter) => {
      handleCategorySelect(category);
      if (typeof document !== 'undefined') {
        document
          .getElementById('collezioni-catalogo')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [handleCategorySelect]
  );

  const visibleProducts = useMemo(
    () => filterVisibleProducts(PRODUCTS_CATALOG, activeCategory),
    [activeCategory]
  );

  const activeOverview = useMemo(() => {
    if (activeCategory === 'all') {
      return page.allCategoriesOverview;
    }
    const detail = page.categoryDetails[activeCategory];
    return {
      eyebrow: detail.eyebrow,
      title: page.categoryNames[activeCategory],
      description: detail.description,
    };
  }, [activeCategory, page]);

  const emptyStateHeading =
    activeCategory === 'all'
      ? page.emptyState.title
      : `${page.emptyState.categoryTitlePrefix} ${page.categoryNames[activeCategory]}`;

  const itemCountLabel =
    visibleProducts.length === 1
      ? page.productCard.singleItemLabel
      : `${visibleProducts.length} ${page.productCard.pluralItemsLabel}`;

  return (
    <>
      {/* A. Intestazione Collezioni & B. Navigazione categorie */}
      <Section className="pb-10 sm:pb-12 lg:pb-14">
        <Container>
          <div className="max-w-3xl">
            <Heading level={1} eyebrow={page.eyebrow}>
              {page.heading}
            </Heading>
            <p className="mt-4 max-w-[65ch] text-base sm:text-lg leading-relaxed text-antracite-muted">
              {page.lead}
            </p>
          </div>

          <Divider className="my-8" />

          <div>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-antracite-muted uppercase">
              {page.categoriesTitle}
            </p>
            <div
              role="group"
              aria-label={page.categoriesTitle}
              className="flex flex-wrap gap-2.5"
            >
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                aria-pressed={activeCategory === 'all'}
                className={`min-h-[44px] rounded-[2px] px-5 py-2.5 text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-150 ease-[var(--mk-ease-atelier)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux cursor-pointer ${
                  activeCategory === 'all'
                    ? 'border border-bordeaux bg-bordeaux text-avorio shadow-xs'
                    : 'border border-oro/50 bg-avorio text-antracite hover:border-bordeaux hover:text-bordeaux'
                }`}
              >
                {page.allCategoriesLabel}
              </button>
              {CATALOG_CATEGORIES.map((category) => {
                const isSelected = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategorySelect(category.id)}
                    aria-pressed={isSelected}
                    className={`min-h-[44px] rounded-[2px] px-5 py-2.5 text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-150 ease-[var(--mk-ease-atelier)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux cursor-pointer ${
                      isSelected
                        ? 'border border-bordeaux bg-bordeaux text-avorio shadow-xs'
                        : 'border border-oro/50 bg-avorio text-antracite hover:border-bordeaux hover:text-bordeaux'
                    }`}
                  >
                    {page.categoryNames[category.id]}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 border-l-2 border-oro/70 pl-4 sm:pl-5">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                {activeOverview.eyebrow}
              </p>
              <p className="mt-1 font-display text-lg sm:text-xl font-medium text-antracite">
                {activeOverview.title}
              </p>
              <p className="mt-1.5 max-w-[65ch] text-sm leading-relaxed text-antracite-muted">
                {activeOverview.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* C. Griglia prodotti / D. Stato catalogo vuoto */}
      <Section id="collezioni-catalogo" surface="subtle">
        <Container>
          {visibleProducts.length > 0 ? (
            <>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-medium tracking-[0.12em] text-antracite-muted uppercase tabular-nums">
                  {itemCountLabel}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    categoryDisplay={page.categoryNames[product.categoria]}
                    availabilityLabels={page.productCard.availabilityLabels}
                    priceOnRequestLabel={page.productCard.priceOnRequestLabel}
                    inquiryLabel={page.productCard.inquiryLabel}
                    photoPendingTitle={page.productCard.photoPendingTitle}
                    photoPendingDescription={page.productCard.photoPendingDescription}
                    onInspect={() => navigateToRoute('contatti')}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="relative rounded-[4px] border border-oro/40 bg-avorio p-7 shadow-[var(--mk-shadow-card)] sm:p-10 lg:p-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 border border-oro/20"
              />
              <div className="relative mx-auto max-w-2xl text-center">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase">
                  {page.emptyState.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.15rem)] leading-[1.2] font-medium text-antracite">
                  {emptyStateHeading}
                </h2>

                <Divider variant="ornament" className="mx-auto my-6 max-w-xs" />

                <p className="mx-auto max-w-[58ch] text-sm sm:text-base leading-relaxed text-antracite-muted">
                  {page.emptyState.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => navigateToRoute('contatti')}
                  >
                    <span>{page.emptyState.primaryCta}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    href={BUSINESS_INFO.contacts.phone.href}
                  >
                    <Phone className="h-4 w-4 text-bordeaux" aria-hidden="true" />
                    <span>{page.emptyState.secondaryCta}</span>
                  </Button>

                  {activeCategory !== 'all' ? (
                    <Button
                      variant="ghost"
                      size="md"
                      onClick={() => handleCategorySelect('all')}
                    >
                      <span>{page.emptyState.resetFilterLabel}</span>
                    </Button>
                  ) : null}
                </div>

                <p className="mt-6 inline-flex items-center justify-center gap-1.5 text-xs text-antracite-muted">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-oro" aria-hidden="true" />
                  <span>
                    {BUSINESS_INFO.address.street} · {BUSINESS_INFO.address.postalCode}{' '}
                    {BUSINESS_INFO.address.city} ({BUSINESS_INFO.address.province})
                  </span>
                </p>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Riepilogo editoriale delle tre linee della boutique */}
      <Section>
        <Container>
          <Heading level={2} eyebrow={page.linesSection.eyebrow}>
            {page.linesSection.title}
          </Heading>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {CATALOG_CATEGORIES.map((category) => {
              const detail = page.categoryDetails[category.id];
              const isSelected = activeCategory === category.id;
              return (
                <article
                  key={category.id}
                  className={`flex flex-col justify-between rounded-[4px] border p-6 transition-all duration-200 ease-[var(--mk-ease-atelier)] sm:p-7 ${
                    isSelected
                      ? 'border-bordeaux/60 bg-avorio-caldo/70 shadow-[var(--mk-shadow-card)]'
                      : 'border-oro/35 bg-avorio hover:border-oro/75'
                  }`}
                >
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                      {detail.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-medium text-antracite">
                      {page.categoryNames[category.id]}
                    </h3>
                    <Divider className="my-4" />
                    <p className="text-sm leading-relaxed text-antracite-muted">
                      {detail.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => handleLineCardSelect(category.id)}
                      aria-pressed={isSelected}
                      className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium tracking-[0.03em] text-bordeaux underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux cursor-pointer"
                    >
                      <span>
                        {isSelected
                          ? page.linesSection.selectedLabel
                          : page.linesSection.selectLabel}
                      </span>
                      {isSelected ? (
                        <Check className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
