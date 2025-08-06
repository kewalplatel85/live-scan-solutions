// import { HeroSectionCarousel } from '@/components/HeroSectionCarousel';
// import { ServicesBanner } from '@/components/ServicesBanner';
import { FAQSection } from '@/components/sections/FAQSection';
import { NewHeroSection } from '@/components/sections/NewHeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Top-rated Live Scan, Fingerprinting, Notary, Apostille, Passport Photo and Shipping Services | Mail All Center',
  description:
    'Mail All Center is your trusted business service provider in Mountain View, CA, serving the entire Bay Area. We offer Live Scan & Ink Fingerprinting, Notary Public, Apostille, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, and more. DOJ & FBI certified with over 15 years of experience. Same-day service, walk-ins welcome. Serving Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont, Santa Clara, and all Bay Area cities. Call (650) 961-4646.',
  keywords:
    'Mail All Center, Mail All Center Mountain View, business services mountain view, business services bay area, business services near me, live scan fingerprinting mountain view, live scan bay area, live scan near me, fingerprinting near me, notary public mountain view, notary bay area, notary near me, passport photos mountain view, passport photos bay area, passport photos near me, apostille services mountain view, apostille bay area, apostille near me, mailbox rental mountain view, mailbox rental bay area, packing shipping mountain view, packing shipping bay area, printing services mountain view, printing bay area, DOJ FBI certified fingerprinting, same day service mountain view, walk in service bay area, professional services silicon valley, document services peninsula, business center mountain view, live scan palo alto, live scan sunnyvale, live scan san jose, live scan cupertino, live scan fremont, live scan santa clara, notary palo alto, notary sunnyvale, notary san jose, fingerprinting silicon valley, business services peninsula, professional services south bay',
  openGraph: {
    title:
      'Mail All Center | Complete Business Services Mountain View & Bay Area',
    description:
      'Your trusted business service provider in Mountain View, serving the entire Bay Area. Live Scan, Notary, Passport Photos, Mailbox Rental, Packing & Shipping, Printing. DOJ & FBI certified, 15+ years experience. Same-day service, walk-ins welcome.',
    url: 'https://www.mailallcenter.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mail All Center',
    images: [
      {
        url: '/assets/Logo/icons8-fingerprint-scan-80.png',
        width: 80,
        height: 80,
        alt: 'Mail All Center - Professional Business Services in Mountain View & Bay Area',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MailAllCenter',
    title: 'Mail All Center | Business Services Mountain View & Bay Area',
    description:
      'Your trusted business service provider serving Mountain View and entire Bay Area. Live Scan, Notary, Passport Photos, Mailbox Rental, Packing & Shipping, Printing. DOJ & FBI certified, same-day service.',
    images: ['/assets/Logo/icons8-fingerprint-scan-80.png'],
  },
  alternates: {
    canonical: 'https://www.mailallcenter.com',
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Local Business Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.mailallcenter.com/#homepage',
            name: 'Mail All Center',
            alternateName: 'Mail All Center Mountain View',
            description:
              "Bay Area's trusted business service provider offering Live Scan & Ink Fingerprinting, Notary Public, Apostille, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, and more in Mountain View, CA.",
            url: 'https://www.mailallcenter.com',
            telephone: '(650) 961-4646',
            email: 'info@livescansolutions.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '809 Cuesta Dr, Suite B',
              addressLocality: 'Mountain View',
              addressRegion: 'CA',
              postalCode: '94040',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 37.4089,
              longitude: -122.0877,
            },
            openingHours: ['Mo-Fr 10:00-17:00', 'Sa 10:00-14:00'],
            priceRange: '$17-$125',
            paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
            currenciesAccepted: 'USD',
            areaServed: {
              '@type': 'State',
              name: 'California',
              containsPlace: [
                {
                  '@type': 'City',
                  name: 'Mountain View',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'California',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Palo Alto',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'California',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Sunnyvale',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'California',
                  },
                },
                {
                  '@type': 'City',
                  name: 'San Jose',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'California',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Cupertino',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'California',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Fremont',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'California',
                  },
                },
              ],
            },
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 37.4089,
                longitude: -122.0877,
              },
              geoRadius: '30',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Business and Document Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Live Scan Fingerprinting',
                    description:
                      'Electronic fingerprinting for employment, licensing, and background checks',
                    areaServed: 'Bay Area, California',
                  },
                  price: '17',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Notary Public Services',
                    description:
                      'Professional document notarization with licensed notaries',
                    areaServed: 'Bay Area, California',
                  },
                  price: '25',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Passport Photos',
                    description:
                      'Professional passport photos meeting all requirements',
                    areaServed: 'Bay Area, California',
                  },
                  price: '9.99',
                  priceCurrency: 'USD',
                },
              ],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
              bestRating: '5',
            },
            sameAs: [
              'https://www.google.com/maps/place/Mail+All+Center',
              'https://www.yelp.com/biz/mail-all-center-mountain-view',
            ],
          }),
        }}
      />

      {/* New Hero with clear value proposition */}
      <NewHeroSection />

      {/* Our Services - compact grid */}
      {/* <OurServicesSection /> */}

      {/* Why choose us - trust indicators */}
      <WhyChooseUsSection />

      {/* Bay Area Coverage */}
      <section className="py-12 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Serving the Entire Bay Area
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in Mountain View with easy access from all
              major Bay Area cities
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 text-center">
              {[
                'Mountain View',
                'Palo Alto',
                'Sunnyvale',
                'Los Altos',
                'Cupertino',
                'Menlo Park',
                'Santa Clara',
                'San Jose',
                'Campbell',
                'Saratoga',
                'Morgan Hill',
                'Milpitas',
                'Fremont',
                'Redwood City',
                'San Mateo',
                'Foster City',
              ].map((city) => (
                <div
                  key={city}
                  className="py-2 px-2 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Address:</strong> 809 Cuesta Dr, Suite B, Mountain View,
                CA 94040
              </p>
              <p className="text-sm text-muted-foreground">
                Call{' '}
                <a
                  href="tel:+16509614646"
                  className="text-primary hover:underline font-semibold"
                >
                  (650) 961-4646
                </a>{' '}
                for service in your area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ - most common questions */}
      {/* <QuickFAQSection /> */}
      <FAQSection />

      {/* Final CTA */}
      {/* <SimpleCTASection /> */}
    </main>
  );
}
