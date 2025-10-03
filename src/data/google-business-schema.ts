// SEO Structured Data Schemas for Mail All Center
// Generated following Google Rich Results Test and Schema.org Validator requirements

import { SITE_URL } from '@/lib/config';

// Business JSON-LD Schema (used on homepage and site-wide)
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': [
    'LocalBusiness',
    'PostalService',
    'CopyShop',
    'PhotoStudio',
    'LegalService',
    'ProfessionalService',
  ],
  '@id': `${SITE_URL}/#organization`,
  name: 'Mail All Center',
  alternateName: [
    'Mail All Center Mountain View',
    'Live Scan Solutions',
    'Mountain View Live Scan',
  ],
  url: SITE_URL,
  telephone: '+1-650-961-4646',
  email: 'info@mailallcenter.com',

  // Business Information
  foundingDate: '2010-01-01',
  slogan:
    'Your Trusted Partner for Professional Live Scan, Notary, and Business Services',
  description:
    'Professional Live Scan Fingerprinting, Notary Public, Apostille, and Business Services in Mountain View, California. Listed on California DOJ website as approved Live Scan location, document authentication, passport photos, mailbox rental, and more.',
  sameAs: [
    'https://www.google.com/search?q=mailallcenter&sca_esv=5781ecd08cb21da5&sxsrf=AE3TifM9xceaUdw8wBPPYfF3mabCLiY89w%3A1758176841214&source=hp&ei=SabLaOiYC6ea0PEPwcaIqAQ&iflsig=AOw8s4IAAAAAaMu0Wd-xSgCGdJObBz6teZsESk6b3ERF&ved=0ahUKEwio4ciQ1-GPAxUnDTQIHUEjAkUQ4dUDCBo&uact=5&oq=mailallcenter&gs_lp=Egdnd3Mtd2l6Ig1tYWlsYWxsY2VudGVyMgcQABiABBgNMgcQABiABBgNMg0QLhiABBjHARgNGK8BMg0QLhiABBjHARgNGK8BMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMg0QLhiABBjHARgNGK8BMgcQABiABBgNMgcQABiABBgNSOMmUJMDWIokcAF4AJABAJgB5wKgAdgNqgEHNS42LjEuMbgBA8gBAPgBAZgCDqAC9A2oAgrCAgcQIxgnGOoCwgIEECMYJ8ICERAuGIAEGJECGNEDGMcBGIoFwgILEAAYgAQYsQMYgwHCAgsQLhiABBixAxiDAcICDhAuGIAEGLEDGNEDGMcBwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxiDARiKBcICBRAuGIAEwgIUEC4YgAQYkQIYsQMY0QMYxwEYigXCAggQLhiABBixA8ICBRAAGIAEwgIOEAAYgAQYsQMYgwEYigXCAggQABiABBixA8ICCxAAGIAEGJECGIoFwgIKEAAYgAQYsQMYCsICDRAuGIAEGMcBGAoYrwHCAgcQABiABBgKwgIHEC4YgAQYCsICERAAGIAEGJECGLEDGIMBGIoFwgILEC4YgAQYxwEYrwHCAg0QABiABBixAxiDARgKwgIKEC4YgAQYsQMYCsICDRAuGIAEGLEDGNQCGArCAgYQABgDGArCAgIQJsICCBAAGIAEGKIEwgIFEAAY7wXCAggQABiiBBiJBZgDAvEFKrX0HIr85WGSBwc1LjcuMS4xoAevkQGyBwc0LjcuMS4xuAfxDcIHBTYuNi4yyAcW&sclient=gws-wiz',
    'https://www.google.com/maps/dir/?api=1&destination=809+Cuesta+Dr+Suite+B,+Mountain+View,+CA+94040',
    'https://www.yelp.com/biz/mail-all-center-mountain-view-9',
    'https://www.mapquest.com/us/california/mail-all-center-11725516',
    'https://oag.ca.gov/fingerprints/locations/mail-all-center',
  ],

  // Location Information
  address: {
    '@type': 'PostalAddress',
    streetAddress: '809 Cuesta Dr, Suite B',
    addressLocality: 'Mountain View',
    addressRegion: 'CA',
    postalCode: '94040',
    addressCountry: 'US',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.4089,
    longitude: -122.0877,
  },
  hasMap:
    'https://www.google.com/maps/place/Mail+All+Center+-+Live+Scan,+Fingerprinting,+Notary+%26+Apostille/@37.372944,-122.0904646,17z/data=!3m2!4b1!5s0x808fb12bb56363e1:0xd088afecb64126dc!4m6!3m5!1s0x808fb151a6503caf:0xbf74aa58e146623c!8m2!3d37.372944!4d-122.0878897!16s%2Fg%2F11t7s0wkk7',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-650-961-4646',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['en', 'es'],
    },
  ],
  logo: `${SITE_URL}/assets/Logo/icons8-fingerprint-scan-80.png`,
  image: `${SITE_URL}/assets/Logo/icons8-fingerprint-scan-80.png`,

  // Business Hours
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],

  areaServed: [
    // Primary service area - immediate vicinity (5-15 minutes)
    {
      '@type': 'City',
      name: 'Mountain View',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Palo Alto',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Sunnyvale',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Los Altos',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    // Secondary service area - nearby cities (15-25 minutes)
    {
      '@type': 'City',
      name: 'Santa Clara',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Cupertino',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'San Jose',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Redwood City',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Menlo Park',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    // Regional coverage for broader searches
    {
      '@type': 'AdministrativeArea',
      name: 'Santa Clara County',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'San Mateo County',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bay Area',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Silicon Valley',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'South Bay',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  ],

  // Advanced Local Business Attributes
  isAccessibleForFree: false,
  smokingAllowed: false,
  hasWiFi: true,
  acceptsReservations: false,
  parentOrganization: {
    '@type': 'Organization',
    name: 'Mail All Center LLC',
  },

  // Professional Memberships
  memberOf: [
    {
      '@type': 'Organization',
      name: 'California Association of Notaries',
    },
    {
      '@type': 'Organization',
      name: 'National Notary Association',
    },
  ],

  // Service Delivery Options
  serviceType: [
    'Walk-in Service',
    'Appointment Based Service',
    'Same-day Service',
    'Document Processing',
  ],

  // Accessibility Features
  accessibilityFeatures: [
    'Wheelchair Accessible',
    'Ground Level Access',
    'Wide Doorways',
    'Accessible Parking',
  ],

  // Additional Services
  additionalServices: [
    'Language Assistance Available',
    'Walk-in Appointments',
    'Same-day Processing',
    'Digital Receipt Generation',
  ],

  // Pricing and Payment
  priceRange: '$',
  paymentAccepted: [
    'Cash',
    'Credit Card',
    'Debit Card',
    'Check',
    'Money Order',
  ],
  currenciesAccepted: 'USD',

  // Services Offered
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Live Scan Fingerprinting',
          description:
            'Live Scan fingerprint submission services for employment, licensing, and background checks. Electronic fingerprinting with same-day processing.',
          serviceType: 'Fingerprinting Service',
        },
        price: 17,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'FBI FD-258 Manual Fingerprinting',
          description:
            'Traditional FBI FD-258 and FBI FD-1164 manual ink fingerprinting services for international use and specific agency requirements',
          serviceType: 'Fingerprinting Service',
        },
        price: 17,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Notary Public Services',
          description: 'Licensed notary services for all document types',
          serviceType: 'Notary Service',
        },
        price: 5,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Apostille Services',
          description:
            'Professional apostille authentication for birth certificates, diplomas, FBI background checks, marriage certificates, and corporate documents. Hague Convention compliant.',
          serviceType: 'Document Service',
        },
        price: 75,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Passport Photos',
          description: 'Professional passport photos meeting all requirements',
          serviceType: 'Photo Service',
        },
        price: 9.99,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mailbox Rental',
          description:
            'Private mailbox with street address and package receiving',
          serviceType: 'Mailbox Service',
        },
        price: 20.0,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Printing & Lamination',
          description:
            'High-quality printing and lamination services for all your document needs',
          serviceType: 'Printing Service',
        },
        price: 5,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },

      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fax copy and Shredding',
          description:
            'High-quality fax, copy, and shredding services for all your document needs',
          serviceType: 'Document Service',
        },
        price: 1.99,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
  },

  // Reviews and Ratings
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.9,
    reviewCount: 150,
    bestRating: 5,
    worstRating: 1,
    ratingExplanation:
      'Based on customer reviews for professional live scan, notary, and business services',
  },

  // Business Classifications
  knowsAbout: [
    'Live Scan Fingerprinting',
    'FBI FD-258 Manual Fingerprinting',
    'FBI FD-1164 Fingerprinting',
    'Ink Fingerprinting',
    'Notary Public Services',
    'Apostille Services',
    'Birth Certificate Apostille',
    'Diploma Apostille',
    'FBI Background Check Apostille',
    'Passport Photos',
    'Mailbox Rental',
    'Packing and Shipping',
    'Printing Services',
    'Document Services',
    'Background Checks',
    'Lamination Services',
    'Fax and Copy Services',
    'Shredding Services',
  ],

  // Certifications
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Department of Justice California',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Federal Bureau of Investigation',
      },
    },
  ],
};

// Service JSON-LD Schemas (used on individual service pages)

// Live Scan Fingerprinting Service Schema
export const liveScanServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/Live-Scan-Fingerprinting#service`,
  name: 'Live Scan Fingerprinting',
  alternateName: [
    'Digital Fingerprinting',
    'Electronic Fingerprinting',
    'DOJ Fingerprinting',
  ],
  description:
    'Live Scan fingerprint submission services for employment, licensing, and background checks. Electronic fingerprinting with same-day processing available.',
  serviceType: 'Fingerprinting Service',
  category: 'Background Check Services',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bay Area',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  availableLanguage: ['English', 'Spanish'],
  offers: {
    '@type': 'Offer',
    name: 'Live Scan Fingerprinting Service',
    price: 17,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validFrom: '2010-01-01',
    priceValidUntil: '2025-12-31',
  },
};

// Notary Service Schema
export const notaryServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/notary#service`,
  name: 'Notary Public Services',
  description:
    'Licensed California notary public services for all document types including acknowledgments, jurats, and certified copies.',
  serviceType: 'Notary Service',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bay Area',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  offers: {
    '@type': 'Offer',
    price: 25,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

// Apostille Service Schema
export const apostilleServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/apostille#service`,
  name: 'Apostille Services',
  description:
    'Professional apostille authentication for birth certificates, diplomas, FBI background checks, marriage certificates, and corporate documents. Hague Convention compliant.',
  serviceType: 'Document Authentication Service',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bay Area',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  offers: {
    '@type': 'Offer',
    price: 75,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

// Printing Service Schema
export const printingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/printing#service`,
  name: 'Printing, Copy, Lamination & Shredding',
  description:
    'Professional printing, copying, lamination, and secure document shredding services for all your business and personal needs.',
  serviceType: 'Document Processing Service',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bay Area',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  offers: {
    '@type': 'Offer',
    price: 5,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

// Packing & Shipping Service Schema
export const packingShippingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/pack-ship#service`,
  name: 'Packing & Shipping Services',
  description:
    'Professional packing and shipping services for all carriers including FedEx, UPS, and USPS. Package receiving and mail forwarding available.',
  serviceType: 'Shipping Service',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bay Area',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
  },
};

// Passport Photos Service Schema
export const passportPhotosServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/passport-photos#service`,
  name: 'Passport Photos',
  description:
    'Professional passport photos meeting all US State Department requirements. Same-day service available for passports, visas, and ID cards.',
  serviceType: 'Photography Service',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bay Area',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  offers: {
    '@type': 'Offer',
    price: 9.99,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

// Mailbox Rental Service Schema
export const mailboxRentalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/mailbox-rental#service`,
  name: 'Mailbox Rental',
  description:
    'Private mailbox rental with real street address, package receiving, and mail forwarding services. Perfect for small businesses and individuals.',
  serviceType: 'Mail Service',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bay Area',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  offers: {
    '@type': 'Offer',
    price: 20,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

// Legacy schema export for backward compatibility
export const googleBusinessSchema = businessSchema;
