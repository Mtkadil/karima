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
      ? 'bg-[#F3EFE8] border-y border-oro/25'
      : 'bg-avorio';

  return (
    <section
      id={id}
      className={`py-10 sm:py-14 lg:py-16 ${surfaceClasses} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
