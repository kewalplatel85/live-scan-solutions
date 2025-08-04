import { BrandHeader } from '@/components/BrandHeader';
import { Footer } from '@/components/Footer';
import { NavigationHeader } from '@/components/NavigationHeader';
import { navigationConfig } from '@/data/navigation';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
  title:
    'Live Scan Fingerprinting Services Bay Area | DOJ & FBI Certified | Mountain View, CA',
  description:
    'Professional Live Scan fingerprinting, Notary Public, and Apostille services in Mountain View, CA. Serving Bay Area: Palo Alto, Sunnyvale, San Jose, Cupertino. DOJ & FBI certified. Same-day service, walk-ins welcome. Call (650) 961-4646.',
  keywords:
    'live scan fingerprinting bay area, fingerprinting mountain view, live scan near me, notary public mountain view, apostille services bay area, background check mountain view, DOJ FBI certified fingerprinting, live scan palo alto, live scan sunnyvale, live scan san jose, live scan cupertino, digital fingerprinting california, employment background check, live scan appointment, same day fingerprinting',
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
    title: 'Live Scan Fingerprinting Services Bay Area | DOJ & FBI Certified',
    description:
      'Professional Live Scan fingerprinting, Notary Public, and Apostille services in Mountain View, CA. Serving entire Bay Area with same-day service. DOJ & FBI certified.',
    url: 'https://www.mailallcenter.com',
    siteName: 'Mail All Center',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/assets/Logo/icons8-fingerprint-scan-80.png',
        width: 80,
        height: 80,
        alt: 'Mail All Center - Professional Fingerprinting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LiveScanSolutions',
    title: 'Live Scan Fingerprinting Services Bay Area | DOJ & FBI Certified',
    description:
      'Professional Live Scan fingerprinting, Notary Public, and Apostille services in Mountain View, CA. Same-day service, walk-ins welcome.',
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
                'Professional Live Scan fingerprinting, Notary Public, and Apostille services in Mountain View, CA. DOJ & FBI certified.',
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
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Fingerprinting and Document Services',
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
