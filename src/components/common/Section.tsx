import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface SectionProps {
  // Layout and styling
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'muted' | 'primary' | 'gradient' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  // Content structure
  children: ReactNode;

  // Optional header content
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  description?: string | ReactNode;
  headerAlignment?: 'left' | 'center' | 'right';
  headerSpacing?: 'sm' | 'md' | 'lg';

  // Container options
  fullWidth?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | 'full';
}

const backgroundClasses = {
  default: 'bg-background',
  muted: 'bg-muted/30',
  primary: 'bg-primary/5',
  gradient: 'bg-gradient-to-br from-background via-background to-primary/5',
  none: '',
};

const paddingClasses = {
  none: '',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-24',
};

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

const headerSpacingClasses = {
  sm: 'mb-8',
  md: 'mb-12',
  lg: 'mb-16',
};

const headerAlignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Section = ({
  className = '',
  containerClassName = '',
  background = 'default',
  padding = 'lg',
  children,
  title,
  subtitle,
  description,
  headerAlignment = 'center',
  headerSpacing = 'md',
  fullWidth = false,
  maxWidth = '7xl',
}: SectionProps) => {
  const hasHeader = title || subtitle || description;

  return (
    <section
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          !fullWidth && maxWidthClasses[maxWidth],
          fullWidth && 'container',
          containerClassName
        )}
      >
        {hasHeader && (
          <div
            className={cn(
              headerAlignmentClasses[headerAlignment],
              headerSpacingClasses[headerSpacing]
            )}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {subtitle && (
              <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
                {subtitle}
              </h3>
            )}
            {description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
