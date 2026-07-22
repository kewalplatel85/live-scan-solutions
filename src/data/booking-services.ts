/**
 * Booking Services Configuration — Single Source of Truth
 *
 * Defines the 4 storefront services available for online appointment booking.
 * To update pricing, durations, or Cal.com slugs, edit this file only.
 *
 * Cal.com slugs are placeholders until the account is configured.
 * Format: "username/event-type-slug"
 */

import type { LucideIcon } from 'lucide-react';
import { Camera, FileText, Fingerprint, PenLine } from 'lucide-react';

export interface WhatToBringItem {
  text: string;
}

export interface BookingService {
  /** Unique identifier used for URL deep-linking (?service=<id>) */
  id: string;
  name: string;
  shortName: string;
  priceLabel: string;
  priceSub?: string; // Small-print note below price
  duration: string; // e.g. "15 mins"
  /** Cal.com link slug — format: "username/event-type" */
  calSlug: string;
  icon: LucideIcon;
  /** Tailwind color classes for the icon container */
  colorScheme: {
    bg: string;
    icon: string;
    border: string;
    ring: string;
    badge: string;
    badgeText: string;
  };
  description: string;
  whatToBring: WhatToBringItem[];
}

export const BOOKING_SERVICES: BookingService[] = [
  {
    id: 'live-scan',
    name: 'Live Scan Fingerprinting',
    shortName: 'Live Scan',
    priceLabel: '$30 Rolling Fee',
    priceSub: '+ Government Fees (vary by agency)',
    duration: '15 mins',
    calSlug: 'mailallcenter/live-scan',
    icon: Fingerprint,
    colorScheme: {
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      icon: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
      ring: 'ring-blue-500',
      badge: 'bg-blue-100 dark:bg-blue-900/50',
      badgeText: 'text-blue-700 dark:text-blue-300',
    },
    description:
      'Fast, DOJ-approved electronic fingerprint submission. California DOJ listed provider serving individuals, employers, and agencies across the Bay Area.',
    whatToBring: [
      {
        text: "Valid unexpired government-issued photo ID (Driver's License, Passport, etc.)",
      },
      {
        text: 'Official 3-copy Request for Live Scan form (provided by your requesting agency)',
      },
      { text: 'Valid ORI number from your requesting agency' },
    ],
  },
  {
    id: 'ink-fingerprint',
    name: 'FD-258 Ink Fingerprint Card',
    shortName: 'Ink Fingerprint',
    priceLabel: 'Per Card Fee Applies',
    priceSub: 'Call for current pricing',
    duration: '20 mins',
    calSlug: 'mailallcenter/ink-fingerprint',
    icon: FileText,
    colorScheme: {
      bg: 'bg-violet-50 dark:bg-violet-950/40',
      icon: 'text-violet-600 dark:text-violet-400',
      border: 'border-violet-200 dark:border-violet-800',
      ring: 'ring-violet-500',
      badge: 'bg-violet-100 dark:bg-violet-900/50',
      badgeText: 'text-violet-700 dark:text-violet-300',
    },
    description:
      "Traditional hard-card ink fingerprinting on standard FD-258 cards. Required by certain federal agencies, out-of-state submissions, or when electronic submission isn't accepted.",
    whatToBring: [
      { text: 'Valid unexpired government-issued photo ID' },
      {
        text: 'Physical FD-258 cards if provided by your agency (otherwise we stock standard cards)',
      },
    ],
  },
  {
    id: 'notary',
    name: 'Notary Public',
    shortName: 'Notary',
    priceLabel: '$15 / Signature',
    priceSub: 'State-regulated fee',
    duration: '15 mins',
    calSlug: 'mailallcenter/notary',
    icon: PenLine,
    colorScheme: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/40',
      icon: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-200 dark:border-emerald-800',
      ring: 'ring-emerald-500',
      badge: 'bg-emerald-100 dark:bg-emerald-900/50',
      badgeText: 'text-emerald-700 dark:text-emerald-300',
    },
    description:
      'California state-commissioned Notary Public. National Notary Association member. We notarize affidavits, powers of attorney, real estate documents, travel consent letters, and more.',
    whatToBring: [
      {
        text: 'All signing parties must bring valid government-issued photo ID',
      },
      {
        text: 'Documents must be completely filled out — leave only the signature lines blank',
      },
      {
        text: 'Bring external witnesses if your document explicitly mandates them (we are not witnesses)',
      },
    ],
  },
  {
    id: 'passport-photo',
    name: 'Passport & ID Photos',
    shortName: 'Passport Photos',
    priceLabel: 'Instant Printing',
    priceSub: 'Call for current pricing',
    duration: '10 mins',
    calSlug: 'mailallcenter/passport-photo',
    icon: Camera,
    colorScheme: {
      bg: 'bg-amber-50 dark:bg-amber-950/40',
      icon: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-800',
      ring: 'ring-amber-500',
      badge: 'bg-amber-100 dark:bg-amber-900/50',
      badgeText: 'text-amber-700 dark:text-amber-300',
    },
    description:
      'US passport, visa, and government ID-compliant photos. Printed instantly in-store. Accepted by the US Department of State, USCIS, and most foreign embassies.',
    whatToBring: [
      {
        text: 'Avoid wearing white clothing — it blends into the photo background',
      },
      {
        text: 'Remove glasses, hats, or oversized hair accessories before your appointment',
      },
    ],
  },
];

/** Map URL query param slugs → service IDs (same as id, but makes intent explicit) */
export const SERVICE_SLUG_MAP: Record<string, string> = {
  'live-scan': 'live-scan',
  'ink-fingerprint': 'ink-fingerprint',
  notary: 'notary',
  'passport-photo': 'passport-photo',
};

export function getServiceById(id: string): BookingService | undefined {
  return BOOKING_SERVICES.find((s) => s.id === id);
}

export function getServiceBySlug(slug: string): BookingService | undefined {
  const id = SERVICE_SLUG_MAP[slug];
  return id ? getServiceById(id) : undefined;
}

/** localStorage key for persisting last selected service */
export const LAST_SERVICE_STORAGE_KEY = 'mac_last_booking_service';
