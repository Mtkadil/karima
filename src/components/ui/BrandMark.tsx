import { BUSINESS_INFO } from '../../data/business';

interface BrandMarkProps {
  variant?: 'compact' | 'editorial';
  subtitle?: string;
  logoUrl?: string | null;
  className?: string;
}

export function BrandMark({
  variant = 'compact',
  subtitle,
  logoUrl = BUSINESS_INFO.officialLogoUrl,
  className = '',
}: BrandMarkProps) {
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={BUSINESS_INFO.brandName}
        referrerPolicy="no-referrer"
        className={`h-8 w-auto object-contain ${className}`.trim()}
      />
    );
  }

  if (variant === 'editorial') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`.trim()}>
        <svg
          viewBox="0 0 40 16"
          className="mb-2 h-3.5 w-9 text-oro"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 8H14M26 8H38M20 2L25 8L20 14L15 8L20 2Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <span className="font-display text-2xl sm:text-3xl font-medium tracking-[0.16em] text-antracite uppercase">
          {BUSINESS_INFO.brandName}
        </span>
        {subtitle ? (
          <span className="mt-1.5 text-[11px] font-medium tracking-[0.22em] text-antracite-muted uppercase">
            {subtitle}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <span
      className={`font-display text-lg sm:text-xl font-semibold tracking-[0.12em] text-antracite uppercase whitespace-nowrap shrink-0 ${className}`.trim()}
    >
      {BUSINESS_INFO.brandName}
    </span>
  );
}
