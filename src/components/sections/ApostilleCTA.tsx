// src/components/sections/ApostilleCTA.tsx
// Final call-to-action section for apostille pages.
// Renders a visually prominent CTA with call + contact buttons.

import { Button } from '@/components/ui/button';
import { FileCheck2, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

interface ApostilleCTAProps {
  /** Pass city name for city-specific messaging */
  cityName?: string;
}

export function ApostilleCTA({ cityName }: ApostilleCTAProps) {
  const locationText = cityName ? `in ${cityName}` : 'in the Bay Area';

  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
          <FileCheck2 className="w-8 h-8" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Your Apostille Done Today
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Professional apostille services {locationText}. Walk in or call us to
          get your documents authenticated for international use — fast, secure,
          and hassle-free.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8 py-6"
            asChild
          >
            <Link href="/contact-us">
              <FileCheck2 className="mr-2 h-5 w-5" />
              Start Your Apostille
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="tel:650-961-4646">
              <Phone className="mr-2 h-5 w-5" />
              Call (650) 961-4646
            </Link>
          </Button>
        </div>

        {/* Location info */}
        <div className="inline-flex items-center gap-2 text-sm opacity-80">
          <MapPin className="w-4 h-4" />
          <span>809 Cuesta Dr, Suite B, Mountain View, CA 94040</span>
        </div>
      </div>
    </section>
  );
}
