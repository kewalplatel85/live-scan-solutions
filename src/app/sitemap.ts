import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mailallcenter.com';
  const lastModified = new Date();

  // Combine all pages with intelligent prioritization based on business value
  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },

    // Core high-demand services
    {
      url: `${baseUrl}/live-scan`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.95, // Most searched service
    },
    {
      url: `${baseUrl}/notary`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // High-demand service
    },
    {
      url: `${baseUrl}/apostille`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // High-value service
    },

    // Standard services
    {
      url: `${baseUrl}/passport-photos`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pack-ship`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mailbox-rental`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/printing`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

    // Geographic and supporting pages
    {
      url: `${baseUrl}/bay-area-services`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Important for local SEO
    },

    // Information pages
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];
}
