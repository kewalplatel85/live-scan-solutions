import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Bell,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Key,
  Mail,
  MapPin,
  Package,
  Phone,
  Shield,
  Star,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function MailboxRentalPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title="Private Mailbox Rental Service"
        subtitle="Starting at $25/month — Get 3 Months FREE!"
        description="Looking for a reliable and secure way to receive your mail and packages? Avoid the hassle and limitations of traditional mail options. At Mail All Center, we provide professional, secure, and affordable private mailbox rentals in Mountain View, CA — perfect for individuals and businesses alike."
        badges={[
          {
            icon: DollarSign,
            text: 'Starting at $25/month',
            variant: 'default',
          },
          {
            icon: Zap,
            text: '3 Months FREE!',
            variant: 'secondary',
          },
          {
            icon: Star,
            text: '24/7 Access',
            variant: 'outline',
            iconClassName: 'fill-yellow-400 text-yellow-400',
          },
        ]}
        buttons={[
          {
            text: 'Reserve Your Mailbox',
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
          <div className="space-y-4 md:space-y-6">
            <Card className="relative p-4 md:p-6 border-2 border-primary/20 bg-primary/5">
              <Badge variant="default" className="absolute -top-3 left-4">
                Limited Time Offer
              </Badge>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      Protect against identity theft
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Package className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span className="text-sm">Prevent package theft</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      Real street address (not PO Box)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Bell className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span className="text-sm">Email & text alerts</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        }
      />

      {/* Why We're Better Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why We&apos;re Better than the Post Office or UPS Store
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of our professional mailbox rental
              service with superior features and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Real Street Address</h3>
              <p className="text-sm text-muted-foreground">
                PO Boxes can&apos;t receive packages from FedEx/UPS. Our
                addresses can.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-semibold mb-2">Lower Rates</h3>
              <p className="text-sm text-muted-foreground">
                Starting at just $25/month — way more affordable than UPS Store
                mailboxes.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">3 Months Free</h3>
              <p className="text-sm text-muted-foreground">
                Sign up now and get your first 3 months absolutely free!
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-200 dark:bg-purple-950 dark:border-purple-800">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Access</h3>
              <p className="text-sm text-muted-foreground">
                Unlike the Post Office, access your mailbox anytime — day or
                night.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-orange-200 dark:bg-orange-950 dark:border-orange-800">
                <Bell className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">Email & Text Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Know instantly when mail or packages arrive — no guessing.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-200 dark:bg-green-950 dark:border-green-800">
                <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Mail Forwarding</h3>
              <p className="text-sm text-muted-foreground">
                Traveling? We forward your mail anywhere, anytime.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-200 dark:bg-red-950 dark:border-red-800">
                <CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-sm text-muted-foreground">
                Transparent pricing. No key deposit or long-term contract
                required.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Included Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Included With Every Mailbox Rental
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for secure mail and package management, all
              included in your monthly rental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Secure 24/7 Access',
                description: 'Access your mailbox anytime with secure entry',
              },
              {
                icon: FileText,
                title: 'Real Street Address',
                description: 'Professional address — not a P.O. Box',
              },
              {
                icon: Package,
                title: 'Free Package Receiving',
                description:
                  'Accept packages from all carriers at no extra cost',
              },
              {
                icon: Phone,
                title: 'Mail Check Service',
                description: 'Free mail check service by phone',
              },
              {
                icon: Bell,
                title: 'Instant Notifications',
                description: 'Email and text notifications for all deliveries',
              },
              {
                icon: Mail,
                title: 'Mail Forwarding',
                description: 'Optional domestic and international forwarding',
              },
              {
                icon: Key,
                title: 'Privacy Protection',
                description: 'Complete privacy protection for your mail',
              },
              {
                icon: CheckCircle,
                title: 'Permanent Address',
                description: 'Reliable address you can use long-term',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare Our Prices
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how much you save with our affordable mailbox rental rates
              compared to other providers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-primary/5 border-b">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="default" className="text-sm">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Best Value Guarantee
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
                          Monthly Rate
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          Real Address
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          24/7 Access
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          3 Months Free
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
                            $25
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
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
                          $35+
                        </td>
                        <td className="px-6 py-4 text-center">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-muted-foreground">Limited</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-muted-foreground">No</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-6 py-4">FedEx Office</td>
                        <td className="px-6 py-4 text-center font-semibold">
                          $30+
                        </td>
                        <td className="px-6 py-4 text-center">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-muted-foreground">Limited</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-muted-foreground">No</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Post Office (PO Box)</td>
                        <td className="px-6 py-4 text-center font-semibold">
                          $20+
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-red-600">No</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-red-600">No</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-muted-foreground">No</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reserve Your Mailbox Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Don&apos;t settle for limited access, higher fees, or unreliable
              deliveries. Choose Mail All Center — the smarter alternative to
              the Post Office and UPS Store.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">
                  Limited Time Offer
                </span>
              </div>
              <p className="text-lg font-bold">
                3 Months FREE promotion is for a limited time!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="tel:650-961-4646">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (650) 961-4646
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:mailallcenter1@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Link>
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-1 mb-2">
                <MapPin className="w-4 h-4" />
                <span>809 Cuesta Dr, Suite B, Mountain View, CA 94040</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 10AM-5PM | Sat: 10AM-2PM | Sun: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
