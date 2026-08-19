import { GenericHero } from '@/components/common/GenericHero';
import { CustomerTypesAccordion } from '@/components/sections/CustomerTypesAccordion';
import SEOGraph, {
  buildBreadcrumb,
  buildHowTo,
  buildWebPage,
  BUSINESS_NODE,
  WEBSITE_NODE,
} from '@/components/SEOGraph';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { COMPANY } from '@/config/company';
import { badgeData } from '@/data/badges';
import { LIVESCAN_CITIES } from '@/data/city-pages/livescan-cities';
import { liveScanServiceSchema } from '@/data/google-business-schema';
import { SITE_URL } from '@/lib/config';
import {
  CalendarCheck,
  CalendarClock,
  Check,
  CreditCard,
  Info,
  MapPin,
  Phone,
  Shield,
  Truck,
  UserCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
const serviceOptions = [
  {
    icon: UserCheck,
    title: 'Walk-In Service',
    description: 'Visit during business hours—no appointment required',
    badge: 'Most Popular',
    features: [
      'No appointment required',
      'Same-day fingerprint submission',
      'Professional assistance',
    ],
  },
  {
    icon: CalendarClock,
    title: 'Scheduled Appointments',
    description: 'Reserve a convenient time for your visit',
    badge: 'Recommended',
    features: [
      'Reserved time',
      'One-on-one assistance',
      'After-hours by request',
    ],
  },
  {
    icon: Truck,
    title: 'Mobile Service',
    description: 'On-site Live Scan for organizations and groups',
    badge: 'Group Service',
    features: [
      'Schools, churches, and employers',
      'Coordinated group sessions',
      'Corporate invoicing available',
    ],
  },
];

export const metadata: Metadata = {
  title: 'Live Scan Fingerprinting in Mountain View, CA | Walk-Ins Welcome',
  description:
    'DOJ-listed Live Scan and FD-258 ink fingerprinting in Mountain View, CA. Walk-ins from nearby cities are welcome, with mobile group service available.',
  openGraph: {
    type: 'website',
    title: 'Live Scan Fingerprinting in Mountain View, CA | Mail All Center',
    description:
      'Walk into our Mountain View location for Live Scan and FD-258 ink fingerprinting, or schedule mobile group service for your organization.',
    url: `${SITE_URL}/Live-Scan-Fingerprinting`,
    images: [
      {
        url: '/assets/services/live-scan-service.jpg',
        alt: 'Professional Live Scan fingerprinting service',
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/Live-Scan-Fingerprinting`,
  },
  robots: { index: true, follow: true },
};

const url = `${SITE_URL}/Live-Scan-Fingerprinting`;
const nodes = [
  WEBSITE_NODE,
  BUSINESS_NODE,
  buildWebPage({
    url,
    title: 'Live Scan Fingerprinting in Mountain View, CA | Mail All Center',
    description:
      'DOJ-listed Live Scan and FD-258 ink fingerprinting in Mountain View, welcoming walk-ins from nearby cities and offering mobile group service.',
  }),
  liveScanServiceSchema,
  buildHowTo({
    name: 'How Live Scan and Ink Fingerprinting Works',
    steps: [
      {
        name: 'Bring Your Documents',
        text: 'Bring a valid photo ID and your completed request form.',
      },
      {
        name: 'Capture Fingerprints',
        text: 'Complete digital Live Scan or manual FD-258 ink fingerprinting.',
      },
      {
        name: 'Quality Review',
        text: 'We carefully review each fingerprint capture for quality.',
      },
      {
        name: 'Submit or Take Your Card',
        text: 'We electronically submit your Live Scan or provide your completed fingerprint card.',
      },
    ],
  }),
  buildBreadcrumb([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Live Scan Fingerprinting', url },
  ]),
];

export default function LiveScanPage() {
  return (
    <div className="min-h-screen">
      <SEOGraph id="ld-live-scan" nodes={nodes} />

      {/* Hero Section */}
      <GenericHero
        className="!py-10 md:!py-14"
        badges={badgeData.liveScanService}
        title={
          <>
            Live Scan & FD-258{' '}
            <span className="text-primary">
              Fingerprinting in Mountain View
            </span>
          </>
        }
        subtitle="Rolling Fees Starting at $16.99*"
        description="DOJ-listed Live Scan and professional FD-258 ink fingerprinting for employment, licensing, volunteering, and personal records. Customers from anywhere in the Bay Area are welcome to walk into our Mountain View location, or organizations can schedule mobile group service."
        disclaimerText="*Rolling fee only. Additional DOJ/FBI government submission fees apply and vary by application type. Contact us for a complete fee estimate."
        benefits={[
          { text: 'Same-day electronic submission' },
          { text: 'Walk-ins from all nearby cities welcome' },
          { text: 'Mobile service for groups' },
          { text: 'Expert assistance' },
          { text: 'Trusted by local schools and churches' },
          { text: 'Group rates available' },
        ]}
        buttons={[
          {
            text: 'Book Now',
            href: '/book',
            icon: CalendarCheck,
            variant: 'default',
            size: 'lg',
          },
          {
            text: `Call ${COMPANY.phone}`,
            href: COMPANY.phoneTel,
            icon: Phone,
            variant: 'outline',
            size: 'lg',
          },
        ]}
        quickInfo={[
          {
            icon: CreditCard,
            text: 'Payment: Credit Cards • Cash • Corporate Invoicing • Vouchers',
          },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="group overflow-hidden rounded-2xl border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/assets/services/live-scan-service.jpg"
                    alt="Technician assisting a customer with digital Live Scan fingerprinting"
                    fill
                    priority
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <Badge className="bg-green-600 text-white hover:bg-green-600">
                      Digital Submission
                    </Badge>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge className="flex items-center gap-1 bg-white text-gray-900 hover:bg-white">
                          From $16.99
                          <Info className="h-3 w-3" />
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="text-xs">
                          Rolling fee starts at $16.99. Additional DOJ/FBI
                          government fees vary by application type.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-bold">Live Scan</h3>
                    <p className="mt-1 text-sm text-white/85">
                      Electronic fingerprint capture and submission
                    </p>
                  </div>
                </div>
                <ul className="grid gap-2 p-4 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Real-time quality verification
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    DOJ/FBI electronic submission
                  </li>
                </ul>
              </article>

              <article className="group overflow-hidden rounded-2xl border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/assets/services/ink-fingerprinting-service.jpg"
                    alt="Technician completing manual FD-258 ink fingerprinting on a fingerprint card"
                    fill
                    priority
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <Badge className="absolute left-4 top-4 bg-purple-600 text-white hover:bg-purple-600">
                    FBI FD-258 Card
                  </Badge>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-bold">Ink Fingerprinting</h3>
                    <p className="mt-1 text-sm text-white/85">
                      Expert manual rolling on official fingerprint cards
                    </p>
                  </div>
                </div>
                <ul className="grid gap-2 p-4 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    FD-258 cards available
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    Domestic and international use
                  </li>
                </ul>
              </article>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-6 w-6 flex-shrink-0 text-orange-600" />
                  <div>
                    <h3 className="font-semibold">FBI Identity History</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      FD-1164 fingerprinting for identity history summaries,
                      immigration, and adoption.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Serving the Bay Area</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mountain View, Palo Alto, Sunnyvale, Los Altos, Cupertino,
                      San Jose, and nearby cities.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-6 py-3 dark:border-blue-800 dark:bg-blue-950/20">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Mail All Center is listed on the </strong>
                <a
                  href="https://oag.ca.gov/fingerprints/locations/mail-all-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:no-underline"
                >
                  California DOJ website as an approved Live Scan location
                </a>
              </p>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Illustrative service imagery.
            </p>
          </div>
        }
      />

      {/* Fingerprinting process */}
      <section className="border-y bg-background py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <Badge variant="secondary" className="mb-3">
              What to Expect
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:whitespace-nowrap">
              Your Fingerprinting Visit in Four Simple Steps
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Our team guides you through an accurate, comfortable Live Scan or
              ink fingerprinting visit.
            </p>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="group relative min-h-[300px] overflow-hidden rounded-3xl border shadow-md lg:min-h-full">
              <Image
                src="/assets/services/live-scan-appointment.jpg"
                alt="Customer checking in for a professional Live Scan fingerprinting appointment"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <Badge className="mb-3 bg-white text-gray-900 hover:bg-white">
                  Walk-ins Welcome
                </Badge>
                <h3 className="text-2xl font-bold">A Simple, Guided Visit</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                  Bring your photo ID and request form. Our experienced team
                  will guide you through the rest.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: 'Bring Your Documents',
                  description:
                    'Valid photo ID and your completed request form.',
                },
                {
                  title: 'Capture Fingerprints',
                  description:
                    'Digital Live Scan or manual FD-258 ink card service.',
                },
                {
                  title: 'Quality Review',
                  description:
                    'We carefully check each capture before completion.',
                },
                {
                  title: 'Submit or Take Your Card',
                  description:
                    'Electronic submission or your completed fingerprint card.',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Flexible Service Options
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Walk in, reserve an appointment, or arrange mobile Live Scan for
              your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceOptions.map((option, index) => {
              // Define unique colors for each service option
              const iconColors = [
                'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800', // Walk-in: Blue
                'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800', // Scheduled: Green
                'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800', // Mobile: Purple
              ];
              const textColors = [
                'text-blue-600 dark:text-blue-400',
                'text-emerald-600 dark:text-emerald-400',
                'text-purple-600 dark:text-purple-400',
              ];

              return (
                <Card
                  key={index}
                  className="relative transition-shadow duration-200 hover:shadow-lg"
                >
                  {option.badge && (
                    <Badge
                      className="absolute -top-3 left-6"
                      variant="secondary"
                    >
                      {option.badge}
                    </Badge>
                  )}
                  <CardHeader className="pb-4">
                    <div
                      className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border ${iconColors[index]}`}
                    >
                      <option.icon className={`h-7 w-7 ${textColors[index]}`} />
                    </div>
                    <CardTitle className="text-xl text-center">
                      {option.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-center">
                      {option.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-4 h-4 mr-2 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border bg-card shadow-md">
            <div className="grid items-center lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[330px]">
                <Image
                  src="/assets/services/mobile-live-scan-service.jpg"
                  alt="Mobile Live Scan fingerprinting setup serving a group at an organization"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <Badge variant="secondary" className="mb-4">
                  Mobile Group Service
                </Badge>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  We Bring Live Scan to Your Organization
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Make fingerprinting convenient for your team with a
                  professional on-site setup at your school, church, nonprofit,
                  or workplace.
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Portable professional equipment',
                    'Efficient group scheduling',
                    'Bay Area mobile coverage',
                    'Dedicated coordination support',
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={COMPANY.phoneTel}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  Call to Schedule Mobile Service
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 max-w-2xl text-center text-xs text-muted-foreground">
            <p>
              Prices shown reflect our rolling fee only. Additional government
              (DOJ/FBI) submission fees are required and vary by application
              type. Contact us at{' '}
              <a
                href={COMPANY.phoneTel}
                className="text-primary hover:underline font-medium"
              >
                {COMPANY.phoneFormatted}
              </a>{' '}
              for a complete fee estimate for your specific application.
            </p>
          </div>
        </div>
      </section>

      <CustomerTypesAccordion />

      {/* Locations Section */}
      <section id="bay-area-locations" className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Find Live Scan Near You in Mountain View and Nearby Cities
            </h2>
            <p className="mb-6 text-muted-foreground">
              Customers throughout the Bay Area can visit Mail All Center in
              Mountain View for walk-in Live Scan and FD-258 ink fingerprinting.
              Mobile group service is also available for organizations across
              the region.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {LIVESCAN_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/Live-Scan-Fingerprinting/${city.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200 text-sm font-medium"
                >
                  <MapPin className="w-3 h-3 mr-2 text-primary" />
                  Live Scan in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
