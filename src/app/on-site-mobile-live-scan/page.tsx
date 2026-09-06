import { GenericHero } from '@/components/common/GenericHero';
import SEOGraph, {
  buildBreadcrumb,
  buildFAQ,
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
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY } from '@/config/company';
import { SITE_URL } from '@/lib/config';
import {
  Building2,
  CalendarCheck,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const url = `${SITE_URL}/on-site-mobile-live-scan`;

export const metadata: Metadata = {
  title: 'Mobile Live Scan Fingerprinting | On-Site Bay Area Service',
  description:
    'Schedule mobile Live Scan fingerprinting for groups of 5 to 500 at your Bay Area organization. Group discounts are available.',
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Mobile Live Scan Fingerprinting | On-Site Bay Area Service',
    description:
      'Convenient on-site Live Scan fingerprinting for Bay Area groups of 5 to 500. Group discounts are available.',
    url,
    images: [
      {
        url: '/assets/services/mobile-live-scan-service.jpg',
        alt: 'Portable Live Scan equipment set up for an on-site group fingerprinting session',
      },
    ],
  },
};

const organizationTypes = [
  {
    icon: Building2,
    title: 'Employers & Agencies',
    description:
      'Coordinate fingerprinting for new hires, licensed professionals, and staff at one convenient location.',
  },
  {
    icon: GraduationCap,
    title: 'Schools & Childcare',
    description:
      'Help teachers, coaches, volunteers, and childcare staff complete required fingerprinting together.',
  },
  {
    icon: HeartHandshake,
    title: 'Nonprofits & Community Groups',
    description:
      'Arrange an organized session for volunteers, faith communities, and service organizations.',
  },
  {
    icon: Users,
    title: 'Other Qualifying Groups',
    description:
      'Tell us your location, group size, and timeline so we can confirm availability and requirements.',
  },
];

const processSteps = [
  {
    title: 'Tell Us About Your Group',
    description:
      'Share the service address, preferred dates, approximate number of applicants, and requesting-agency information.',
  },
  {
    title: 'Confirm the Service Plan',
    description:
      'We confirm availability, pricing, payment arrangements, and what every participant needs to bring.',
  },
  {
    title: 'Prepare Your Participants',
    description:
      'Each applicant should have valid photo identification and a completed Request for Live Scan Service form.',
  },
  {
    title: 'Complete Fingerprinting On Site',
    description:
      'Our technician brings the equipment, captures fingerprints, reviews quality, and submits eligible transactions electronically.',
  },
];

const faqItems = [
  {
    question: 'Who can schedule mobile Live Scan fingerprinting?',
    answer:
      'Mobile service is designed for qualifying employers, schools, childcare programs, churches, nonprofits, agencies, and other groups. Call with your group size and location so we can confirm availability.',
  },
  {
    question: 'Which Bay Area cities do you serve?',
    answer:
      'Mobile coverage may be available throughout the Bay Area, including Mountain View, Palo Alto, Sunnyvale, Los Altos, Cupertino, Santa Clara, San Jose, Menlo Park, Fremont, and nearby communities. Availability depends on the date, distance, and group requirements.',
  },
  {
    question: 'What does each participant need to bring?',
    answer:
      'Each participant should bring valid photo identification and a completed Request for Live Scan Service form supplied by the employer, licensing agency, school, or requesting organization.',
  },
  {
    question: 'How much does an on-site session cost?',
    answer:
      'Group discounts are available for mobile sessions serving 5 to 500 participants. Final pricing depends on the location, number of participants, scheduling requirements, and applicable DOJ or FBI fees. Contact us for a written estimate.',
  },
  {
    question: 'Can our organization receive one invoice?',
    answer:
      'Corporate or organizational invoicing may be available when arranged in advance. We will confirm the payment plan while scheduling your session.',
  },
];

const nodes = [
  WEBSITE_NODE,
  BUSINESS_NODE,
  buildWebPage({
    url,
    title: 'Mobile Live Scan Fingerprinting for Bay Area Organizations',
    description:
      'On-site Live Scan fingerprinting for Bay Area organizations with groups of 5 to 500 and group discounts available.',
  }),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}/#service`,
    name: 'Mobile Live Scan Fingerprinting',
    serviceType: 'On-site Live Scan fingerprinting',
    url,
    provider: { '@id': BUSINESS_NODE['@id'] },
    areaServed: {
      '@type': 'Place',
      name: 'San Francisco Bay Area, California',
    },
    description:
      'Portable on-site Live Scan fingerprinting for Bay Area groups of 5 to 500, with group discounts available.',
  },
  buildFAQ(faqItems),
  buildBreadcrumb([
    { name: 'Home', url: `${SITE_URL}/` },
    {
      name: 'Live Scan Fingerprinting',
      url: `${SITE_URL}/Live-Scan-Fingerprinting`,
    },
    { name: 'Mobile Live Scan', url },
  ]),
];

export default function MobileLiveScanPage() {
  return (
    <div className="min-h-screen">
      <SEOGraph id="ld-mobile-live-scan" nodes={nodes} />

      <GenericHero
        className="!py-10 md:!py-14"
        badges={[
          { icon: Truck, text: 'We Come to Your Organization' },
          { icon: MapPin, text: 'Bay Area Mobile Service' },
          { icon: Users, text: 'Groups of 5 to 500' },
        ]}
        title={
          <>
            Mobile Live Scan Fingerprinting —{' '}
            <span className="text-primary">Professional On-Site Service</span>
          </>
        }
        subtitle="Convenient fingerprinting for organizations and groups"
        description="Reduce employee travel and coordinate fingerprinting in one place. Mail All Center brings professional Live Scan equipment and an experienced technician to qualifying workplaces, schools, churches, nonprofits, and other Bay Area organizations."
        benefits={[
          { text: 'Portable professional equipment' },
          { text: 'Coordinated group scheduling' },
          { text: 'Group discounts available' },
          { text: 'Electronic DOJ/FBI submission when applicable' },
          { text: 'Organizational invoicing may be available' },
        ]}
        buttons={[
          {
            text: `Call ${COMPANY.phone}`,
            href: COMPANY.phoneTel,
            icon: Phone,
            variant: 'default',
            size: 'lg',
          },
          {
            text: 'Request Mobile Service',
            href: '/contact-us',
            icon: CalendarCheck,
            variant: 'outline',
            size: 'lg',
          },
        ]}
        rightContent={
          <div className="overflow-hidden rounded-3xl border bg-card shadow-lg">
            <div className="relative min-h-[340px]">
              <Image
                src="/assets/services/mobile-live-scan-service.jpg"
                alt="Mobile Live Scan fingerprinting equipment ready for an on-site group session"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xl font-bold">
                  One location. One coordinated session.
                </p>
                <p className="mt-2 text-sm text-white/85">
                  A convenient option when multiple people need fingerprinting.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="border-y bg-muted/35 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <Badge variant="outline" className="mb-3">
              Designed for Groups
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Who Uses Mobile Live Scan?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              From teams of 5 to large events with up to 500 participants,
              on-site service helps organizations complete fingerprinting
              efficiently. Group discounts are available.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {organizationTypes.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge variant="secondary" className="mb-3">
                Simple Coordination
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How an On-Site Session Works
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We plan the visit with one organizational contact so
                participants know what to expect before the technician arrives.
              </p>
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-950/30">
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-700 dark:text-blue-300" />
                  <div>
                    <h3 className="font-semibold">Information to have ready</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Service address, preferred dates, estimated group size,
                      billing preference, and the type of Live Scan applications
                      involved.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border bg-card p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-white md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Badge className="mb-4 bg-white text-slate-900 hover:bg-white">
                Bay Area Coverage
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Bring Fingerprinting to Your Team
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
                Mobile availability may include Mountain View, Palo Alto,
                Sunnyvale, Los Altos, Cupertino, Santa Clara, San Jose, Menlo
                Park, Fremont, and nearby communities. Call to confirm your
                address and preferred date.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-7 w-7 flex-shrink-0 text-emerald-400" />
                <div>
                  <h3 className="text-xl font-semibold">DOJ-listed provider</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Mail All Center is listed on the California Department of
                    Justice website as an approved Live Scan location.
                  </p>
                </div>
              </div>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href={COMPANY.phoneTel}>
                  <Phone className="mr-2 h-4 w-4" />
                  Discuss Your Group
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-3">
                Mobile Live Scan FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Questions About On-Site Fingerprinting
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Plan Your Mobile Live Scan Session?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Call or send your service location, preferred dates, and estimated
            number of participants. We’ll confirm availability and provide a
            customized estimate.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={COMPANY.phoneTel}>
                <Phone className="mr-2 h-4 w-4" />
                Call {COMPANY.phone}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
