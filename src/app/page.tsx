import { FAQSection } from '@/components/sections/FAQSection';
import { NewHeroSection } from '@/components/sections/NewHeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import SEOGraph, {
  buildBreadcrumb,
  buildWebPage,
  BUSINESS_NODE,
  WEBSITE_NODE,
} from '@/components/SEOGraph';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';
import { SITE_URL } from '@/lib/config';
import {
  Award,
  Building2,
  CalendarCheck,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Truck,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Live Scan, Notary & Passport Photos in Mountain View, CA',
  description:
    'Live Scan fingerprinting, Notary Public, apostille, passport photos, shipping, mailbox, and printing services in Mountain View. Walk-ins welcome.',
  openGraph: {
    title: 'Mail All Center | Professional Services in Mountain View',
    description:
      'Live Scan, Notary Public, apostille, passport photos, shipping, mailbox, and printing services—all in one convenient Mountain View location.',
    url: SITE_URL,
    type: 'website',
    locale: 'en_US',
    siteName: 'Mail All Center',
    images: [
      {
        url: `${SITE_URL}/assets/services/live-scan-service.jpg`,
        alt: 'Professional Live Scan service at Mail All Center in Mountain View',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mail All Center | Mountain View, CA',
    description:
      'Live Scan, Notary, apostille, passport photos, shipping, mailbox, and printing services in one location.',
    images: [`${SITE_URL}/assets/services/live-scan-service.jpg`],
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export const revalidate = 604800;

const nodes = [
  WEBSITE_NODE,
  BUSINESS_NODE,
  buildWebPage({
    url: `${SITE_URL}/`,
    title: 'Mail All Center – Professional Services in Mountain View, CA',
    description:
      'Live Scan fingerprinting, Notary Public, apostille, passport photos, mailbox rental, printing, packing, and shipping in Mountain View, California.',
  }),
  buildBreadcrumb([{ name: 'Home', url: `${SITE_URL}/` }]),
];

const reasons = [
  {
    icon: Award,
    title: '15+ Years of Experience',
    description:
      'Experienced help with important identification, document, and business-service tasks.',
  },
  {
    icon: Building2,
    title: 'Multiple Services, One Stop',
    description:
      'Complete fingerprinting, notarization, photos, shipping, and document services in one place.',
  },
  {
    icon: CheckCircle,
    title: 'Clear, Friendly Assistance',
    description:
      'We explain what to bring and guide you through the service process step by step.',
  },
  {
    icon: Truck,
    title: 'Walk-In & Mobile Options',
    description:
      'Walk into our office or ask about mobile Live Scan and notary availability.',
  },
];

const nearbyCities = [
  'Mountain View',
  'Sunnyvale',
  'Palo Alto',
  'Los Altos',
  'Cupertino',
  'Santa Clara',
  'San Jose',
  'Menlo Park',
];

export default function HomePage() {
  return (
    <main>
      <SEOGraph id="ld-home" nodes={nodes} />

      <NewHeroSection />
      <ServicesSection />

      <section className="border-y bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Why Mail All Center
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Professional Help Without the Confusion
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Whether you need fingerprints, a notarized document, passport
                photos, or business services, our goal is to make the next step
                easy to understand.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={reason.title}
                      className="rounded-2xl border bg-card p-5 shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold">{reason.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-lg">
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/75">
                  Plan Your Visit
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Visit Our Mountain View Location
                </h2>
                <p className="mt-3 leading-relaxed text-primary-foreground/85">
                  Walk-ins are welcome for many services. Book ahead when you
                  prefer a reserved time or call us with questions.
                </p>

                <div className="mt-7 space-y-4 rounded-2xl border border-white/20 bg-white/10 p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="mt-1 text-sm text-primary-foreground/80">
                        {COMPANY.address.full}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="mt-1 text-sm text-primary-foreground/80">
                        {COMPANY.hours.summary}
                      </p>
                      <p className="mt-0.5 text-sm text-primary-foreground/80">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href={COMPANY.phoneTel}
                        className="mt-1 block text-sm text-primary-foreground/80 underline hover:no-underline"
                      >
                        {COMPANY.phoneFormatted}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/book">
                      <CalendarCheck className="mr-2 h-5 w-5" />
                      Book Now
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 bg-transparent text-white hover:bg-white hover:text-primary"
                    asChild
                  >
                    <a
                      href={COMPANY.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      Directions
                    </a>
                  </Button>
                </div>
              </div>

              <div className="border-t border-white/15 bg-black/10 px-6 py-5 sm:px-8">
                <p className="text-sm font-semibold">
                  Serving nearby communities
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nearbyCities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
}
