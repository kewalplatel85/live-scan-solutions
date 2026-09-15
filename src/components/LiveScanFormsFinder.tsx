'use client';

import { Badge } from '@/components/ui/badge';
import { Download, FileText, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

type FormCategory = 'Popular' | 'Professional' | 'Care & Education' | 'Records';

type LiveScanForm = {
  title: string;
  form: string;
  description: string;
  href: string;
  source: string;
  categories: FormCategory[];
  keywords: string;
};

const categories: Array<'Popular' | FormCategory> = [
  'Popular',
  'Professional',
  'Care & Education',
  'Records',
];

const forms: LiveScanForm[] = [
  {
    title: 'General Employment & Licensing',
    form: 'BCIA 8016',
    description: 'General-use California DOJ applicant request form.',
    href: 'https://oag.ca.gov/system/files/media/BCIA-8016.pdf',
    source: 'California DOJ',
    categories: ['Popular', 'Professional'],
    keywords: 'general employer employment license licensing volunteer agency',
  },
  {
    title: 'California Notary Public',
    form: 'SOS/BCIA 8016',
    description: 'For new and renewing California notary applicants.',
    href: 'https://notary.cdn.sos.ca.gov/forms/notary_livescan.pdf',
    source: 'Secretary of State',
    categories: ['Popular', 'Professional'],
    keywords: 'notary commission secretary state renewal',
  },
  {
    title: 'Community Care Licensing',
    form: 'LIC 9163',
    description: 'For child care, home care, elder care, and care facilities.',
    href: 'https://www.cdss.ca.gov/Portals/9/Additional-Resources/Forms-and-Brochures/2020/I-L/LIC9163.pdf?ver=bjvlePFphOnuNbE5s31iCA%3D%3D',
    source: 'California DSS',
    categories: ['Popular', 'Care & Education'],
    keywords:
      'child daycare home care aide elder residential facility caregiver ccl',
  },
  {
    title: 'Teacher Credentialing',
    form: 'Form 41-LS',
    description:
      'For California teaching credentials, permits, and clearances.',
    href: 'https://docs.ctc.ca.gov/Document/Download/29865',
    source: 'California CTC',
    categories: ['Popular', 'Care & Education'],
    keywords: 'teacher educator school credential substitute teaching ctc',
  },
  {
    title: 'Security Guard',
    form: 'BSIS Guard',
    description: 'Prefilled BSIS form for a security guard registration.',
    href: 'https://www.bsis.ca.gov/forms_pubs/livescan/guard.pdf',
    source: 'California BSIS',
    categories: ['Popular', 'Professional'],
    keywords: 'guard card security officer bsis',
  },
  {
    title: 'Security Guard with Firearm',
    form: 'BSIS Guard/Firearm',
    description:
      'For a combined security guard and exposed-firearm application.',
    href: 'https://www.bsis.ca.gov/forms_pubs/livescan/guard_firearm.pdf',
    source: 'California BSIS',
    categories: ['Professional'],
    keywords: 'armed security guard firearm exposed weapon bsis',
  },
  {
    title: 'Locksmith',
    form: 'BSIS Locksmith',
    description:
      'Prefilled BSIS Live Scan request form for locksmith applicants.',
    href: 'https://www.bsis.ca.gov/forms_pubs/livescan/locksmith.pdf',
    source: 'California BSIS',
    categories: ['Professional'],
    keywords: 'locksmith employee company bsis',
  },
  {
    title: 'California Real Estate License',
    form: 'RE 237',
    description: 'For salesperson, broker, and other DRE license applicants.',
    href: 'https://www.dre.ca.gov/files/pdf/forms/re237.pdf',
    source: 'California DRE',
    categories: ['Professional'],
    keywords: 'real estate realtor salesperson broker dre license',
  },
  {
    title: 'DMV Occupational Licensing',
    form: 'DMV 8016',
    description:
      'For vehicle-industry licenses and ambulance driver certificates.',
    href: 'https://www.dmv.ca.gov/portal/file/request-for-live-scan-service-applicant-submission-dmv-8016-pdf/',
    source: 'California DMV',
    categories: ['Professional'],
    keywords:
      'vehicle salesperson dealer instructor transporter dismantler ambulance dmv',
  },
  {
    title: 'California Insurance Licensing',
    form: 'LIC 442-39A',
    description: 'Live Scan request form for California insurance applicants.',
    href: 'https://www.insurance.ca.gov/0200-industry/0050-renew-license/0200-requirements/upload/LIC44239AReqlivescan-4-2.pdf',
    source: 'Department of Insurance',
    categories: ['Professional'],
    keywords: 'insurance agent broker adjuster bail license cdi',
  },
  {
    title: 'Public Schools & Joint Powers Agencies',
    form: 'BCIA 8016A',
    description: 'California DOJ form specifically for public-school agencies.',
    href: 'https://oag.ca.gov/system/files/media/BCIA-8016A.pdf',
    source: 'California DOJ',
    categories: ['Care & Education'],
    keywords: 'public school district joint powers agency education employee',
  },
  {
    title: 'Long-Term Care Ombudsman',
    form: 'LIC 9163B',
    description: 'For applicants serving as long-term care ombudsmen.',
    href: 'https://www.cdss.ca.gov/Portals/9/Additional-Resources/Forms-and-Brochures/2020/I-L/LIC9163B.pdf?ver=2022-12-05-151626-760',
    source: 'California DSS',
    categories: ['Care & Education'],
    keywords: 'long term care ombudsman elder senior facility',
  },
  {
    title: 'Personal Record Review or Foreign Adoption',
    form: 'BCIA 8016RR',
    description:
      'For reviewing your own DOJ record or a foreign-adoption check.',
    href: 'https://oag.ca.gov/system/files/media/BCIA-8016RR.pdf',
    source: 'California DOJ',
    categories: ['Records'],
    keywords:
      'personal record review rap sheet foreign adoption own background',
  },
  {
    title: 'CalVECHS Volunteer & Employee Check',
    form: 'BCIA 8016VECHS',
    description: 'For organizations participating in the CalVECHS program.',
    href: 'https://oag.ca.gov/system/files/media/BCIA-8016VECHS.pdf',
    source: 'California DOJ',
    categories: ['Records'],
    keywords:
      'calvechs volunteer employee criminal history organization ncpa vca',
  },
  {
    title: 'Custodian of Records',
    form: 'BCIA 8016CUS',
    description:
      'Official DOJ instructions and forms for a designated custodian.',
    href: 'https://oag.ca.gov/fingerprints/custodian',
    source: 'California DOJ',
    categories: ['Records'],
    keywords: 'custodian records cor agency confirmation',
  },
];

export function LiveScanFormsFinder() {
  const [category, setCategory] =
    useState<(typeof categories)[number]>('Popular');
  const [query, setQuery] = useState('');

  const visibleForms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return forms.filter((form) => {
      if (normalizedQuery) {
        return `${form.title} ${form.form} ${form.description} ${form.source} ${form.keywords}`
          .toLowerCase()
          .includes(normalizedQuery);
      }

      return form.categories.includes(category);
    });
  }, [category, query]);

  return (
    <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-3xl border bg-card shadow-lg shadow-slate-200/40 dark:shadow-none">
      <div className="flex flex-col gap-2 border-b border-amber-200 bg-amber-50/80 px-4 py-3 text-sm leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p>
          <strong>Have a form from your employer or requesting agency?</strong>{' '}
          Bring and use that exact form. Its ORI and application details
          identify the agency that should receive your results.
        </p>
        <a
          href="https://oag.ca.gov/fingerprints/forms"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none font-semibold text-primary underline underline-offset-4 dark:text-blue-300"
        >
          Browse all DOJ forms
        </a>
      </div>

      <div className="border-b bg-gradient-to-r from-primary/10 via-primary/5 to-background p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">Find the right form</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              15 verified forms from California agencies
            </p>
          </div>

          <label className="relative block w-full sm:max-w-sm">
            <span className="sr-only">Search Live Scan forms</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search: guard, notary, DMV…"
              className="min-h-11 w-full rounded-xl border bg-background py-2 pl-10 pr-4 text-sm shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div
          className="grid grid-cols-2 gap-2 sm:flex sm:overflow-x-auto"
          aria-label="Filter Live Scan forms"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setQuery('');
              }}
              className={`min-h-10 flex-none rounded-full px-4 text-sm font-semibold transition-colors ${
                category === item && !query
                  ? 'bg-primary text-primary-foreground'
                  : 'border bg-background text-muted-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">
            {query ? 'Search results' : category}
          </p>
          <Badge variant="secondary">
            {visibleForms.length} {visibleForms.length === 1 ? 'form' : 'forms'}
          </Badge>
        </div>

        <div className="mt-3 grid max-h-[380px] gap-2 overflow-y-auto pr-1 md:max-h-[340px] md:grid-cols-2">
          {visibleForms.map((form) => (
            <article
              key={form.title}
              className="group flex items-center gap-3 rounded-xl border bg-background p-3 transition-all hover:border-primary/40 hover:bg-primary/[0.025]"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold leading-tight sm:text-base">
                    {form.title}
                  </h3>
                  <Badge variant="outline" className="px-1.5 py-0 text-[10px]">
                    {form.form}
                  </Badge>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {form.description}
                </p>
              </div>
              <a
                href={form.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 flex-shrink-0 items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-sm"
                aria-label={`Open official ${form.title} ${form.form} form`}
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Open</span>
              </a>
            </article>
          ))}
        </div>

        {visibleForms.length === 0 && (
          <div className="mt-3 rounded-2xl border border-dashed p-6 text-center">
            <p className="font-semibold">No matching form found.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Ask your employer or requesting agency for its prefilled form, or
              browse the complete California DOJ form library.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
