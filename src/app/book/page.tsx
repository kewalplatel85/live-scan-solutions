import { BookingPageClient } from '@/app/book/BookingPageClient';
import { GenericHero } from '@/components/common/GenericHero';
import SEOGraph, {
  buildBreadcrumb,
  buildWebPage,
  BUSINESS_NODE,
  WEBSITE_NODE,
} from '@/components/SEOGraph';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { COMPANY } from '@/config/company';
import { SITE_URL } from '@/lib/config';
import {
  Award,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';

// ── SEO ──────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    'Book an Appointment Online | Live Scan, Notary, Passport Photos | Mountain View CA',
  description:
    'Book your appointment online at Mail All Center, Mountain View CA. Schedule Live Scan fingerprinting, Ink fingerprint cards, Notary Public, or Passport & ID Photos. Walk-ins always welcome. Same-day service available. (650) 961-4646.',
  keywords:
    'book appointment mail all center, schedule live scan fingerprinting, book notary mountain view, passport photo appointment, online booking mountain view CA, live scan appointment mountain view, ink fingerprint card appointment, notary appointment bay area',
  openGraph: {
    type: 'website',
    title:
      'Book an Appointment | Mail All Center — Live Scan, Notary & More | Mountain View',
    description:
      'Reserve your appointment online at Mail All Center. Choose from Live Scan Fingerprinting, Ink Fingerprint Cards, Notary Public, or Passport & ID Photos. Walk-ins always welcome.',
    url: `${SITE_URL}/book`,
  },
  alternates: {
    canonical: `${SITE_URL}/book`,
  },
  robots: { index: true, follow: true },
};

// ── JSON-LD graph ─────────────────────────────────────────────────────────────
const url = `${SITE_URL}/book`;
const ldNodes = [
  WEBSITE_NODE,
  BUSINESS_NODE,
  buildWebPage({
    url,
    title: 'Book an Appointment | Mail All Center, Mountain View CA',
    description:
      'Online appointment booking for Live Scan Fingerprinting, Notary Public, Ink Fingerprint Cards, and Passport & ID Photos.',
  }),
  buildBreadcrumb([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Book Appointment', url },
  ]),
];

// ── FAQ data (server-rendered for SEO indexability) ────────────────────────
const faqItems = [
  {
    question: 'Do I need an appointment, or can I walk in?',
    answer:
      'Walk-ins are always welcome during business hours (Mon–Fri 10AM–6PM, Sat 10AM–2PM). Booking an appointment online is optional but helps reduce your wait time and guarantees your slot.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking at least 24–48 hours in advance for peak times. Same-day and next-day slots are often available. Walk-ins are accepted on a first-come, first-served basis.',
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer:
      'Yes. Your confirmation email contains a link to reschedule or cancel at no charge. We ask that you cancel at least 2 hours before your appointment time as a courtesy.',
  },
  {
    question: 'What if I arrive without the required documents?',
    answer:
      'We cannot process your appointment without the required items (e.g., valid ID, Live Scan request form with ORI number). Please review the "What to Bring" checklist for your selected service before arriving.',
  },
  {
    question: 'Is there parking at the location?',
    answer:
      'Yes — ample free parking is available in the business complex at 809 Cuesta Dr, Suite B, Mountain View, CA 94040.',
  },
  {
    question: 'Can I book multiple services in one visit?',
    answer:
      "Absolutely. If you need more than one service (e.g., Live Scan + Notary), book each separately or simply walk in and let our staff know. We'll process them efficiently during a single visit.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BookPage() {
  return (
    <main className="min-h-screen">
      <SEOGraph id="ld-book" nodes={ldNodes} />

      {/* ── Hero Section (RSC — stays server rendered for SEO) ── */}
      <GenericHero
        badges={[
          {
            icon: Star,
            text: '★★★★★ Local Rating',
            variant: 'secondary',
            iconClassName: 'fill-yellow-400 text-yellow-400',
          },
          {
            icon: Award,
            text: 'Certified & Licensed',
            variant: 'secondary',
          },
          {
            icon: Shield,
            text: 'CA DOJ Approved',
            variant: 'outline',
          },
          {
            icon: Users,
            text: 'NNA Member',
            variant: 'outline',
          },
        ]}
        title={
          <>
            Skip the Line —{' '}
            <span className="text-primary">Book an Appointment</span>
          </>
        }
        subtitle="Reserve your slot online & save time"
        description="Reserve your appointment online to save time. Walk-ins are always welcome during business hours — appointments simply help guarantee your slot."
        benefits={[
          { text: 'No waiting in line' },
          { text: 'Instant email confirmation' },
          { text: 'Easy reschedule or cancel' },
          { text: 'Walk-ins always welcome' },
        ]}
        ctaText="Choose a service below to get started"
        quickInfo={[
          {
            icon: Clock,
            text: 'Mon–Fri: 10AM–6PM | Sat: 10AM–2PM | Sun: Closed',
          },
          {
            icon: MapPin,
            text: '809 Cuesta Dr, Suite B, Mountain View, CA 94040',
          },
        ]}
        buttons={[
          {
            text: `Call ${COMPANY.phoneFormatted}`,
            href: COMPANY.phoneTel,
            icon: Phone,
            variant: 'outline',
            size: 'lg',
          },
        ]}
        rightContent={
          <div className="space-y-4">
            {/* Quick stats card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-primary" />
                Appointment Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Live Scan', time: '~15 min', price: 'From $30' },
                  {
                    label: 'Ink Fingerprint',
                    time: '~20 min',
                    price: 'Per card',
                  },
                  { label: 'Notary Public', time: '~15 min', price: '$15/sig' },
                  {
                    label: 'Passport Photos',
                    time: '~10 min',
                    price: 'Call us',
                  },
                ].map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium">{s.label}</span>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Badge
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {s.time}
                      </Badge>
                      <span className="font-medium text-foreground">
                        {s.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Walk-in notice */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
              <p className="text-sm font-medium text-primary mb-1">
                Walk-ins Always Welcome
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                No appointment? No problem. Come in anytime during business
                hours. Appointments are simply prioritized and reduce wait
                times.
              </p>
            </div>
          </div>
        }
      />

      {/* ── Interactive Booking Section (Client Components) ── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <BookingPageClient />
        </div>
      </section>

      {/* ── FAQ Section (RSC — server-rendered for local SEO indexability) ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Everything you need to know before your appointment.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-5 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-sm font-semibold py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              More questions?{' '}
              <a
                href="/faq"
                className="text-primary hover:underline font-medium"
              >
                Browse our full FAQ
              </a>{' '}
              or{' '}
              <a
                href={COMPANY.phoneTel}
                className="text-primary hover:underline font-medium"
              >
                call us at {COMPANY.phoneFormatted}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
