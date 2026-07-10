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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { COMPANY } from '@/config/company';
import {
  getLiveScanCityBySlug,
  getLiveScanCityUrl,
  LIVESCAN_CITIES,
} from '@/data/city-pages/livescan-cities';
import { liveScanServiceSchema } from '@/data/google-business-schema';
import { SITE_URL } from '@/lib/config';
import {
  ArrowRight,
  Award,
  Building2,
  Car,
  Check,
  Clock,
  CreditCard,
  Fingerprint,
  Globe,
  GraduationCap,
  HardDrive,
  Heart,
  Info,
  MapPin,
  Navigation,
  Phone,
  Scale,
  Shield,
  Smartphone,
  Star,
  Truck,
  Users,
  Wifi,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ---------------------------------------------------------------------------
// Static params — pre-render all city pages at build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return LIVESCAN_CITIES.map((city) => ({ city: city.slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata — unique title, description, OG per city
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getLiveScanCityBySlug(slug);
  if (!city) return {};

  const url = getLiveScanCityUrl(slug);
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    openGraph: {
      type: 'website',
      title: city.metaTitle,
      description: city.metaDescription,
      url,
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

// ---------------------------------------------------------------------------
// Service comparison table data
// ---------------------------------------------------------------------------
const serviceComparison = [
  {
    type: 'Live Scan Electronic Submission',
    bestFor: 'Employment, licensing, school volunteering, background checks',
    price: 'From $16.99*',
    highlight: true,
  },
  {
    type: 'FBI FD-258 Ink Fingerprinting',
    bestFor: 'International use, immigration, adoption, personal records',
    price: 'Contact us',
    highlight: false,
  },
];

// ---------------------------------------------------------------------------
// Icon mapping for target audience categories
// ---------------------------------------------------------------------------
const categoryIcons: Record<string, typeof GraduationCap> = {
  'Education & Childcare': GraduationCap,
  'Community Volunteers': Users,
  'Healthcare Professionals': Heart,
  'Real Estate & Notaries': Scale,
};

const categoryColors = [
  {
    bg: 'bg-blue-50 dark:bg-blue-950/50',
    icon: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    bullet: 'bg-blue-600',
  },
  {
    bg: 'bg-emerald-50 dark:bg-emerald-950/50',
    icon: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-800',
    bullet: 'bg-emerald-600',
  },
  {
    bg: 'bg-rose-50 dark:bg-rose-950/50',
    icon: 'text-rose-600 dark:text-rose-400',
    border: 'border-rose-200 dark:border-rose-800',
    bullet: 'bg-rose-600',
  },
  {
    bg: 'bg-amber-50 dark:bg-amber-950/50',
    icon: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-800',
    bullet: 'bg-amber-600',
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default async function LiveScanCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getLiveScanCityBySlug(slug);
  if (!city) notFound();

  const url = getLiveScanCityUrl(slug);

  // Build structured data nodes
  const cityServiceSchema = {
    ...liveScanServiceSchema,
    '@id': `${url}#service`,
    name: `Live Scan Fingerprinting for ${city.name}, ${city.state}`,
    description: `DOJ-listed, FBI-approved Live Scan fingerprinting services for residents and organizations in ${city.name}, ${city.county}, California. Starting at $16.99 rolling fee.`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: city.state,
      addressCountry: 'US',
    },
  };

  const nodes = [
    WEBSITE_NODE,
    BUSINESS_NODE,
    buildWebPage({
      url,
      title: `Certified Live Scan Fingerprinting in ${city.name}, CA | Mail All Center`,
      description: city.metaDescription,
    }),
    cityServiceSchema,
    buildBreadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      {
        name: 'Live Scan Fingerprinting',
        url: `${SITE_URL}/Live-Scan-Fingerprinting`,
      },
      { name: `Live Scan in ${city.name}`, url },
    ]),
    buildFAQ(city.faqs),
  ];

  return (
    <main className="min-h-screen">
      <SEOGraph id={`ld-livescan-${slug}`} nodes={nodes} />

      {/* ================================================================ */}
      {/* Hero Section                                                     */}
      {/* ================================================================ */}
      <GenericHero
        badges={[
          {
            icon: Shield,
            text: 'DOJ Listed Provider',
            variant: 'default',
          },
          {
            icon: Fingerprint,
            text: 'Walk-ins Welcome',
            variant: 'secondary',
          },
          {
            icon: Zap,
            text: 'Results in 24-48 Hours',
            variant: 'secondary',
          },
          {
            icon: Star,
            text: '15+ Years Experience',
            variant: 'outline',
            iconClassName: 'fill-yellow-400 text-yellow-400',
          },
        ]}
        title={
          <>
            Official Live Scan{' '}
            <span className="text-primary">Fingerprinting Services</span> for{' '}
            {city.name}
          </>
        }
        subtitle={city.heroSubtitle}
        description={`DOJ-listed, FBI-approved Live Scan fingerprinting and FD-258 ink card services for ${city.name} residents and organizations. Walk-in or mobile service available — just ${city.driveTime} from ${city.name}.`}
        disclaimerText="*Rolling fee only. Additional DOJ/FBI government submission fees apply and vary by application type. Contact us for a complete fee estimate."
        benefits={[
          { text: `Only ${city.driveTime} from ${city.name}` },
          { text: 'Same-day processing' },
          { text: 'Mobile service for groups' },
          { text: 'Lowest rolling fee in the Bay Area' },
          { text: 'Trusted by local schools and churches' },
        ]}
        ctaText="Please call us to schedule your appointment"
        buttons={[
          {
            text: 'Get Your Fingerprinting Today',
            href: '/contact-us',
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
            text: 'Mon-Fri: 10AM-6PM PST | Sat: 10AM-2PM PST | Sun: Closed',
          },
          {
            icon: MapPin,
            text: `${COMPANY.address.street}, Mountain View · ${city.driveTime} from ${city.name}`,
          },
          {
            icon: CreditCard,
            text: 'Payment: Credit Cards • Cash • Corporate Invoicing • Vouchers',
          },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-6">
            {/* First Row - Service Cards (2 columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900"
                >
                  FBI FD-258
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Ink Fingerprinting
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">
                        Authentic FBI cards provided
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">DOJ guidelines compliance</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">International acceptance</span>
                    </li>
                    <li className="flex items-center">
                      <HardDrive className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">Hard card backup option</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <div className="flex items-center gap-2 absolute -top-3 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900"
                  >
                    Rolling fee lowest in town
                  </Badge>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="default"
                        className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:text-white dark:hover:bg-green-700 flex items-center gap-1"
                      >
                        From $16.99
                        <Info className="w-3 h-3 opacity-80" />
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="text-xs">
                        <strong>Rolling fee starts at $16.99.</strong>
                        <br />
                        Additional DOJ/FBI government submission fees apply and
                        vary by application type. Contact us for a full fee
                        breakdown.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Live Scan Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Smartphone className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Digital fingerprint capture
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Real-time quality verification
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Electronic submission to DOJ/FBI
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Wifi className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">AFIS system integration</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Second Row — Mobile Service & Service Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900"
                >
                  Mobile Service
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    On-Site for {city.name}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Truck className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">
                        We come to your {city.name} location
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Groups of 5 or more</span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">
                        Schools, churches & offices
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Corporate & group rates</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
                >
                  {city.driveTime} from {city.name}
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">Quick Access</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{COMPANY.address.street}</span>
                    </li>
                    <li className="flex items-center">
                      <Car className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">
                        Via {city.nearbyHighways.slice(0, 2).join(' or ')}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Free on-site parking</span>
                    </li>
                    <li className="flex items-center">
                      <Fingerprint className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Walk-ins welcome</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* California DOJ Approval Banner */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Mail All Center is listed on the </strong>
                <a
                  href="https://oag.ca.gov/fingerprints/locations/mail-all-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline font-medium"
                >
                  California DOJ website as an approved Live Scan location
                </a>
              </p>
            </div>
          </div>
        }
      />

      {/* ================================================================ */}
      {/* Unique Intro Content — critical for SEO uniqueness               */}
      {/* ================================================================ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {city.introHeading}
            </h2>
            <div className="space-y-6">
              {city.introContent.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Hyper-Local Target Audience Breakdown (the SEO "hook")           */}
      {/* ================================================================ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Needs Live Scan in {city.name}?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve the specific institutions and organizations in{' '}
              {city.name} whose employees, applicants, and volunteers require
              DOJ/FBI background checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {city.targetAudience.map((audience, index) => {
              const color = categoryColors[index % categoryColors.length];
              const Icon = categoryIcons[audience.category] || Users;

              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${color.bg} rounded-xl flex items-center justify-center flex-shrink-0 border ${color.border}`}
                      >
                        <Icon className={`w-6 h-6 ${color.icon}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {audience.category}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {audience.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mt-2">
                      {audience.institutions.map((institution, instIndex) => (
                        <li
                          key={instIndex}
                          className="flex items-center text-sm"
                        >
                          <div
                            className={`w-1.5 h-1.5 ${color.bullet} rounded-full mr-3 flex-shrink-0`}
                          />
                          {institution}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Service & Pricing Comparison Table                               */}
      {/* ================================================================ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fingerprinting Services & Pricing for {city.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer two fingerprinting methods to meet every need. Choose the
              right option for your application type.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-4 px-6 font-semibold text-sm">
                        Service Type
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-sm">
                        Best For
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-sm">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceComparison.map((service, index) => (
                      <tr
                        key={index}
                        className={`border-b last:border-b-0 ${
                          service.highlight
                            ? 'bg-green-50/50 dark:bg-green-950/10'
                            : ''
                        }`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            {service.highlight ? (
                              <Smartphone className="w-5 h-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <Fingerprint className="w-5 h-5 text-purple-600 flex-shrink-0" />
                            )}
                            <span className="font-medium text-sm">
                              {service.type}
                            </span>
                            {service.highlight && (
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs"
                              >
                                Most Common
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">
                          {service.bestFor}
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`font-semibold text-sm ${
                              service.highlight
                                ? 'text-green-700 dark:text-green-400'
                                : ''
                            }`}
                          >
                            {service.price}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <p className="text-xs text-muted-foreground mt-4 text-center max-w-2xl mx-auto">
              *Rolling fee only. Additional government (DOJ/FBI) submission fees
              are required and vary by application type — typically $32–$75
              depending on the requesting agency. Contact us at{' '}
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

      {/* ================================================================ */}
      {/* Why Choose Us — city-specific                                    */}
      {/* ================================================================ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why {city.name} Residents Choose Mail All Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most convenient and affordable certified Live Scan provider
              for {city.name} residents and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {city.whyChooseUs.map((reason, index) => {
              const reasonColors = [
                {
                  bg: 'bg-blue-50 dark:bg-blue-950/50',
                  icon: 'text-blue-600 dark:text-blue-400',
                  border: 'border-blue-200 dark:border-blue-800',
                },
                {
                  bg: 'bg-emerald-50 dark:bg-emerald-950/50',
                  icon: 'text-emerald-600 dark:text-emerald-400',
                  border: 'border-emerald-200 dark:border-emerald-800',
                },
                {
                  bg: 'bg-violet-50 dark:bg-violet-950/50',
                  icon: 'text-violet-600 dark:text-violet-400',
                  border: 'border-violet-200 dark:border-violet-800',
                },
                {
                  bg: 'bg-amber-50 dark:bg-amber-950/50',
                  icon: 'text-amber-600 dark:text-amber-400',
                  border: 'border-amber-200 dark:border-amber-800',
                },
              ];
              const color = reasonColors[index % reasonColors.length];
              const icons = [Car, Shield, Award, Truck];
              const Icon = icons[index % icons.length];

              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${color.bg} rounded-xl flex items-center justify-center flex-shrink-0 border ${color.border}`}
                    >
                      <Icon className={`w-6 h-6 ${color.icon}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Hyper-Local Geography Context                                    */}
      {/* ================================================================ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How to Reach Us from {city.name}
              </h2>
              <p className="text-lg text-muted-foreground">
                Conveniently located just {city.driveTime} from {city.name}.
              </p>
            </div>

            <Card className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/50 rounded-lg flex items-center justify-center border border-blue-200 dark:border-blue-800">
                      <Navigation className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold">
                      Driving Directions
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {city.drivingDirections}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Nearby highways:</strong>{' '}
                      {city.nearbyHighways.join(', ')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Corporate on-site mobile fingerprinting</strong>{' '}
                      is available directly inside {city.name} for groups of 5
                      or more. We bring our Live Scan equipment to your location
                      — ideal for schools, churches, and offices.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={COMPANY.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions on Google Maps
                    </a>
                  </Button>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                      <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Our Location</h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">
                      Mail All Center
                    </p>
                    <p>{COMPANY.address.street}</p>
                    <p>
                      {COMPANY.address.city}, {COMPANY.address.state}{' '}
                      {COMPANY.address.zip}
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <a
                        href={COMPANY.phoneTel}
                        className="text-primary hover:underline"
                      >
                        {COMPANY.phoneFormatted}
                      </a>
                    </p>
                    <div className="pt-2 border-t">
                      <p className="font-medium text-foreground mb-1">Hours</p>
                      <p>
                        {COMPANY.hours.weekdays.label}:{' '}
                        {COMPANY.hours.weekdays.display}
                      </p>
                      <p>
                        {COMPANY.hours.saturday.label}:{' '}
                        {COMPANY.hours.saturday.display}
                      </p>
                      <p>
                        {COMPANY.hours.sunday.label}:{' '}
                        {COMPANY.hours.sunday.display}
                      </p>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-medium text-foreground mb-1">
                        {city.name} Landmarks Nearby
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {city.localLandmarks.map((landmark, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2 py-1 bg-muted/50 rounded text-xs"
                          >
                            {landmark}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* City-Specific FAQs (Schema Ready)                                */}
      {/* ================================================================ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live Scan FAQs for {city.name} Residents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Answers to common Live Scan fingerprinting questions from{' '}
              {city.name} residents.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {city.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              <a href="/faq" className="text-primary hover:underline">
                Browse our FAQs for more details
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Nearby Cities / Internal Linking                                  */}
      {/* ================================================================ */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Also Serving Nearby Cities
            </h2>
            <p className="text-muted-foreground mb-6">
              In addition to {city.name}, Mail All Center provides certified
              Live Scan fingerprinting services to residents across the Bay
              Area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {city.nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/Live-Scan-Fingerprinting/${nearby.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200 text-sm font-medium"
                >
                  <MapPin className="w-3 h-3 mr-2 text-primary" />
                  Live Scan in {nearby.name}
                </Link>
              ))}
              <Link
                href="/Live-Scan-Fingerprinting"
                className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 text-sm font-medium text-primary"
              >
                <ArrowRight className="w-3 h-3 mr-2" />
                View All Live Scan Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Final CTA                                                        */}
      {/* ================================================================ */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
            <Fingerprint className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Live Scan Done Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Certified Live Scan fingerprinting for {city.name} residents. Walk
            in or call us — fast, DOJ-listed, and starting at the lowest rolling
            fee in the Bay Area.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 py-6"
              asChild
            >
              <Link href="/contact-us">
                <Fingerprint className="mr-2 h-5 w-5" />
                Schedule Fingerprinting
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href={COMPANY.phoneTel}>
                <Phone className="mr-2 h-5 w-5" />
                Call {COMPANY.phoneFormatted}
              </Link>
            </Button>
          </div>

          {/* Location info */}
          <div className="inline-flex items-center gap-2 text-sm opacity-80">
            <MapPin className="w-4 h-4" />
            <span>{COMPANY.address.full}</span>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Footer Disclaimer                                                */}
      {/* ================================================================ */}
      <section className="py-6 bg-muted/30 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-muted-foreground">
              Mail All Center is located in Mountain View, CA and is listed on
              the California DOJ website as an approved Live Scan location. We
              provide walk-in, scheduled, and mobile Live Scan fingerprinting
              services for {city.name}, {city.county}, and the greater Bay Area.
              Rolling fee starts at $16.99. Additional government (DOJ/FBI)
              submission fees apply and vary by application type.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
