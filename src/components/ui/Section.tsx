import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  surface?: 'avorio' | 'subtle';
  className?: string;
  id?: string;
}

export function Section({
  children,
  surface = 'avorio',
  className = '',
  id,
}: SectionProps) {
  const surfaceClasses =
    surface === 'subtle'
      ? 'bg-avorio-caldo border-y border-oro/25'
      : 'bg-avorio';

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${surfaceClasses} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
