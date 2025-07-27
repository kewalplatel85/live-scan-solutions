'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'faq' | 'breadcrumb';
  data?: Record<string, unknown>;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseOrganization = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://livescansolutions.com/#organization',
      name: 'Live Scan Solutions',
      description:
        'Professional Live Scan fingerprinting, Notary Public, and Apostille services in Mountain View, CA. DOJ & FBI certified.',
      url: 'https://livescansolutions.com',
      telephone: '(650) 961-4646',
      email: 'info@livescansolutions.com',
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
      openingHours: ['Mo-Fr 10:00-17:00', 'Sa 10:00-14:00', 'Su Closed'],
      priceRange: '$17-$125',
      areaServed: [
        {
          '@type': 'City',
          name: 'Mountain View',
          containedInPlace: {
            '@type': 'State',
            name: 'California',
          },
        },
        {
          '@type': 'City',
          name: 'Palo Alto',
          containedInPlace: {
            '@type': 'State',
            name: 'California',
          },
        },
        {
          '@type': 'City',
          name: 'Sunnyvale',
          containedInPlace: {
            '@type': 'State',
            name: 'California',
          },
        },
        {
          '@type': 'City',
          name: 'San Jose',
          containedInPlace: {
            '@type': 'State',
            name: 'California',
          },
        },
        {
          '@type': 'City',
          name: 'Cupertino',
          containedInPlace: {
            '@type': 'State',
            name: 'California',
          },
        },
        {
          '@type': 'City',
          name: 'Santa Clara',
          containedInPlace: {
            '@type': 'State',
            name: 'California',
          },
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fingerprinting and Document Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Live Scan Fingerprinting',
              description:
                'Electronic fingerprinting for employment, licensing, and background checks',
              provider: {
                '@id': 'https://livescansolutions.com/#organization',
              },
            },
            price: '17',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Notary Public Services',
              description:
                'Professional document notarization with licensed notaries',
              provider: {
                '@id': 'https://livescansolutions.com/#organization',
              },
            },
            price: '25',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Apostille Services',
              description: 'Document authentication for international use',
              provider: {
                '@id': 'https://livescansolutions.com/#organization',
              },
            },
            price: '75',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        ],
      },
      logo: 'https://livescansolutions.com/assets/Logo/icons8-fingerprint-scan-80.png',
      image:
        'https://livescansolutions.com/assets/Logo/icons8-fingerprint-scan-80.png',
      sameAs: [
        'https://www.facebook.com/livescansolutions',
        'https://www.linkedin.com/company/livescansolutions',
        'https://www.yelp.com/biz/livescansolutions',
      ],
      founder: {
        '@type': 'Person',
        name: 'Live Scan Solutions Team',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          name: 'Excellent service and fast processing',
          author: {
            '@type': 'Person',
            name: 'Sarah Johnson',
          },
          reviewBody:
            'Fast, professional service. Got my Live Scan done same day with no appointment needed.',
        },
      ],
    };

    switch (type) {
      case 'organization':
      case 'localBusiness':
        return baseOrganization;

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: (data?.name as string) || 'Live Scan Fingerprinting',
          description:
            (data?.description as string) ||
            'Professional electronic fingerprinting services for employment and licensing',
          provider: {
            '@id': 'https://livescansolutions.com/#organization',
          },
          areaServed: 'San Francisco Bay Area, California',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Live Scan Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Standard Live Scan',
                  description: 'Digital fingerprinting for background checks',
                },
                price: '17',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Express Live Scan',
                  description:
                    'Priority fingerprinting with same-day processing',
                },
                price: '45',
                priceCurrency: 'USD',
              },
            ],
          },
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data || [
            {
              '@type': 'Question',
              name: 'How long does Live Scan fingerprinting take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Live Scan fingerprinting typically takes 10-15 minutes. Results are transmitted electronically immediately after capture.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need an appointment for Live Scan?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No appointment necessary! We welcome walk-ins during business hours: Mon-Fri 10AM-5PM, Sat 10AM-2PM.',
              },
            },
            {
              '@type': 'Question',
              name: 'What areas do you serve?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We serve the entire San Francisco Bay Area including Mountain View, Palo Alto, Sunnyvale, San Jose, Cupertino, Santa Clara, and surrounding cities.',
              },
            },
          ],
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data || [],
        };

      default:
        return baseOrganization;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
};
