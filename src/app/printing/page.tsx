import { GenericHero } from '@/components/common/GenericHero';
import { CustomerTypesAccordion } from '@/components/sections/CustomerTypesAccordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Building2,
  CalendarClock,
  Check,
  Clock,
  Copy,
  CreditCard,
  Download,
  FileImage,
  FileText,
  Globe,
  MapPin,
  Palette,
  Phone,
  Printer,
  Receipt,
  Smartphone,
  Star,
  Truck,
  UserCheck,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';

const printingServices = [
  {
    icon: FileText,
    title: 'Document Printing',
    description: 'High-quality document printing for all your business needs',
    badge: 'Most Popular',
    features: [
      'Black & white printing',
      'Color document printing',
      'Legal size documents',
      'Letterhead printing',
    ],
    sizes: ['8.5x11"', '8.5x14"', '11x17"', 'A3', 'A4'],
  },
  {
    icon: FileImage,
    title: 'Photo Printing',
    description: 'Professional photo printing from wallet size to poster size',
    badge: 'Premium Quality',
    features: [
      'High-resolution photo prints',
      'Matte and glossy finishes',
      'Custom photo sizes',
      'Photo restoration services',
    ],
    sizes: ['4x6"', '5x7"', '8x10"', '11x14"', '16x20"', '20x30"'],
  },
  {
    icon: Copy,
    title: 'Large Format Printing',
    description: 'Banners, posters, and signage for events and marketing',
    badge: 'Any Size',
    features: [
      'Banner printing up to 10ft wide',
      'Vinyl signs and decals',
      'Canvas prints',
      'Engineering drawings',
    ],
    sizes: ['24x36"', '36x48"', '48x96"', 'Custom sizes'],
  },
  {
    icon: Palette,
    title: 'Marketing Materials',
    description: 'Professional marketing collateral and promotional items',
    badge: 'Business Ready',
    features: [
      'Business cards',
      'Brochures and flyers',
      'Postcards and mailers',
      'Presentation folders',
    ],
    sizes: ['Standard', 'Custom', 'Folded', 'Die-cut'],
  },
];

const serviceOptions = [
  {
    icon: UserCheck,
    title: 'Walk-In Service',
    description: 'Quick printing service without appointments',
    badge: 'Fastest',
    features: [
      'Same-day printing',
      'Rush orders available',
      'While-you-wait service',
      'Expert consultation',
    ],
  },
  {
    icon: CalendarClock,
    title: 'Scheduled Orders',
    description: 'Plan ahead for large volume printing',
    badge: 'Volume Discounts',
    features: [
      'Bulk order pricing',
      'Delivery scheduling',
      'Project management',
      'Quality assurance',
    ],
  },
  {
    icon: Truck,
    title: 'Delivery Service',
    description: 'Professional delivery to your location',
    badge: 'Convenient',
    features: [
      'Local delivery available',
      'Secure packaging',
      'Tracking provided',
      'Installation services',
    ],
  },
];

const paperOptions = [
  {
    name: 'Standard Paper',
    weight: '20lb Bond',
    description: 'Perfect for everyday documents and correspondence',
    uses: ['Letters', 'Reports', 'Invoices', 'General documents'],
  },
  {
    name: 'Premium Paper',
    weight: '24lb Bond',
    description: 'Higher quality for professional presentations',
    uses: ['Presentations', 'Proposals', 'Marketing materials', 'Letterhead'],
  },
  {
    name: 'Cardstock',
    weight: '65-110lb Cover',
    description: 'Thick, durable paper for special applications',
    uses: ['Business cards', 'Postcards', 'Invitations', 'Tags'],
  },
  {
    name: 'Photo Paper',
    weight: 'Various',
    description: 'Specialized paper for high-quality photo printing',
    uses: ['Photos', 'Art prints', 'Portfolios', 'Displays'],
  },
];

const finishingServices = [
  {
    icon: Copy,
    name: 'Binding Services',
    options: [
      'Spiral binding',
      'Comb binding',
      'Perfect binding',
      'Saddle stitching',
    ],
  },
  {
    icon: FileText,
    name: 'Laminating',
    options: [
      'Hot lamination',
      'Cold lamination',
      'Various thicknesses',
      'Custom sizes',
    ],
  },
  {
    icon: Zap,
    name: 'Cutting & Trimming',
    options: [
      'Precision cutting',
      'Custom shapes',
      'Bulk trimming',
      'Professional finish',
    ],
  },
  {
    icon: Star,
    name: 'Special Finishes',
    options: ['UV coating', 'Embossing', 'Foil stamping', 'Die cutting'],
  },
];

const industries = [
  'Real Estate',
  'Healthcare',
  'Legal Services',
  'Education',
  'Construction',
  'Marketing Agencies',
  'Non-Profits',
  'Retail',
  'Restaurants',
  'Technology',
  'Architecture',
  'Engineering',
];

export const metadata: Metadata = {
  title:
    'Professional Printing Services Bay Area | Digital & Large Format | Mountain View, CA',
  description:
    'Complete printing solutions in Mountain View, CA. From business cards to large banners, we handle all your printing needs. Same-day service, competitive prices. Serving Palo Alto, Sunnyvale, San Jose. Call (650) 961-4646.',
  keywords:
    'printing services, digital printing, large format printing, business cards, banners, flyers, document printing, photo printing, mountain view printing, bay area printing, same day printing, professional printing',
  openGraph: {
    title: 'Professional Printing Services Bay Area | Digital & Large Format',
    description:
      'Complete printing solutions from small to large format. Same-day service available in Mountain View, CA.',
    url: 'https://livescansolutions.com/printing',
  },
  alternates: {
    canonical: 'https://livescansolutions.com/printing',
  },
};

export default function PrintingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        badges={[
          { text: 'Same-Day Service', variant: 'secondary', icon: Clock },
          { text: 'Any Size Print', variant: 'default', icon: Printer },
          { text: 'Professional Quality', variant: 'outline', icon: Star },
        ]}
        title={
          <>
            Complete <span className="text-primary">Printing Solutions</span>{' '}
            for Every Need
          </>
        }
        description="From business cards to large format banners, we provide professional printing services for businesses and individuals. High-quality prints, competitive pricing, and expert service you can trust."
        benefits={[
          { text: 'Small to large format printing' },
          { text: 'Same-day turnaround available' },
          { text: 'Professional finishing services' },
          { text: 'Competitive bulk pricing' },
        ]}
        ctaText="Get a quote for your printing project"
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
          { icon: MapPin, text: 'Mountain View & Bay Area' },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-6">
            {/* First Row - Digital and Large Format */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
                >
                  Digital Printing
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    High-Quality Digital Prints
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Printer className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">
                        Professional color accuracy
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Fast turnaround times</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Various paper options</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Quality guaranteed</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900"
                >
                  Large Format
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Banners & Large Prints
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">Up to 10 feet wide</span>
                    </li>
                    <li className="flex items-center">
                      <FileImage className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">Vinyl, canvas, and paper</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">Weather-resistant options</span>
                    </li>
                    <li className="flex items-center">
                      <Truck className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">Installation available</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Second Row - Business and Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-green-50 border-green-200 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900"
                >
                  Business Materials
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Marketing & Business
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Business cards & letterhead
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FileImage className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Brochures & flyers</span>
                    </li>
                    <li className="flex items-center">
                      <Palette className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Custom design services</span>
                    </li>
                    <li className="flex items-center">
                      <Receipt className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Volume pricing available</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900"
                >
                  Photo Services
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Professional Photo Printing
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Smartphone className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Digital file printing</span>
                    </li>
                    <li className="flex items-center">
                      <Download className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Online upload service</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Matte & glossy finishes</span>
                    </li>
                    <li className="flex items-center">
                      <CreditCard className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Wallet to poster sizes</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        }
      />

      {/* Customer Types Accordion */}
      <CustomerTypesAccordion />

      {/* Printing Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Printing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the smallest business card to the largest banner, we handle
              all your printing needs with professional quality and competitive
              pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {printingServices.map((service, index) => {
              // Define unique colors for each service
              const iconColors = [
                'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
                'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
                'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
                'bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800',
              ];
              const textColors = [
                'text-blue-600 dark:text-blue-400',
                'text-purple-600 dark:text-purple-400',
                'text-green-600 dark:text-green-400',
                'text-orange-600 dark:text-orange-400',
              ];

              return (
                <Card
                  key={index}
                  className="xl:p-6 relative hover:shadow-lg transition-shadow duration-200"
                >
                  {service.badge && (
                    <Badge
                      className="absolute -top-3 left-6"
                      variant="secondary"
                    >
                      {service.badge}
                    </Badge>
                  )}
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${iconColors[index]} border rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <service.icon
                        className={`w-8 h-8 ${textColors[index]}`}
                      />
                    </div>
                    <CardTitle className="text-xl text-center">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <Check className="w-4 h-4 mr-2 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-2 font-medium">
                          Available Sizes:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {service.sizes.map((size, sizeIndex) => (
                            <Badge
                              key={sizeIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {size}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Service Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service option that best fits your timeline and project
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceOptions.map((option, index) => {
              const iconColors = [
                'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
                'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800',
                'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
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

      {/* Paper Options Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Paper Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of high-quality papers to ensure your
              prints make the right impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paperOptions.map((paper, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">{paper.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {paper.weight}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    {paper.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">
                      Best for:
                    </p>
                    <ul className="space-y-1">
                      {paper.uses.map((use, useIndex) => (
                        <li
                          key={useIndex}
                          className="text-xs flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Finishing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete your printing project with our professional finishing
              services for a polished, professional result.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishingServices.map((service, index) => (
              <Card key={index} className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.options.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className="text-sm text-muted-foreground"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide printing solutions for businesses and organizations
              across various industries in the Bay Area.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="inline-flex items-center px-4 py-2 bg-background rounded-full border border-border shadow-sm"
              >
                <Building2 className="w-3 h-3 mr-2 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
