import { GenericHero } from '@/components/common/GenericHero';
import { SEOStructuredData } from '@/components/SEOStructuredData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { printingServiceSchema } from '@/data/google-business-schema';
import {
  Building,
  Building2,
  CalendarClock,
  Check,
  Clock,
  Copy,
  FileImage,
  FileText,
  Globe,
  GraduationCap,
  HardHat,
  Heart,
  MapPin,
  Monitor,
  Palette,
  Phone,
  Printer,
  Scale,
  Scissors,
  ShoppingBag,
  Star,
  Truck,
  UserCheck,
  Users,
  UtensilsCrossed,
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
  {
    icon: Phone,
    title: 'Fax & Copy Services',
    description: 'Professional fax transmission and document copying services',
    badge: 'Fast Service',
    features: [
      'Send and receive fax',
      'International fax service',
      'High-volume copying',
      'Document scanning',
    ],
    sizes: ['8.5x11"', '8.5x14"', '11x17"', 'A3', 'A4'],
  },
];

const serviceOptions = [
  {
    icon: UserCheck,
    title: 'Walk-In Service',
    description: 'Get your prints done while you wait - no appointment needed',
    features: [
      'Same-day printing',
      'Rush orders available',
      'Expert consultation',
      'Quality guaranteed',
    ],
  },
  {
    icon: CalendarClock,
    title: 'Scheduled Orders',
    description: 'Plan ahead for large volume printing with bulk discounts',
    features: [
      'Volume pricing',
      'Project management',
      'Delivery scheduling',
      'Quality assurance',
    ],
  },
  {
    icon: Truck,
    title: 'Delivery & Installation',
    description: 'Professional delivery and installation services available',
    features: [
      'Bay Area delivery',
      'Secure packaging',
      'Installation services',
      'Tracking provided',
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
    name: 'Binding & Assembly',
    options: ['Spiral binding', 'Stapling', 'Folding'],
  },
  {
    icon: FileText,
    name: 'Lamination',
    options: ['Document protection', 'Professional finish', 'Various sizes'],
  },
  {
    icon: Zap,
    name: 'Cutting Services',
    options: ['Custom sizes', 'Precise trimming', 'Business cards'],
  },
  {
    icon: Star,
    name: 'Special Finishes',
    options: ['UV coating', 'Embossing', 'Foil stamping'],
  },
  {
    icon: Scissors,
    name: 'Document Shredding',
    options: [
      'Secure document destruction',
      'HIPAA compliant',
      'Bulk shredding',
    ],
  },
];

const industries = [
  { name: 'Real Estate', icon: Building },
  { name: 'Healthcare', icon: Heart },
  { name: 'Legal Services', icon: Scale },
  { name: 'Education', icon: GraduationCap },
  { name: 'Construction', icon: HardHat },
  { name: 'Marketing Agencies', icon: Users },
  { name: 'Non-Profits', icon: Heart },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Technology', icon: Monitor },
  { name: 'Architecture', icon: Building2 },
  { name: 'Engineering', icon: HardHat },
];

export const metadata: Metadata = {
  title: 'Print Documents, Flyers & More | Walk-In Printing Near You',
  description:
    'Mail All Center offers complete printing solutions in Mountain View, CA: Digital printing, large format printing, business cards, banners, flyers, lamination, fax, copy, and shredding services. Same-day service, competitive prices. Serving Bay Area. Call (650) 961-4646.',
  keywords:
    'printing services mountain view, Mail All Center printing, digital printing mountain view, large format printing mountain view, business cards mountain view, banner printing mountain view, flyers printing mountain view, document printing mountain view, photo printing mountain view, lamination services mountain view, fax services mountain view, copy services mountain view, document shredding mountain view, same day printing mountain view, professional printing bay area, printing near me',
  openGraph: {
    title: 'Printing Services Mountain View | Mail All Center',
    description:
      'Mail All Center offers complete printing solutions: digital, large format, lamination, fax, copy, and shredding services. Same-day service in Mountain View, CA.',
    url: `/printing`,
  },
  alternates: {
    canonical: `/printing`,
  },
  robots: { index: true, follow: true },
};

export default function PrintingPage() {
  return (
    <main className="min-h-screen">
      {/* Business Schema */}
      <SEOStructuredData type="business" />

      {/* Service Schema */}
      <SEOStructuredData type="service" serviceSchema={printingServiceSchema} />

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
          { text: 'Digital & large format printing' },
          { text: 'Same-day turnaround available' },
          { text: 'Professional finishing services' },
          { text: 'Competitive bulk pricing' },
        ]}
        ctaText="Get a quote for your printing project"
        buttons={[
          {
            text: 'Start Your Printing Project',
            href: '/contact-us',
            variant: 'default',
            size: 'lg',
          },
          {
            text: 'Call (650) 961-4646',
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
          { icon: MapPin, text: 'Mountain View & Bay Area' },
        ]}
        rightContent={
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="relative p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300"
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
                      <Check className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Various paper options</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Quality guaranteed</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-300"
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

              <Card className="relative p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-green-50 border-green-200 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:border-green-800 dark:text-green-300"
                >
                  Business Materials
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Marketing & Business
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Copy className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Business cards & letterhead
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Brochures & flyers</span>
                    </li>
                    <li className="flex items-center">
                      <Palette className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Custom design services</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Volume pricing available</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300"
                >
                  Photo Services
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Professional Photo Printing
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileImage className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Digital file printing</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Online upload service</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Matte & glossy finishes</span>
                    </li>
                    <li className="flex items-center">
                      <Copy className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                      <span className="text-sm">Wallet to poster sizes</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        }
      />

      {/* Printing Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Printing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From business cards to large banners, we handle all your printing
              needs with professional quality and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {printingServices.map((service, index) => {
              const iconColors = [
                'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
                'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
                'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
                'bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800',
                'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800',
              ];
              const textColors = [
                'text-blue-600 dark:text-blue-400',
                'text-purple-600 dark:text-purple-400',
                'text-green-600 dark:text-green-400',
                'text-orange-600 dark:text-orange-400',
                'text-red-600 dark:text-red-400',
              ];

              return (
                <Card
                  key={index}
                  className="p-4 relative hover:shadow-lg transition-shadow duration-200"
                >
                  {service.badge && (
                    <Badge
                      className="absolute -top-2 left-4 text-xs"
                      variant="secondary"
                    >
                      {service.badge}
                    </Badge>
                  )}
                  <CardHeader className="p-0">
                    <div
                      className={`w-12 h-12 ${iconColors[index]} border rounded-full flex items-center justify-center mx-auto mb-3`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${textColors[index]}`}
                      />
                    </div>
                    <CardTitle className="text-lg text-center">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-center text-sm">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-xs"
                          >
                            <Check className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-1 font-medium">
                          Sizes:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {service.sizes.slice(0, 3).map((size, sizeIndex) => (
                            <Badge
                              key={sizeIndex}
                              variant="outline"
                              className="text-xs px-2 py-0"
                            >
                              {size}
                            </Badge>
                          ))}
                          {service.sizes.length > 3 && (
                            <Badge
                              variant="outline"
                              className="text-xs px-2 py-0"
                            >
                              +{service.sizes.length - 3} more
                            </Badge>
                          )}
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
              How We Serve You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service option that best fits your timeline and project
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  className="p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <CardHeader className="p-0">
                    <div
                      className={`w-16 h-16 ${iconColors[index]} border rounded-full flex items-center justify-center mx-auto mb-4 p-0`}
                    >
                      <option.icon className={`w-8 h-8 ${textColors[index]}`} />
                    </div>
                    <CardTitle className="text-xl text-center p-0">
                      {option.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-center text-sm p-0">
                      {option.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2 p-0">
                      {option.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {paperOptions.map((paper, index) => {
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
                  className="p-6 hover:shadow-lg transition-shadow duration-200 relative gap-0 px-4"
                >
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 left-4 text-xs"
                  >
                    {paper.weight}
                  </Badge>
                  <CardHeader className="text-center p-0">
                    <div
                      className={`w-16 h-16 ${iconColors[index]} border rounded-full flex items-center justify-center mx-auto mb-3`}
                    >
                      {index === 0 && (
                        <FileText className={`w-8 h-8 ${textColors[index]}`} />
                      )}
                      {index === 1 && (
                        <Star className={`w-8 h-8 ${textColors[index]}`} />
                      )}
                      {index === 2 && (
                        <Copy className={`w-8 h-8 ${textColors[index]}`} />
                      )}
                      {index === 3 && (
                        <FileImage className={`w-8 h-8 ${textColors[index]}`} />
                      )}
                    </div>
                    <CardTitle className="text-lg">{paper.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <p className="text-xs text-center text-muted-foreground mb-3">
                      {paper.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-2 pt-2">
                      {paper.uses.map((use, useIndex) => (
                        <li
                          key={useIndex}
                          className="flex items-center text-xs"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {use}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {finishingServices.map((service, index) => {
              const iconColors = [
                'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
                'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
                'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
                'bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800',
                'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800',
              ];
              const textColors = [
                'text-blue-600 dark:text-blue-400',
                'text-purple-600 dark:text-purple-400',
                'text-green-600 dark:text-green-400',
                'text-orange-600 dark:text-orange-400',
                'text-red-600 dark:text-red-400',
              ];

              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-200 gap-0"
                >
                  <CardHeader className="text-center p-0 pb-4">
                    <div
                      className={`w-16 h-16 ${iconColors[index]} border rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <service.icon
                        className={`w-8 h-8 ${textColors[index]}`}
                      />
                    </div>
                    <CardTitle className="text-lg p-0">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-3">
                      {service.options.map((option, optionIndex) => (
                        <li
                          key={optionIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {option}
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

      {/* Industries We Serve Section */}
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

          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-3 bg-background border border-border rounded-lg"
              >
                <industry.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
