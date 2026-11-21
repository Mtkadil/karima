interface DividerProps {
  variant?: 'hairline' | 'ornament';
  className?: string;
}

export function Divider({
  variant = 'hairline',
  className = '',
}: DividerProps) {
  if (variant === 'ornament') {
    return (
      <div
        className={`flex items-center gap-4 ${className}`.trim()}
        aria-hidden="true"
      >
        <div className="h-px flex-1 bg-oro/35" />
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-oro" fill="none">
          <path d="M6 1L11 6L6 11L1 6L6 1Z" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="h-px flex-1 bg-oro/35" />
      </div>
    );
  }

  return (
    <hr
      className={`border-0 border-t border-oro/35 ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
