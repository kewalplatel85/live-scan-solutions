import { GenericHero } from '@/components/common/GenericHero';
import { CustomerTypesAccordion } from '@/components/sections/CustomerTypesAccordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { badgeData } from '@/data/badges';
import {
  // Award,
  CalendarClock,
  Check,
  Clock,
  CreditCard,
  Globe,
  HardDrive,
  MapPin,
  Phone,
  Shield,
  Smartphone,
  Truck,
  UserCheck,
  Wifi,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';

// const liveScanFeatures = [
//   {
//     icon: Zap,
//     title: 'Digital Live Scan',
//     description: 'Electronic fingerprint capture directly into digital format',
//     benefits: [
//       'Cleaner and faster than ink methods',
//       'Less prone to errors',
//       'Instant transmission to AFIS systems',
//       'Real-time quality verification',
//     ],
//   },
//   {
//     icon: FileText,
//     title: 'Ink Fingerprinting',
//     description:
//       'Traditional FBI FD-258 card fingerprints for specific requirements',
//     benefits: [
//       'Authentic FBI FD-258 cards provided',
//       'DOJ guidelines compliance',
//       'Hard card backup option',
//       'International acceptance',
//     ],
//   },
// ];

const serviceOptions = [
  {
    icon: UserCheck,
    title: 'Walk-In Service',
    description: 'No appointment needed - fast and convenient',
    badge: 'Most Popular',
    features: ['Immediate service', 'Quick turnaround', 'Professional staff'],
  },
  {
    icon: CalendarClock,
    title: 'Scheduled Appointments',
    description: 'Book your preferred time slot',
    badge: 'Recommended',
    features: [
      'Private consultation',
      'Guaranteed time',
      'After-hours available',
    ],
  },
  {
    icon: Truck,
    title: 'Mobile Service',
    description: 'On-site fingerprinting at your location',
    badge: 'Enterprise',
    features: ['Group sessions', 'Corporate rates', 'HR support'],
  },
];

// const certifications = [
//   {
//     icon: Shield,
//     title: 'DOJ Certified',
//     description: 'Authorized by Department of Justice',
//   },
//   {
//     icon: Shield,
//     title: 'FBI Authorized',
//     description: 'Official FBI fingerprinting provider',
//   },
//   {
//     icon: Award,
//     title: 'CJIS Compliant',
//     description: 'Criminal Justice Information Services certified',
//   },
// ];

const pricingPlans = [
  {
    name: 'Individual',
    price: '$35',
    description: 'Perfect for personal background checks',
    features: [
      'Live Scan fingerprinting',
      'DOJ processing',
      'Same-day service',
      'Digital delivery option',
    ],
    popular: false,
  },
  {
    name: 'Employment',
    price: '$45',
    description: 'Comprehensive employment screening',
    features: [
      'Live Scan fingerprinting',
      'FBI & DOJ processing',
      'Priority handling',
      'Employment verification',
      'Follow-up support',
    ],
    popular: true,
  },
  {
    name: 'Express',
    price: '$75',
    description: 'Rush processing for urgent needs',
    features: [
      'Live Scan fingerprinting',
      'Same-day processing',
      'Priority queue',
      'Rush handling',
      'Expedited delivery',
    ],
    popular: false,
  },
];

const locations = [
  'Palo Alto',
  'Sunnyvale',
  'Los Altos',
  'Cupertino',
  'Menlo Park',
  'Santa Clara',
  'San Jose',
  'Milpitas',
  'Redwood City',
  'Mountain View',
  'Fremont',
  'Campbell',
  'Saratoga',
  'Morgan Hill',
];

export const metadata: Metadata = {
  title:
    'Mail All Center: Top-rated Live Scan, Fingerprinting service - Walk-in Welcome',
  description:
    'Mail All Center provides professional Live Scan & Ink fingerprinting services in Mountain View, CA and entire Bay Area. Serving Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont with same-day processing, walk-ins welcome. DOJ & FBI certified. Employment, licensing, background checks. Starting at $17. Call (650) 961-4646.',
  keywords:
    'live scan fingerprinting mountain view, live scan fingerprinting bay area, live scan near me, fingerprinting near me, ink fingerprinting mountain view, fingerprinting services bay area, digital fingerprinting mountain view, background check mountain view, employment screening mountain view, DOJ certified fingerprinting, FBI approved fingerprinting, live scan palo alto, live scan sunnyvale, live scan san jose, live scan cupertino, live scan fremont, live scan santa clara, live scan menlo park, live scan redwood city, same day fingerprinting, walk-in fingerprinting, Mail All Center fingerprinting, fingerprinting silicon valley, fingerprinting peninsula, fingerprinting south bay',
  openGraph: {
    title: 'Get your Live Scan fingerprinting done fast in Mountain View, CA. Walk-ins welcome. Trusted by local schools, nonprofits & businesses. Only $17 rolling fee!',
    description:
      'Mail All Center provides professional Live Scan & Ink fingerprinting in Mountain View, CA. DOJ & FBI certified. Walk-ins welcome, same-day processing.',
    url: 'https://www.mailallcenter.com/live-scan',
  },
  alternates: {
    canonical: 'https://www.mailallcenter.com/live-scan',
  },
};

export default function LiveScanPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        badges={badgeData.liveScanService}
        title={
          <>
            Professional <span className="text-primary">Live Scan & Ink</span>{' '}
            Fingerprinting
          </>
        }
        description="Certified digital and ink fingerprinting services for employment, licensing, and background checks. Trusted by businesses and individuals across the Bay Area."
        benefits={[
          { text: 'Same-day processing' },
          { text: 'Walk-ins welcome' },
          { text: 'Mobile service available' },
          { text: 'Expert assistance' },
          { text: 'Trusted by local schools and churches' },
          { text: 'Group discount' },
        ]}
        ctaText="Please call us to schedule your appointment"
        buttons={[
          {
            text: '(650) 961-4646',
            href: 'tel:650-961-4646',
            icon: Phone,
            variant: 'outline',
          },
        ]}
        quickInfo={[
          {
            icon: Clock,
            text: 'Mon-Fri: 10AM-5PM PST | Sat: 10AM-2PM PST | Sun: Closed',
          },
          { icon: MapPin, text: 'Bay Area Locations' },
          {
            icon: CreditCard,
            text: 'Payment: Credit Cards • Cash • Corporate Invoicing • Vouchers',
          },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-6">
            {/* First Row - Service Cards (2 columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900"
                >
                  FBI FD-258
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Ink Fingerprinting
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">
                        Authentic FBI cards provided
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">DOJ guidelines compliance</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">International acceptance</span>
                    </li>
                    <li className="flex items-center">
                      <HardDrive className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">Hard card backup option</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <div className="flex items-center gap-2 absolute -top-3 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900"
                  >
                    Rolling fee lowest in town
                  </Badge>
                  <Badge
                    variant="default"
                    className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:text-white dark:hover:bg-green-700"
                  >
                    $17
                  </Badge>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Live Scan Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Smartphone className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Digital fingerprint capture
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Real-time quality verification
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Instant electronic transmission
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Wifi className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">AFIS system integration</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Second Row - FBI FD-1164 and Service Locations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900"
                >
                  FBI FD-1164
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Identity History Check
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Complete criminal history</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">National FBI database</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">24-48 hour processing</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Immigration & adoption</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
                >
                  Bay Area Coverage
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Service Locations
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">
                        Palo Alto • Sunnyvale • Los Altos
                      </span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">
                        Cupertino • Menlo Park • Santa Clara
                      </span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">
                        San Jose • Mountain View • Fremont
                      </span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <a
                        href="#bay-area-locations"
                        className="text-sm text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                      >
                        And 5 more Bay Area cities
                      </a>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        }
      />
      <CustomerTypesAccordion />

      {/* Certifications Section */}
      {/* <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certified & Authorized Provider
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are officially certified and authorized by law enforcement
              agencies to provide secure and reliable fingerprinting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-8">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Comparison */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Fingerprinting Method
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer both modern digital Live Scan and traditional ink
              fingerprinting to meet all your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveScanFeatures.map((feature, index) => (
              <Card key={index} className="p-8">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Service Options */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Service Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service option that best fits your schedule and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceOptions.map((option, index) => {
              // Define unique colors for each service option
              const iconColors = [
                'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800', // Walk-in: Blue
                'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800', // Scheduled: Green
                'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800', // Mobile: Purple
              ];
              const textColors = [
                'text-blue-600 dark:text-blue-400',
                'text-emerald-600 dark:text-emerald-400',
                'text-purple-600 dark:text-purple-400',
              ];

              return (
                <Card
                  key={index}
                  className="xl:p-6 relative hover:shadow-lg transition-shadow duration-200"
                >
                  {option.badge && (
                    <Badge
                      className="absolute -top-3 left-6"
                      variant="secondary"
                    >
                      {option.badge}
                    </Badge>
                  )}
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${iconColors[index]} border rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <option.icon className={`w-8 h-8 ${textColors[index]}`} />
                    </div>
                    <CardTitle className="text-xl text-center">
                      {option.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-center">
                      {option.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-4 h-4 mr-2 text-green-600" />
                          {feature}
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

      {/* Service Packages Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service package that best fits your needs. All packages
              include professional fingerprinting with expert assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  {/* FUTURE: Add a feature flag and uncomment this section */}
                  {/* <div className="text-4xl font-bold text-primary my-4">
                    {plan.price}
                  </div> */}
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* FUTURE: Add a feature flag and uncomment this section */}
                  {/* <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="bay-area-locations" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bay Area Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve communities across the Bay Area with our
              professional fingerprinting services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location, index) => (
              <div
                key={index}
                className="inline-flex items-center px-4 py-2 bg-muted/30 rounded-full border border-muted"
              >
                <MapPin className="w-3 h-3 mr-2 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer convenient payment methods to make your experience
              seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <CreditCard className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Individual Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cash, credit cards, and debit cards accepted for individual
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <Building2 className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>Corporate Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monthly invoicing available for businesses with service
                  agreements.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <Receipt className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <CardTitle>Payment Vouchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Special discount pricing and payment vouchers for employee
                  programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </main>
  );
}
