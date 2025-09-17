import { GenericHero } from '@/components/common/GenericHero';
import { SEOStructuredData } from '@/components/SEOStructuredData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Camera,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  X,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast and professional—Passport Photos ready in 5 minutes',
  description:
    'Mail All Center offers professional passport photos in Mountain View, CA for only $9.99 - cheapest in Bay Area! US passport, visa, ID photos that meet all official requirements. Same-day service, guaranteed acceptance or free retake. Walk-ins welcome. Call (650) 961-4646.',
  keywords:
    'passport photos mountain view, passport photos near me, passport photos bay area, Mail All Center passport photos, cheap passport photos mountain view, visa photos mountain view, ID photos mountain view, professional passport photos, same day passport photos, passport photo service mountain view, passport photos palo alto, passport photos sunnyvale, US passport photos, visa application photos',
  openGraph: {
    title: 'Passport Photos Mountain View | Mail All Center | $9.99',
    description:
      'Mail All Center offers professional passport photos in Mountain View, CA for only $9.99. Same-day service, guaranteed acceptance.',
    url: 'https://www.mailallcenter.com/passport-photos',
  },
  alternates: {
    canonical: 'https://www.mailallcenter.com/passport-photos',
  },
};

export default function PassportPhotosPage() {
  return (
    <main>
      {/* Business Schema */}
      <SEOStructuredData type="business" />

      {/* Service Schema */}
      <SEOStructuredData
        type="service"
        serviceName="Professional Passport Photos"
        serviceDescription="Professional passport photos for US passports, visas, and international ID documents. Same-day service with guaranteed acceptance or free retake. Starting at $9.99."
        price="9.99"
      />

      {/* Hero Section */}
      <GenericHero
        title={
          <>
            Professional <span className="text-primary">Passport Photos</span>
          </>
        }
        subtitle="Only $9.99 - Cheapest in Bay Area"
        description="Get professional passport photos that meet all official requirements for US passports, visas, and international identification documents. Same-day service with guaranteed acceptance or we'll retake them for free."
        benefits={[
          { text: 'Professional service' },
          { text: 'Same-day service' },
          { text: 'Multiple copies' },
          { text: 'All ages welcome' },
        ]}
        badges={[
          {
            icon: DollarSign,
            text: '$9.99 Lowest Price',
            variant: 'default',
          },
          {
            icon: Zap,
            text: 'Same Day Service',
            variant: 'secondary',
          },
          {
            icon: Star,
            text: 'Guaranteed Acceptance',
            variant: 'outline',
            iconClassName: 'fill-yellow-400 text-yellow-400',
          },
        ]}
        buttons={[
          {
            text: 'Get Your Photos Today',
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
          {
            icon: MapPin,
            text: '809 Cuesta Dr, Suite B, Mountain View, CA 94040',
          },
        ]}
        rightContent={
          <Card className="p-5 hover:shadow-lg transition-shadow border-2 border-primary/10">
            {/* Main Heading */}
            <div className="text-center mb-5">
              <h3 className="text-lg font-bold mb-2">
                All Photo Types We Provide
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional photos for all your needs
              </p>
            </div>

            {/* Photo Types List */}
            <div className="space-y-3 mb-5">
              {/* US Passport */}
              <div className="flex items-start">
                <div className="w-9 h-9 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">US Passport</h4>
                  <p className="text-xs text-muted-foreground">
                    2x2 inch photos for US passport applications
                  </p>
                </div>
              </div>

              {/* Visa Photos */}
              <div className="flex items-start">
                <div className="w-9 h-9 bg-emerald-100 border border-emerald-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Camera className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Visa Photos</h4>
                  <p className="text-xs text-muted-foreground">
                    Country-specific visa application photos
                  </p>
                </div>
              </div>

              {/* ID Cards */}
              <div className="flex items-start">
                <div className="w-9 h-9 bg-purple-100 border border-purple-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">ID Cards</h4>
                  <p className="text-xs text-muted-foreground">
                    State ID and driver license photos
                  </p>
                </div>
              </div>

              {/* Immigration */}
              <div className="flex items-start">
                <div className="w-9 h-9 bg-orange-100 border border-orange-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Immigration</h4>
                  <p className="text-xs text-muted-foreground">
                    USCIS and immigration document photos
                  </p>
                </div>
              </div>

              {/* All Country Sizes */}
              <div className="flex items-start">
                <div className="w-9 h-9 bg-indigo-100 border border-indigo-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Globe className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    All Country Sizes
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    We accept and provide photos for all international size
                    requirements
                  </p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-border pt-4">
              <h4 className="font-semibold text-sm mb-3 text-center">
                Additional Services
              </h4>
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">
                    Digital copy available
                  </span>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5">
                    Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">
                    USB drive copy
                  </span>
                  <Badge variant="outline" className="text-xs px-2 py-0.5">
                    Extra Cost
                  </Badge>
                </div>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-center text-muted-foreground">
                  <span className="font-bold text-primary">Base $9.99</span>{' '}
                  includes print copy only
                </p>
              </div>
            </div>
          </Card>
        }
      />

      {/* Price Comparison Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare Our Prices
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We guarantee the lowest price in Mountain View. Found a better
              rate? We&apos;ll match it - no questions asked.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Mobile-friendly card layout for small screens */}
            <div className="block md:hidden space-y-4">
              <div className="text-center mb-6">
                <Badge variant="default" className="text-sm">
                  <DollarSign className="w-4 h-4 mr-1" />
                  Price Match Guarantee
                </Badge>
              </div>

              {/* Mail All Center - Featured */}
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-primary">
                        Mail All Center
                      </h3>
                      <Badge variant="default" className="text-xs">
                        Best Choice
                      </Badge>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      $9.99
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Same Day Service</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Guarantee Included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UPS Store */}
              <Card className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">UPS Store</h3>
                    <span className="text-xl font-bold">$15.99</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span>Same Day Available</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <X className="w-4 h-4" />
                      <span>No Guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Walgreens */}
              <Card className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Walgreens</h3>
                    <span className="text-xl font-bold">$19.99</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span>Same Day Available</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <X className="w-4 h-4" />
                      <span>No Guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FedEx Office */}
              <Card className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">FedEx Office</h3>
                    <span className="text-xl font-bold">$19.99</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span>Same Day Available</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <X className="w-4 h-4" />
                      <span>No Guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Desktop table layout for medium screens and up */}
            <Card className="hidden md:block overflow-hidden border-2 border-primary/20">
              <div className="bg-primary/5 border-b py-4 flex items-center justify-center">
                <Badge variant="default" className="text-sm px-3 py-1">
                  <DollarSign className="w-4 h-4 mr-1" />
                  Price Match Guarantee
                </Badge>
              </div>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        Provider
                      </th>
                      <th className="px-6 py-4 text-center font-semibold">
                        Price
                      </th>
                      <th className="px-6 py-4 text-center font-semibold">
                        Same Day
                      </th>
                      <th className="px-6 py-4 text-center font-semibold">
                        Guarantee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-primary/5 border-primary/20">
                      <td className="px-6 py-4 font-semibold text-primary">
                        <div className="flex items-center gap-2">
                          Mail All Center
                          <Badge variant="default" className="text-xs">
                            Best Choice
                          </Badge>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-primary">
                          $9.99
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4">UPS Store</td>
                      <td className="px-6 py-4 text-center font-semibold">
                        $15.99
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Clock className="w-5 h-5 text-blue-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4">Walgreens</td>
                      <td className="px-6 py-4 text-center font-semibold">
                        $19.99
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Clock className="w-5 h-5 text-blue-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">FedEx Office</td>
                      <td className="px-6 py-4 text-center font-semibold">
                        $19.99
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Clock className="w-5 h-5 text-blue-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Badge variant="outline" className="text-sm">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                We offer a price match guarantee
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're the #1 Choice Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why We&apos;re the #1 Choice for Passport Photos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cheapest in town, quick & reliable service, and 100% compliant
              with all official standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Cheapest in Town */}
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Cheapest in Town</h3>
              <p className="text-sm text-muted-foreground">
                Only $9.99 with price match guarantee. No hidden fees coupons
                needed.
              </p>
            </Card>

            {/* Quick & Reliable */}
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 border border-blue-200 dark:bg-blue-950 dark:border-blue-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Quick & Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Get your photos done in minutes. No appointment needed -
                walk-ins welcome.
              </p>
            </Card>

            {/* Compliant & Professional */}
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-50 border border-purple-200 dark:bg-purple-950 dark:border-purple-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Compliant & Professional
              </h3>
              <p className="text-sm text-muted-foreground">
                Advanced digital cameras and strict adherence to US State
                Department guidelines.
              </p>
            </Card>

            {/* Guaranteed Acceptance */}
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Guaranteed Acceptance
              </h3>
              <p className="text-sm text-muted-foreground">
                Photos guaranteed to be accepted or we&apos;ll retake them for
                free.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
