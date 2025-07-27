import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Live Scan Solutions - Professional Fingerprinting Services',
    short_name: 'Live Scan Solutions',
    description:
      'Professional Live Scan fingerprinting, Notary Public, and Apostille services in Mountain View, CA. DOJ & FBI certified.',
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
    categories: ['business', 'professional services', 'fingerprinting'],
    lang: 'en-US',
    orientation: 'portrait-primary',
    scope: '/',
  };
}
