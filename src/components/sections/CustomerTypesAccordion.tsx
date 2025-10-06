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
      'Massage Therapist',
      'Nursing License',
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
      'Child Care',
      'Foster Parents',
      'Post-Secondary Education',
      'Private and Charter Schools',
      'School-district Employment',
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
      'Bar examination',
      'Bureau of Alcohol & Drug Abuse',
      'Department of Agriculture Employment',
      'Department of Motor Vehicles',
      'Department of Wildlife',
      'FFL (Federal firearm License)',
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
      'Accounting professionals',
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
      'Dietitian',
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
      'Document Prep',
      'Housing Authority Employment or Application',
      'Kinship Care',
      'Long-term Care Administrators',
      'Manufactured Housing',
      'Social Workers',
      'Traveling Outside USA',
      'Volunteers',
    ],
  },
];

export const CustomerTypesAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const totalCustomers = customerCategories.reduce(
    (sum, cat) => sum + cat.count,
    0
  );

  return (
    <section id="who-we-serve" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            DOJ/FBI Approved Live Scan & Ink Fingerprints Near Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            From healthcare to education, legal to business - we provide
            fingerprinting services for professionals across all industries
            requiring background checks.
          </p>
          <Badge variant="secondary" className="text-sm">
            {totalCustomers}+ Professional Categories
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {customerCategories.map((category) => {
            const Icon = category.icon;
            const isOpen = openItems.includes(category.title);

            return (
              <Collapsible
                key={category.title}
                open={isOpen}
                onOpenChange={() => toggleItem(category.title)}
              >
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <CollapsibleTrigger className="w-full">
                    <div className="p-2 flex items-center justify-between hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}
                        >
                          <Icon className={`h-6 w-6 ${category.color}`} />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold">
                            {category.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline">{category.count} types</Badge>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-6">
                      <div className="border-t pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Don&apos;t see your profession listed? We serve all industries
            requiring background checks.
          </p>
          <Button asChild>
            <Link href="/contact-us">Contact Us for Your Specific Needs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
