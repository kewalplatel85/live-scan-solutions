import { NavigationConfigWithoutDropdown } from '@/components/types/navigation';

export const navigationConfig: NavigationConfigWithoutDropdown = {
  primaryItems: [
    { name: 'Home', href: '/' },
    { name: 'Live Scan', href: '/live-scan' },
    { name: 'Notary Public', href: '/notary' },
    { name: 'Apostille', href: '/apostille' },
    { name: 'Passport Photos', href: '/passport-photos' },
    { name: 'Mailbox Rental', href: '/mailbox-rental' },
    { name: 'Pack & Ship', href: '/pack-ship' },
    { name: 'Printing', href: '/printing' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  contactInfo: {
    phone: '650-961-4646',
    label: '650-961-4646',
  },
};

// export const navigationConfig: NavigationConfig = {
//   primaryItems: [
//     { name: 'Home', href: '/' },
//     { name: 'Live Scan', href: '/services/live-scan' },
//     { name: 'Notary Public', href: '/services/notary' },
//     { name: 'Apostille', href: '/services/apostille' },
//     { name: 'Passport Photos', href: '/services/passport-photos' },
//     { name: 'Mailbox Rental', href: '/services/mailbox-rental' },
//     { name: 'About Us', href: '/about' },
//     { name: 'FAQ', href: '/faq' },
//     { name: 'Contact', href: '/contact' },
//   ],
//   dropdownSections: [
//     {
//       name: 'Services',
//       items: [
//         { name: 'Live Scan', href: '/services/live-scan' },
//         { name: 'Notary Public', href: '/services/notary' },
//         { name: 'Apostille', href: '/services/apostille' },
//         { name: 'Passport Photos', href: '/services/passport-photos' },
//         { name: 'Mailbox Rental', href: '/services/mailbox-rental' },
//       ],
//     },
//     {
//       name: 'Pack & Ship',
//       items: [
//         { name: 'Packing', href: '/pack-ship/packing' },
//         { name: 'Tracking', href: '/pack-ship/tracking' },
//         { name: 'separator', isSeparator: true },
//         { name: 'Shipping Options', isHeading: true },
//         { name: 'FedEx', href: '/pack-ship/shipping/fedex' },
//         { name: 'UPS', href: '/pack-ship/shipping/ups' },
//         { name: 'USPS', href: '/pack-ship/shipping/usps' },
//         { name: 'Drop-Off', href: '/pack-ship/shipping/drop-off' },
//       ],
//     },
//   ],
//   contactInfo: {
//     phone: '650-961-4646',
//     label: '650-961-4646',
//   },
// };
