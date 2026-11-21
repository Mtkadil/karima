export type MediaAspectRatio = '1:1' | '3:4' | '4:3' | '16:9' | 'auto';

interface PlaceholderFrameProps {
  title: string;
  description?: string;
  aspect?: MediaAspectRatio;
  badgeText?: string;
  className?: string;
}

const ASPECT_CLASSES: Record<MediaAspectRatio, string> = {
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-video',
  auto: 'min-h-[168px]',
};

export function PlaceholderFrame({
  title,
  description,
  aspect = 'auto',
  badgeText = 'Segnaposto fotografico',
  className = '',
}: PlaceholderFrameProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-[4px] border border-oro/45 bg-avorio-caldo p-6 text-center sm:p-8 ${ASPECT_CLASSES[aspect]} ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-2.5 border border-oro/25"
      />
      <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
        {badgeText}
      </p>
      <p className="mt-2 font-display text-base sm:text-lg font-medium text-antracite">
        {title}
      </p>
      {description ? (
        <p className="mt-2 max-w-[44ch] text-xs sm:text-sm leading-relaxed text-antracite-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
