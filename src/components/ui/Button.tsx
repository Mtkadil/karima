import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-[2px] font-medium tracking-[0.04em] whitespace-nowrap shrink-0 transition-all duration-150 ease-[var(--mk-ease-atelier)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux disabled:pointer-events-none disabled:opacity-45 cursor-pointer';

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'min-h-[40px] px-4 py-2 text-xs',
  md: 'min-h-[44px] px-5 py-2.5 text-sm',
  lg: 'min-h-[48px] px-7 py-3 text-sm',
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-bordeaux text-avorio hover:bg-bordeaux-hover active:scale-[0.99]',
  secondary:
    'border border-oro/80 bg-transparent text-antracite hover:border-oro hover:bg-oro/10 active:scale-[0.99]',
  outline:
    'border border-bordeaux bg-transparent text-bordeaux hover:bg-bordeaux hover:text-avorio active:scale-[0.99]',
  ghost:
    'bg-transparent text-antracite underline-offset-4 hover:text-bordeaux hover:underline',
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...rest
  } = props;

  const classes =
    `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const { href, ...linkProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
