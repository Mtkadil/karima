import type { ReactNode } from 'react';

type LabelTone = 'neutral' | 'bordeaux' | 'oro';

interface LabelProps {
  children: ReactNode;
  tone?: LabelTone;
  className?: string;
}

const TONE_CLASSES: Record<LabelTone, string> = {
  neutral: 'border-antracite/20 bg-avorio-caldo text-antracite-muted',
  bordeaux: 'border-bordeaux/30 bg-bordeaux/5 text-bordeaux',
  oro: 'border-oro/60 bg-avorio text-antracite',
};

export function Label({
  children,
  tone = 'neutral',
  className = '',
}: LabelProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[2px] border px-2.5 py-1 text-[11px] font-medium tracking-[0.12em] uppercase whitespace-nowrap shrink-0 ${TONE_CLASSES[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
