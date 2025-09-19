// components/SEOGraph.tsx
import { googleBusinessSchema } from '@/data/google-business-schema';
import { SITE_URL } from '@/lib/config';
import Script, { ScriptProps } from 'next/script';

type JsonLd = Record<string, unknown>;
type BreadcrumbItem = { name: string; url: string };

export const BUSINESS_NODE = googleBusinessSchema; // your full LocalBusiness node (unchanged)

export const WEBSITE_NODE: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Mail All Center',
  description:
    'Professional Live Scan Fingerprinting, Notary Public, Apostille, and Business Services in Mountain View, California',
  publisher: { '@id': googleBusinessSchema['@id'] },
  inLanguage: 'en-US',
};

export function buildWebPage({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description?: string;
}): JsonLd {
  const clean = url.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${clean}/#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': googleBusinessSchema['@id'] },
    inLanguage: 'en-US',
  };
}

export function buildBreadcrumb(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQ(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function buildHowTo(cfg: {
  name: string;
  description?: string;
  steps: { name: string; text: string; image?: string }[];
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: cfg.name,
    description: cfg.description,
    step: cfg.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.image ? { image: s.image } : {}),
    })),
  };
}

// keep-first de-dupe by @id (safe if a node is accidentally added twice)
function dedupeById(nodes: JsonLd[]): JsonLd[] {
  const seen = new Set<string>();
  return nodes.filter((n) => {
    const id = n['@id'];
    if (typeof id !== 'string' || !id) return true;
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

export default function SEOGraph({
  id,
  nodes,
  strategy = 'afterInteractive',
}: {
  id: string;
  nodes: JsonLd[];
  strategy?: ScriptProps['strategy'];
}) {
  const graph = dedupeById(nodes.filter(Boolean));
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      }}
    />
  );
}
