'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Building2,
  ChevronDown,
  GraduationCap,
  Heart,
  Scale,
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
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setOpenItem((current) => (current === title ? null : title));
  };

  const totalUseCases = customerCategories.reduce(
    (sum, cat) => sum + cat.count,
    0
  );

  return (
    <section id="who-we-serve" className="border-y bg-background py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
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

        <div className="mx-auto grid max-w-7xl items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
          {customerCategories.map((category) => {
            const Icon = category.icon;
            const isOpen = openItem === category.title;

            return (
              <Collapsible
                key={category.title}
                open={isOpen}
                onOpenChange={() => toggleItem(category.title)}
                className={isOpen ? 'md:col-span-2 xl:col-span-3' : undefined}
              >
                <Card className="overflow-hidden transition-shadow hover:shadow-md">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex min-h-[72px] items-center justify-between gap-3 p-3 transition-colors hover:bg-muted/50">
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg ${category.bgColor}`}
                        >
                          <Icon className={`h-6 w-6 ${category.color}`} />
                        </div>
                        <div className="min-w-0 text-left">
                          <h3 className="font-semibold">{category.title}</h3>
                          <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground sm:text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 items-center gap-2">
                        <Badge variant="outline" className="hidden sm:flex">
                          {category.count} types
                        </Badge>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pb-5 pt-0">
                      <div className="border-t pt-4">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          {category.types.map((type, typeIndex) => (
                            <div
                              key={typeIndex}
                              className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors"
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${category.bulletColor} flex-shrink-0`}
                              />
                              <span className="text-sm font-medium">
                                {type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
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
