import type { Product, ProductCategory } from '../types/catalog';

export type CategoryFilter = 'all' | ProductCategory;

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
