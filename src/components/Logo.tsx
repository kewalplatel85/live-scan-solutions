import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  animated?: boolean;
  variant?: 'default' | 'gradient' | 'glow';
  useSvg?: boolean;
}

const sizeMap = {
  sm: {
    container: 'h-6 w-6',
    image: 'w-6 h-6',
    imageSize: 24,
    text: 'text-lg',
    glowSize: 'shadow-sm',
  },
  md: {
    container: 'h-8 w-8',
    image: 'w-8 h-8',
    imageSize: 32,
    text: 'text-xl',
    glowSize: 'shadow-md',
  },
  lg: {
    container: 'h-12 w-12',
    image: 'w-12 h-12',
    imageSize: 48,
    text: 'text-4xl',
    glowSize: 'shadow-lg',
  },
};

export const Logo = ({
  size = 'md',
  showText = true,
  className,
  imageClassName,
  textClassName,
  animated = false,
  variant = 'default',
  useSvg = false,
}: LogoProps) => {
  const sizeConfig = sizeMap[size];

  // Variant-specific classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return {
          containerClass:
            'bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 dark:from-blue-400 dark:via-indigo-500 dark:to-purple-600 p-1 rounded-full',
          imageWrapperClass: 'bg-white dark:bg-gray-900 rounded-full p-0.5',
          textClass:
            'bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent',
        };
      case 'glow':
        return {
          containerClass: 'relative',
          imageWrapperClass: `shadow-lg ${sizeConfig.glowSize} shadow-blue-700/60 dark:shadow-blue-400/60 rounded-full bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm`,
          textClass: 'text-blue-800 dark:text-blue-300 drop-shadow-sm',
        };
      default:
        return {
          containerClass: '',
          imageWrapperClass: '',
          textClass: 'text-gray-900 dark:text-gray-100',
        };
    }
  };

  const variantClasses = getVariantClasses();

  const logoContent = (
    <div className={cn('flex items-center space-x-3', className)}>
      <div className={cn('relative', variantClasses.containerClass)}>
        {/* Animated pulse background for glow variant */}
        {variant === 'glow' && animated && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500 opacity-75 animate-pulse blur-sm"></div>
        )}

        {/* Main fingerprint icon container */}
        <div
          className={cn(
            'flex items-center justify-center relative z-10',
            sizeConfig.container,
            variantClasses.imageWrapperClass,
            animated && 'transition-all duration-300 hover:scale-110',
            animated &&
              variant === 'glow' &&
              'hover:shadow-xl hover:shadow-blue-700/80 dark:hover:shadow-blue-400/80'
          )}
        >
          {useSvg ? (
            <div
              className={cn(
                sizeConfig.image,
                imageClassName,
                'drop-shadow-sm',
                animated && 'transition-transform duration-300'
              )}
              style={{
                backgroundImage: 'url(/assets/Logo/fingerprint-logo.svg)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          ) : (
            <Image
              src="/assets/Logo/icons8-fingerprint-scan-80.png"
              alt="Mail All Center - Professional Live Scan & Fingerprinting Services"
              width={sizeConfig.imageSize}
              height={sizeConfig.imageSize}
              className={cn(
                sizeConfig.image,
                imageClassName,
                'drop-shadow-sm',
                animated && 'transition-transform duration-300'
              )}
              priority
            />
          )}

          {/* Scanning animation overlay */}
          {animated && (
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full border-2 border-blue-700/40 dark:border-blue-400/40 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-blue-600/60 dark:border-blue-300/60 animate-pulse"></div>
            </div>
          )}
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              'font-bold tracking-tight leading-tight',
              sizeConfig.text,
              variantClasses.textClass,
              textClassName,
              animated && 'transition-all duration-300 hover:scale-105'
            )}
          >
            Mail All Center
          </span>
          {size === 'lg' && (
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider uppercase">
              Professional Services
            </span>
          )}
        </div>
      )}
    </div>
  );

  return logoContent;
};

export const LogoLink = (props: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        'flex-shrink-0 group',
        props.animated && 'transition-transform duration-200 hover:scale-[1.02]'
      )}
      aria-label="Mail All Center - Professional Live Scan & Fingerprinting Services"
    >
      <Logo {...props} />
    </Link>
  );
};
