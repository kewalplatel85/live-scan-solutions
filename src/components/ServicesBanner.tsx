'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const services = [
  'Notary Services',
  'Apostille Services',
  'Passport Services',
  'Pack & Ship',
];

export const ServicesBanner = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="bg-primary/5 border-b border-border py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Our Services
          </h2>
          <div className="max-w-xs mx-auto">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                loop: true,
                align: 'center',
              }}
              className="w-full"
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index}>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground font-medium">
                        {service}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
