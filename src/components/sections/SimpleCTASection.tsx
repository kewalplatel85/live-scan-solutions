import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export const SimpleCTASection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Visit us today or call to schedule your appointment. Fast,
          professional service you can trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-base" asChild>
            <Link href="tel:(650)961-4646">
              <Phone className="mr-2 h-5 w-5" />
              Call (650) 961-4646
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="/contact">
              <MapPin className="mr-2 h-5 w-5" />
              Find Locations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
