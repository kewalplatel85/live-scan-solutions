import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  ExternalLink,
  FileText,
  Fingerprint,
  Mailbox,
  Package,
  Plane,
  Printer,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const primaryServices = [
  {
    icon: Fingerprint,
    title: 'Live Scan & Ink Fingerprinting',
    description:
      'Electronic Live Scan submission and professional FD-258 ink fingerprint cards for employment, licensing, volunteering, and personal records.',
    href: '/Live-Scan-Fingerprinting',
    badge: 'DOJ Listed Location',
    image: '/assets/services/live-scan-service.jpg',
    alt: 'Technician assisting a customer with electronic Live Scan fingerprinting',
  },
  {
    icon: FileText,
    title: 'Notary Public',
    description:
      'Clear, professional document notarization. Walk in, reserve a time, or ask about mobile notary availability.',
    href: '/notary',
    badge: 'Walk-Ins Welcome',
    image: '/assets/services/notary-service.jpg',
    alt: 'Customer meeting with a Notary Public for document notarization',
  },
  {
    icon: BadgeCheck,
    title: 'Apostille Services',
    description:
      'Help preparing and submitting eligible documents for California apostille authentication and international use.',
    href: '/apostille',
    badge: 'Document Support',
    image: '/assets/services/apostille-service.jpg',
    alt: 'Document service professional reviewing paperwork for international apostille processing',
  },
  {
    icon: Camera,
    title: 'Passport & ID Photos',
    description:
      'Professionally prepared photos for U.S. passports, visas, immigration forms, and international document requirements.',
    href: '/passport-photos',
    badge: 'Prepared While You Wait',
    image: '/assets/services/passport-photo-service.jpg',
    alt: 'Professional passport photo appointment at Mail All Center',
  },
];

const everydayServices = [
  {
    icon: Mailbox,
    title: 'Mailbox Rental',
    description: 'A secure street address and package acceptance.',
    href: '/mailbox-rental',
  },
  {
    icon: Package,
    title: 'Packing & Shipping',
    description: 'Packing help and domestic or international shipping.',
    href: '/pack-ship',
  },
  {
    icon: Printer,
    title: 'Printing & Document Services',
    description: 'Printing, copying, binding, laminating, and shredding.',
    href: '/printing',
  },
  {
    icon: Plane,
    title: 'TSA PreCheck® Enrollment',
    description: 'Start or manage enrollment through IDEMIA.',
    href: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/',
    external: true,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-muted/35 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <Badge variant="outline" className="mb-3">
            Services in One Convenient Location
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Choose the Service You Need
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            Start with one of our most requested services below. Each page
            explains what to bring, what to expect, and how to get started.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {primaryServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group flex h-full flex-col overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {service.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt ?? ''}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-950/60 dark:to-indigo-950/60">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-200 bg-white/80 shadow-sm dark:border-violet-800 dark:bg-gray-950/70">
                      <Icon className="h-10 w-10 text-violet-600" />
                    </div>
                  </div>
                )}

                <CardContent className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-4 w-full justify-between"
                    asChild
                  >
                    <Link href={service.href}>
                      View Service Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-3xl border bg-background p-5 shadow-sm sm:p-7">
          <div className="mb-5">
            <h3 className="text-2xl font-bold">More Everyday Services</h3>
            <p className="mt-1 text-muted-foreground">
              Mail, shipping, printing, and travel-enrollment support are also
              available.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {everydayServices.map((service) => {
              const Icon = service.icon;
              const content = (
                <>
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{service.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  {service.external ? (
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  ) : (
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  )}
                </>
              );

              return service.external ? (
                <a
                  key={service.title}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-2xl border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex items-start gap-3 rounded-2xl border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
