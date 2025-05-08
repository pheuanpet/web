import React from 'react';
import clsx from 'clsx';

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
};

export function Typography({
  variant = 'p',
  className,
  ...props
}: TypographyProps) {
  const Tag = variant as keyof React.ReactHTML;
  const base = {
    h1: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    h2: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    h3: 'text-lg md:text-xl lg:text-2xl font-medium',
    p: 'text-base md:text-lg',
    span: 'text-base md:text-lg',
  };
  return <Tag className={clsx(base[variant], className)} {...props} />;
}
