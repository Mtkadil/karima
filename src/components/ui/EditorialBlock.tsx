import type { ReactNode } from 'react';
import { Divider } from './Divider';
import { Heading } from './Heading';

interface EditorialBlockProps {
  eyebrow?: string;
  title: string;
  body: string;
  align?: 'left' | 'center';
  withOrnament?: boolean;
  actions?: ReactNode;
  className?: string;
}

export function EditorialBlock({
  eyebrow,
  title,
  body,
  align = 'left',
  withOrnament = false,
  actions,
  className = '',
}: EditorialBlockProps) {
  const containerAlign =
    align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${containerAlign} ${className}`.trim()}>
      <Heading level={2} eyebrow={eyebrow} align={align}>
        {title}
      </Heading>
      {withOrnament ? (
        <Divider
          variant="ornament"
          className={`my-5 w-full max-w-xs ${align === 'center' ? 'mx-auto' : ''}`.trim()}
        />
      ) : null}
      <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
        {body}
      </p>
      {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
