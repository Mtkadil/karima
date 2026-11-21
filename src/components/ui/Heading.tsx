import type { ReactNode } from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3;
  children: ReactNode;
  eyebrow?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function Heading({
  level = 2,
  children,
  eyebrow,
  align = 'left',
  className = '',
}: HeadingProps) {
  const Tag = `h${level}` as const;

  const sizeClass =
    level === 1
      ? 'text-[clamp(2rem,4.2vw,3.375rem)] leading-[1.12] font-medium text-antracite'
      : level === 2
        ? 'text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.18] font-medium text-antracite'
        : 'text-lg sm:text-xl leading-[1.28] font-medium text-antracite';

  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-2.5 text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Tag className={sizeClass}>{children}</Tag>
    </div>
  );
}
