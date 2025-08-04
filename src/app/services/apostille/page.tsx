import { GenericHero } from '@/components/common/GenericHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Award,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  FileCheck2,
  FileSearch,
  FileUser,
  Globe,
  GraduationCap,
  Handshake,
  Languages,
  MapPin,
  Phone,
  Scale,
  Send,
  Shield,
  ShieldCheck,
  Star,
  Timer,
  Users,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Apostille Services Bay Area | Document Authentication | Mountain View, CA',
  description:
    'Professional apostille services for international document authentication in Mountain View, CA. Birth certificates, diplomas, business documents. Fast processing, expert guidance. Serving entire Bay Area. Call (650) 961-4646.',
  keywords:
    'apostille services bay area, document authentication, apostille mountain view, hague convention, international documents, birth certificate apostille, diploma apostille, business document authentication, document legalization, apostille near me',
  openGraph: {
    title: 'Apostille Services Bay Area | Document Authentication',
    description:
      'Professional apostille services for international document authentication in Mountain View, CA. Fast processing, expert guidance.',
    url: 'https://www.mailallcenter.com/apostille',
  },
  alternates: {
    canonical: 'https://www.mailallcenter.com/apostille',
  },
};

const apostilleServices = [
  {
    icon: FileUser,
    title: 'Personal Documents',
    description:
      'Birth certificates, death certificates, marriage certificates',
    examples: [
      'Birth certificates',
      'Death certificates',
      'Marriage certificates',
      'Divorce decrees',
      'Adoption papers',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Educational Documents',
    description: 'Diplomas, transcripts, and academic credentials',
    examples: [
      'University diplomas',
      'High school diplomas',
      'Transcripts',
      'Degree certificates',
      'Academic records',
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Documents',
    description: 'Business certificates, articles of incorporation',
    examples: [
      'Articles of incorporation',
      'Business licenses',
      'Corporate certificates',
      'Partnership agreements',
      'Power of attorney',
    ],
  },
  {
    icon: Scale,
    title: 'Legal Documents',
    description: 'Court documents, affidavits, and legal certificates',
    examples: [
      'Court orders',
      'Affidavits',
      'Legal certificates',
      'Custody documents',
      'Criminal background checks',
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Consultation & Assessment',
    description:
      'We review your documents and determine apostille requirements',
    icon: Handshake,
    details: [
      'Document type verification',
      'Country requirement check',
      'Processing timeline estimate',
      'Cost assessment',
    ],
  },
  {
    step: 2,
    title: 'Document Submission',
    description: 'Submit your documents in person or via secure mail',
    icon: Send,
    details: [
      'In-person submission',
      'Secure mail option',
      'Document verification',
      'Receipt confirmation',
    ],
  },
  {
    step: 3,
    title: 'Processing & Certification',
    description: 'Our experts handle the entire apostille process',
    icon: FileCheck2,
    details: [
      'State authentication',
      'Secretary of State processing',
      'Quality verification',
      'Secure handling',
    ],
  },
  {
    step: 4,
    title: 'Delivery',
    description: 'Receive your apostilled documents securely',
    icon: CheckCircle2,
    details: [
      'In-person pickup',
      'Secure mail delivery',
      'Tracking information',
      'Document verification',
    ],
  },
];

const serviceOptions = [
  {
    icon: Users,
    title: 'Standard Processing',
    description: '5-10 business days processing time',
    timeframe: '5-10 days',
    price: 'From $75',
    features: [
      'Complete apostille service',
      'Document verification',
      'State processing',
      'Secure handling',
    ],
    popular: false,
  },
  {
    icon: Zap,
    title: 'Express Processing',
    description: '2-3 business days expedited service',
    timeframe: '2-3 days',
    price: 'From $125',
    features: [
      'Priority processing',
      'Expedited state handling',
      'Rush verification',
      'Express delivery option',
    ],
    popular: true,
  },
  {
    icon: ShieldCheck,
    title: 'Consultation Service',
    description: 'Expert guidance for complex cases',
    timeframe: 'Same day',
    price: 'From $50',
    features: [
      'Document assessment',
      'Requirement analysis',
      'Process guidance',
      'Country-specific advice',
    ],
    popular: false,
  },
];

// const whyChooseUs = [
//   {
//     icon: Award,
//     title: 'Certified Expertise',
//     description:
//       'Years of experience in document authentication and apostille services',
//   },
//   {
//     icon: Globe,
//     title: 'International Knowledge',
//     description:
//       'Deep understanding of Hague Convention requirements and country-specific needs',
//   },
//   {
//     icon: Shield,
//     title: 'Secure Processing',
//     description:
//       'Your sensitive documents are handled with the highest security standards',
//   },
//   {
//     icon: Clock,
//     title: 'Fast Turnaround',
//     description:
//       'Efficient processing with standard and expedited options available',
//   },
// ];

const faqItems = [
  {
    question: 'What is an Apostille?',
    answer:
      'An apostille is a form of authentication issued to documents for use in countries that participate in the Hague Convention. It verifies the authenticity of the document for international use.',
  },
  {
    question: 'Which countries accept apostille?',
    answer:
      'All countries that are members of the Hague Convention accept apostille. This includes most European countries, many Asian countries, Australia, and others. For non-Hague countries, documents require embassy legalization.',
  },
  {
    question: 'How long does the apostille process take?',
    answer:
      'Standard processing typically takes 5-10 business days, while expedited service can be completed in 2-3 business days. Processing times may vary depending on the document type and state requirements.',
  },
  {
    question: 'Do I need to notarize my documents first?',
    answer:
      'Some documents may require notarization before apostille. We provide comprehensive services including notarization, translation, and authentication to simplify the entire process.',
  },
];

export default function ApostillePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        badges={[
          {
            icon: Globe,
            text: 'Hague Convention Certified',
            variant: 'secondary',
          },
          {
            icon: Shield,
            text: 'Secure Processing',
            variant: 'secondary',
          },
          {
            icon: Star,
            text: 'Expert Service',
            variant: 'outline',
            iconClassName: 'fill-yellow-400 text-yellow-400',
          },
        ]}
        title={
          <>
            Professional <span className="text-primary">Apostille</span>{' '}
            Services
          </>
        }
        description="Simplifying document authentication for international use. Expert apostille services for personal, educational, and corporate documents with fast, secure processing."
        benefits={[
          { text: 'Fast processing' },
          { text: 'Secure handling' },
          { text: 'Expert guidance' },
          { text: 'All document types' },
        ]}
        ctaText="Please call us to schedule your appointment"
        buttons={[
          {
            text: '(650) 961-4646',
            href: 'tel:650-961-4646',
            icon: Phone,
            variant: 'outline',
            size: 'lg',
          },
        ]}
        quickInfo={[
          {
            icon: Clock,
            text: 'Mon-Fri: 10AM-5PM PST | Sat: 10AM-2PM PST | Sun: Closed',
          },
          {
            icon: MapPin,
            text: 'Bay Area Locations',
          },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-6">
            {/* First Row - Service Cards Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
                >
                  Lowest price in town
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Apostille Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileCheck2 className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Document authentication</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">State certification</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">International validation</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Secure processing</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900"
                >
                  Complete Solution
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Additional Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileUser className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Document notarization</span>
                    </li>
                    <li className="flex items-center">
                      <Languages className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Translation services</span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Embassy legalization</span>
                    </li>
                    <li className="flex items-center">
                      <Handshake className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Consultation & guidance</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Second Row - Pricing and Requirements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-green-50 border-green-200 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900"
                >
                  Fast Turnaround
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Processing Times
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm">Standard Processing</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        5-10 days
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm">Express Processing</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        2-3 days
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ShieldCheck className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm">Consultation Service</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Same day
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">
                        Country-specific requirements
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900"
                >
                  Important Info
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Document Requirements
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileSearch className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">
                        Original or certified copies
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Timer className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">
                        May require notarization first
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">
                        Hague Convention countries
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">
                        Embassy legalization available
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        }
      />

      {/* Document Types Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Documents We Apostille
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide apostille services for a wide range of document types
              to meet your international requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {apostilleServices.map((service, index) => {
              const colorSchemes = [
                {
                  bg: 'bg-blue-50 dark:bg-blue-950/50',
                  icon: 'text-blue-600 dark:text-blue-400',
                  border: 'border-blue-200 dark:border-blue-800',
                },
                {
                  bg: 'bg-emerald-50 dark:bg-emerald-950/50',
                  icon: 'text-emerald-600 dark:text-emerald-400',
                  border: 'border-emerald-200 dark:border-emerald-800',
                },
                {
                  bg: 'bg-violet-50 dark:bg-violet-950/50',
                  icon: 'text-violet-600 dark:text-violet-400',
                  border: 'border-violet-200 dark:border-violet-800',
                },
                {
                  bg: 'bg-amber-50 dark:bg-amber-950/50',
                  icon: 'text-amber-600 dark:text-amber-400',
                  border: 'border-amber-200 dark:border-amber-800',
                },
              ];
              const scheme = colorSchemes[index % colorSchemes.length];

              return (
                <Card
                  key={index}
                  className="p-6 h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${scheme.bg} rounded-xl flex items-center justify-center mb-4 border ${scheme.border}`}
                    >
                      <service.icon className={`w-6 h-6 ${scheme.icon}`} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.examples.map((example, exampleIndex) => (
                        <li
                          key={exampleIndex}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-3 h-3 mr-2 text-emerald-600 dark:text-emerald-400" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Step-by-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve streamlined the apostille process to make it simple and
              efficient for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const stepColors = [
                {
                  bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
                  icon: 'text-blue-600 dark:text-blue-400',
                  iconBg: 'bg-blue-50 dark:bg-blue-950/50',
                  border: 'border-blue-200 dark:border-blue-800',
                },
                {
                  bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
                  icon: 'text-emerald-600 dark:text-emerald-400',
                  iconBg: 'bg-emerald-50 dark:bg-emerald-950/50',
                  border: 'border-emerald-200 dark:border-emerald-800',
                },
                {
                  bg: 'bg-gradient-to-br from-violet-500 to-violet-600',
                  icon: 'text-violet-600 dark:text-violet-400',
                  iconBg: 'bg-violet-50 dark:bg-violet-950/50',
                  border: 'border-violet-200 dark:border-violet-800',
                },
                {
                  bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
                  icon: 'text-amber-600 dark:text-amber-400',
                  iconBg: 'bg-amber-50 dark:bg-amber-950/50',
                  border: 'border-amber-200 dark:border-amber-800',
                },
              ];
              const stepColor = stepColors[index % stepColors.length];

              return (
                <div key={index} className="relative">
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 ${stepColor.bg} rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}
                        >
                          {step.step}
                        </div>
                        <div
                          className={`w-10 h-10 ${stepColor.iconBg} rounded-lg flex items-center justify-center border ${stepColor.border} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className={`w-5 h-5 ${stepColor.icon}`} />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center text-sm"
                          >
                            <Check className="w-3 h-3 mr-2 text-emerald-600 dark:text-emerald-400" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-200 dark:border-gray-700">
                        <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service level that best fits your timeline and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceOptions.map((option, index) => {
              const serviceColors = [
                {
                  bg: 'bg-slate-50 dark:bg-slate-950/50',
                  icon: 'text-slate-600 dark:text-slate-400',
                  border: 'border-slate-200 dark:border-slate-800',
                  gradient: 'from-slate-500 to-slate-600',
                },
                {
                  bg: 'bg-orange-50 dark:bg-orange-950/50',
                  icon: 'text-orange-600 dark:text-orange-400',
                  border: 'border-orange-200 dark:border-orange-800',
                  gradient: 'from-orange-500 to-orange-600',
                },
                {
                  bg: 'bg-indigo-50 dark:bg-indigo-950/50',
                  icon: 'text-indigo-600 dark:text-indigo-400',
                  border: 'border-indigo-200 dark:border-indigo-800',
                  gradient: 'from-indigo-500 to-indigo-600',
                },
              ];
              const serviceColor = serviceColors[index % serviceColors.length];

              return (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-all duration-300 group ${
                    option.popular
                      ? 'border-primary ring-2 ring-primary/20 scale-105'
                      : ''
                  }`}
                >
                  {option.popular && (
                    <Badge
                      className="absolute -top-3 left-6 bg-gradient-to-r from-primary to-primary/80"
                      variant="secondary"
                    >
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${serviceColor.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 border ${serviceColor.border} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <option.icon className={`w-8 h-8 ${serviceColor.icon}`} />
                    </div>
                    <CardTitle className="text-xl text-center">
                      {option.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-center">
                      {option.description}
                    </p>
                    {/* <div className="text-center"> */}
                    {/* FUTURE: Add a feature flag and uncomment this section */}
                    {/* <div className="text-2xl font-bold text-primary">
                        {option.price}
                      </div> */}
                    {/* <div className="text-sm text-muted-foreground">
                        {option.timeframe}
                      </div> */}
                    {/* </div> */}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {/* FUTURE: Add a feature flag and uncomment this section */}
                    {/* <Button
                    className="w-full mt-6"
                    variant={option.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Mail All Center?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional apostille
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Get answers to common questions about apostille services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              For more FAQs including Apostille questions,{' '}
              <a href="/faq" className="text-primary hover:underline">
                visit our full FAQ page
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
