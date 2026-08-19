import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';
import {
  Award,
  CalendarCheck,
  Camera,
  Clock,
  FileText,
  Fingerprint,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const popularServices = [
  {
    icon: Fingerprint,
    title: 'Live Scan & FD-258',
    href: '/Live-Scan-Fingerprinting',
  },
  { icon: FileText, title: 'Notary Public', href: '/notary' },
  { icon: Camera, title: 'Passport Photos', href: '/passport-photos' },
];

export const NewHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-10 md:py-14">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1.5">
                <ShieldCheck className="mr-1.5 h-4 w-4" />
                DOJ Listed Live Scan
              </Badge>
              <Badge variant="secondary" className="px-3 py-1.5">
                <Award className="mr-1.5 h-4 w-4" />
                15+ Years Experience
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5">
                Walk-Ins Welcome
              </Badge>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Live Scan, Notary, Apostille & Passport Photos in{' '}
              <span className="text-primary">Mountain View</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Complete important personal and business tasks in one convenient
              location. Get professional help, clear instructions, and friendly
              service without visiting multiple offices.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button size="lg" asChild>
                <Link href="/book">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book a Service
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={COMPANY.phoneTel}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {COMPANY.phoneFormatted}
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
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

            <div className="mt-7 grid max-w-2xl gap-3 text-sm sm:grid-cols-2">
              <div className="flex items-start gap-2 rounded-xl border bg-card/70 p-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="mt-0.5 text-muted-foreground">
                    {COMPANY.hours.summary}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-xl border bg-card/70 p-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Mountain View Location</p>
                  <p className="mt-0.5 text-muted-foreground">
                    {COMPANY.address.street}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border bg-card shadow-xl sm:min-h-[500px]">
              <Image
                src="/assets/services/home-hero-mail-all-center.jpg"
                alt="Mail All Center professional helping a customer at the service counter"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="rounded-2xl border border-white/20 bg-white/95 p-4 shadow-lg backdrop-blur dark:bg-gray-950/95">
                  <p className="mb-3 text-sm font-semibold text-muted-foreground">
                    Popular services
                  </p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {popularServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="flex items-center gap-2 rounded-xl border bg-background p-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-primary/5"
                        >
                          <Icon className="h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 shadow-md dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200 sm:-right-5">
              One Stop. Clear Help.
            </div>
          </div>
        </div>

        <div className="mt-7 rounded-xl border border-blue-200 bg-blue-50/80 px-4 py-3 text-center text-sm text-blue-900 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100">
          Mail All Center is listed on the{' '}
          <a
            href="https://oag.ca.gov/fingerprints/locations/mail-all-center"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:no-underline"
          >
            California DOJ website
          </a>{' '}
          as an approved Live Scan location.
        </div>
      </div>
    </section>
  );
};
