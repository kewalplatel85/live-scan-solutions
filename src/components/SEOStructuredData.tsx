import { googleBusinessSchema } from '@/data/google-business-schema';
import Script from 'next/script';

interface SEOStructuredDataProps {
  type:
    | 'service'
    | 'business'
    | 'breadcrumb'
    | 'faq'
    | 'website'
    | 'organization'
    | 'review'
    | 'howto'
    | 'event'
    | 'product';
  serviceName?: string;
  serviceDescription?: string;
  price?: string;
  breadcrumbItems?: Array<{ name: string; url: string }>;
  faqItems?: Array<{ question: string; answer: string }>;
  pageUrl?: string;
  // Review schema properties
  reviewRating?: number;
  reviewText?: string;
  reviewerName?: string;
  reviewDate?: string;
  // HowTo schema properties
  howToSteps?: Array<{ name: string; text: string; image?: string }>;
  howToName?: string;
  howToDescription?: string;
  // Event schema properties
  eventName?: string;
  eventDescription?: string;
  eventStartDate?: string;
  eventEndDate?: string;
  eventLocation?: string;
  // Product schema properties
  productName?: string;
  productDescription?: string;
  productPrice?: string;
  productAvailability?: string;
}

export function SEOStructuredData({
  type,
  serviceName,
  serviceDescription,
  price,
  breadcrumbItems,
  faqItems,
  pageUrl: _pageUrl,
  // Review props
  reviewRating,
  reviewText,
  reviewerName,
  reviewDate,
  // HowTo props
  howToSteps,
  howToName,
  howToDescription,
  // Event props
  eventName,
  eventDescription,
  eventStartDate,
  eventEndDate,
  eventLocation,
  // Product props
  productName,
  productDescription,
  productPrice,
  productAvailability,
}: SEOStructuredDataProps) {
  const getStructuredData = () => {
    // Use centralized business schema as base
    const baseBusinessData = { ...googleBusinessSchema };

    switch (type) {
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceName,
          description: serviceDescription,
          provider: {
            '@type': 'LocalBusiness',
            '@id': baseBusinessData['@id'],
            name: baseBusinessData.name,
            telephone: baseBusinessData.telephone,
            address: baseBusinessData.address,
            geo: baseBusinessData.geo,
          },
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

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://www.mailallcenter.com/#website',
          url: 'https://www.mailallcenter.com',
          name: 'Mail All Center',
          description:
            'Professional Live Scan Fingerprinting, Notary Public, Apostille, and Business Services in Mountain View, California',
          publisher: {
            '@id': baseBusinessData['@id'],
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate:
                  'https://www.mailallcenter.com/?s={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          ],
          inLanguage: 'en-US',
        };

      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': baseBusinessData['@id'],
          name: baseBusinessData.name,
          url: baseBusinessData.url,
          logo: baseBusinessData.logo,
          description: baseBusinessData.description,
          telephone: baseBusinessData.telephone,
          email: baseBusinessData.email,
          address: baseBusinessData.address,
          sameAs: baseBusinessData.sameAs,
          foundingDate: baseBusinessData.foundingDate,
          slogan: baseBusinessData.slogan,
        };

      case 'review':
        return {
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: {
            '@type': 'LocalBusiness',
            '@id': baseBusinessData['@id'],
            name: baseBusinessData.name,
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: reviewRating,
            bestRating: 5,
            worstRating: 1,
          },
          author: {
            '@type': 'Person',
            name: reviewerName,
          },
          reviewBody: reviewText,
          datePublished: reviewDate,
        };

      case 'howto':
        return {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: howToName,
          description: howToDescription,
          step: howToSteps?.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
            image: step.image,
          })),
          totalTime: 'PT15M',
          supply: [
            {
              '@type': 'HowToSupply',
              name: 'Valid Photo ID',
            },
            {
              '@type': 'HowToSupply',
              name: 'Required Forms',
            },
          ],
        };

      case 'event':
        return {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: eventName,
          description: eventDescription,
          startDate: eventStartDate,
          endDate: eventEndDate,
          location: {
            '@type': 'Place',
            name: eventLocation || baseBusinessData.name,
            address: baseBusinessData.address,
          },
          organizer: {
            '@type': 'Organization',
            '@id': baseBusinessData['@id'],
            name: baseBusinessData.name,
          },
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        };

      case 'product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: productName,
          description: productDescription,
          offers: {
            '@type': 'Offer',
            price: productPrice,
            priceCurrency: 'USD',
            availability: productAvailability || 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              '@id': baseBusinessData['@id'],
              name: baseBusinessData.name,
            },
          },
          brand: {
            '@type': 'Brand',
            name: baseBusinessData.name,
          },
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
