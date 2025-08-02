import { LogoLink } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';
import Link from 'next/link';

interface BrandHeaderProps {
  className?: string;
  contactInfo?: {
    phone: string;
    label: string;
  };
}

export const BrandHeader = ({ className, contactInfo }: BrandHeaderProps) => {
  return (
    <div
      className={cn(
        'w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4 relative">
          {/* Center - Logo (absolutely centered) */}
          <div className="flex-1 flex justify-center">
            <LogoLink size="lg" />
          </div>

          {/* Right side - Contact Button and Theme Toggle (positioned absolutely) */}
          <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center space-x-3">
            {contactInfo && (
              <Button
                variant="outline"
                size="sm"
                className="hidden xl:inline-flex text-sm"
                asChild
              >
                <Link href={`tel:${contactInfo.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {contactInfo.label}
                </Link>
              </Button>
            )}
            <div className="hidden xl:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
