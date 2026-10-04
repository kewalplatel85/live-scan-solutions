import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { COMPANY } from '@/config/company';
import { LIVESCAN_CITIES } from '@/data/city-pages/livescan-cities';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Live Scan Fingerprinting Areas We Serve | Bay Area',
  description:
    'Find Live Scan fingerprinting service information for Mountain View and nearby Bay Area communities. Walk-ins are available at our Mountain View location, with mobile service for qualifying groups.',
  alternates: { canonical: '/Live-Scan-Fingerprinting/areas-we-serve' },
};

export default function LiveScanAreasWeServePage() {
  return (
    <main>
      <section className="border-b bg-primary/5 py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Bay Area Live Scan Service
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Live Scan Fingerprinting Areas We Serve
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Choose your city for local service details, travel information,
              and common Live Scan needs. Walk-ins are available at our Mountain
              View office.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LIVESCAN_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/Live-Scan-Fingerprinting/${city.slug}`}
                className="group"
              >
                <Card className="h-full p-5 transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold">
                    Live Scan near {city.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {city.distanceFromStore} from our Mountain View office
                    {city.driveTime !== 'Walk-in' &&
                      ` · about ${city.driveTime}`}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-primary">
                    View {city.name} details
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border bg-muted/35 p-6 text-center md:p-8">
            <h2 className="text-2xl font-bold">One Convenient Location</h2>
            <p className="mt-3 text-muted-foreground">
              Our walk-in Live Scan office is at {COMPANY.address.full}. For
              qualifying organizations and groups, ask about mobile Live Scan
              service throughout the Bay Area.
            </p>
            <Link
              href="/on-site-mobile-live-scan"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Learn about Mobile Live Scan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
