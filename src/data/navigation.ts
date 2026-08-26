import { NavigationConfigWithoutDropdown } from '@/components/types/navigation';
import { COMPANY } from '@/config/company';
import { LIVESCAN_CITIES } from '@/data/city-pages/livescan-cities';

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
          name: 'Live Scan FAQs',
          href: '/faq',
        },
        ...LIVESCAN_CITIES.map((city) => ({
          name: city.name,
          href: `/Live-Scan-Fingerprinting/${city.slug}`,
        })),
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
