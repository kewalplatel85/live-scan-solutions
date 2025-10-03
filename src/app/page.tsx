import SEOGraph, {
  buildBreadcrumb,
  buildWebPage,
  BUSINESS_NODE,
  WEBSITE_NODE,
} from '@/components/SEOGraph';
import { FAQSection } from '@/components/sections/FAQSection';
import { NewHeroSection } from '@/components/sections/NewHeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { SITE_URL } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Top-rated Live Scan, Fingerprinting, Notary, Apostille, Passport Photo and Shipping Services | Mail All Center',
  description:
    'Mail All Center is your trusted business service provider in Mountain View, CA, serving the entire Bay Area. We offer Live Scan & Ink Fingerprinting, Notary Public, Apostille, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, and more. Listed on the California DOJ website as an approved Live Scan location with over 15 years of experience. Same-day service, walk-ins welcome. Serving Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont, Santa Clara, and all Bay Area cities. Supporting school districts like Mountain View, Palo Alto, Sunnyvale, Cupertino, and organizations like Boy Scouts and AYSO. Call (650) 961-4646.',
  keywords:
    'Mail All Center, Mail All Center Mountain View, business services mountain view, business services bay area, business services near me, live scan fingerprinting mountain view, live scan bay area, live scan near me, fingerprinting near me, notary public mountain view, notary bay area, notary near me, passport photos mountain view, passport photos bay area, passport photos near me, apostille services mountain view, apostille bay area, apostille near me, mailbox rental mountain view, mailbox rental bay area, packing shipping mountain view, packing shipping bay area, printing services mountain view, printing bay area, live scan fingerprint submission services, licensing fingerprinting, employment fingerprinting, same day service mountain view, walk in service bay area, professional services silicon valley, document services peninsula, business center mountain view, live scan palo alto, live scan sunnyvale, live scan san jose, live scan cupertino, live scan fremont, live scan santa clara, notary palo alto, notary sunnyvale, notary san jose, fingerprinting silicon valley, business services peninsula, professional services south bay, Mountain View School District, Los Altos School District, Sunnyvale School District, Cupertino School District, Menlo Park School District, Palo Alto School District, Santa Clara School District, San Jose School District, Boys Scouts, Sunnyvale Boy Scouts, Redwood City School District, Los Gatos School District, AYSO',
  openGraph: {
    title:
      'Mail All Center | Complete Business Services Mountain View & Bay Area',
    description:
      'Your trusted business service provider in Mountain View, serving the entire Bay Area. Live Scan, Notary, Passport Photos, Mailbox Rental, Packing & Shipping, Printing. DOJ & FBI certified, 15+ years experience. Same-day service, walk-ins welcome.',
    url: SITE_URL,
    type: 'website',
    locale: 'en_US',
    siteName: 'Mail All Center',
    images: [
      {
        url: `${SITE_URL}/assets/Logo/icons8-fingerprint-scan-80.png`,
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
      'Your trusted business service provider in Mountain View, serving the entire Bay Area. Live Scan fingerprint submission services for licensing and employment, Notary, Passport Photos, Mailbox Rental, Packing & Shipping, Printing. Listed on California DOJ website, 15+ years experience. Same-day service, walk-ins welcome.',
    images: [`${SITE_URL}/assets/Logo/icons8-fingerprint-scan-80.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};
export const revalidate = 604800; // 7 days

const nodes = [
  WEBSITE_NODE,
  BUSINESS_NODE,
  buildWebPage({
    url: `${SITE_URL}/`,
    title:
      'Mail All Center – Live Scan, Notary, Apostille in Mountain View, CA',
    description:
      'Live Scan fingerprint submission services for licensing and employment, notary, apostille, passport photos, mailbox rental, printing, and shipping in Mountain View, California.',
  }),
  buildBreadcrumb([{ name: 'Home', url: `${SITE_URL}/` }]),
];

export default function HomePage() {
  return (
    <main>
      <SEOGraph id="ld-home" nodes={nodes} />

      {/* New Hero with clear value proposition */}
      <NewHeroSection />

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
                <strong>Address:</strong>{' '}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=809+Cuesta+Dr+Suite+B+Mountain+View+CA+94040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  809 Cuesta Dr, Suite B, Mountain View, CA 94040
                </a>
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
      <FAQSection />
    </main>
  );
}
