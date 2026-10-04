import { GenericHero } from '@/components/common/GenericHero';
import { PassportPhotoLocationPersonalization } from '@/components/PassportPhotoLocationPersonalization';
import SEOGraph, {
  buildBreadcrumb,
  buildWebPage,
  BUSINESS_NODE,
  WEBSITE_NODE,
} from '@/components/SEOGraph';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { COMPANY } from '@/config/company';
import { passportPhotosServiceSchema } from '@/data/google-business-schema';
import { SITE_URL } from '@/lib/config';
import {
  CalendarCheck,
  Camera,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Passport Photos in Mountain View | Ready in Minutes',
  description:
    'Professional passport, visa, ID, and immigration photos in Mountain View, CA. Photos starting at $9.99, walk-ins welcome, and a free retake if your photo is not accepted.',
  keywords:
    'passport photos mountain view, passport photos near me, passport photos bay area, Mail All Center passport photos, cheap passport photos mountain view, visa photos mountain view, ID photos mountain view, professional passport photos, same day passport photos, passport photo service mountain view, passport photos palo alto, passport photos sunnyvale, US passport photos, visa application photos',
  openGraph: {
    title: 'Passport Photos in Mountain View | Mail All Center',
    description:
      'Professional passport, visa, ID, and immigration photos in Mountain View. Photos starting at $9.99 with walk-ins welcome.',
    url: `/passport-photos`,
  },
  alternates: {
    canonical: `/passport-photos`,
  },
  robots: { index: true, follow: true },
};

const url = `${SITE_URL}/passport-photos`;
const nodes = [
  WEBSITE_NODE,
  BUSINESS_NODE,
  buildWebPage({
    url,
    title: 'Passport Photos in Mountain View, CA | Mail All Center',
    description:
      'Professional passport photos meeting all US State Department requirements.',
  }),
  passportPhotosServiceSchema,
  buildBreadcrumb([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Passport Photos', url },
  ]),
];

const passportPhotoQuestions = [
  {
    question: 'Do I need an appointment for passport photos?',
    answer:
      'No. Walk-ins are welcome during our regular business hours. You can also book ahead if that is more convenient for you.',
  },
  {
    question: 'What should I bring?',
    answer:
      'For a standard U.S. passport photo, simply come in. For a visa, immigration, or international application, bring the photo instructions from the embassy, consulate, USCIS, or requesting agency.',
  },
  {
    question: 'Are digital copies included?',
    answer:
      'Photo service starts at $9.99 and includes a printed photo copy. Digital copies are available; ask us about the format you need before your visit.',
  },
  {
    question: 'Can you take photos for children?',
    answer:
      'Yes. We welcome customers of all ages. Please bring any application-specific photo instructions with you.',
  },
];

export default function PassportPhotosPage() {
  return (
    <main>
      <SEOGraph id="ld-passport-photos" nodes={nodes} />

      {/* Hero Section */}
      <GenericHero
        layout="split-60-40"
        className="py-12 md:py-16"
        title={
          <>
            Professional <span className="text-primary">Passport Photos</span>
          </>
        }
        subtitle="Passport Photos Starting at $9.99 — Ready in Minutes"
        description="Get professional photos for U.S. passports, visas, IDs, and immigration documents. Walk in during business hours; if your photo is not accepted, we will retake it for free."
        benefits={[
          { text: 'Walk-ins welcome' },
          { text: 'Photos ready in minutes' },
          { text: 'Printed copy included' },
          { text: 'All ages welcome' },
        ]}
        badges={[
          {
            icon: DollarSign,
            text: 'Starting at $9.99',
            variant: 'default',
          },
          {
            icon: Zap,
            text: 'Same Day Service',
            variant: 'secondary',
          },
          {
            icon: Star,
            text: 'Guaranteed Acceptance',
            variant: 'outline',
            iconClassName: 'fill-yellow-400 text-yellow-400',
          },
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
            icon: Clock,
            text: 'Mon-Fri: 9:30AM-6PM PST | Sat: 10AM-2PM PST | Sun: Closed',
          },
          {
            icon: MapPin,
            text: COMPANY.address.full,
          },
        ]}
        rightContent={
          <Card className="overflow-hidden p-5 hover:shadow-lg transition-shadow border-2 border-primary/10">
            <div className="relative -mx-5 -mt-5 mb-5 aspect-[16/7] overflow-hidden border-b">
              <Image
                src="/assets/services/passport-photo-service.jpg"
                alt="Professional passport photo service at Mail All Center"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <Badge className="absolute bottom-3 left-3 bg-background/95 text-foreground shadow-sm hover:bg-background">
                Walk-ins Welcome
              </Badge>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold">
                U.S. &amp; International Photo Sizes
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Passport, visa, ID, and immigration photos made to your
                document&apos;s required size
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {[
                { icon: Globe, label: 'U.S. Passport' },
                { icon: Camera, label: 'Visa Photos' },
                { icon: Shield, label: 'ID Photos' },
                { icon: Users, label: 'Immigration' },
              ].map((photoType) => (
                <div
                  key={photoType.label}
                  className="flex items-center gap-2 rounded-lg border bg-background p-3"
                >
                  <photoType.icon className="h-4 w-4 flex-none text-primary" />
                  <span className="text-sm font-medium">{photoType.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl bg-primary/5 p-3 text-sm">
              <Globe className="mt-0.5 h-4 w-4 flex-none text-primary" />
              <p className="leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  We take U.S. and international photos.
                </span>{' '}
                Bring any country or agency instructions with you for the
                correct size and format.
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium">
                  Printed photo copy included
                </span>
                <span className="text-lg font-bold text-primary">
                  Starts at $9.99
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Digital copies are available on request.
              </p>
            </div>
          </Card>
        }
      />

      <nav
        aria-label="Passport photo page sections"
        className="border-b bg-background py-4"
      >
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-2 px-4 sm:px-6 lg:px-8">
          <span className="mr-1 text-sm font-semibold">On this page:</span>
          {[
            { href: '#before-you-visit', label: 'Before you visit' },
            {
              href: '#international-photo-sizes',
              label: 'International sizes',
            },
            { href: '#nearby-passport-photos', label: 'Directions' },
            { href: '#passport-photo-questions', label: 'Questions' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="before-you-visit"
        className="border-y bg-muted/35 py-12 md:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3">
              Walk-Ins Welcome
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Passport Photos Made Simple
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Come in when it works for you. We take your photo, review it for
              the document requirements you share with us, and provide your
              printed copy before you leave.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Clock,
                title: '1. Walk In',
                text: 'No appointment is required during our regular business hours.',
              },
              {
                icon: Camera,
                title: '2. We Take Your Photo',
                text: 'We capture a professional photo for your passport, visa, ID, or immigration document.',
              },
              {
                icon: Shield,
                title: '3. We Review It',
                text: 'Show us any agency or country instructions so we can prepare the correct photo size and format.',
              },
              {
                icon: CheckCircle,
                title: '4. Take Your Prints',
                text: 'Photo service starts at $9.99 and includes a printed copy. Need another format? Ask us before your visit.',
              },
            ].map((step) => (
              <Card key={step.title} className="h-full p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-center sm:flex-row sm:text-left">
            <CheckCircle className="h-5 w-5 flex-none text-success" />
            <p className="text-sm leading-relaxed">
              <strong>Acceptance promise:</strong> If your photo is not
              accepted, we will retake it for free.
            </p>
          </div>
        </div>
      </section>

      <section
        id="international-photo-sizes"
        className="bg-background py-12 md:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3">
              International Photo Sizes
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Common Passport &amp; Visa Photo Sizes
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              We can prepare photos in these commonly requested formats. Sizes
              below are shown as width × height.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              {
                country: 'United States',
                document: 'Passport photo',
                size: '51 × 51 mm',
                detail: '2 × 2 inches',
              },
              {
                country: 'Canada',
                document: 'Passport photo',
                size: '50 × 70 mm',
                detail: '2 × 2¾ inches',
              },
              {
                country: 'United Kingdom',
                document: 'Passport photo',
                size: '35 × 45 mm',
                detail: 'Standard printed photo',
              },
              {
                country: 'China',
                document: 'Visa photo',
                size: '33 × 48 mm',
                detail: 'White background required',
              },
              {
                country: 'India',
                document: 'Passport, visa & OCI',
                size: '51 × 51 mm',
                detail: '2 × 2 inches',
              },
            ].map((photo) => (
              <Card key={photo.country} className="h-full p-5">
                <p className="text-sm font-semibold text-primary">
                  {photo.country}
                </p>
                <h3 className="mt-1 font-semibold">{photo.document}</h3>
                <p className="mt-4 text-2xl font-bold tracking-tight">
                  {photo.size}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {photo.detail}
                </p>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground">
            Requirements can vary by document type and can change. For any other
            country, visa, or immigration application, bring the instructions
            from the embassy, consulate, or requesting agency so we can prepare
            the correct format.
          </p>
        </div>
      </section>

      <section
        id="passport-photo-questions"
        className="border-t bg-muted/35 py-12 md:py-16"
        aria-labelledby="passport-photo-questions-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3">
              Quick Answers
            </Badge>
            <h2
              id="passport-photo-questions-heading"
              className="text-3xl font-bold tracking-tight md:text-4xl"
            >
              Before You Come In
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              A few details that help you arrive prepared.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border bg-card px-5">
            {passportPhotoQuestions.map((item) => (
              <details
                key={item.question}
                className="group border-b last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold marker:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-4 leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PassportPhotoLocationPersonalization />

      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl border bg-card p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Have a Visa or Immigration Requirement?
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Bring the instructions from the embassy, consulate, USCIS, or
                requesting agency. We will use them to help prepare the right
                photo size and format for your application.
              </p>
            </div>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
