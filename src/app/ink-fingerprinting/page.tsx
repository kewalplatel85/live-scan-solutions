import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { COMPANY } from '@/config/company';
import {
  CalendarCheck,
  CheckCircle,
  ClipboardCheck,
  Clock,
  ExternalLink,
  FileText,
  Fingerprint,
  MapPin,
  Phone,
  Shield,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FD-258 Ink Fingerprinting in Mountain View | Walk-Ins Welcome',
  description:
    'Professional FD-258 ink fingerprint cards in Mountain View, CA for out-of-state requirements, licensing, employment, and personal records. Walk-ins welcome.',
  alternates: { canonical: '/ink-fingerprinting' },
};

export default function InkFingerprintingPage() {
  return (
    <main>
      <GenericHero
        layout="split-60-40"
        className="py-12 md:py-16"
        badges={[
          { icon: Fingerprint, text: 'FD-258 Fingerprint Cards' },
          { icon: CheckCircle, text: 'Walk-Ins Welcome', variant: 'secondary' },
        ]}
        title={
          <>
            Professional{' '}
            <span className="text-primary">Ink Fingerprinting</span>
          </>
        }
        subtitle="FD-258 Cards for Out-of-State & Federal Requirements"
        description="Need ink fingerprint cards instead of California Live Scan? We provide clear, professionally rolled FD-258 fingerprint cards for many out-of-state, federal, licensing, employment, and personal-record requests."
        benefits={[
          { text: 'FD-258 cards available' },
          { text: 'Bring your agency instructions' },
          { text: 'All ages welcome' },
          { text: 'Professional assistance' },
        ]}
        buttons={[
          {
            text: 'Book Ink Fingerprinting',
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
            text: 'Mon-Fri: 9:30AM-6PM PST | Sat: 10AM-2PM PST',
          },
          { icon: MapPin, text: COMPANY.address.full },
        ]}
        rightContent={
          <Card className="border-2 border-primary/10 p-6 shadow-sm">
            <Badge variant="secondary">Before You Visit</Badge>
            <h2 className="mt-4 text-2xl font-bold">Bring What You Need</h2>
            <div className="mt-5 space-y-4">
              {[
                {
                  icon: Shield,
                  title: 'Valid photo ID',
                  text: 'Bring an unexpired government-issued photo ID.',
                },
                {
                  icon: FileText,
                  title: 'Agency instructions',
                  text: 'Bring the form or instructions that specify the card and number of copies required.',
                },
                {
                  icon: ClipboardCheck,
                  title: 'Your destination details',
                  text: 'Know where you will send or submit your completed cards.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        }
      />

      <section className="border-y bg-muted/35 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Get Your FD-258 Cards in Three Steps
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              [
                '1. Bring Your Instructions',
                'Bring your ID and any agency form or card requirements.',
              ],
              [
                '2. We Roll Your Prints',
                'We prepare clear ink impressions on the required FD-258 cards.',
              ],
              [
                '3. Take Your Completed Cards',
                'You take the cards with you to submit to your agency or destination.',
              ],
            ].map(([title, text]) => (
              <Card key={title} className="p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Need California electronic fingerprint submission instead?{' '}
            <Link
              href="/Live-Scan-Fingerprinting"
              className="font-semibold text-primary hover:underline"
            >
              Visit our Live Scan Fingerprinting page.
            </Link>
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3">
              Common Uses
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              When You May Need Ink Fingerprints
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ink cards are often requested when an agency needs you to submit
              fingerprints outside California&apos;s electronic Live Scan
              system.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
            {[
              {
                icon: Fingerprint,
                title: 'FBI Identity History Summary Check',
                text: 'The FBI offers Identity History Summary Checks online, by mail, or through an approved channeler. If you submit fingerprint cards, follow the FBI’s current card instructions.',
                href: 'https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks',
                linkText: 'View FBI instructions',
              },
              {
                icon: ClipboardCheck,
                title: 'Out-of-State Licensing or Employment',
                text: 'A licensing board or employer outside California may ask for ink cards instead of an electronic California Live Scan submission.',
              },
              {
                icon: Shield,
                title: 'Federal or Agency Requests',
                text: 'Federal programs and other agencies may specify paper fingerprint cards. Bring the instructions so we can prepare the requested format.',
              },
              {
                icon: FileText,
                title: 'Personal Records or International Requests',
                text: 'Some personal-record, adoption, travel, or foreign-document requests require fingerprint cards or a particular number of copies.',
              },
            ].map((item) => (
              <Card key={item.title} className="p-5">
                <item.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    {item.linkText} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground">
            Requirements, card quantities, and submission instructions are set
            by the requesting agency. We provide fingerprinting services and do
            not receive or determine background-check results.
          </p>
        </div>
      </section>
    </main>
  );
}
