import type { CatalogCategoryMeta, Product } from '../types/catalog';

/**
 * Categorie merceologiche definite dal brief v1.1.
 * I prodotti reali verranno inseriti solo dopo l'acquisizione di fotografie,
 * descrizioni e fasce prezzo autorizzate dalla titolare.
 */
export const CATALOG_CATEGORIES: readonly CatalogCategoryMeta[] = [
  {
    id: 'caftani',
    confirmed: true,
    statusNoteKey: 'awaiting_assets',
  },
  {
    id: 'abbigliamento-donna',
    confirmed: true,
    statusNoteKey: 'awaiting_assets',
  },
  {
    id: 'cerimonia',
    confirmed: true,
    statusNoteKey: 'awaiting_assets',
  },
];

/**
 * Archivio prodotti predisposto secondo `schema_dati_prodotto` del brief.
 * Nessun prodotto fittizio inserito in Fase 1.
 */
export const PRODUCTS_CATALOG: readonly Product[] = [];
