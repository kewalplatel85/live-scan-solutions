'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Award, CheckCircle, Lock, Shield, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const servicesData = [
  {
    title: 'Notary Services',
    description:
      'Professional document notarization with experienced certified notaries.',
    icon: CheckCircle,
    color: 'text-blue-600',
  },
  {
    title: 'Apostille Services',
    description:
      'Document authentication for international use with fast, reliable processing.',
    icon: Award,
    color: 'text-green-600',
  },
  {
    title: 'Passport Services',
    description:
      'Complete passport application and renewal assistance for hassle-free travel.',
    icon: Shield,
    color: 'text-purple-600',
  },
  {
    title: 'Pack & Ship',
    description:
      'Reliable packing and shipping solutions for documents and packages.',
    icon: Lock,
    color: 'text-orange-600',
  },
];

export const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Create autoplay plugin with useRef to avoid recreation
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    const updateSlide = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on('select', updateSlide);

    return () => {
      api.off('select', updateSlide);
    };
  }, [api]);

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold mb-3">Our Services</h3>
        <p className="text-sm text-muted-foreground">
          Complete business solutions beyond fingerprinting to serve all your
          needs.
        </p>
      </div>

      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full relative"
        onMouseEnter={() => autoplayPlugin.current.stop()}
        onMouseLeave={() => autoplayPlugin.current.reset()}
      >
        <CarouselContent>
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <CarouselItem key={index}>
                <Card className="p-4 lg:p-6 bg-background/80 backdrop-blur-sm border-border shadow-sm">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto">
                      <Icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    {/* Rating moved to each slide */}
                    <Badge className="flex items-center gap-1 px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700 text-sm mx-auto w-fit">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-yellow-500 dark:fill-yellow-400 text-yellow-500 dark:text-yellow-400"
                          />
                        ))}
                      </div>
                      4.9/5 Rating
                    </Badge>
                  </div>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Slide Indicator */}
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Services {currentSlide + 1} of {servicesData.length}
        </p>
      </div>
    </div>
  );
};
