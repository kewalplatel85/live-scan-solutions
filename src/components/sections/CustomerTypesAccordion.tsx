'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  GraduationCap,
  Heart,
  Scale,
  Search,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const customerCategories = [
  {
    title: 'Healthcare & Medical',
    icon: Heart,
    description: 'Medical professionals and healthcare workers',
    count: 9,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    bulletColor: 'bg-red-600',
    types: [
      'Disability Care',
      'Elderly Care Employees',
      'Emergency Medical Systems',
      'Home Healthcare Agencies',
      'Massage Therapists',
      'Nursing Licensure',
      'Osteopathic Physicians',
      'Pharmacy Technicians',
      'Physical Therapists and Assistants',
    ],
  },
  {
    title: 'Education & Childcare',
    icon: GraduationCap,
    description: 'Teachers, childcare workers, and education staff',
    count: 7,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    bulletColor: 'bg-blue-600',
    types: [
      'Charter Schools',
      'Childcare Employment',
      'Foster Parents',
      'Post-Secondary Education',
      'Private and Charter Schools',
      'School District Employment',
      'Teaching License',
    ],
  },
  {
    title: 'Legal & Government',
    icon: Scale,
    description: 'Legal professionals and government workers',
    count: 10,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    bulletColor: 'bg-purple-600',
    types: [
      'ATF (Alcohol, Tobacco and Firearms)',
      'Bar Examination',
      'Bureau of Alcohol & Drug Abuse',
      'Department of Agriculture Employment',
      'Department of Motor Vehicles',
      'Department of Wildlife',
      'Federal Firearms License (FFL)',
      'Immigration',
      'Lawyers/State Bar',
      'Sealing Criminal Records',
    ],
  },
  {
    title: 'Business & Finance',
    icon: Building2,
    description: 'Financial professionals and business licensing',
    count: 8,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    bulletColor: 'bg-green-600',
    types: [
      'Accounting Professionals',
      'Contractors',
      'CPA',
      'Escrow Title Officers',
      'Insurance Inspectors and Officers',
      'Labor Commissioners',
      'Mortgage Professionals',
      'Real Estate Professionals',
    ],
  },
  {
    title: 'Transportation & Safety',
    icon: Truck,
    description: 'Drivers and security professionals',
    count: 5,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    bulletColor: 'bg-orange-600',
    types: [
      'Bus Drivers',
      'Limo Drivers',
      'Private Investigators',
      'Security Guards',
      'Taxicab Drivers',
    ],
  },
  {
    title: 'Professional Licenses',
    icon: ShieldCheck,
    description: 'Licensed professionals across various fields',
    count: 9,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    bulletColor: 'bg-indigo-600',
    types: [
      'Athletic Trainers',
      'Board of Long Term Examiners',
      'Cannabis Compliance Board',
      'Chiropractic Examiners',
      'Dentists and Dental Hygienists',
      'Dietitians',
      'Gaming License or Employment',
      'HCQC',
      'Psychology',
    ],
  },
  {
    title: 'Community Services',
    icon: Users,
    description: 'Community workers and volunteers',
    count: 11,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    bulletColor: 'bg-teal-600',
    types: [
      'Adoption',
      'Churches',
      'City or County Employment',
      'Document Preparation',
      'Housing Authority Employment or Application',
      'Kinship Care',
      'Long-term Care Administrators',
      'Manufactured Housing',
      'Social Workers',
      'International Travel',
      'Volunteers',
    ],
  },
];

export const CustomerTypesAccordion = () => {
  const [activeCategory, setActiveCategory] = useState(
    customerCategories[0].title
  );
  const [searchQuery, setSearchQuery] = useState('');

  const totalUseCases = customerCategories.reduce(
    (sum, cat) => sum + cat.count,
    0
  );
  const selectedCategory =
    customerCategories.find((category) => category.title === activeCategory) ??
    customerCategories[0];
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults = normalizedQuery
    ? customerCategories.flatMap((category) =>
        category.types
          .filter((type) => type.toLowerCase().includes(normalizedQuery))
          .map((type) => ({ type, category: category.title }))
      )
    : [];
  const visibleNeeds = normalizedQuery
    ? searchResults
    : selectedCategory.types.map((type) => ({
        type,
        category: selectedCategory.title,
      }));

  return (
    <section id="who-we-serve" className="border-y bg-background py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Live Scan for Professionals, Volunteers, and Organizations
          </h2>
          <p className="mx-auto mb-4 max-w-3xl text-lg text-muted-foreground">
            We provide Live Scan and ink fingerprinting for people across
            healthcare, education, government, business, transportation, and
            community service.
          </p>
          <Badge variant="secondary" className="text-sm">
            {totalUseCases} Common Fingerprinting Needs
          </Badge>
        </div>

        <div className="mx-auto mb-6 max-w-2xl">
          <label htmlFor="fingerprinting-need-search" className="sr-only">
            Search fingerprinting needs
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="fingerprinting-need-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search your profession or fingerprinting need"
              className="h-12 w-full rounded-xl border bg-card pl-12 pr-4 text-base shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl items-start gap-5 lg:grid-cols-[0.85fr_1.4fr]">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {customerCategories.map((category) => {
              const Icon = category.icon;
              const isActive =
                !normalizedQuery && selectedCategory.title === category.title;

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.title);
                    setSearchQuery('');
                  }}
                  aria-pressed={isActive}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                    isActive
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'bg-card hover:border-primary/40 hover:bg-muted/40'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg ${category.bgColor}`}
                  >
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">
                      {category.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground sm:text-sm">
                      {category.description}
                    </span>
                  </span>
                  <Badge variant="outline">{category.count}</Badge>
                </button>
              );
            })}
          </div>

          <Card className="overflow-hidden shadow-sm">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-2 border-b pb-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {normalizedQuery ? 'Search results' : 'Selected category'}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">
                    {normalizedQuery
                      ? `Matches for “${searchQuery.trim()}”`
                      : selectedCategory.title}
                  </h3>
                </div>
                <Badge variant="secondary">
                  {visibleNeeds.length}{' '}
                  {visibleNeeds.length === 1 ? 'match' : 'needs'}
                </Badge>
              </div>

              {visibleNeeds.length > 0 ? (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {visibleNeeds.map((need) => (
                    <li
                      key={`${need.category}-${need.type}`}
                      className="rounded-lg border bg-background p-3"
                    >
                      <span className="font-medium">{need.type}</span>
                      {normalizedQuery && (
                        <span className="mt-1 block text-xs text-muted-foreground">
                          {need.category}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-xl bg-muted/50 p-6 text-center">
                  <p className="font-semibold">No exact match found</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try a broader term or contact us so we can confirm which
                    fingerprinting service your agency requires.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-muted-foreground">
            Don&apos;t see your profession listed? Contact us to confirm the
            fingerprinting service required for your application.
          </p>
          <Button asChild>
            <Link href="/contact-us">Ask About Your Fingerprinting Need</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
