import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
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
  title: 'Live Scan Solutions - Professional Fingerprinting Services',
  description:
    'Live Scan Solutions offers professional fingerprinting services including Live Scan, Notary Public, Apostille, Passport Photo, and more. Certified by DOJ and FBI.',
  keywords:
    'live scan, fingerprinting, notary public, apostille, passport photo, background check, DOJ, FBI, certified fingerprinting',
  authors: [{ name: 'Live Scan Solutions' }],
  creator: 'Live Scan Solutions',
  publisher: 'Live Scan Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Live Scan Solutions - Professional Fingerprinting Services',
    description:
      'Live Scan Solutions offers professional fingerprinting services including Live Scan, Notary Public, Apostille, Passport Photo, and more.',
    url: 'https://livescansolutions.com',
    siteName: 'Live Scan Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Scan Solutions - Professional Fingerprinting Services',
    description:
      'Professional fingerprinting services including Live Scan, Notary Public, Apostille, and more.',
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <AppProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
