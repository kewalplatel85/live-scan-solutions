export const googleBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FinancialService', 'ProfessionalService'],
  '@id': 'https://www.mailallcenter.com/#organization',
  name: 'Mail All Center',
  alternateName: [
    'Mail All Center Mountain View',
    'Live Scan Solutions',
    'Mountain View Live Scan',
  ],
  description:
    'Mail All Center is a comprehensive business service center in Mountain View, CA, offering Live Scan & Ink Fingerprinting, Notary Public services, Apostille services, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, Lamination, Fax & Copy, and Shredding services. DOJ & FBI certified with over 10 years of experience serving the Bay Area.',

  // Contact Information
  url: 'https://www.mailallcenter.com',
  telephone: '(650) 961-4646',
  email: 'info@mailallcenter.com',

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

  // Business Hours
  openingHours: [
    'Mo 10:00-17:00',
    'Tu 10:00-17:00',
    'We 10:00-17:00',
    'Th 10:00-17:00',
    'Fr 10:00-17:00',
    'Sa 10:00-14:00',
    'Su closed',
  ],

  // Service Areas
  areaServed: [
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
      name: 'San Jose',
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
      name: 'Santa Clara',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Fremont',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Menlo Park',
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
      name: 'Campbell',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Los Altos',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Milpitas',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Foster City',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'San Mateo',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Saratoga',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Los Gatos',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Morgan Hill',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Burlingame',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'San Carlos',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Belmont',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Half Moon Bay',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Hayward',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Union City',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Newark',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Daly City',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Pacifica',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Pleasanton',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Dublin',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Livermore',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'Alameda',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'City',
      name: 'San Leandro',
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
      name: 'Peninsula',
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
  priceRange: '$1-$125',
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
            'DOJ & FBI certified digital fingerprinting for employment, licensing, and background checks. Electronic fingerprinting with same-day processing.',
          serviceType: 'Fingerprinting Service',
        },
        price: '17.00',
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
        price: '25.00',
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
        price: '25.00',
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
        price: '75.00',
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
        price: '9.99',
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
        price: '20.00',
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
        price: '5.00',
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
        price: '1.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
  },

  // Reviews and Ratings
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
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

  // Additional Properties
  foundingDate: '2010',
  slogan: 'Your Complete Business Service Center',
  logo: 'https://www.mailallcenter.com/assets/Logo/icons8-fingerprint-scan-80.png',
  image:
    'https://www.mailallcenter.com/assets/Logo/icons8-fingerprint-scan-80.png',

  // Same As (Social Media/Directory Profiles)
  sameAs: [
    'https://www.google.com/business/',
    'https://www.yelp.com/biz/mail-all-center-mountain-view',
    'https://www.facebook.com/mailallcenter',
  ],
};
