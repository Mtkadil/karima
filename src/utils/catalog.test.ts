import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS_CATALOG } from '../data/catalog';
import type { Product } from '../types/catalog';
import {
  buildCategoryFilterUrl,
  filterVisibleProducts,
  formatProductPrice,
  getFeaturedProducts,
  hasAuthorizedPrice,
  resolveCategoryFromSearch,
} from './catalog';

test('initial catalog archive contains no fabricated products in Phase 1', () => {
  assert.equal(PRODUCTS_CATALOG.length, 0);
  assert.deepEqual(filterVisibleProducts(PRODUCTS_CATALOG, 'all'), []);
});

test('filterVisibleProducts filters by visibility and category cleanly', () => {
  const sample: Product[] = [
    {
      id: 'MK-01',
      nome: 'Test Caftano',
      slug: 'test-caftano',
      categoria: 'caftani',
      modalita: ['vendita'],
      descrizione: 'Test',
      prezzo: null,
      mostra_prezzo: false,
      valuta: 'EUR',
      taglie: ['M'],
      colori: ['Avorio'],
      immagini: [],
      in_evidenza: true,
      visibile: true,
    },
    {
      id: 'MK-02',
      nome: 'Hidden Item',
      slug: 'hidden-item',
      categoria: 'cerimonia',
      modalita: ['noleggio'],
      descrizione: 'Test',
      prezzo: null,
      mostra_prezzo: false,
      valuta: 'EUR',
      taglie: ['S'],
      colori: ['Bordeaux'],
      immagini: [],
      in_evidenza: true,
      visibile: false,
    },
  ];

  assert.equal(filterVisibleProducts(sample, 'all').length, 1);
  assert.equal(filterVisibleProducts(sample, 'caftani').length, 1);
  assert.equal(filterVisibleProducts(sample, 'cerimonia').length, 0);
  assert.equal(getFeaturedProducts(sample).length, 1);
});

test('formatProductPrice respects mostra_prezzo and null price rules', () => {
  assert.equal(
    formatProductPrice(null, true, 'EUR', 'Prezzo su richiesta'),
    'Prezzo su richiesta'
  );
  assert.equal(
    formatProductPrice(240, false, 'EUR', 'Prezzo su richiesta'),
    'Prezzo su richiesta'
  );
  const formatted = formatProductPrice(240, true, 'EUR');
  assert.match(formatted, /240/);
  assert.match(formatted, /€/);
});

test('hasAuthorizedPrice returns true only when mostra_prezzo is true and price is present', () => {
  assert.equal(hasAuthorizedPrice({ prezzo: null, mostra_prezzo: true }), false);
  assert.equal(hasAuthorizedPrice({ prezzo: 320, mostra_prezzo: false }), false);
  assert.equal(hasAuthorizedPrice({ prezzo: 320, mostra_prezzo: true }), true);
});

test('buildCategoryFilterUrl preserves IT and FR base paths cleanly', () => {
  assert.equal(buildCategoryFilterUrl('/collezioni', 'all'), '/collezioni');
  assert.equal(
    buildCategoryFilterUrl('/collezioni', 'caftani'),
    '/collezioni?categoria=caftani'
  );
  assert.equal(
    buildCategoryFilterUrl('/fr/collections', 'cerimonia'),
    '/fr/collections?categoria=cerimonia'
  );
  assert.equal(buildCategoryFilterUrl('/fr/collections', 'all'), '/fr/collections');
});

test('resolveCategoryFromSearch selects valid categories from URL query string', () => {
  assert.equal(resolveCategoryFromSearch('?categoria=caftani'), 'caftani');
  assert.equal(
    resolveCategoryFromSearch('?categoria=abbigliamento-donna'),
    'abbigliamento-donna'
  );
  assert.equal(resolveCategoryFromSearch('?categoria=cerimonia'), 'cerimonia');
  assert.equal(
    resolveCategoryFromSearch('?utm_source=home&categoria=cerimonia'),
    'cerimonia'
  );
  assert.equal(resolveCategoryFromSearch('categoria=caftani'), 'caftani');
});

test('resolveCategoryFromSearch falls back to all when categoria is missing', () => {
  assert.equal(resolveCategoryFromSearch(''), 'all');
  assert.equal(resolveCategoryFromSearch('?'), 'all');
  assert.equal(resolveCategoryFromSearch('?altro=caftani'), 'all');
  assert.equal(resolveCategoryFromSearch('?categoria='), 'all');
  assert.equal(resolveCategoryFromSearch('?categoria=%20%20'), 'all');
});

test('resolveCategoryFromSearch falls back to all when categoria is invalid', () => {
  assert.equal(resolveCategoryFromSearch('?categoria=inesistente'), 'all');
  assert.equal(resolveCategoryFromSearch('?categoria=all'), 'all');
  assert.equal(resolveCategoryFromSearch('?categoria=CAFTANI'), 'all');
});
