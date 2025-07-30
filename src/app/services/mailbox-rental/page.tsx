import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Clock,
  Key,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function MailboxRentalPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title="Mailbox Rental Services"
        subtitle="Secure Business & Personal Mail Solutions"
        description="Professional mailbox rental services for businesses and individuals. Secure, convenient, and accessible 24/7 with mail forwarding options and package acceptance."
        ctaText="Contact us about mailbox rental availability"
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
                Secure & Convenient
              </Badge>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">Mailbox Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">Secure mail handling</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">Package acceptance</span>
                  </li>
                  <li className="flex items-center">
                    <Key className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">24/7 access available</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        }
      />

      {/* Service Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Mailbox Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure mailbox rental solutions for businesses and individuals
              with professional mail handling and package acceptance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Mail Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional mail handling with secure storage and optional
                  forwarding services for your convenience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Secure mail storage
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Mail forwarding options
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Professional address
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                  <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">Package Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Accept packages from all major carriers with secure storage
                  and notification when deliveries arrive.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    All carrier acceptance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Secure package storage
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Delivery notifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:bg-purple-950 dark:border-purple-800">
                  <Key className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Convenient Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Flexible access options including extended hours and 24/7
                  availability for your mail and packages.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Extended hours
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    24/7 access options
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Multiple locations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mailbox Types Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mailbox Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from various mailbox sizes and service levels to meet your
              specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Personal Mailbox',
                description: 'Perfect for individuals and small mail volume',
                icon: Users,
                features: [
                  'Standard mail acceptance',
                  'Basic package receiving',
                  'Business hours access',
                ],
              },
              {
                title: 'Business Mailbox',
                description: 'Professional address for your business needs',
                icon: Mail,
                features: [
                  'Professional business address',
                  'All mail & package types',
                  'Extended access hours',
                ],
                popular: true,
              },
              {
                title: 'Premium Service',
                description: 'Full-service mail management solution',
                icon: Shield,
                features: [
                  'Mail forwarding included',
                  'Package notification service',
                  '24/7 access available',
                ],
              },
            ].map((option, index) => (
              <Card
                key={index}
                className={`relative p-6 hover:shadow-lg transition-shadow duration-300 ${
                  option.popular ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-center">
                    {option.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center text-sm">
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

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rent Your Mailbox Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us to learn about mailbox availability and pricing. We
              offer flexible rental terms to meet your needs.
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
