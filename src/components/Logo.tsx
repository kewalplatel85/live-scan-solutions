import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
}

const sizeMap = {
  sm: {
    container: 'h-6 w-6',
    image: 'w-6 h-6',
    imageSize: 24,
    text: 'text-lg',
  },
  md: {
    container: 'h-8 w-8',
    image: 'w-8 h-8',
    imageSize: 32,
    text: 'text-xl',
  },
  lg: {
    container: 'h-12 w-12',
    image: 'w-12 h-12',
    imageSize: 48,
    text: 'text-2xl',
  },
};

export const Logo = ({
  size = 'md',
  showText = true,
  className,
  imageClassName,
  textClassName,
}: LogoProps) => {
  const sizeConfig = sizeMap[size];

  const logoContent = (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="relative">
        {/* Fingerprint scanner icon */}
        <div
          className={cn(
            'flex items-center justify-center',
            sizeConfig.container
          )}
        >
          <Image
            src="/assets/Logo/icons8-fingerprint-scan-80.png"
            alt="Live Scan Solutions Logo"
            width={sizeConfig.imageSize}
            height={sizeConfig.imageSize}
            className={cn(sizeConfig.image, imageClassName)}
          />
        </div>
      </div>
      {showText && (
        <span
          className={cn(
            'font-bold tracking-tight',
            sizeConfig.text,
            textClassName
          )}
        >
          Live Scan Solutions
        </span>
      )}
    </div>
  );

  return logoContent;
};

export const LogoLink = (props: LogoProps) => {
  return (
    <Link href="/" className="flex-shrink-0">
      <Logo {...props} />
    </Link>
  );
};
