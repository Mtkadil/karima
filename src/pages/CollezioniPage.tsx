import { useCallback, useMemo } from 'react';
import { CATALOG_CATEGORIES, PRODUCTS_CATALOG } from '../data/catalog';
import { useRouter } from '../context/RouterContext';
import {
  filterVisibleProducts,
  resolveCategoryFromSearch,
  type CategoryFilter,
} from '../utils/catalog';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { Section } from '../components/ui/Section';

export function CollezioniPage() {
  const { t, pathname, search, replaceUrl } = useRouter();
  const page = t.pages.collezioni;

  const activeCategory = useMemo(
    () => resolveCategoryFromSearch(search, CATALOG_CATEGORIES),
    [search]
  );

  const handleCategorySelect = useCallback(
    (category: CategoryFilter) => {
      const nextUrl =
        category === 'all'
          ? pathname
          : `${pathname}?categoria=${encodeURIComponent(category)}`;
      replaceUrl(nextUrl);
    },
    [pathname, replaceUrl]
  );

  const visibleProducts = useMemo(
    () => filterVisibleProducts(PRODUCTS_CATALOG, activeCategory),
    [activeCategory]
  );

  return (
    <Section>
      <Container>
        <Heading level={1} eyebrow={page.eyebrow}>
          {page.heading}
        </Heading>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-antracite/85">
          {page.lead}
        </p>

        <div className="mt-8">
          <p className="mb-3 text-xs font-medium tracking-wider text-antracite/70 uppercase">
            {page.categoriesTitle}
          </p>
          <div
            role="group"
            aria-label={page.categoriesTitle}
            className="flex flex-wrap gap-2"
          >
            <button
              type="button"
              onClick={() => handleCategorySelect('all')}
              aria-pressed={activeCategory === 'all'}
              className={`min-h-[44px] px-4 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-bordeaux text-avorio'
                  : 'border border-oro/40 bg-transparent text-antracite hover:border-bordeaux'
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
                  className={`min-h-[44px] px-4 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux cursor-pointer ${
                    isSelected
                      ? 'bg-bordeaux text-avorio'
                      : 'border border-oro/40 bg-transparent text-antracite hover:border-bordeaux'
                  }`}
                >
                  {page.categoryNames[category.id]}
                </button>
              );
            })}
          </div>
        </div>

        <Divider className="my-8" />

        {visibleProducts.length === 0 ? (
          <PlaceholderFrame
            title={page.emptyCatalogTitle}
            description={page.emptyCatalogDescription}
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <article key={product.id} className="border border-oro/30 p-5">
                <h2 className="font-display text-lg font-semibold text-antracite">
                  {product.nome}
                </h2>
              </article>
            ))}
          </div>
        )}

        <p className="mt-6 text-xs text-antracite/70">{page.schemaReadyLabel}</p>
      </Container>
    </Section>
  );
}
