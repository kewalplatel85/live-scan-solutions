/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://www.mailallcenter.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/private/*', '/admin/*', '/_next/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/_next/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/_next/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/_next/', '/api/'],
      },
    ],
    additionalSitemaps: ['https://www.mailallcenter.com/sitemap.xml'],
  },
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customSettings = {
      '/': { priority: 1.0, changefreq: 'weekly' },
      '/live-scan': { priority: 0.9, changefreq: 'weekly' },
      '/notary': { priority: 0.9, changefreq: 'weekly' },
      '/passport-photos': { priority: 0.8, changefreq: 'weekly' },
      '/apostille': { priority: 0.8, changefreq: 'weekly' },
      '/pack-ship': { priority: 0.8, changefreq: 'weekly' },
      '/mailbox-rental': { priority: 0.7, changefreq: 'weekly' },
      '/printing': { priority: 0.7, changefreq: 'weekly' },
      '/about': { priority: 0.6, changefreq: 'monthly' },
      '/contact': { priority: 0.6, changefreq: 'monthly' },
      '/faq': { priority: 0.5, changefreq: 'monthly' },
    };

    const custom = customSettings[path] || {
      priority: 0.5,
      changefreq: 'monthly',
    };

    return {
      loc: path,
      changefreq: custom.changefreq,
      priority: custom.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/live-scan'),
    await config.transform(config, '/notary'),
    await config.transform(config, '/apostille'),
    await config.transform(config, '/passport-photos'),
    await config.transform(config, '/mailbox-rental'),
    await config.transform(config, '/pack-ship'),
    await config.transform(config, '/printing'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/faq'),
  ],
};
