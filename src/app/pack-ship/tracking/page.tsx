import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bell,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  Search,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';

export default function TrackingPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title="Package Tracking Services"
        subtitle="Real-Time Delivery Updates"
        description="Stay informed with real-time package tracking, delivery notifications, and status updates. Track your shipments across all major carriers with detailed delivery information."
        ctaText="Track your packages with confidence"
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
                className="absolute -top-3 left-4 bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900"
              >
                Real-Time Updates
              </Badge>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">
                  Tracking Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Search className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Live tracking updates</span>
                  </li>
                  <li className="flex items-center">
                    <Bell className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Delivery notifications</span>
                  </li>
                  <li className="flex items-center">
                    <Smartphone className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">SMS & email alerts</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        }
      />

      {/* Tracking Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Tracking Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated every step of the way with detailed tracking
              information and proactive delivery notifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                  <Search className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">Real-Time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Monitor your package location and status in real-time with
                  detailed tracking information from pickup to delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Live location updates
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Transit status changes
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Estimated delivery time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                  <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">
                  Delivery Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Receive automatic notifications for key delivery milestones
                  and updates throughout the shipping process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Shipment confirmation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Out for delivery alerts
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Delivery confirmation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:bg-purple-950 dark:border-purple-800">
                  <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Multi-Channel Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Choose how you want to receive updates with multiple
                  notification options for maximum convenience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    SMS text messages
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Email notifications
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Phone call updates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Carrier Tracking Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Carrier Tracking
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track packages across all major shipping carriers with unified
              tracking information and consistent updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'FedEx Tracking',
                description:
                  'Complete FedEx tracking with detailed delivery information',
                features: [
                  'Real-time location updates',
                  'Delivery manager options',
                  'Signature confirmation',
                ],
                icon: Globe,
                color:
                  'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
                iconColor: 'text-purple-600 dark:text-purple-400',
              },
              {
                name: 'UPS Tracking',
                description: 'Comprehensive UPS tracking and delivery updates',
                features: [
                  'Package progress tracking',
                  'Delivery alerts',
                  'My Choice delivery options',
                ],
                icon: Search,
                color:
                  'bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800',
                iconColor: 'text-amber-600 dark:text-amber-400',
              },
              {
                name: 'USPS Tracking',
                description: 'USPS package tracking with delivery confirmation',
                features: [
                  'Informed delivery',
                  'Package intercept options',
                  'Delivery confirmation',
                ],
                icon: Mail,
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
                    href="/pack-ship/shipping"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Reliable Shipping
                    <span className="ml-2">→</span>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple carrier options with competitive rates and delivery
                  options to meet your needs.
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
              Stay Informed Every Step
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              When you ship with us, you&apos;ll receive comprehensive tracking
              information and updates throughout the delivery process.
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
