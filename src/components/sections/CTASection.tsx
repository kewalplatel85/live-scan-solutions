import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  phoneNumber?: string;
  className?: string;
}

export const CTASection = ({
  title = 'Ready to Get Started?',
  description = 'Experience the difference of working with certified professionals who care about your needs. Contact us today for fast, secure, and reliable fingerprinting services.',
  phoneNumber = '650-961-4646',
  className = '',
}: CTASectionProps) => {
  return (
    <section
      className={`py-16 bg-primary text-primary-foreground ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-base" asChild>
            <Link href={`tel:${phoneNumber}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call: {phoneNumber}
            </Link>
          </Button>
          {/* FUTURE: Add a feature flag and uncomment this section */}
          {/* <Button
            size="lg"
            variant="outline"
            className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="/contact">Schedule Service</Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
};
