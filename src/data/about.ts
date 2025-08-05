import {
  Award,
  Clock,
  Copy,
  FileText,
  Heart,
  LucideIcon,
  MapPin,
  Package,
  Printer,
  Shield,
  Shredder,
  Target,
  Users,
} from 'lucide-react';

// Service item interface
export interface ServiceItem {
  name: string;
  icon: LucideIcon;
}

// Value item interface
export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

// About page services data
export const aboutServices: ServiceItem[] = [
  { name: 'Live & Ink Fingerprinting', icon: FileText },
  { name: 'Notary Public', icon: Shield },
  { name: 'Apostille Services', icon: Award },
  { name: 'Passport Photos', icon: Users },
  { name: 'Mailbox Rental', icon: MapPin },
  { name: 'Packing & Shipping', icon: Package },
  { name: 'Printing', icon: Printer },
  { name: 'Lamination', icon: FileText },
  { name: 'Fax & Copy', icon: Copy },
  { name: 'Shredding', icon: Shredder },
];

// About page values data
export const aboutValues: ValueItem[] = [
  {
    title: 'Security & Trust',
    description:
      'DOJ & FBI certified with the highest standards of data protection and confidentiality for all services.',
    icon: Shield,
  },
  {
    title: 'Professional Excellence',
    description:
      'Expert service delivery across all business solutions with precision and attention to detail.',
    icon: Target,
  },
  {
    title: 'Convenience & Accessibility',
    description:
      'One-stop location for all your business needs with flexible scheduling and walk-in services.',
    icon: Clock,
  },
  {
    title: 'Community Partnership',
    description:
      'Dedicated to supporting Bay Area businesses and individuals with reliable, personalized service.',
    icon: Heart,
  },
];

// About page features list
export const aboutFeatures: string[] = [
  'DOJ & FBI Certified for Live Scan Fingerprinting',
  '10+ Essential Business Services Under One Roof',
  'Over 15 Years of Trusted Service in Bay Area',
  'Convenient Mountain View Location with Easy Access',
  'Professional Notary Public Services Available',
  'Secure Mailbox Rental with Flexible Terms',
  'Full-Service Printing and Lamination Capabilities',
  'Comprehensive Packing and Shipping Solutions',
  'Apostille and Document Authentication Services',
  'Same-Day Service Available for Most Needs',
  'Competitive Pricing with Transparent Fees',
  'Experienced Staff Trained in All Service Areas',
];

// Grouped export for convenience
export const aboutData = {
  services: aboutServices,
  values: aboutValues,
  features: aboutFeatures,
} as const;
