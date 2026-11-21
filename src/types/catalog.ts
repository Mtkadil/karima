export type ProductCategory = 'caftani' | 'abbigliamento-donna' | 'cerimonia';

export type AvailabilityMode = 'vendita' | 'noleggio' | 'su-misura';

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Product {
  id: string;
  nome: string;
  slug: string;
  categoria: ProductCategory;
  modalita: AvailabilityMode[];
  descrizione: string;
  prezzo: number | null;
  mostra_prezzo: boolean;
  valuta: 'EUR';
  taglie: string[];
  colori: string[];
  immagini: ProductImage[];
  in_evidenza: boolean;
  visibile: boolean;
}

export interface CatalogCategoryMeta {
  id: ProductCategory;
  confirmed: boolean;
  statusNoteKey: 'confirmed' | 'awaiting_assets';
}

export type ServiceConfirmationStatus = 'confirmed' | 'pending_confirmation';

export interface ServiceDefinition {
  id: 'noleggio-caftani' | 'riparazioni-sartoriali';
  status: ServiceConfirmationStatus;
  sourceNote: string;
}
