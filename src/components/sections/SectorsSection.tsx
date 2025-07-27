import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Scale,
  Truck,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const sectorsData = [
  {
    title: 'Healthcare & Medical',
    description: 'Medical professionals and healthcare workers',
    icon: Heart,
    color: 'text-red-600 dark:text-red-400',
  },
  {
    title: 'Education & Childcare',
    description: 'Teachers, childcare workers, and education staff',
    icon: GraduationCap,
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Legal & Government',
    description: 'Legal professionals and government workers',
    icon: Scale,
    color: 'text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Business & Finance',
    description: 'Financial professionals and business licensing',
    icon: Briefcase,
    color: 'text-green-600 dark:text-green-400',
  },
  {
    title: 'Transportation & Safety',
    description: 'Drivers and security professionals',
    icon: Truck,
    color: 'text-orange-600 dark:text-orange-400',
  },
  {
    title: 'Professional Licenses',
    description: 'Licensed professionals across various fields',
    icon: Award,
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    title: 'Community Services',
    description: 'Community workers and volunteers',
    icon: Users,
    color: 'text-teal-600 dark:text-teal-400',
  },
];

export const SectorsSection = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From healthcare to education, legal to business - we provide
          fingerprinting services for professionals across all industries
          requiring background checks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {sectorsData.map((sector, index) => {
          const Icon = sector.icon;

          // Define subtle background gradients for each card with dark mode support
          const cardBackgrounds = [
            'bg-gradient-to-br from-red-50/30 via-card to-card dark:from-red-950/20 dark:via-card dark:to-card', // Healthcare
            'bg-gradient-to-br from-blue-50/30 via-card to-card dark:from-blue-950/20 dark:via-card dark:to-card', // Education
            'bg-gradient-to-br from-purple-50/30 via-card to-card dark:from-purple-950/20 dark:via-card dark:to-card', // Legal
            'bg-gradient-to-br from-green-50/30 via-card to-card dark:from-green-950/20 dark:via-card dark:to-card', // Business
            'bg-gradient-to-br from-orange-50/30 via-card to-card dark:from-orange-950/20 dark:via-card dark:to-card', // Transportation
            'bg-gradient-to-br from-indigo-50/30 via-card to-card dark:from-indigo-950/20 dark:via-card dark:to-card', // Professional
            'bg-gradient-to-br from-teal-50/30 via-card to-card dark:from-teal-950/20 dark:via-card dark:to-card', // Community
          ];

          // Enhanced icon backgrounds with matching gradients and dark mode support
          const iconBackgrounds = [
            'bg-gradient-to-br from-red-100 to-red-50 border-red-100 dark:from-red-900 dark:to-red-800 dark:border-red-700', // Healthcare
            'bg-gradient-to-br from-blue-100 to-blue-50 border-blue-100 dark:from-blue-900 dark:to-blue-800 dark:border-blue-700', // Education
            'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-100 dark:from-purple-900 dark:to-purple-800 dark:border-purple-700', // Legal
            'bg-gradient-to-br from-green-100 to-green-50 border-green-100 dark:from-green-900 dark:to-green-800 dark:border-green-700', // Business
            'bg-gradient-to-br from-orange-100 to-orange-50 border-orange-100 dark:from-orange-900 dark:to-orange-800 dark:border-orange-700', // Transportation
            'bg-gradient-to-br from-indigo-100 to-indigo-50 border-indigo-100 dark:from-indigo-900 dark:to-indigo-800 dark:border-indigo-700', // Professional
            'bg-gradient-to-br from-teal-100 to-teal-50 border-teal-100 dark:from-teal-900 dark:to-teal-800 dark:border-teal-700', // Community
          ];

          return (
            <div
              key={index}
              className={`group ${cardBackgrounds[index]} border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 backdrop-blur-sm`}
            >
              <div className="text-center">
                <div
                  className={`w-12 h-12 ${iconBackgrounds[index]} border rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <Icon className={`h-5 w-5 ${sector.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Button asChild>
          <Link
            href="/livescan#who-we-serve"
            className="inline-flex items-center gap-2"
          >
            View All Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};
