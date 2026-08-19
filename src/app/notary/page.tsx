import { GenericHero } from '@/components/common/GenericHero';
import SEOGraph, {
  buildBreadcrumb,
  buildWebPage,
  BUSINESS_NODE,
  WEBSITE_NODE,
} from '@/components/SEOGraph';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY } from '@/config/company';
import { badgeData } from '@/data/badges';
import { notaryServiceSchema } from '@/data/google-business-schema';
import { SITE_URL } from '@/lib/config';
import {
  Building2,
  CalendarCheck,
  Check,
  CheckCircle,
  Clock,
  FileCheck2,
  FileText,
  Home,
  IdCard,
  MapPin,
  PenLine,
  Phone,
  Scale,
  ShieldCheck,
  Truck,
  UserCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Notary Public in Mountain View, CA | Walk-In & Mobile Service',
  description:
    'California commissioned Notary Public in Mountain View. Walk in, book an appointment, or request mobile notary service for your home or organization.',
  openGraph: {
    type: 'website',
    title: 'Notary Public in Mountain View, CA | Mail All Center',
    description:
      'Clear, convenient document notarization in Mountain View. Walk-ins, appointments, and mobile notary service are available.',
    url: `${SITE_URL}/notary`,
    images: [
      {
        url: '/assets/services/notary-service.jpg',
        alt: 'Customer meeting with a Notary Public for document notarization',
      },
    ],
  },
  alternates: { canonical: `${SITE_URL}/notary` },
  robots: { index: true, follow: true },
};

const url = `${SITE_URL}/notary`;
const nodes = [
  WEBSITE_NODE,
  BUSINESS_NODE,
  buildWebPage({
    url,
    title: 'Notary Public in Mountain View, CA | Mail All Center',
    description:
      'California commissioned Notary Public offering walk-in, scheduled, and mobile document notarization in Mountain View and nearby communities.',
  }),
  notaryServiceSchema,
  buildBreadcrumb([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Notary Public', url },
  ]),
];

const visitOptions = [
  {
    icon: UserCheck,
    title: 'Walk In',
    description:
      'Stop by during regular business hours. No appointment is required.',
    detail: COMPANY.hours.summary,
    badge: 'Most Convenient',
  },
  {
    icon: CalendarCheck,
    title: 'Book an Appointment',
    description:
      'Reserve a time when you want a scheduled visit and less waiting.',
    detail: 'Book online in advance',
    badge: 'Reserved Time',
  },
  {
    icon: Truck,
    title: 'Mobile Notary',
    description:
      'Ask us to meet at your home, office, or organization when travel is difficult.',
    detail: 'Call for availability and travel fees',
    badge: 'We Come to You',
  },
];

const preparationItems = [
  {
    icon: FileText,
    title: 'Your Document',
    description:
      'Bring the complete document and leave no required information blank.',
  },
  {
    icon: IdCard,
    title: 'Acceptable Photo ID',
    description:
      'Bring a current identification document acceptable under California law.',
  },
  {
    icon: UserCheck,
    title: 'Every Signer in Person',
    description:
      'Each person whose signature is notarized must personally appear before the notary.',
  },
  {
    icon: FileCheck2,
    title: 'Required Notarial Act',
    description:
      'Know whether the receiving agency requires an acknowledgment, jurat, or another act.',
  },
];

const processSteps = [
  {
    icon: FileText,
    title: 'Bring Your Document & ID',
    description:
      'Arrive with the document, acceptable identification, and all required signers.',
  },
  {
    icon: ShieldCheck,
    title: 'Identity Is Verified',
    description:
      'The notary checks identity and records the required journal information.',
  },
  {
    icon: PenLine,
    title: 'Sign or Acknowledge',
    description:
      'Complete the signature, acknowledgment, oath, or affirmation required for the act.',
  },
  {
    icon: CheckCircle,
    title: 'Notarization Is Completed',
    description:
      'The correct certificate is completed and the official notary seal is applied.',
  },
];

const notarialActs = [
  {
    icon: UserCheck,
    title: 'Acknowledgments',
    description:
      'The signer confirms their identity and acknowledges signing the document voluntarily.',
  },
  {
    icon: PenLine,
    title: 'Jurats',
    description:
      'The signer takes an oath or affirmation and signs the document in the notary’s presence.',
  },
  {
    icon: Scale,
    title: 'Oaths & Affirmations',
    description:
      'The notary administers a verbal promise that a statement or testimony is truthful.',
  },
  {
    icon: FileCheck2,
    title: 'Power of Attorney Copies',
    description:
      'California notaries may certify a copy of a power of attorney when requirements are met.',
  },
];

const commonDocuments = [
  'Powers of attorney',
  'Real estate documents',
  'Affidavits and sworn statements',
  'Trust and estate documents',
  'Business agreements',
  'School and consent forms',
  'Financial documents',
  'Travel authorization forms',
];

export default function NotaryPublicPage() {
  return (
    <main className="min-h-screen">
      <SEOGraph id="ld-notary" nodes={nodes} />

      <GenericHero
        className="!py-10 md:!py-14"
        badges={badgeData.notaryPublic}
        title={
          <>
            Notary Public Services in{' '}
            <span className="text-primary">Mountain View</span>
          </>
        }
        subtitle="Walk In, Book a Time, or Request Mobile Service"
        description="Bring your document and acceptable photo ID to our Mountain View office for clear, professional notarization. Walk-ins are welcome, appointments are available, and mobile service can be arranged for homes and organizations."
        benefits={[
          { text: 'California commissioned Notary Public' },
          { text: 'Walk-ins welcome' },
          { text: 'Appointments available' },
          { text: 'Mobile notary by request' },
        ]}
        buttons={[
          {
            text: 'Book Notary Service',
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
          { icon: Clock, text: COMPANY.hours.summary },
          { icon: MapPin, text: COMPANY.address.full },
        ]}
        rightContent={
          <div className="overflow-hidden rounded-3xl border bg-card shadow-lg">
            <div className="relative aspect-[4/3] min-h-[320px]">
              <Image
                src="/assets/services/notary-service.jpg"
                alt="Customer meeting with a California Notary Public for document notarization"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <Badge className="mb-3 bg-white text-gray-900 hover:bg-white">
                  Walk-Ins Welcome
                </Badge>
                <p className="text-xl font-bold">Simple, In-Person Service</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Bring your document, photo ID, and every person who needs a
                  signature notarized.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="border-y bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3">
              Choose What Works for You
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Three Easy Ways to Get Notary Service
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Visit our Mountain View office or ask about mobile service at your
              location.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {visitOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card key={option.title} className="relative h-full pt-3">
                  <Badge className="absolute -top-3 left-5" variant="secondary">
                    {option.badge}
                  </Badge>
                  <CardHeader className="pb-3 pt-5">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">
                      {option.description}
                    </p>
                    <p className="mt-4 border-t pt-4 text-sm font-medium">
                      {option.detail}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge variant="secondary" className="mb-3">
                Before You Arrive
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                What to Bring for Notarization
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Preparing these items helps avoid delays and makes your visit
                easier.
              </p>
              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
                <strong>Important:</strong> If you do not know which notarial
                act your document needs, ask the person or agency receiving the
                document before your visit. A Notary Public cannot choose the
                act or provide legal advice.
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {preparationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="h-full">
                    <CardContent className="p-5">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-4xl text-center">
            <Badge variant="secondary" className="mb-3">
              What to Expect
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your Notary Visit in Four Simple Steps
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Most routine notarizations follow this straightforward process.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border bg-card p-5 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-3xl font-bold text-primary/15">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/40 py-12 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Common Notarial Acts We Perform
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              The document’s receiving agency or your attorney should tell you
              which act is required.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {notarialActs.map((act) => {
              const Icon = act.icon;
              return (
                <Card key={act.title} className="h-full">
                  <CardContent className="flex gap-4 p-5 sm:p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{act.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {act.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Documents Customers Commonly Bring
              </h2>
              <p className="mt-3 text-muted-foreground">
                We can notarize signatures on many document types when the
                document contains or is accompanied by the proper notarial
                certificate.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {commonDocuments.map((document) => (
                  <div
                    key={document}
                    className="flex items-center gap-3 rounded-xl bg-muted/50 p-3"
                  >
                    <Check className="h-4 w-4 flex-shrink-0 text-green-600" />
                    <span className="text-sm font-medium">{document}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Truck className="h-6 w-6" />
              </div>
              <Badge className="mt-5 bg-white text-primary hover:bg-white">
                Mobile Notary
              </Badge>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Need Us to Come to You?
              </h2>
              <p className="mt-3 leading-relaxed text-primary-foreground/85">
                Mobile service may be arranged at a home, office, care facility,
                or organization in Mountain View and nearby cities. Availability
                and travel fees depend on the location and time.
              </p>
              <Button variant="secondary" size="lg" className="mt-6" asChild>
                <a href={COMPANY.phoneTel}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {COMPANY.phoneFormatted}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/40 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <FileCheck2 className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">
              Ready to Have Your Document Notarized?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              Walk into our Mountain View office, reserve a time online, or call
              to ask about mobile availability.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book Notary Service
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={COMPANY.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-5">
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                {COMPANY.address.full}
              </span>
              <span className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                Walk-ins welcome
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-background py-6">
        <div className="container mx-auto px-4 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl">
            A Notary Public verifies identity and completes the requested
            notarial act; a notary does not verify a document’s truthfulness,
            accuracy, or legal validity and cannot provide legal advice. Every
            signer must personally appear before the notary under current
            California law.
          </p>
        </div>
      </section>
    </main>
  );
}
