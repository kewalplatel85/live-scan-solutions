import {
  Award,
  CheckCircle,
  Clock,
  FileText,
  Heart,
  LucideIcon,
  MapPin,
  Shield,
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
  { name: 'Live Scan Fingerprinting', icon: FileText },
  { name: 'Notary Public', icon: Shield },
  { name: 'Passport Photos', icon: Users },
  { name: 'Apostille Services', icon: Award },
  { name: 'Mail Box Rental', icon: MapPin },
  { name: 'Pack & Ship', icon: CheckCircle },
];

// About page values data
export const aboutValues: ValueItem[] = [
  {
    title: 'Safety & Security',
    description: 'Your privacy and peace of mind are our top priorities.',
    icon: Shield,
  },
  {
    title: 'Speed & Accuracy',
    description: 'Swift and precise capture of your information every time.',
    icon: Target,
  },
  {
    title: 'Convenience',
    description: 'Walk-in or mobile services to meet your scheduling needs.',
    icon: Clock,
  },
  {
    title: 'Community Care',
    description: 'Committed to serving our community with dedication.',
    icon: Heart,
  },
];

// About page features list
export const aboutFeatures: string[] = [
  'DOJ & FBI Certified Fingerprint Specialists',
  'Over 20 years of combined experience',
  'State-of-the-art fingerprinting technology',
  'Mobile Live Scan services available',
  'Direct partnership with Department of Justice',
  'Multiple locations throughout Northern California',
  'Seven days a week availability',
  'Group and individual accommodations',
];

// Grouped export for convenience
export const aboutData = {
  services: aboutServices,
  values: aboutValues,
  features: aboutFeatures,
} as const;
