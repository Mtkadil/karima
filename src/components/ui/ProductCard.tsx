import type { Product } from '../../types/catalog';
import { formatProductPrice, hasAuthorizedPrice } from '../../utils/catalog';
import { Label } from './Label';
import { MediaFrame } from './MediaFrame';

interface ProductCardProps {
  product: Product;
  categoryDisplay: string;
  availabilityLabels?: Record<string, string>;
  priceOnRequestLabel?: string;
  inquiryLabel?: string;
  photoPendingTitle?: string;
  photoPendingDescription?: string;
  demoNotice?: string;
  onInspect?: (product: Product) => void;
}

const DEFAULT_AVAILABILITY: Record<string, string> = {
  vendita: 'Vendita',
  noleggio: 'Noleggio',
  'su-misura': 'Su misura',
};

export function ProductCard({
  product,
  categoryDisplay,
  availabilityLabels = DEFAULT_AVAILABILITY,
  priceOnRequestLabel = 'Prezzo su richiesta',
  inquiryLabel = 'Richiedi informazioni',
  photoPendingTitle,
  photoPendingDescription = 'Fotografia prodotto in attesa di caricamento reale',
  demoNotice,
  onInspect,
}: ProductCardProps) {
  const coverImage = product.immagini[0] ?? null;
  const modes = product.modalita
    .map((mode) => availabilityLabels[mode] ?? mode)
    .join(' · ');
  const showPrice = hasAuthorizedPrice(product);
  const priceDisplay = showPrice
    ? formatProductPrice(
        product.prezzo,
        product.mostra_prezzo,
        product.valuta,
        priceOnRequestLabel
      )
    : priceOnRequestLabel;

  return (
    <article className="group flex flex-col rounded-[4px] border border-oro/30 bg-avorio shadow-[var(--mk-shadow-card)] transition-all duration-200 ease-[var(--mk-ease-atelier)] hover:-translate-y-0.5 hover:border-oro/65 hover:shadow-[var(--mk-shadow-card-hover)]">
      <div className="p-3 pb-0">
        <MediaFrame
          src={coverImage?.url ?? null}
          alt={coverImage?.alt || product.nome}
          aspect="3:4"
          placeholderTitle={photoPendingTitle ?? product.nome}
          placeholderDescription={photoPendingDescription}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-[11px] font-medium tracking-[0.12em] text-antracite-muted uppercase">
              {categoryDisplay}
              {modes ? ` · ${modes}` : ''}
            </p>
            {demoNotice ? <Label tone="bordeaux">{demoNotice}</Label> : null}
          </div>

          <h3 className="mt-2 font-display text-lg font-medium text-antracite">
            {product.nome}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-antracite-muted">
            {product.descrizione}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-oro/20 pt-3.5">
          <span
            className={`text-sm tabular-nums ${
              showPrice
                ? 'font-medium text-antracite'
                : 'text-antracite-muted'
            }`}
          >
            {priceDisplay}
          </span>

          {onInspect ? (
            <button
              type="button"
              onClick={() => onInspect(product)}
              className="min-h-[44px] px-2 text-xs font-semibold tracking-[0.06em] text-bordeaux uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux cursor-pointer"
            >
              {inquiryLabel}
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
