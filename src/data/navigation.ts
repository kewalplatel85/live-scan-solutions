import { NavigationConfigWithoutDropdown } from '@/components/types/navigation';
import { COMPANY } from '@/config/company';

export const navigationConfig: NavigationConfigWithoutDropdown = {
  primaryItems: [
    { name: 'Home', href: '/' },
    {
      name: 'Live Scan',
      href: '/Live-Scan-Fingerprinting',
      hasSubmenu: true,
      submenu: [
        {
          name: 'Live Scan Overview',
          href: '/Live-Scan-Fingerprinting',
        },
        {
          name: 'Ink Fingerprinting (FD-258)',
          href: '/ink-fingerprinting',
        },
        {
          name: 'Mobile Live Scan',
          href: '/on-site-mobile-live-scan',
        },
        {
          name: 'Find Your Live Scan Form',
          href: '/Live-Scan-Fingerprinting#live-scan-forms',
        },
        {
          name: 'Areas We Serve',
          href: '/Live-Scan-Fingerprinting/areas-we-serve',
        },
        {
          name: 'Live Scan FAQs',
          href: '/faq',
        },
      ],
    },
    { name: 'Notary Public', href: '/notary' },
    { name: 'Apostille', href: '/apostille' },
    { name: 'Passport Photos', href: '/passport-photos' },
    { name: 'Mailbox Rental', href: '/mailbox-rental' },
    { name: 'Pack & Ship', href: '/pack-ship' },
    { name: 'Printing', href: '/printing' },
    { name: 'About Us', href: '/about-us' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Book Now', href: '/book', highlight: true },
  ],
  contactInfo: {
    phone: COMPANY.phone,
    label: COMPANY.phone,
  },
};
