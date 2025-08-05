'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import {
  Award,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const heroSlides = [
  {
    id: 'livescan',
    title: 'Professional Live Scan Fingerprinting',
    subtitle: 'Fast, Secure, and Certified',
    description:
      'Digital fingerprint capture with instant electronic transmission to DOJ and FBI. Walk-ins welcome or book online for same-day processing.',
    features: [
      'Digital Live Scan Technology',
      'Same-day processing available',
      'Electronic transmission to agencies',
      'DOJ & FBI certified service',
    ],
    cta: {
      primary: { text: 'Schedule Live Scan', href: '/livescan' },
      secondary: { text: 'Call (650) 961-4646', href: 'tel:650-961-4646' },
    },
    badges: [
      {
        icon: Shield,
        text: 'DOJ Certified',
        variant: 'default' as const,
      },
      {
        icon: Award,
        text: 'FBI Approved',
        variant: 'secondary' as const,
      },
      {
        icon: Zap,
        text: 'Same Day Service',
        variant: 'outline' as const,
      },
    ],
    bgGradient: 'from-background via-background to-primary/10',
    iconColor: 'text-blue-600',
    icon: Shield,
  },
  {
    id: 'notary',
    title: 'Professional Notary Public Services',
    subtitle: 'Licensed & Experienced',
    description:
      'Certified notary services for legal documents, contracts, and official paperwork. Our licensed notaries ensure your documents meet all legal requirements.',
    features: [
      'Licensed Notary Public',
      'Legal document authentication',
      'Mobile notary services available',
      'Real estate & contract notarization',
    ],
    cta: {
      primary: { text: 'Notary Services', href: '/notary-public' },
      secondary: { text: 'Contact Us', href: '/contact' },
    },
    badges: [
      {
        icon: CheckCircle,
        text: 'Licensed Notary',
        variant: 'default' as const,
      },
      {
        icon: FileText,
        text: 'Legal Documents',
        variant: 'secondary' as const,
      },
      {
        icon: Users,
        text: 'Mobile Service',
        variant: 'outline' as const,
      },
    ],
    bgGradient: 'from-background via-background to-primary/10',
    iconColor: 'text-green-600',
    icon: FileText,
  },
  {
    id: 'apostille',
    title: 'Apostille & Document Authentication',
    subtitle: 'International Document Certification',
    description:
      'Fast and reliable apostille services for international document use. We handle the entire process from document preparation to final certification.',
    features: [
      'International document certification',
      'Educational & personal documents',
      'Fast processing times',
      'Secure document handling',
    ],
    cta: {
      primary: { text: 'Apostille Services', href: '/apostille' },
      secondary: { text: 'Learn More', href: '/apostille' },
    },
    badges: [
      { icon: Globe, text: 'International Use', variant: 'default' as const },
      { icon: Clock, text: 'Fast Processing', variant: 'secondary' as const },
      { icon: Shield, text: 'Secure Handling', variant: 'outline' as const },
    ],
    bgGradient: 'from-background via-background to-primary/10',
    iconColor: 'text-purple-600',
    icon: Globe,
  },
  {
    id: 'about',
    title: 'Trusted Document & Fingerprinting Experts',
    subtitle: '15+ Years of Professional Service',
    description:
      'Your trusted partner for all document and fingerprinting needs. Officially certified by the Department of Justice and FBI with over 15 years of experience serving the Bay Area.',
    features: [
      '15+ years of experience',
      'DOJ & FBI certified',
      'Multiple Bay Area locations',
      '15,000+ satisfied customers',
    ],
    cta: {
      primary: { text: 'About Us', href: '/about-us' },
      secondary: { text: 'Our Locations', href: '/contact-us' },
    },
    badges: [
      {
        icon: Award,
        text: '15+ Years Experience',
        variant: 'default' as const,
      },
      {
        icon: Star,
        text: '4.9/5 Rating',
        variant: 'secondary' as const,
      },
      {
        icon: MapPin,
        text: 'Bay Area Locations',
        variant: 'outline' as const,
      },
    ],
    bgGradient: 'from-background via-background to-primary/10',
    iconColor: 'text-orange-600',
    icon: Award,
  },
];

export const HeroSectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
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
    <section className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent>
          {heroSlides.map((slide) => {
            const Icon = slide.icon;
            return (
              <CarouselItem key={slide.id}>
                <div
                  className={`relative min-h-[70vh] lg:min-h-[80vh] bg-gradient-to-b ${slide.bgGradient}`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-grid-slate-100/20 dark:bg-grid-slate-900/20 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.2),transparent)]"></div>
                    <div className="absolute top-32 left-16 w-16 h-16 bg-primary/3 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-40 right-20 w-20 h-20 bg-primary/3 rounded-full blur-2xl"></div>
                  </div>

                  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[50vh] lg:min-h-[60vh]">
                      {/* Left Content */}
                      <div className="space-y-6 lg:space-y-8">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                          {slide.badges.map((badge, badgeIndex) => {
                            const BadgeIcon = badge.icon;
                            return (
                              <Badge
                                key={badgeIndex}
                                variant={badge.variant}
                                className="flex items-center gap-2 px-3 py-1"
                              >
                                <BadgeIcon className="h-4 w-4" />
                                {badge.text}
                              </Badge>
                            );
                          })}
                        </div>

                        {/* Main Content */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                              {slide.subtitle}
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                              {slide.title}
                            </h1>
                          </div>
                          <p className="text-lg text-muted-foreground max-w-2xl">
                            {slide.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {slide.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                              <span className="font-medium text-foreground">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button size="lg" className="text-base" asChild>
                            <Link href={slide.cta.primary.href}>
                              {slide.cta.primary.text}
                            </Link>
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="text-base"
                            asChild
                          >
                            <Link href={slide.cta.secondary.href}>
                              <Phone className="mr-2 h-4 w-4" />
                              {slide.cta.secondary.text}
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Right Content - Visual Element */}
                      <div className="flex items-center justify-center">
                        <Card className="p-8 lg:p-12 bg-background/80 backdrop-blur-sm border-border shadow-lg max-w-md w-full">
                          <div className="text-center space-y-6">
                            <div
                              className={`w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto`}
                            >
                              <Icon
                                className={`h-10 w-10 ${slide.iconColor}`}
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Professional Service
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Trusted by 15,000+ customers across the Bay Area
                              </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-2">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 fill-yellow-500 dark:fill-yellow-400 text-yellow-500 dark:text-yellow-400"
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-medium">
                                4.9/5 Rating
                              </span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-4 lg:left-8" />
        <CarouselNext className="right-4 lg:right-8" />
      </Carousel>

      {/* Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
