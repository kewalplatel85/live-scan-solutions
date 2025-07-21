import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description?: string;
  icon: LucideIcon;
  href?: string;
  badge?: string;
  className?: string;
}

export interface FeatureCardsProps {
  items: FeatureItem[];
  layout?: 'grid' | 'list' | 'compact';
  columns?: 1 | 2 | 3 | 4 | 6 | 'services';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'minimal';
  hoverable?: boolean;
  className?: string;
}

const layoutClasses = {
  grid: 'grid',
  list: 'flex flex-col',
  compact: 'grid',
};

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  services: 'grid-cols-2 md:grid-cols-2 lg:grid-cols-6',
};

const sizeClasses = {
  sm: {
    container: 'gap-4',
    item: 'p-4',
    icon: 'w-8 h-8',
    iconContainer: 'w-10 h-10',
    title: 'text-sm font-medium',
    description: 'text-xs',
  },
  md: {
    container: 'gap-6',
    item: 'p-6',
    icon: 'w-6 h-6',
    iconContainer: 'w-12 h-12',
    title: 'text-base font-medium',
    description: 'text-sm',
  },
  lg: {
    container: 'gap-8',
    item: 'p-8',
    icon: 'w-8 h-8',
    iconContainer: 'w-16 h-16',
    title: 'text-lg font-semibold',
    description: 'text-base',
  },
};

const variantClasses = {
  default: 'bg-background border border-border',
  outlined: 'border border-border',
  minimal: '',
};

export const FeatureCards = ({
  items,
  layout = 'grid',
  columns = 3,
  size = 'md',
  variant = 'default',
  hoverable = true,
  className = '',
}: FeatureCardsProps) => {
  const sizeConfig = sizeClasses[size];
  const isCompact = layout === 'compact';

  const containerClasses = cn(
    layoutClasses[layout],
    layout === 'grid' && columnClasses[columns],
    sizeConfig.container,
    className
  );

  const itemClasses = cn(
    'rounded-lg transition-colors',
    sizeConfig.item,
    variantClasses[variant],
    hoverable && 'hover:bg-muted/50',
    isCompact ? 'flex flex-col items-center space-y-3 text-center' : 'space-y-4'
  );

  const renderFeatureItem = (item: FeatureItem, index: number) => {
    const Icon = item.icon;
    const ItemWrapper = item.href ? 'a' : 'div';
    const wrapperProps = item.href ? { href: item.href } : {};

    return (
      <ItemWrapper
        key={index}
        className={cn(itemClasses, item.className)}
        {...wrapperProps}
      >
        <div
          className={cn(
            'bg-primary/10 rounded-lg flex items-center justify-center',
            sizeConfig.iconContainer,
            isCompact && 'mx-auto'
          )}
        >
          <Icon className={cn('text-primary', sizeConfig.icon)} />
        </div>

        <div className={isCompact ? 'text-center' : ''}>
          <div className="flex items-center gap-2">
            <h3 className={cn(sizeConfig.title, 'text-foreground')}>
              {item.title}
            </h3>
            {item.badge && (
              <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                {item.badge}
              </span>
            )}
          </div>

          {item.description && (
            <p
              className={cn(
                'text-muted-foreground leading-relaxed',
                sizeConfig.description,
                isCompact ? 'mt-1' : 'mt-2'
              )}
            >
              {item.description}
            </p>
          )}
        </div>
      </ItemWrapper>
    );
  };

  return <div className={containerClasses}>{items.map(renderFeatureItem)}</div>;
};
