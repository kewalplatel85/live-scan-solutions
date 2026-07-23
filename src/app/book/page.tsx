import { BookingPageClient } from '@/app/book/BookingPageClient';
import { TSAInterceptorBanner } from '@/components/booking/TSAInterceptorBanner';
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
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY } from '@/config/company';
import { SITE_URL } from '@/lib/config';
import {
  CalendarClock,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MousePointerClick,
  Phone,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

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
  alternates: { canonical: `${SITE_URL}/book` },
  robots: { index: true, follow: true },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
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

// ── Why Book Online trust pillars ─────────────────────────────────────────────
const WHY_BOOK_ITEMS = [
  {
    icon: Clock,
    iconBg: 'bg-blue-50 dark:bg-blue-950/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'Skip the Wait',
    description:
      'Booked appointments are prioritized over walk-ins — arrive at your time and go straight to service.',
  },
  {
    icon: Mail,
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    title: 'Instant Confirmation',
    description:
      'Receive an email confirmation and Google Calendar invite the moment your appointment is booked.',
  },
  {
    icon: CalendarClock,
    iconBg: 'bg-violet-50 dark:bg-violet-950/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
    title: 'Free Reschedule',
    description:
      'Cancel or reschedule at no charge using the link in your confirmation email — no questions asked.',
  },
];

// ── Hero trust bullets ────────────────────────────────────────────────────────
const TRUST_BULLETS = [
  'Appointments prioritized over walk-ins',
  'Instant email + calendar invite',
  'Free cancel or reschedule anytime',
  'Walk-ins always welcome too',
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'Do I need an appointment, or can I walk in?',
    answer:
      'Walk-ins are always welcome during business hours (Mon–Fri 10AM–6PM, Sat 10AM–2PM). Booking online is optional but helps reduce your wait time and guarantees your slot.',
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

      {/* ── Section 1: Above-the-fold split hero ─────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5"
        aria-label="Book an appointment"
      >
        {/* Decorative background blob */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none hidden lg:block"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl lg:min-h-[calc(100vh-4rem)] flex flex-col">
          {/* TSA PreCheck notice — full width, always visible */}
          <div className="pt-6 lg:pt-8">
            <TSAInterceptorBanner />
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-16 mt-8 lg:mt-16">
            {/* ── Left panel: intro + trust (order 1 on mobile = hero first) ── */}
            <div className="order-1 lg:order-1 space-y-6">
              {/* Badge + heading */}
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-xs font-semibold tracking-widest uppercase"
                >
                  Online Booking · Free · No Account Needed
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-3">
                  Book Your
                  <br />
                  <span className="text-primary">Appointment</span>
                </h1>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md">
                  Select a service below to see what to bring and pick your time
                  slot. Takes less than 2 minutes.
                </p>
              </div>

              {/* Trust bullets */}
              <ul className="space-y-2.5">
                {TRUST_BULLETS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Hours + location */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Clock
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    Mon–Fri: 10AM–6PM &nbsp;·&nbsp; Sat: 10AM–2PM &nbsp;·&nbsp;
                    Sun: Closed
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>809 Cuesta Dr, Suite B, Mountain View, CA 94040</span>
                </div>
              </div>

              {/* Phone CTA */}
              <a
                href={COMPANY.phoneTel}
                aria-label={`Call us at ${COMPANY.phoneFormatted}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:border-primary/30 hover:bg-muted/60 transition-all duration-200"
              >
                <Phone
                  className="w-4 h-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <span>Questions? Call {COMPANY.phoneFormatted}</span>
              </a>
            </div>

            {/* ── Right panel: booking client (order 2 on mobile = cards below hero) */}
            <div className="order-2 lg:order-2">
              {/* Mobile-only tap hint */}
              <p className="lg:hidden flex items-center gap-1.5 text-sm font-semibold text-foreground mb-3">
                <MousePointerClick
                  className="w-4 h-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                Tap a service below to book your appointment
              </p>
              {/* Subtle panel card on desktop */}
              <div className="lg:bg-card lg:border lg:border-border lg:rounded-2xl lg:shadow-sm lg:p-6">
                <BookingPageClient />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why Book Online ──────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Why Book an Appointment?
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              Walk-ins are always welcome — but booking ahead has real benefits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WHY_BOOK_ITEMS.map((item) => (
              <Card
                key={item.title}
                className="border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="pt-6 pb-6 px-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${item.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Hours & Location Strip ──────────────────────────────── */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {/* Location */}
            <div className="py-6 sm:py-0 sm:px-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2 opacity-80">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Location
                </span>
              </div>
              <p className="font-bold text-base">809 Cuesta Dr, Suite B</p>
              <p className="text-sm opacity-80 mt-0.5">
                Mountain View, CA 94040
              </p>
              <a
                href="https://maps.google.com/?q=809+Cuesta+Dr+Suite+B+Mountain+View+CA+94040"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to Mail All Center (opens Google Maps)"
                className="mt-3 inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium border border-white/40 text-white bg-transparent hover:bg-white/20 hover:border-white/70 transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* Hours */}
            <div className="py-6 sm:py-0 sm:px-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2 opacity-80">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Business Hours
                </span>
              </div>
              <p className="font-bold text-base">Mon – Fri: 10AM – 6PM</p>
              <p className="text-sm opacity-80 mt-0.5">Saturday: 10AM – 2PM</p>
              <p className="text-sm opacity-60 mt-0.5">Sunday: Closed</p>
            </div>

            {/* Phone */}
            <div className="py-6 sm:py-0 sm:px-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2 opacity-80">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Call Us
                </span>
              </div>
              <p className="font-bold text-base">{COMPANY.phoneFormatted}</p>
              <p className="text-sm opacity-80 mt-0.5">
                Questions? We&apos;re happy to help.
              </p>
              <a
                href={COMPANY.phoneTel}
                aria-label={`Call ${COMPANY.phoneFormatted}`}
                className="mt-3 inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium border border-white/40 text-white bg-transparent hover:bg-white/20 hover:border-white/70 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: FAQ ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-3 font-medium text-xs tracking-wide uppercase"
            >
              FAQs
            </Badge>
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
                className="border rounded-xl px-5 bg-card"
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

          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              More questions?{' '}
              <Link
                href="/faq"
                className="text-primary hover:underline font-medium"
              >
                Browse our full FAQ
              </Link>{' '}
              or{' '}
              <Link
                href={COMPANY.phoneTel}
                className="text-primary hover:underline font-medium"
              >
                call us at {COMPANY.phoneFormatted}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
