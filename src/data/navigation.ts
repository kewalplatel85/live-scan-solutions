import { NavigationConfigWithoutDropdown } from '@/components/types/navigation';

export const navigationConfig: NavigationConfigWithoutDropdown = {
  primaryItems: [
    { name: 'Home', href: '/' },
    { name: 'Live Scan', href: '/Live-Scan-Fingerprinting' },
    { name: 'Notary Public', href: '/notary' },
    { name: 'Apostille', href: '/apostille' },
    { name: 'Passport Photos', href: '/passport-photos' },
    { name: 'Mailbox Rental', href: '/mailbox-rental' },
    { name: 'Pack & Ship', href: '/pack-ship' },
    { name: 'Printing', href: '/printing' },
    { name: 'About Us', href: '/about-us' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact-us' },
  ],
  contactInfo: {
    phone: '650-961-4646',
    label: '650-961-4646',
  },
};
