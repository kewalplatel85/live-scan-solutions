import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Clock,
  MapPin,
  Package,
  Phone,
  Search,
  Shield,
  Truck,
} from 'lucide-react';
import Link from 'next/link';

export default function PackShipPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title="Pack & Ship Services"
        subtitle="Complete Shipping Solutions"
        description="Professional packing, shipping, and tracking services for all your delivery needs. From delicate documents to large packages, we handle it all with care and expertise."
        ctaText="Get your items packed and shipped today"
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
                className="absolute -top-3 left-4 bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900"
              >
                Full Service
              </Badge>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">
                  Complete Solutions
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Package className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                    <span className="text-sm">Professional packing</span>
                  </li>
                  <li className="flex items-center">
                    <Truck className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                    <span className="text-sm">Multiple carriers</span>
                  </li>
                  <li className="flex items-center">
                    <Search className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                    <span className="text-sm">Package tracking</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        }
      />

      {/* Service Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Pack & Ship Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From careful packing to reliable shipping and real-time tracking,
              we provide end-to-end solutions for all your delivery needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 border border-orange-200 dark:bg-orange-950 dark:border-orange-800">
                  <Package className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">
                  <Link
                    href="/pack-ship/packing"
                    className="hover:text-primary transition-colors"
                  >
                    Professional Packing
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert packing services using quality materials to ensure your
                  items arrive safely at their destination.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Fragile item protection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Quality packing materials
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Custom box sizing
                  </li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/pack-ship/packing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                  <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">
                  <Link
                    href="/pack-ship/shipping"
                    className="hover:text-primary transition-colors"
                  >
                    Reliable Shipping
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Multiple carrier options with competitive rates and delivery
                  options to meet your timeline and budget.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    FedEx, UPS, USPS
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Express & standard options
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    International shipping
                  </li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/pack-ship/shipping">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                  <Search className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">
                  <Link
                    href="/pack-ship/tracking"
                    className="hover:text-primary transition-colors"
                  >
                    Package Tracking
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Real-time tracking information and delivery updates to keep
                  you informed throughout the shipping process.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Real-time updates
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Delivery confirmation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    SMS & email alerts
                  </li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/pack-ship/tracking">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive shipping and logistics support for all your business
              and personal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Insurance',
                description:
                  'Protect valuable shipments with comprehensive coverage',
                icon: Shield,
              },
              {
                title: 'Documentation',
                description:
                  'International shipping paperwork and customs forms',
                icon: Package,
              },
              {
                title: 'Storage',
                description: 'Temporary storage solutions for your packages',
                icon: MapPin,
              },
              {
                title: 'Consultation',
                description: 'Expert advice on shipping options and costs',
                icon: Phone,
              },
            ].map((service, index) => (
              <Card key={index} className="text-center p-4">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Items Shipped Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit our location or call us for expert packing and shipping
              services. We&apos;re here to help with all your delivery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="tel:650-961-4646">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (650) 961-4646
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Visit Our Location</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
