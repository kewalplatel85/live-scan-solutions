// src/data/city-pages/apostille-cities.ts
// Central data configuration for apostille city landing pages.
// To add a new city, simply add another object to the APOSTILLE_CITIES array.

import { SITE_URL } from '@/lib/config';

export interface ApostilleCityData {
  slug: string;
  name: string;
  county: string;
  state: string;
  distanceFromStore: string;
  driveTime: string;
  population: string;

  // SEO metadata
  metaTitle: string;
  metaDescription: string;
  keywords: string;

  // Hero section
  heroSubtitle: string;

  // Unique intro content (2-3 paragraphs for content uniqueness)
  introHeading: string;
  introContent: string[];

  // City-specific reasons to choose us
  whyChooseUs: {
    title: string;
    description: string;
  }[];

  // Driving directions (natural language for local SEO)
  drivingDirections: string;

  // Local landmarks for local SEO signals
  localLandmarks: string[];

  // City-specific FAQs (for FAQ rich snippet schema)
  faqs: { question: string; answer: string }[];

  // Nearby city slugs for cross-linking
  nearbyCities: { slug: string; name: string }[];
}

export const APOSTILLE_CITIES: ApostilleCityData[] = [
  {
    slug: 'paloalto',
    name: 'Palo Alto',
    county: 'Santa Clara County',
    state: 'CA',
    distanceFromStore: '4 miles',
    driveTime: '10 minutes',
    population: '~68,000 residents',

    // SEO metadata
    metaTitle:
      'Apostille Services in Palo Alto, CA – Fast Document Authentication | Mail All Center',
    metaDescription:
      'Need an apostille in Palo Alto? Mail All Center provides professional apostille services for birth certificates, diplomas, corporate documents & more. Just 10 min from Palo Alto. Same-day processing available. Call (650) 961-4646.',
    keywords:
      'apostille palo alto, apostille services palo alto ca, apostille near palo alto, birth certificate apostille palo alto, diploma apostille palo alto, document authentication palo alto, apostille stanford, hague convention palo alto, international document palo alto, apostille santa clara county, apostille silicon valley, notary apostille palo alto, corporate apostille palo alto, marriage certificate apostille palo alto',

    // Hero
    heroSubtitle: "Palo Alto's Trusted Apostille Service Provider",

    // Unique intro content
    introHeading:
      'Professional Apostille Services for Palo Alto Residents & Businesses',
    introContent: [
      'Palo Alto is home to Stanford University, world-class research institutions, and a thriving international business community. Whether you are a Stanford graduate needing your diploma apostilled for overseas employment, a tech professional relocating abroad, or a Palo Alto business expanding internationally, Mail All Center provides fast, reliable apostille services just 10 minutes from downtown Palo Alto.',
      'As a hub for global innovation, Palo Alto residents frequently need documents authenticated for use in foreign countries. From birth certificates for dual citizenship applications to corporate documents for international partnerships, our experienced team handles every document type with care and precision. We understand the urgency that comes with international deadlines and offer same-day consultation and expedited processing options.',
      'Located at 809 Cuesta Dr, Suite B in nearby Mountain View, we have proudly served the Palo Alto community since 2010. Our convenient location is easily accessible from University Avenue, El Camino Real, and Highway 101, making us the most convenient apostille service for Palo Alto residents.',
    ],

    // Why choose us
    whyChooseUs: [
      {
        title: 'Minutes from Palo Alto',
        description:
          'Our Mountain View office is just a quick 10-minute drive from downtown Palo Alto via El Camino Real or Highway 101.',
      },
      {
        title: 'Stanford Community Trusted',
        description:
          'We regularly assist Stanford students, faculty, and alumni with apostille services for international academic and career opportunities.',
      },
      {
        title: 'Tech Industry Expertise',
        description:
          'Experienced with corporate document apostilles for Palo Alto tech companies expanding into international markets.',
      },
      {
        title: 'Serving Palo Alto Since 2010',
        description:
          'Over a decade of trusted service to the Palo Alto community with hundreds of satisfied customers.',
      },
    ],

    // Driving directions
    drivingDirections:
      'From downtown Palo Alto, head south on El Camino Real toward Mountain View. Turn right onto Cuesta Dr — our office is in Suite B at 809 Cuesta Dr. The drive takes approximately 10 minutes. Alternatively, take Highway 101 South to the Shoreline Blvd exit, then head west to Cuesta Dr. Free parking is available on-site.',

    // Local landmarks
    localLandmarks: [
      'Stanford University',
      'Palo Alto City Hall',
      'Stanford Shopping Center',
      'Mitchell Park',
      'University Avenue',
      'California Avenue',
    ],

    // City-specific FAQs
    faqs: [
      {
        question: 'Where can I get an apostille near Palo Alto, CA?',
        answer:
          'Mail All Center in Mountain View is the closest professional apostille service to Palo Alto — just a 10-minute drive via El Camino Real. We are located at 809 Cuesta Dr, Suite B, Mountain View, CA 94040. Walk-ins are welcome during business hours, or call (650) 961-4646 to schedule an appointment.',
      },
      {
        question: 'How much does an apostille cost for Palo Alto residents?',
        answer:
          'Our standard apostille processing starts at $75 with 5-10 business day turnaround. Express processing is available from $125 with a 2-3 business day turnaround. We also offer same-day consultation services from $50 to review your documents and advise on requirements.',
      },
      {
        question: 'Can I get a Stanford diploma apostilled at Mail All Center?',
        answer:
          'Yes! We regularly apostille Stanford University diplomas, transcripts, and academic records. Educational documents are one of our most common apostille requests from the Palo Alto community. Bring your original or certified copy, and we will handle the entire authentication process.',
      },
      {
        question:
          'Do I need an appointment for apostille services from Palo Alto?',
        answer:
          'No appointment is necessary — walk-ins are welcome! However, for complex document needs or multiple documents, we recommend calling (650) 961-4646 to ensure we can provide the best service. Our hours are Monday-Friday 10AM-6PM and Saturday 10AM-2PM.',
      },
      {
        question:
          'What documents do Palo Alto residents commonly need apostilled?',
        answer:
          'Palo Alto residents frequently need apostilles for Stanford diplomas and transcripts, birth certificates for dual citizenship, corporate documents for international business expansion, marriage certificates for overseas relocation, and power of attorney documents for international property transactions.',
      },
    ],

    // Nearby cities for cross-linking
    nearbyCities: [
      { slug: 'mountainview', name: 'Mountain View' },
      { slug: 'menlopark', name: 'Menlo Park' },
      { slug: 'losaltos', name: 'Los Altos' },
      { slug: 'sunnyvale', name: 'Sunnyvale' },
      { slug: 'redwoodcity', name: 'Redwood City' },
    ],
  },
];

// Helper to find a city by slug
export function getApostilleCityBySlug(
  slug: string
): ApostilleCityData | undefined {
  return APOSTILLE_CITIES.find((city) => city.slug === slug);
}

// Helper to get all slugs (for generateStaticParams)
export function getAllApostilleCitySlugs(): string[] {
  return APOSTILLE_CITIES.map((city) => city.slug);
}

// Helper to build the canonical URL for a city page
export function getApostilleCityUrl(slug: string): string {
  return `${SITE_URL}/apostille/${slug}`;
}
