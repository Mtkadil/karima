import { ArrowRight } from 'lucide-react';
import { Label } from './Label';
import { MediaFrame } from './MediaFrame';

interface CollectionCardProps {
  title: string;
  categoryLabel: string;
  description: string;
  imageUrl?: string | null;
  imageAlt?: string;
  actionLabel?: string;
  onSelect?: () => void;
}

export function CollectionCard({
  title,
  categoryLabel,
  description,
  imageUrl = null,
  imageAlt = title,
  actionLabel = 'Esplora linea',
  onSelect,
}: CollectionCardProps) {
  return (
    <article className="group flex flex-col rounded-[4px] border border-oro/30 bg-avorio shadow-[var(--mk-shadow-card)] transition-all duration-200 ease-[var(--mk-ease-atelier)] hover:-translate-y-0.5 hover:border-oro/65 hover:shadow-[var(--mk-shadow-card-hover)]">
      <div className="p-3 pb-0">
        <MediaFrame
          src={imageUrl}
          alt={imageAlt}
          aspect="4:3"
          placeholderTitle={title}
          placeholderDescription="Immagine collezione in attesa di acquisizione fotografica"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <Label tone="oro">{categoryLabel}</Label>
          <h3 className="mt-3 font-display text-xl font-medium text-antracite">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-antracite-muted">
            {description}
          </p>
        </div>

        {onSelect ? (
          <div className="mt-5 border-t border-oro/20 pt-4">
            <button
              type="button"
              onClick={onSelect}
              className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-bordeaux transition-colors hover:text-bordeaux-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux cursor-pointer"
            >
              <span>{actionLabel}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
