// src/data/routes.config.ts
export type RouteCategory = 'home' | 'core' | 'standard' | 'info';

export type RouteDef = {
  path: string; // "/live-scan"
  title?: string; // "Live Scan"
  category: RouteCategory;
  // optional per-route override; omit to use the global date
  lastModified?: string; // "2025-09-18"
};

export const LASTMOD_ALL = '2025-09-18'; // set once (change when content changes)

const CATEGORIES: Record<
  RouteCategory,
  { priority: number; freq: 'daily' | 'weekly' | 'monthly' }
> = {
  home: { priority: 1.0, freq: 'daily' },
  core: { priority: 0.9, freq: 'weekly' },
  standard: { priority: 0.8, freq: 'monthly' },
  info: { priority: 0.6, freq: 'monthly' },
};

export const ROUTES: RouteDef[] = [
  { path: '/', title: 'Home', category: 'home' },
  { path: '/live-scan', title: 'Live Scan', category: 'core' },
  { path: '/notary', title: 'Notary', category: 'core' },
  { path: '/apostille', title: 'Apostille', category: 'core' },
  { path: '/passport-photos', title: 'Passport Photos', category: 'standard' },
  { path: '/pack-ship', title: 'Pack & Ship', category: 'standard' },
  { path: '/mailbox-rental', title: 'Mailbox Rental', category: 'standard' },
  { path: '/printing', title: 'Printing', category: 'standard' },
  {
    path: '/bay-area-services',
    title: 'Bay Area Services',
    category: 'standard',
  },
  { path: '/about-us', title: 'About', category: 'info' },
  { path: '/contact-us', title: 'Contact', category: 'info' },
  { path: '/faq', title: 'FAQ', category: 'info' },
];

// helpers you can reuse in sitemap, nav, breadcrumbs, etc.
export function toSitemapEntries(siteUrl: string) {
  return ROUTES.map((r) => {
    const meta = CATEGORIES[r.category];
    const lastmod = r.lastModified ?? LASTMOD_ALL;
    return {
      url: `${siteUrl}${r.path === '/' ? '' : r.path}`,
      lastModified: new Date(`${lastmod}T00:00:00-07:00`),
      changeFrequency: meta.freq,
      priority: r.path === '/' ? 1.0 : meta.priority,
    };
  });
}

// You can also export nav links from the same source if you want:
export const NAV_LINKS = ROUTES.filter((r) => r.path !== '/') // skip homepage in nav
  .map((r) => ({ href: r.path, label: r.title || r.path.replace('/', '') }));
