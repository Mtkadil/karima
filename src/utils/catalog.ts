import { CATALOG_CATEGORIES } from '../data/catalog';
import type { CatalogCategoryMeta, Product, ProductCategory } from '../types/catalog';

export type CategoryFilter = 'all' | ProductCategory;

export function resolveCategoryFromSearch(
  search: string,
  categories: readonly CatalogCategoryMeta[] = CATALOG_CATEGORIES
): CategoryFilter {
  const normalizedSearch = search.startsWith('?') ? search.slice(1) : search;
  if (!normalizedSearch) {
    return 'all';
  }

  const rawCategory = new URLSearchParams(normalizedSearch).get('categoria')?.trim();
  if (!rawCategory) {
    return 'all';
  }

  const matched = categories.find((category) => category.id === rawCategory);
  return matched ? matched.id : 'all';
}

export function filterVisibleProducts(
  products: readonly Product[],
  category: CategoryFilter = 'all'
): Product[] {
  return products.filter((product) => {
    if (!product.visibile) {
      return false;
    }
    if (category === 'all') {
      return true;
    }
    return product.categoria === category;
  });
}

export function getFeaturedProducts(products: readonly Product[]): Product[] {
  return products.filter((product) => product.visibile && product.in_evidenza);
}

export function formatProductPrice(
  prezzo: number | null,
  mostraPrezzo: boolean,
  valuta: 'EUR' = 'EUR',
  onRequestLabel = 'Prezzo su richiesta'
): string {
  if (!mostraPrezzo || prezzo === null) {
    return onRequestLabel;
  }

  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: valuta,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(prezzo);
}
