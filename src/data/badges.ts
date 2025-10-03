import { BadgeItem } from '@/components/common/GenericHero';
import { Clock, Shield, Star } from 'lucide-react';

// Common badge configurations for different pages/sections
export const badgeData = {
  // Homepage/General Live Scan
  liveScanHome: [
    {
      icon: Shield,
      text: 'DOJ Listed Provider',
      variant: 'secondary' as const,
    },
    {
      icon: Shield,
      text: 'Licensed Fingerprinting',
      variant: 'secondary' as const,
    },
    {
      icon: Star,
      text: '4.9/5 Rating',
      variant: 'outline' as const,
      iconClassName: 'fill-yellow-400 text-yellow-400',
    },
  ] as BadgeItem[],

  // About page
  about: [
    {
      icon: Shield,
      text: 'DOJ Listed Provider',
      variant: 'secondary' as const,
    },
    {
      icon: Shield,
      text: 'Licensed Fingerprinting',
      variant: 'secondary' as const,
    },
    {
      icon: Clock,
      text: '15+ Years Experience',
      variant: 'outline' as const,
    },
  ] as BadgeItem[],

  // Contact page
  contact: [
    {
      icon: Shield,
      text: 'DOJ Listed Provider',
      variant: 'secondary' as const,
    },
    {
      icon: Clock,
      text: 'Same Day Service',
      variant: 'secondary' as const,
    },
    {
      icon: Star,
      text: 'Trusted & Reliable',
      variant: 'outline' as const,
      iconClassName: 'fill-yellow-400 text-yellow-400',
    },
  ] as BadgeItem[],

  // Notary Public page
  notaryPublic: [
    {
      icon: Shield,
      text: 'Licensed Notary',
      variant: 'secondary' as const,
    },
    {
      icon: Clock,
      text: 'Same Day Service',
      variant: 'secondary' as const,
    },
    {
      icon: Star,
      text: 'Trusted & Reliable',
      variant: 'outline' as const,
      iconClassName: 'fill-yellow-400 text-yellow-400',
    },
  ] as BadgeItem[],

  // Live Scan dedicated page
  liveScanService: [
    {
      icon: Shield,
      text: 'DOJ Listed Provider',
      variant: 'secondary' as const,
    },
    {
      icon: Shield,
      text: 'Licensed Fingerprinting',
      variant: 'secondary' as const,
    },
    {
      icon: Star,
      text: '5-Star Service',
      variant: 'outline' as const,
      iconClassName: 'fill-yellow-400 text-yellow-400',
    },
  ] as BadgeItem[],
} as const;

// Helper function to get badges by key with fallback
export function getBadges(key: keyof typeof badgeData): BadgeItem[] {
  return badgeData[key] || badgeData.liveScanHome;
}
