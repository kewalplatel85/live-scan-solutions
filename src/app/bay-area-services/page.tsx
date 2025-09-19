import { GenericHero } from '@/components/common/GenericHero';
import { CTASection } from '@/components/sections/CTASection';
import SEOGraph, {
  BUSINESS_NODE,
  WEBSITE_NODE,
  buildBreadcrumb,
  buildWebPage,
} from '@/components/SEOGraph';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SITE_URL } from '@/lib/config';
import {
  CheckCircle,
  FileText,
  Fingerprint,
  MapPin,
  Package,
  Phone,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

// --- META (kept indexable + canonical) ---
export const metadata: Metadata = {
  title:
    'Mail All Center – Walk-In Live Scan, Notary, Apostille & Mailbox Rentals',
  description:
    'Mail All Center provides comprehensive business services throughout the Bay Area: Live Scan & Ink Fingerprinting, Notary Public, Apostille, Passport Photos, Mailbox Rental, Packing & Shipping, Printing. Serving Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont, Santa Clara, Mountain View. DOJ & FBI certified. Same-day service. Call (650) 961-4646.',
  keywords:
    'walk-in live scan, FD258, FBI background check, ink fingerprint, walkin live scan, walkin notary public, school volunteers live scan, boys scouts live scan, real estate notary, church live scan, real estate live scan, sunnyvale live scan, bay area business services, business services near me, live scan bay area, live scan near me, fingerprinting bay area, fingerprinting near me, notary bay area, notary near me, passport photos bay area, passport photos near me, apostille bay area, apostille near me, mailbox rental near me, packing shipping near me, printing services near me, south bay business services, mountain view business services, palo alto business services, sunnyvale business services, san jose business services, cupertino business services, fremont business services, santa clara business services, professional services bay area, document services bay area, same day services',
  openGraph: {
    type: 'website',
    title:
      'Mail All Center – Walk-In Live Scan, Notary, Apostille & Mailbox Rental',
    description:
      'Comprehensive business services throughout the Bay Area: Live Scan, Notary, Passport Photos, Mailbox Rental, Packing & Shipping, Printing. Serving all Bay Area cities.',
    url: `${SITE_URL}/bay-area-services`,
  },
  alternates: {
    canonical: `${SITE_URL}/bay-area-services`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// --- DATA (unchanged; we add hrefs for internal links) ---
const bayAreaCities = [
  { name: 'Mountain View', distance: '0 miles', isMain: true },
  { name: 'Palo Alto', distance: '5 miles' },
  { name: 'Sunnyvale', distance: '3 miles' },
  { name: 'San Jose', distance: '15 miles' },
  { name: 'Cupertino', distance: '8 miles' },
  { name: 'Santa Clara', distance: '10 miles' },
  { name: 'Fremont', distance: '25 miles' },
  { name: 'Menlo Park', distance: '8 miles' },
  { name: 'Redwood City', distance: '12 miles' },
  { name: 'Foster City', distance: '15 miles' },
  { name: 'San Mateo', distance: '18 miles' },
  { name: 'Milpitas', distance: '18 miles' },
];

const services = [
  {
    title: 'Live Scan Fingerprinting',
    description: 'DOJ & FBI certified electronic fingerprinting',
    icon: Fingerprint,
    price: 'Starting at $17',
    features: [
      'Same-day processing',
      'Walk-ins welcome',
      'All background checks',
    ],
    href: '/live-scan',
  },
  {
    title: 'Notary Public Services',
    description: 'Licensed notaries for all document types',
    icon: FileText,
    price: 'Starting at $25',
    features: [
      'Real estate documents',
      'Legal papers',
      'Mobile notary available',
    ],
    href: '/notary',
  },
  {
    title: 'Passport Photos',
    description: 'Professional photos meeting all requirements',
    icon: Users,
    price: 'Only $9.99',
    features: ['Guaranteed acceptance', 'Same-day service', 'All visa types'],
    href: '/passport-photos',
  },
  {
    title: 'Mailbox Rental',
    description: 'Secure private mailbox with real street address',
    icon: Package,
    price: 'Starting at $20/month',
    features: ['24/7 access', 'Package receiving', 'Mail forwarding'],
    href: '/mailbox-rental',
  },
  {
    title: 'Packing & Shipping',
    description: 'Professional packing and shipping services',
    icon: Package,
    price: 'Competitive rates',
    features: [
      'UPS, FedEx, USPS',
      'Professional packing',
      'Insurance available',
    ],
    href: '/pack-ship',
  },
  {
    title: 'Printing Services',
    description: 'High-quality printing and copying',
    icon: FileText,
    price: 'From $0.25/page',
    features: ['Color & B&W printing', 'Large format', 'Lamination'],
    href: '/printing',
  },
];

export default function BayAreaServicesPage() {
  const url = `${SITE_URL}/bay-area-services`;
  const pageTitle =
    'Mail All Center – Walk-In Live Scan, Notary, Apostille & Mailbox Rentals';
  const pageDesc =
    'Mail All Center provides comprehensive business services from Mountain View, serving the entire Bay Area including Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont, Santa Clara and beyond. DOJ & FBI certified with over 15 years of trusted service.';

  // --- Single JSON-LD @graph including Business schema ---
  const nodes = [
    WEBSITE_NODE,
    BUSINESS_NODE, // your full LocalBusiness node with hasOfferCatalog, hours, areaServed, etc.
    buildWebPage({ url, title: pageTitle, description: pageDesc }),
    buildBreadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Bay Area Services', url },
    ]),
  ];

  return (
    <main>
      <SEOGraph id="ld-bay-area-services" nodes={nodes} />

      <GenericHero
        title={pageTitle}
        subtitle="Professional live scan and Business Services Serving All Bay Area Cities"
        description={pageDesc}
        buttons={[
          { text: 'View All Services', href: '#services', variant: 'default' },
          {
            text: 'Call (650) 961-4646',
            href: 'tel:+16509614646',
            variant: 'outline',
          },
        ]}
        benefits={[
          { text: 'DOJ & FBI Certified' },
          { text: 'Same-Day Service' },
          { text: 'Walk-Ins Welcome' },
          { text: 'Bay Area Coverage' },
        ]}
      />

      {/* Bay Area Coverage Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Serving All Bay Area Cities
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Convenient Location for the Entire Bay Area
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Silicon Valley, Mail All Center is easily
              accessible from all major Bay Area cities. We serve businesses and
              individuals throughout the region with professional, reliable
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {bayAreaCities.map((city) => (
              <Card
                key={city.name}
                className={city.isMain ? 'ring-2 ring-blue-500' : ''}
              >
                <CardContent className="p-4 text-center">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-semibold">{city.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {city.distance}
                  </p>
                  {city.isMain && (
                    <Badge variant="default" className="mt-2">
                      Our Location
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              <strong>Address:</strong> 809 Cuesta Dr, Suite B, Mountain View,
              CA 94040
            </p>
            <p className="text-muted-foreground mt-2">
              Conveniently located near major highways for easy access from
              anywhere in the Bay Area
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with strong internal links */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Complete Business Solutions
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Professional Services for Bay Area Businesses & Individuals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From live scan fingerprinting to notary services, we provide
              everything you need to keep your business running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">
                    <Link
                      href={service.href}
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      {service.title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Badge variant="secondary" className="w-fit">
                    {service.price}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link
                      href={service.href}
                      className="text-sm font-medium text-blue-700 underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Bay Area Businesses Choose Mail All Center
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over 15 years of trusted service to the Bay Area community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                DOJ & FBI Certified
              </h3>
              <p className="text-muted-foreground">
                Fully certified and authorized for all fingerprinting and
                background check services
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">4.9-Star Rating</h3>
              <p className="text-muted-foreground">
                Trusted by thousands of Bay Area customers with consistently
                excellent service
              </p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Same-Day Service</h3>
              <p className="text-muted-foreground">
                Most services completed on the same day, perfect for urgent
                business needs
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Central Location</h3>
              <p className="text-muted-foreground">
                Conveniently located in Mountain View with easy access from all
                Bay Area cities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Serving the Entire San Francisco Bay Area
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-blue-600">
                  Peninsula
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Mountain View (Our Location)</li>
                  <li>Palo Alto</li>
                  <li>Menlo Park</li>
                  <li>Redwood City</li>
                  <li>San Mateo</li>
                  <li>Foster City</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-blue-600">
                  South Bay
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>San Jose</li>
                  <li>Sunnyvale</li>
                  <li>Santa Clara</li>
                  <li>Cupertino</li>
                  <li>Campbell</li>
                  <li>Los Altos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-blue-600">
                  East Bay
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Fremont</li>
                  <li>Newark</li>
                  <li>Union City</li>
                  <li>Milpitas</li>
                  <li>Hayward</li>
                  <li>San Leandro</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-muted-foreground">
              No matter where you&apos;re located in the Bay Area, Mail All
              Center is easily accessible and ready to serve your business needs
              with professional, reliable service.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
