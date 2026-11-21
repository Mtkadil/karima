import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS_CATALOG } from '../data/catalog';
import type { Product } from '../types/catalog';
import {
  filterVisibleProducts,
  formatProductPrice,
  getFeaturedProducts,
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
