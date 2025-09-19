// src/app/sitemap.ts
import { toSitemapEntries } from '@/data/routes.config';
import { SITE_URL } from '@/lib/config';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return toSitemapEntries(SITE_URL);
}
