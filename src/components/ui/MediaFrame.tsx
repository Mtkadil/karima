import { useState } from 'react';
import { PlaceholderFrame, type MediaAspectRatio } from './PlaceholderFrame';

interface MediaFrameProps {
  src?: string | null;
  alt: string;
  aspect?: Exclude<MediaAspectRatio, 'auto'>;
  placeholderTitle?: string;
  placeholderDescription?: string;
  zoomOnHover?: boolean;
  className?: string;
}

const ASPECT_CLASSES: Record<Exclude<MediaAspectRatio, 'auto'>, string> = {
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-video',
};

export function MediaFrame({
  src,
  alt,
  aspect = '4:3',
  placeholderTitle = 'In attesa di fotografia reale',
  placeholderDescription,
  zoomOnHover = true,
  className = '',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <PlaceholderFrame
        aspect={aspect}
        title={placeholderTitle}
        description={placeholderDescription}
        className={className}
      />
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-[4px] border border-oro/30 bg-avorio-caldo ${ASPECT_CLASSES[aspect]} ${className}`.trim()}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${
          zoomOnHover
            ? 'transition-transform duration-300 ease-[var(--mk-ease-atelier)] group-hover:scale-[1.03]'
            : ''
        }`.trim()}
      />
    </div>
  );
}
