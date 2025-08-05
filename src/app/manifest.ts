import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mail All Center - Complete Business Services in Mountain View, CA',
    short_name: 'Mail All Center',
    description:
      'Mail All Center offers Live Scan & Ink Fingerprinting, Notary Public, Apostille Services, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, and more in Mountain View, CA. DOJ & FBI certified.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/assets/Logo/icons8-fingerprint-scan-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/assets/Logo/icons8-fingerprint-scan-80.png',
        sizes: '80x80',
        type: 'image/png',
      },
    ],
    categories: [
      'business',
      'professional services',
      'fingerprinting',
      'notary services',
      'passport photos',
      'mailbox rental',
      'shipping',
      'printing',
      'packing',
      'fax services',
      'copy services',
      'shredding',
      'document services',
      'legal services',
      'authentication',
      'apostille services',
      'lamination',
    ],
    lang: 'en-US',
    orientation: 'portrait-primary',
    scope: '/',
  };
}
