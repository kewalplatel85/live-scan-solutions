import { GenericHero } from '@/components/common/GenericHero';
import { ApostilleCountries } from '@/components/sections/ApostilleCountries';
import { ApostilleCTA } from '@/components/sections/ApostilleCTA';
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
  APOSTILLE_CITIES,
  getApostilleCityBySlug,
  getApostilleCityUrl,
} from '@/data/city-pages/apostille-cities';
import { apostilleServiceSchema } from '@/data/google-business-schema';
import { SITE_URL } from '@/lib/config';
import {
  ArrowRight,
  Award,
  Building2,
  Car,
  Check,
  CheckCircle2,
  Clock,
  FileCheck2,
  FileSearch,
  FileUser,
  Globe,
  GraduationCap,
  Handshake,
  Languages,
  MapPin,
  Navigation,
  Phone,
  Scale,
  Send,
  Shield,
  ShieldCheck,
  Star,
  Timer,
  Users,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ---------------------------------------------------------------------------
// Static params — pre-render all city pages at build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return APOSTILLE_CITIES.map((city) => ({ city: city.slug }));
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
  const city = getApostilleCityBySlug(slug);
  if (!city) return {};

  const url = getApostilleCityUrl(slug);
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
// Shared data (same as main apostille page)
// ---------------------------------------------------------------------------
const apostilleServices = [
  {
    icon: FileUser,
    title: 'Personal Documents',
    description:
      'Birth certificates, death certificates, marriage certificates',
    examples: [
      'Birth certificates',
      'Death certificates',
      'Marriage certificates',
      'Divorce decrees',
      'Adoption papers',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Educational Documents',
    description: 'Diplomas, transcripts, and academic credentials',
    examples: [
      'University diplomas',
      'High school diplomas',
      'Transcripts',
      'Degree certificates',
      'Academic records',
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Documents',
    description: 'Business certificates, articles of incorporation',
    examples: [
      'Articles of incorporation',
      'Business licenses',
      'Corporate certificates',
      'Partnership agreements',
      'Power of attorney',
    ],
  },
  {
    icon: Scale,
    title: 'Legal Documents',
    description: 'Court documents, affidavits, and legal certificates',
    examples: [
      'Court orders',
      'Affidavits',
      'Legal certificates',
      'Custody documents',
      'Official document submissions',
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Consultation & Assessment',
    description:
      'We review your documents and determine apostille requirements',
    icon: Handshake,
    details: [
      'Document type verification',
      'Country requirement check',
      'Processing timeline estimate',
      'Cost assessment',
    ],
  },
  {
    step: 2,
    title: 'Document Submission',
    description: 'Submit your documents in person or via secure mail',
    icon: Send,
    details: [
      'In-person submission',
      'Secure mail option',
      'Document verification',
      'Receipt confirmation',
    ],
  },
  {
    step: 3,
    title: 'Processing & Certification',
    description: 'Our experts handle the entire apostille process',
    icon: FileCheck2,
    details: [
      'State authentication',
      'Secretary of State processing',
      'Quality verification',
      'Secure handling',
    ],
  },
  {
    step: 4,
    title: 'Delivery',
    description: 'Receive your apostilled documents securely',
    icon: CheckCircle2,
    details: [
      'In-person pickup',
      'Secure mail delivery',
      'Tracking information',
      'Document verification',
    ],
  },
];

const serviceOptions = [
  {
    icon: Users,
    title: 'Standard Processing',
    description: '5-10 business days processing time',
    timeframe: '5-10 days',
    price: 'From $75',
    features: [
      'Complete apostille service',
      'Document verification',
      'State processing',
      'Secure handling',
    ],
    popular: false,
  },
  {
    icon: Zap,
    title: 'Express Processing',
    description: '2-3 business days expedited service',
    timeframe: '2-3 days',
    price: 'From $125',
    features: [
      'Priority processing',
      'Expedited state handling',
      'Rush verification',
      'Express delivery option',
    ],
    popular: true,
  },
  {
    icon: ShieldCheck,
    title: 'Consultation Service',
    description: 'Expert guidance for complex cases',
    timeframe: 'Same day',
    price: 'From $50',
    features: [
      'Document assessment',
      'Requirement analysis',
      'Process guidance',
      'Country-specific advice',
    ],
    popular: false,
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default async function ApostilleCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getApostilleCityBySlug(slug);
  if (!city) notFound();

  const url = getApostilleCityUrl(slug);

  // Build structured data nodes
  const cityServiceSchema = {
    ...apostilleServiceSchema,
    '@id': `${url}#service`,
    name: `Apostille Services for ${city.name}, ${city.state}`,
    description: `Professional apostille document authentication services for residents and businesses in ${city.name}, ${city.county}, California.`,
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
      title: `Apostille Services in ${city.name}, CA | Mail All Center`,
      description: city.metaDescription,
    }),
    cityServiceSchema,
    buildBreadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Apostille', url: `${SITE_URL}/apostille` },
      { name: `Apostille in ${city.name}`, url },
    ]),
    buildFAQ(city.faqs),
  ];

  return (
    <main className="min-h-screen">
      <SEOGraph id={`ld-apostille-${slug}`} nodes={nodes} />

      {/* ================================================================ */}
      {/* Hero Section                                                     */}
      {/* ================================================================ */}
      <GenericHero
        badges={[
          {
            icon: Globe,
            text: 'Hague Convention Compliant',
            variant: 'secondary',
          },
          {
            icon: Shield,
            text: 'Secure Processing',
            variant: 'secondary',
          },
          {
            icon: Star,
            text: 'Expert Service',
            variant: 'outline',
            iconClassName: 'fill-yellow-400 text-yellow-400',
          },
        ]}
        title={
          <>
            <span className="text-primary">Apostille</span> Services in{' '}
            {city.name}, CA
          </>
        }
        subtitle={city.heroSubtitle}
        description={`Expert apostille document preparation services for ${city.name} residents and businesses. We assist with apostille processing for personal, educational, and corporate documents with fast, secure handling — just ${city.driveTime} from ${city.name}.`}
        benefits={[
          { text: `Only ${city.driveTime} from ${city.name}` },
          { text: 'Same-day consultation' },
          { text: 'All document types' },
          { text: 'Expert guidance' },
        ]}
        ctaText="Please call us to schedule your appointment"
        buttons={[
          {
            text: 'Get Your Apostille Today',
            href: '/contact-us',
            variant: 'default',
            size: 'lg',
          },
          {
            text: 'Call (650) 961-4646',
            href: 'tel:650-961-4646',
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
            text: `809 Cuesta Dr, Suite B, Mountain View · ${city.driveTime} from ${city.name}`,
          },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-6">
            {/* Service & Additional Services Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
                >
                  Lowest price in town
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Apostille Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileCheck2 className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Document authentication</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">State certification</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">International validation</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Secure processing</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900"
                >
                  Complete Solution
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Additional Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileUser className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Document notarization</span>
                    </li>
                    <li className="flex items-center">
                      <Languages className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Translation services</span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Embassy legalization</span>
                    </li>
                    <li className="flex items-center">
                      <Handshake className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Consultation & guidance</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Processing Times & Requirements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-green-50 border-green-200 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900"
                >
                  Fast Turnaround
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Processing Times
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm">Standard Processing</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        5-10 days
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm">Express Processing</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        2-3 days
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ShieldCheck className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm">Consultation Service</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Same day
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">
                        Country-specific requirements
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900"
                >
                  Important Info
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Document Requirements
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileSearch className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">
                        Original or certified copies
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Timer className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">
                        May require notarization first
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">
                        Hague Convention countries
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">
                        Embassy legalization available
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
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
      {/* Document Types Section                                           */}
      {/* ================================================================ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Documents We Apostille for {city.name} Residents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide apostille services for a wide range of document types
              to meet the international requirements of {city.name} residents
              and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {apostilleServices.map((service, index) => {
              const colorSchemes = [
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
              const scheme = colorSchemes[index % colorSchemes.length];

              return (
                <Card
                  key={index}
                  className="p-6 h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${scheme.bg} rounded-xl flex items-center justify-center mb-4 border ${scheme.border}`}
                    >
                      <service.icon className={`w-6 h-6 ${scheme.icon}`} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.examples.map((example, exampleIndex) => (
                        <li
                          key={exampleIndex}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-3 h-3 mr-2 text-emerald-600 dark:text-emerald-400" />
                          {example}
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
      {/* Hague Convention Countries                                       */}
      {/* ================================================================ */}
      <ApostilleCountries cityName={city.name} />

      {/* ================================================================ */}
      {/* Process Steps                                                    */}
      {/* ================================================================ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Step-by-Step Apostille Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve streamlined the apostille process for {city.name}{' '}
              residents to make it simple and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const stepColors = [
                {
                  bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
                  icon: 'text-blue-600 dark:text-blue-400',
                  iconBg: 'bg-blue-50 dark:bg-blue-950/50',
                  border: 'border-blue-200 dark:border-blue-800',
                },
                {
                  bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
                  icon: 'text-emerald-600 dark:text-emerald-400',
                  iconBg: 'bg-emerald-50 dark:bg-emerald-950/50',
                  border: 'border-emerald-200 dark:border-emerald-800',
                },
                {
                  bg: 'bg-gradient-to-br from-violet-500 to-violet-600',
                  icon: 'text-violet-600 dark:text-violet-400',
                  iconBg: 'bg-violet-50 dark:bg-violet-950/50',
                  border: 'border-violet-200 dark:border-violet-800',
                },
                {
                  bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
                  icon: 'text-amber-600 dark:text-amber-400',
                  iconBg: 'bg-amber-50 dark:bg-amber-950/50',
                  border: 'border-amber-200 dark:border-amber-800',
                },
              ];
              const stepColor = stepColors[index % stepColors.length];

              return (
                <div key={index} className="relative">
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 ${stepColor.bg} rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}
                        >
                          {step.step}
                        </div>
                        <div
                          className={`w-10 h-10 ${stepColor.iconBg} rounded-lg flex items-center justify-center border ${stepColor.border} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className={`w-5 h-5 ${stepColor.icon}`} />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center text-sm"
                          >
                            <Check className="w-3 h-3 mr-2 text-emerald-600 dark:text-emerald-400" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-200 dark:border-gray-700">
                        <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
              The most convenient and trusted apostille service for {city.name}{' '}
              residents.
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
              const icons = [Car, GraduationCap, Building2, Award];
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
      {/* Service Options (Pricing) — same as main page                    */}
      {/* ================================================================ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apostille Service Options for {city.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service level that best fits your timeline and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceOptions.map((option, index) => {
              const serviceColors = [
                {
                  bg: 'bg-slate-50 dark:bg-slate-950/50',
                  icon: 'text-slate-600 dark:text-slate-400',
                  border: 'border-slate-200 dark:border-slate-800',
                },
                {
                  bg: 'bg-orange-50 dark:bg-orange-950/50',
                  icon: 'text-orange-600 dark:text-orange-400',
                  border: 'border-orange-200 dark:border-orange-800',
                },
                {
                  bg: 'bg-indigo-50 dark:bg-indigo-950/50',
                  icon: 'text-indigo-600 dark:text-indigo-400',
                  border: 'border-indigo-200 dark:border-indigo-800',
                },
              ];
              const serviceColor = serviceColors[index % serviceColors.length];

              return (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-all duration-300 group ${
                    option.popular
                      ? 'border-primary ring-2 ring-primary/20 scale-105'
                      : ''
                  }`}
                >
                  {option.popular && (
                    <Badge
                      className="absolute -top-3 left-6 bg-gradient-to-r from-primary to-primary/80"
                      variant="secondary"
                    >
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${serviceColor.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 border ${serviceColor.border} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <option.icon className={`w-8 h-8 ${serviceColor.icon}`} />
                    </div>
                    <CardTitle className="text-xl text-center">
                      {option.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-center">
                      {option.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                          {feature}
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
      {/* Directions & Location                                            */}
      {/* ================================================================ */}
      <section className="py-16 bg-muted/50">
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
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=809+Cuesta+Dr+Suite+B,+Mountain+View,+CA+94040"
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
                    <p>809 Cuesta Dr, Suite B</p>
                    <p>Mountain View, CA 94040</p>
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <a
                        href="tel:650-961-4646"
                        className="text-primary hover:underline"
                      >
                        (650) 961-4646
                      </a>
                    </p>
                    <div className="pt-2 border-t">
                      <p className="font-medium text-foreground mb-1">Hours</p>
                      <p>Mon-Fri: 10AM - 6PM PST</p>
                      <p>Saturday: 10AM - 2PM PST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* City-Specific FAQs                                               */}
      {/* ================================================================ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apostille FAQs for {city.name} Residents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Answers to common apostille questions from {city.name} residents.
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
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Also Serving Nearby Cities
            </h2>
            <p className="text-muted-foreground mb-6">
              In addition to {city.name}, Mail All Center provides apostille
              services to residents across the Bay Area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {city.nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/apostille/${nearby.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200 text-sm font-medium"
                >
                  <MapPin className="w-3 h-3 mr-2 text-primary" />
                  Apostille in {nearby.name}
                </Link>
              ))}
              <Link
                href="/apostille"
                className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 text-sm font-medium text-primary"
              >
                <ArrowRight className="w-3 h-3 mr-2" />
                View All Apostille Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Final CTA                                                        */}
      {/* ================================================================ */}
      <ApostilleCTA cityName={city.name} />

      {/* ================================================================ */}
      {/* Footer Disclaimer                                                */}
      {/* ================================================================ */}
      <section className="py-6 bg-muted/30 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-muted-foreground">
              Mail All Center helps prepare and submit apostille documents; we
              are not a government agency. Final apostilles are issued by the
              Secretary of State or relevant office. We assist with document
              types such as birth certificates, marriage certificates,
              educational diplomas, and corporate records. Serving {city.name},{' '}
              {city.county}, and the greater Bay Area.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
