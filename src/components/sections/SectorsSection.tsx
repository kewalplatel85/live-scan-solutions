import { Section } from '@/components/common/Section';
import {
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Scale,
  Truck,
  Users,
} from 'lucide-react';

const sectorsData = [
  {
    title: 'Healthcare & Medical',
    description: 'Medical professionals and healthcare workers',
    icon: Heart,
    color: 'text-red-600',
    count: '9 types',
  },
  {
    title: 'Education & Childcare',
    description: 'Teachers, childcare workers, and education staff',
    icon: GraduationCap,
    color: 'text-blue-600',
    count: '7 types',
  },
  {
    title: 'Legal & Government',
    description: 'Legal professionals and government workers',
    icon: Scale,
    color: 'text-purple-600',
    count: '10 types',
  },
  {
    title: 'Business & Finance',
    description: 'Financial professionals and business licensing',
    icon: Briefcase,
    color: 'text-green-600',
    count: '8 types',
  },
  {
    title: 'Transportation & Safety',
    description: 'Drivers and security professionals',
    icon: Truck,
    color: 'text-orange-600',
    count: '5 types',
  },
  {
    title: 'Professional Licenses',
    description: 'Licensed professionals across various fields',
    icon: Award,
    color: 'text-indigo-600',
    count: '9 types',
  },
  {
    title: 'Community Services',
    description: 'Community workers and volunteers',
    icon: Users,
    color: 'text-teal-600',
    count: '10 types',
  },
];

export const SectorsSection = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
          From healthcare to education, legal to business - we provide
          fingerprinting services for professionals across all industries
          requiring background checks.
        </p>
        <div className="text-sm font-medium text-primary">
          58+ Professional Categories
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectorsData.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className={`h-6 w-6 ${sector.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {sector.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {sector.count}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
