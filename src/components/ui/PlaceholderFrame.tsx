interface PlaceholderFrameProps {
  title: string;
  description: string;
  aspect?: '16:9' | '4:3' | 'auto';
}

export function PlaceholderFrame({
  title,
  description,
  aspect = 'auto',
}: PlaceholderFrameProps) {
  const aspectClass =
    aspect === '16:9'
      ? 'aspect-video'
      : aspect === '4:3'
        ? 'aspect-[4/3]'
        : 'min-h-[160px]';

  return (
    <div
      className={`flex flex-col justify-center border border-dashed border-oro/60 bg-[#F4F0E8] p-6 sm:p-8 ${aspectClass}`}
    >
      <p className="font-display text-base font-semibold text-antracite">
        {title}
      </p>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-antracite/75">
        {description}
      </p>
    </div>
  );
}
