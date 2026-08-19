import { Footer } from '@/components/Footer';
import { NavigationHeader } from '@/components/NavigationHeader';
import { navigationConfig } from '@/data/navigation';
import { SITE_URL } from '@/lib/config';
import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Mail All Center - Live Scan, Notary, Passport Photos & More | Bay Area, Mountain View, CA',
  description:
    'Mail All Center offers comprehensive business services in Mountain View, CA: Live Scan & Ink Fingerprinting, Notary Public, Apostille, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, Lamination, Fax & Copy, and Shredding. Listed on California DOJ website as approved Live Scan location. Serving entire Bay Area since 2010. Walk-ins welcome! Call (650) 961-4646.',
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
      'Mail All Center provides Live Scan & Ink Fingerprinting, Notary Public, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, and more in Mountain View, CA. Listed on California DOJ website as approved Live Scan location. Serving entire Bay Area including Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont, Santa Clara with same-day service.',
    url: SITE_URL,
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
      'Mail All Center offers Live Scan & Ink Fingerprinting, Notary Public, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, and more. Listed on California DOJ website as approved Live Scan location. Serving Bay Area including Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont. Walk-ins welcome!',
    images: ['/assets/Logo/icons8-fingerprint-scan-80.png'],
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
    canonical: SITE_URL,
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
          <NavigationHeader
            config={navigationConfig}
            contactInfo={navigationConfig.contactInfo}
          />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
