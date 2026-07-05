// src/data/city-pages/apostille-countries.ts
// Country data for the Hague Convention countries section on apostille pages.
// ISO 3166-1 alpha-2 codes are used for flag icon imports.

export interface ApostilleCountry {
  code: string; // ISO 3166-1 alpha-2
  name: string;
  isHague: boolean;
  meta: string; // Short label: "Hague member", "Dual citizenship", etc.
  commonDocs: string[]; // Most-requested document types for this country
}

/**
 * Top Hague Convention destination countries for Bay Area apostille customers.
 * Ordered roughly by request volume.
 */
export const HAGUE_COUNTRIES: ApostilleCountry[] = [
  {
    code: 'MX',
    name: 'Mexico',
    isHague: true,
    meta: 'Hague member',
    commonDocs: [
      'Birth certificates',
      'Marriage certificates',
      'Power of attorney',
    ],
  },
  {
    code: 'IN',
    name: 'India',
    isHague: true,
    meta: 'Hague member',
    commonDocs: [
      'Educational credentials',
      'Birth certificates',
      'Marriage certificates',
    ],
  },
  {
    code: 'KR',
    name: 'South Korea',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Diplomas', 'FBI background checks', 'Corporate documents'],
  },
  {
    code: 'PH',
    name: 'Philippines',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Birth certificates', 'Marriage certificates', 'Court orders'],
  },
  {
    code: 'IT',
    name: 'Italy',
    isHague: true,
    meta: 'Dual citizenship',
    commonDocs: [
      'Birth certificates',
      'Marriage certificates',
      'Naturalization',
    ],
  },
  {
    code: 'ES',
    name: 'Spain',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Birth certificates', 'Diplomas', 'Corporate documents'],
  },
  {
    code: 'DE',
    name: 'Germany',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Diplomas', 'Corporate documents', 'Marriage certificates'],
  },
  {
    code: 'FR',
    name: 'France',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Birth certificates', 'Diplomas', 'Court orders'],
  },
  {
    code: 'JP',
    name: 'Japan',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Corporate documents', 'Diplomas', 'FBI background checks'],
  },
  {
    code: 'CN',
    name: 'China',
    isHague: true,
    meta: 'Hague since 2023',
    commonDocs: ['Diplomas', 'Corporate documents', 'Birth certificates'],
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Diplomas', 'Corporate documents', 'Marriage certificates'],
  },
  {
    code: 'BR',
    name: 'Brazil',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Birth certificates', 'Marriage certificates', 'Diplomas'],
  },
  {
    code: 'NL',
    name: 'Netherlands',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Birth certificates', 'Corporate documents', 'Diplomas'],
  },
  {
    code: 'IL',
    name: 'Israel',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Birth certificates', 'Marriage certificates', 'Court orders'],
  },
  {
    code: 'AU',
    name: 'Australia',
    isHague: true,
    meta: 'Hague member',
    commonDocs: ['Diplomas', 'FBI background checks', 'Corporate documents'],
  },
  {
    code: 'CO',
    name: 'Colombia',
    isHague: true,
    meta: 'Hague member',
    commonDocs: [
      'Birth certificates',
      'Marriage certificates',
      'Power of attorney',
    ],
  },
];

/**
 * Non-Hague countries that require embassy legalization instead of apostille.
 */
export const NON_HAGUE_COUNTRIES: ApostilleCountry[] = [
  {
    code: 'AE',
    name: 'UAE',
    isHague: false,
    meta: 'Embassy legalization',
    commonDocs: ['Corporate documents', 'Diplomas', 'Power of attorney'],
  },
  {
    code: 'VN',
    name: 'Vietnam',
    isHague: false,
    meta: 'Embassy legalization',
    commonDocs: ['Birth certificates', 'Marriage certificates', 'Diplomas'],
  },
  {
    code: 'QA',
    name: 'Qatar',
    isHague: false,
    meta: 'Embassy legalization',
    commonDocs: ['Corporate documents', 'Diplomas', 'Power of attorney'],
  },
  {
    code: 'KW',
    name: 'Kuwait',
    isHague: false,
    meta: 'Embassy legalization',
    commonDocs: ['Corporate documents', 'Diplomas', 'Birth certificates'],
  },
  {
    code: 'TW',
    name: 'Taiwan',
    isHague: false,
    meta: 'Embassy legalization',
    commonDocs: ['Diplomas', 'Birth certificates', 'Corporate documents'],
  },
];

/** All countries combined */
export const ALL_APOSTILLE_COUNTRIES: ApostilleCountry[] = [
  ...HAGUE_COUNTRIES,
  ...NON_HAGUE_COUNTRIES,
];
