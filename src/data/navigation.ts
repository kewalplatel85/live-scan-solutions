import { NavigationConfig } from '@/components/types/navigation';

export const navigationConfig: NavigationConfig = {
  primaryItems: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  dropdownSections: [
    {
      name: 'Services',
      items: [
        { name: 'Live Scan', href: '/services/live-scan' },
        { name: 'Notary Public', href: '/services/notary' },
        { name: 'Apostille', href: '/services/apostille' },
        { name: 'Passport Photos', href: '/services/passport-photos' },
        { name: 'Mailbox Rental', href: '/services/mailbox-rental' },
      ],
    },
    {
      name: 'Pack & Ship',
      items: [
        { name: 'Packing', href: '/pack-ship/packing' },
        { name: 'Tracking', href: '/pack-ship/tracking' },
        {
          name: 'Shipping',
          hasSubmenu: true,
          submenu: [
            { name: 'FedEx', href: '/pack-ship/shipping/fedex' },
            { name: 'UPS', href: '/pack-ship/shipping/ups' },
            { name: 'USPS', href: '/pack-ship/shipping/usps' },
            { name: 'Drop-Off', href: '/pack-ship/shipping/drop-off' },
          ],
        },
      ],
    },
  ],
  contactInfo: {
    phone: '650-961-4646',
    label: '650-961-4646',
  },
};
