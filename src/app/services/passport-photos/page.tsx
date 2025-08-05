import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
  Zap,
} from 'lucide-react';

export default function PassportPhotosPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title="Professional Passport Photos"
        subtitle="Only $9.99 - Cheapest in Mountain View"
        description="Get professional passport photos that meet all official requirements for US passports, visas, and international identification documents. Same-day service with guaranteed acceptance or we'll retake them for free."
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
            href: '#contact',
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
          <div className="space-y-3 md:space-y-4">
            {/* Photo Types Card */}
            <Card className="p-4">
              <h4 className="text-base font-semibold mb-3">
                All Photo Types We Provide
              </h4>
              <div className="space-y-2">
                {/* US Passport */}
                <div>
                  <div className="flex items-center text-sm font-medium mb-1">
                    <Globe className="w-4 h-4 mr-2 text-primary" />
                    <span>US Passport</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-6">
                    2x2 inch photos for US passport applications
                  </p>
                </div>

                {/* Visa Photos */}
                <div>
                  <div className="flex items-center text-sm font-medium mb-1">
                    <Camera className="w-4 h-4 mr-2 text-primary" />
                    <span>Visa Photos</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-6">
                    Country-specific visa application photos
                  </p>
                </div>

                {/* ID Cards */}
                <div>
                  <div className="flex items-center text-sm font-medium mb-1">
                    <Shield className="w-4 h-4 mr-2 text-primary" />
                    <span>ID Cards</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-6">
                    State ID and driver license photos
                  </p>
                </div>

                {/* Immigration */}
                <div>
                  <div className="flex items-center text-sm font-medium mb-1">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>Immigration</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-6">
                    USCIS and immigration document photos
                  </p>
                </div>

                {/* All Country Sizes */}
                <div>
                  <div className="flex items-center text-sm font-medium mb-1">
                    <Globe className="w-4 h-4 mr-2 text-primary" />
                    <span>All Country Sizes</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-6">
                    We accept and provide photos for all international size
                    requirements
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-border">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1 text-emerald-600" />
                    <span>Professional service</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1 text-emerald-600" />
                    <span>Same-day service</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1 text-emerald-600" />
                    <span>Multiple copies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1 text-emerald-600" />
                    <span>All ages welcome</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
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
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-primary/5 border-b">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="default" className="text-sm">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Price Match Guarantee
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
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
                          <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                        </td>
                        <td className="px-6 py-4 text-center text-muted-foreground">
                          -
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-6 py-4">Walgreens</td>
                        <td className="px-6 py-4 text-center font-semibold">
                          $19.99
                        </td>
                        <td className="px-6 py-4 text-center">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                        </td>
                        <td className="px-6 py-4 text-center text-muted-foreground">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">FedEx Office</td>
                        <td className="px-6 py-4 text-center font-semibold">
                          $19.99
                        </td>
                        <td className="px-6 py-4 text-center">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                        </td>
                        <td className="px-6 py-4 text-center text-muted-foreground">
                          -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
