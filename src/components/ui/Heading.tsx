import type { ReactNode } from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3;
  children: ReactNode;
  eyebrow?: string;
  className?: string;
}

export function Heading({
  level = 2,
  children,
  eyebrow,
  className = '',
}: HeadingProps) {
  const Tag = `h${level}` as const;

  const sizeClass =
    level === 1
      ? 'text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] font-semibold text-antracite'
      : level === 2
        ? 'text-2xl sm:text-3xl leading-[1.2] font-semibold text-antracite'
        : 'text-lg sm:text-xl leading-[1.3] font-semibold text-antracite';

  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-medium tracking-wider text-bordeaux uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Tag className={sizeClass}>{children}</Tag>
    </div>
  );
}
