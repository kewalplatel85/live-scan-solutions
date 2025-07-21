import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface BadgeItem {
  icon: LucideIcon;
  text: string;
  variant?: 'default' | 'secondary' | 'outline';
  iconClassName?: string;
}

export interface BenefitItem {
  text: string;
  icon?: LucideIcon;
}

export interface CTAButton {
  text: string;
  href: string;
  icon?: LucideIcon;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'lg';
  className?: string;
}

export interface QuickInfoItem {
  icon: LucideIcon;
  text: string;
}

export interface HeroProps {
  // Layout
  layout?: 'centered' | 'split'; // centered for contact, split for others
  className?: string;

  // Badges
  badges?: BadgeItem[];

  // Main content
  title: string | ReactNode;
  subtitle?: string;
  description: string;

  // Benefits/features list
  benefits?: BenefitItem[];

  // CTAs
  ctaText?: string; // Small text above buttons
  buttons?: CTAButton[];
  customCTA?: ReactNode; // Custom CTA component to replace buttons

  // Quick info (hours, location, etc.)
  quickInfo?: QuickInfoItem[];

  // Right side content (for split layout)
  rightContent?: ReactNode;

  // Stats or visual content
  statsOrVisual?: ReactNode;
}

export const GenericHero = ({
  layout = 'split',
  className = '',
  badges = [],
  title,
  subtitle,
  description,
  benefits = [],
  ctaText,
  buttons = [],
  customCTA,
  quickInfo = [],
  rightContent,
  statsOrVisual,
}: HeroProps) => {
  const containerClass =
    layout === 'centered'
      ? 'text-center max-w-4xl mx-auto'
      : 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center';

  const badgeContainerClass =
    layout === 'centered'
      ? 'flex flex-wrap justify-center gap-3 mb-8'
      : 'flex flex-wrap gap-3';

  const titleContainerClass =
    layout === 'centered' ? 'space-y-6 mb-12' : 'space-y-4';

  const benefitsContainerClass =
    layout === 'centered'
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8'
      : 'grid grid-cols-1 sm:grid-cols-2 gap-4';

  const buttonsContainerClass =
    layout === 'centered'
      ? 'flex flex-col sm:flex-row gap-4 justify-center'
      : 'space-y-4';

  return (
    <section
      className={`relative py-16 md:py-24 bg-gradient-to-br from-background via-background to-primary/5 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={containerClass}>
          {/* Left Content or Centered Content */}
          <div className={layout === 'split' ? 'space-y-8' : ''}>
            {/* Badges */}
            {badges.length > 0 && (
              <div className={badgeContainerClass}>
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant={badge.variant || 'secondary'}
                    className="px-4 py-2"
                  >
                    <badge.icon
                      className={`w-4 h-4 mr-2 ${badge.iconClassName || ''}`}
                    />
                    {badge.text}
                  </Badge>
                ))}
              </div>
            )}

            {/* Main Headlines */}
            <div className={titleContainerClass}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
                  {subtitle}
                </h2>
              )}
              <p
                className={`text-lg md:text-xl text-muted-foreground leading-relaxed ${
                  layout === 'centered' ? 'max-w-3xl mx-auto' : 'max-w-lg'
                }`}
              >
                {description}
              </p>
            </div>

            {/* Benefits */}
            {benefits.length > 0 && (
              <div className={benefitsContainerClass}>
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon || CheckCircle;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTAs */}
            {(customCTA || ctaText || buttons.length > 0) && (
              <div className={buttonsContainerClass}>
                {customCTA ? (
                  customCTA
                ) : (
                  <>
                    {ctaText && (
                      <div className="text-sm text-muted-foreground">
                        <span>{ctaText}</span>
                      </div>
                    )}
                    {buttons.length > 0 && (
                      <div
                        className={
                          layout === 'centered'
                            ? 'flex flex-col sm:flex-row gap-4 justify-center'
                            : 'flex gap-4'
                        }
                      >
                        {buttons.map((button, index) => (
                          <Button
                            key={index}
                            size={button.size || 'lg'}
                            variant={button.variant || 'default'}
                            className={button.className || 'text-lg px-8 py-6'}
                            asChild
                          >
                            <Link href={button.href}>
                              {button.icon && (
                                <button.icon className="mr-2 h-5 w-5" />
                              )}
                              {button.text}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Quick Info */}
            {quickInfo.length > 0 && (
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                {quickInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <info.icon className="h-4 w-4" />
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Content - Only for split layout */}
          {layout === 'split' && (rightContent || statsOrVisual) && (
            <div className="relative">
              {rightContent || (
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  {statsOrVisual}
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
