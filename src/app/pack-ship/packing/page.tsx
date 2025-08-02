import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Box,
  CheckCircle,
  Clock,
  MapPin,
  Package,
  Phone,
  Shield,
} from 'lucide-react';
import Link from 'next/link';

export default function PackingPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title="Professional Packing Services"
        subtitle="Expert Protection for Your Items"
        description="Professional packing services using high-quality materials and expert techniques to ensure your items arrive safely. From fragile antiques to important documents, we pack it right."
        ctaText="Let our experts pack your items safely"
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
                Expert Protection
              </Badge>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">
                  Packing Expertise
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Fragile item specialists</span>
                  </li>
                  <li className="flex items-center">
                    <Box className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Custom packaging solutions</span>
                  </li>
                  <li className="flex items-center">
                    <Package className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Professional materials</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        }
      />

      {/* Packing Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Packing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team uses quality materials and proven techniques
              to ensure your items are properly protected during transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                  <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">Fragile Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized packing for delicate items including artwork,
                  electronics, glassware, and antiques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Bubble wrap protection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Custom foam inserts
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Reinforced packaging
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                  <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Standard Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional packing for everyday items, documents, clothing,
                  and general merchandise.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Appropriate box sizing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Secure padding
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Proper labeling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 border border-orange-200 dark:bg-orange-950 dark:border-orange-800">
                  <Box className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tailored packing solutions for unique items that require
                  special handling and protection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Custom crating
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Specialized materials
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Expert consultation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials & Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality Materials & Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use only high-quality packing materials and follow proven
              processes to ensure maximum protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Protective Materials',
                description: 'Bubble wrap, foam, packing peanuts, and more',
                icon: Shield,
              },
              {
                title: 'Quality Boxes',
                description: 'New, sturdy boxes in various sizes',
                icon: Box,
              },
              {
                title: 'Professional Tape',
                description: 'Heavy-duty packing tape for secure sealing',
                icon: Package,
              },
              {
                title: 'Expert Technique',
                description: 'Trained staff with years of experience',
                icon: Package,
              },
            ].map((item, index) => (
              <Card key={index} className="text-center p-4">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
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
                    href="/pack-ship/shipping"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Shipping Services
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
              Professional Packing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Bring your items to our location and let our experts pack them
              safely for shipping. We guarantee professional results.
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
