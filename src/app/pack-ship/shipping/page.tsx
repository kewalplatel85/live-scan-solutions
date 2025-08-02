import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Clock,
  Globe,
  MapPin,
  Package,
  Phone,
  Plane,
  Truck,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function ShippingPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title="Reliable Shipping Services"
        subtitle="Multiple Carrier Options"
        description="Fast, reliable shipping with multiple carrier options including FedEx, UPS, and USPS. Domestic and international shipping available with competitive rates and flexible delivery options."
        ctaText="Ship your packages with confidence"
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
            <Card className="relative p-4 md:p-6">
              <Badge
                variant="outline"
                className="absolute -top-3 left-4 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
              >
                Multiple Carriers
              </Badge>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">Shipping Options</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Truck className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">FedEx, UPS, USPS</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">Express & standard delivery</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">International shipping</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        }
      />

      {/* Shipping Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Shipping Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from multiple carriers and delivery options to find the
              perfect shipping solution for your timeline and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                  <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Ground Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cost-effective ground shipping for domestic deliveries with
                  reliable transit times and competitive rates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    FedEx Ground
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    UPS Ground
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    USPS Ground Advantage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                  <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">Express Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fast express shipping options for time-sensitive deliveries
                  including overnight and 2-day options.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Overnight delivery
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    2-day express
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Same-day local delivery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:bg-purple-950 dark:border-purple-800">
                  <Plane className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">International</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  International shipping services with customs documentation and
                  tracking for worldwide deliveries.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    International express
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Customs documentation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Worldwide tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Carrier Options Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted Carrier Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with the most reliable shipping carriers to ensure your
              packages are delivered safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'FedEx',
                description:
                  'Express and ground shipping with extensive tracking',
                features: [
                  'Express overnight',
                  'Ground delivery',
                  'International services',
                ],
                icon: Truck,
                color:
                  'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
                iconColor: 'text-purple-600 dark:text-purple-400',
              },
              {
                name: 'UPS',
                description: 'Reliable ground and air delivery services',
                features: [
                  'Next day air',
                  'Ground shipping',
                  'Worldwide express',
                ],
                icon: Package,
                color:
                  'bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800',
                iconColor: 'text-amber-600 dark:text-amber-400',
              },
              {
                name: 'USPS',
                description: 'Cost-effective postal services and priority mail',
                features: [
                  'Priority mail',
                  'Ground advantage',
                  'International mail',
                ],
                icon: Globe,
                color:
                  'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
                iconColor: 'text-blue-600 dark:text-blue-400',
              },
            ].map((carrier, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${carrier.color} rounded-xl flex items-center justify-center mb-4 border`}
                  >
                    <carrier.icon className={`w-6 h-6 ${carrier.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg">{carrier.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {carrier.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {carrier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Other Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Complete Pack & Ship Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our full range of packing, shipping, and tracking
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">
                  <Link
                    href="/pack-ship/packing"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Professional Packing
                    <span className="ml-2">→</span>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert packing services using quality materials to ensure your
                  items arrive safely.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">
                  <Link
                    href="/pack-ship/tracking"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Package Tracking
                    <span className="ml-2">→</span>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real-time tracking and delivery updates to keep you informed
                  throughout the process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ship With Confidence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit our location to discuss shipping options and get your
              packages on their way with our reliable carrier partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="tel:650-961-4646">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (650) 961-4646
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pack-ship">All Pack & Ship Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
