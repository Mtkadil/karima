import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux cursor-pointer';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-bordeaux text-avorio hover:bg-[#491624]',
  secondary:
    'border border-oro text-antracite bg-transparent hover:bg-oro/10',
  ghost: 'text-antracite hover:text-bordeaux',
};

interface CommonProps {
  variant?: ButtonVariant;
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
  const { variant = 'primary', children, className = '', ...rest } = props;
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`.trim();

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
