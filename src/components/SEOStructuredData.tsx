import Script from 'next/script';

interface SEOStructuredDataProps {
  type: 'service' | 'business' | 'breadcrumb' | 'faq';
  serviceName?: string;
  serviceDescription?: string;
  price?: string;
  breadcrumbItems?: Array<{ name: string; url: string }>;
  faqItems?: Array<{ question: string; answer: string }>;
}

export function SEOStructuredData({
  type,
  serviceName,
  serviceDescription,
  price,
  breadcrumbItems,
  faqItems,
}: SEOStructuredDataProps) {
  const getStructuredData = () => {
    const baseBusinessData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.mailallcenter.com/#organization',
      name: 'Mail All Center',
      alternateName: 'Mail All Center Mountain View',
      description:
        'Mail All Center provides comprehensive business services including Live Scan & Ink Fingerprinting, Notary Public, Apostille Services, Passport Photos, Mailbox Rental, Packing & Shipping, Printing, Lamination, Fax & Copy, and Shredding in Mountain View, CA.',
      url: 'https://www.mailallcenter.com',
      telephone: '(650) 961-4646',
      email: 'info@mailallcenter.com',
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
      openingHours: ['Mo-Fr 10:00-17:00', 'Sa 10:00-14:00'],
      priceRange: '$1-$125',
      areaServed: [
        'Mountain View, CA',
        'Palo Alto, CA',
        'Sunnyvale, CA',
        'San Jose, CA',
        'Cupertino, CA',
        'Santa Clara, CA',
        'Menlo Park, CA',
        'Redwood City, CA',
        'Fremont, CA',
        'Campbell, CA',
        'Los Altos, CA',
        'Milpitas, CA',
        'Foster City, CA',
        'San Mateo, CA',
        'Bay Area, CA',
        'Silicon Valley, CA',
      ],
      paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Check'],
      currenciesAccepted: 'USD',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '145',
        bestRating: '5',
      },
    };

    switch (type) {
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceName,
          description: serviceDescription,
          provider: baseBusinessData,
          areaServed: baseBusinessData.areaServed,
          offers: {
            '@type': 'Offer',
            price: price,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: new Date().toISOString(),
          },
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems?.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems?.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        };

      case 'business':
      default:
        return baseBusinessData;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
