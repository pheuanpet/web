import * as React from 'react';

import { cn } from '../../libs/utils';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ className, icon, ...props }, ref) => (
    <span ref={ref} className={cn('w-6 h-6', className, icon)} {...props} />
  )
);
Icon.displayName = 'Icon';

export { Icon };
