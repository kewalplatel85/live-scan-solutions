import { BrandHeader } from '@/components/BrandHeader';
import { Footer } from '@/components/Footer';
import { NavigationHeader } from '@/components/NavigationHeader';
import { navigationConfig } from '@/data/navigation';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { AppProviders } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mailallcenter.com'),
  title:
    'Mail All Center - Live Scan, Notary, Passport Photos & More | Bay Area, Mountain View, CA',
  description:
    'Mail All Center offers comprehensive business services in Mountain View, CA: Live Scan & Ink Fingerprinting, Notary Public, Apostille, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, Lamination, Fax & Copy, and Shredding. DOJ & FBI certified. Serving entire Bay Area since 2010. Walk-ins welcome! Call (650) 961-4646.',
  keywords:
    'Mail All Center, live scan fingerprinting bay area, live scan near me, fingerprinting near me, notary public mountain view, notary near me, notary bay area, passport photos near me, passport photos bay area, mailbox rental mountain view, mailbox rental bay area, packing shipping mountain view, packing shipping bay area, apostille services bay area, apostille near me, printing services mountain view, printing near me, printing bay area, fingerprinting mountain view, business services near me, document services bay area, DOJ FBI certified fingerprinting, live scan palo alto, live scan sunnyvale, live scan san jose, live scan cupertino, live scan fremont, live scan santa clara, live scan menlo park, live scan redwood city, notary palo alto, notary sunnyvale, notary san jose, notary cupertino, notary fremont, notary santa clara, digital fingerprinting california, employment background check, live scan appointment, same day fingerprinting, business services mountain view, lamination services, fax copy services, shredding services, professional fingerprinting, ink fingerprinting, walk in fingerprinting, background check services, licensing fingerprinting, employment fingerprinting, silicon valley fingerprinting, silicon valley notary, silicon valley business services',
  authors: [{ name: 'Mail All Center' }],
  creator: 'Mail All Center',
  publisher: 'Mail All Center',
  category: 'Business Services',
  classification: 'Fingerprinting and Notary Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      'Mail All Center - Complete Business Services | Bay Area, Silicon Valley, Mountain View',
    description:
      'Mail All Center provides Live Scan & Ink Fingerprinting, Notary Public, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, and more in Mountain View, CA. DOJ & FBI certified. Serving entire Bay Area including Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont, Santa Clara with same-day service.',
    url: 'https://www.mailallcenter.com',
    siteName: 'Mail All Center',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/assets/Logo/icons8-fingerprint-scan-80.png',
        width: 80,
        height: 80,
        alt: 'Mail All Center - Professional Business Services in Mountain View',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MailAllCenter',
    title: 'Mail All Center - Business Services in Bay Area, Silicon Valley',
    description:
      'Mail All Center offers Live Scan & Ink Fingerprinting, Notary Public, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, and more. DOJ & FBI certified. Serving Bay Area including Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont. Walk-ins welcome!',
    images: ['/assets/Logo/icons8-fingerprint-scan-80.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.mailallcenter.com',
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/Logo/icons8-fingerprint-scan-48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/Logo/icons8-fingerprint-scan-48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/assets/Logo/icons8-fingerprint-scan-48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="80x80"
          href="/assets/Logo/icons8-fingerprint-scan-80.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/Logo/icons8-fingerprint-scan-80.png"
        />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta
          name="msapplication-TileImage"
          content="/assets/Logo/icons8-fingerprint-scan-80.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <AppProviders>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-LD5G3H781T"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LD5G3H781T');
            `}
          </Script>

          <BrandHeader
            contactInfo={navigationConfig.contactInfo}
            className="hidden lg:block"
          />
          <NavigationHeader
            config={navigationConfig}
            contactInfo={navigationConfig.contactInfo}
          />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://www.mailallcenter.com/#organization',
              name: 'Mail All Center',
              description:
                'Mail All Center provides comprehensive business services including Live Scan & Ink Fingerprinting, Notary Public, Apostille Services, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, Lamination, Fax & Copy, and Shredding in Mountain View, CA. DOJ & FBI certified.',
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
              areaServed: [
                'Mountain View, CA',
                'Palo Alto, CA',
                'Sunnyvale, CA',
                'San Jose, CA',
                'Cupertino, CA',
                'Santa Clara, CA',
                'Menlo Park, CA',
                'Redwood City, CA',
                'Fremont, CA',
                'Campbell, CA',
                'Los Altos, CA',
                'Milpitas, CA',
                'Foster City, CA',
                'San Mateo, CA',
                'Belmont, CA',
                'San Carlos, CA',
                'Atherton, CA',
                'East Palo Alto, CA',
                'Newark, CA',
                'Union City, CA',
                'Hayward, CA',
                'San Leandro, CA',
                'Oakland, CA',
                'Berkeley, CA',
                'Daly City, CA',
                'South San Francisco, CA',
                'Brisbane, CA',
                'Burlingame, CA',
                'Millbrae, CA',
                'Los Altos Hills, CA',
                'Saratoga, CA',
                'Monte Sereno, CA',
                'Portola Valley, CA',
                'Woodside, CA',
                'Half Moon Bay, CA',
                'Pacifica, CA',
                'Bay Area, CA',
                'Silicon Valley, CA',
                'San Francisco Bay Area, CA',
                'South Bay, CA',
                'Peninsula, CA',
              ],
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
                    },
                    price: '17',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Ink Fingerprinting',
                      description:
                        'Traditional ink fingerprinting services for all applications',
                    },
                    price: '25',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Notary Public Services',
                      description:
                        'Professional document notarization with licensed notaries',
                    },
                    price: '25',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Apostille Services',
                      description:
                        'Document authentication for international use',
                    },
                    price: '75',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Passport Photos',
                      description:
                        'Professional passport photos meeting all requirements',
                    },
                    price: '15',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Mailbox Rental',
                      description:
                        'Private mailbox rental with package receiving services',
                    },
                    price: '20',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Packing & Shipping',
                      description:
                        'Professional packing and shipping services via UPS, FedEx, USPS',
                    },
                    price: '10',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Printing Services',
                      description:
                        'High-quality printing, copying, and lamination services',
                    },
                    price: '0.25',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Fax & Copy Services',
                      description:
                        'Fax sending and receiving, copying services',
                    },
                    price: '2',
                    priceCurrency: 'USD',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Shredding Services',
                      description:
                        'Secure document shredding for sensitive materials',
                    },
                    price: '1',
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
            }),
          }}
        />
      </body>
    </html>
  );
}
