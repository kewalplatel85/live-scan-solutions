import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Bell,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  Package,
  Phone,
  Shield,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Mailbox Rental Bay Area | Mail All Center | Private Mailbox Service Near Me',
  description:
    'Mail All Center offers secure mailbox rental services in Mountain View, CA and entire Bay Area. Get a real street address with 24/7 access, package receiving, mail forwarding. Perfect for businesses, remote workers, and travelers. Serving Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont. Starting at $20/month. Call (650) 961-4646.',
  keywords:
    'mailbox rental mountain view, mailbox rental bay area, mailbox rental near me, private mailbox mountain view, private mailbox bay area, Mail All Center mailbox, mailbox service bay area, package receiving mountain view, mail forwarding mountain view, business mailbox mountain view, virtual mailbox mountain view, secure mailbox rental, private mailbox service, street address rental mountain view, mailbox rental palo alto, mailbox rental sunnyvale, mailbox rental san jose, mailbox rental cupertino, mailbox rental fremont, mailbox rental santa clara, silicon valley mailbox rental, peninsula mailbox service, south bay mailbox rental',
  openGraph: {
    title: 'Mailbox Rental Mountain View | Mail All Center',
    description:
      'Mail All Center offers secure mailbox rental in Mountain View, CA. Real street address, 24/7 access, package receiving.',
    url: 'https://www.mailallcenter.com/mailbox-rental',
  },
  alternates: {
    canonical: 'https://www.mailallcenter.com/mailbox-rental',
  },
};

export default function MailboxRentalPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title={
          <>
            Professional <span className="text-primary">Mailbox Rental</span>{' '}
            Services
          </>
        }
        subtitle="Secure mail and package handling for businesses and individuals. Get a real street address with 24/7 access and instant notifications."
        description="Please call us to schedule your appointment"
        badges={[
          {
            icon: Shield,
            text: '24/7 Secure Access',
            variant: 'default',
          },
          {
            icon: CheckCircle,
            text: 'Real Street Address',
            variant: 'secondary',
          },
          {
            icon: Zap,
            text: '$25/Month',
            variant: 'outline',
          },
        ]}
        buttons={[
          {
            text: '(650) 961-4646',
            href: 'tel:650-961-4646',
            icon: Phone,
            variant: 'default',
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
            {/* First Row - Service Cards Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <div className="absolute -top-3 left-4 flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
                  >
                    Best Value in Town
                  </Badge>
                  <Badge
                    variant="default"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    $25/Month
                  </Badge>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Mailbox Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Real street address</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">24/7 secure access</span>
                    </li>
                    <li className="flex items-center">
                      <Package className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Package receiving</span>
                    </li>
                    <li className="flex items-center">
                      <Bell className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Email & text alerts</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900"
                >
                  Additional Services
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Premium Features
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Mail forwarding</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Mail check service</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Privacy protection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm">Secure processing</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Second Row - Competitive Advantages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-green-50 border-green-200 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900"
                >
                  Why Choose Us
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">Our Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">Real address vs PO Box</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">24/7 access anytime</span>
                    </li>
                    <li className="flex items-center">
                      <Bell className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">Instant notifications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">No hidden fees</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="relative p-4 md:p-6">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-4 bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900"
                >
                  Special Offer
                </Badge>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-3">
                    Limited Time Deal
                  </h3>
                  <div className="text-center mb-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg px-4 py-2 rounded-lg shadow-lg border-2 border-white mb-2">
                      3 Months FREE
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For new customers only
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">Save $75 first year</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm">All features included</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        }
      />

      {/* Security & Protection Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800 dark:text-red-200">
              Protect Your Identity & Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure mail handling that prevents theft, missed deliveries, and
              identity fraud — giving you peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 bg-white dark:bg-gray-900">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-200 dark:bg-red-950 dark:border-red-800">
                  <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Identity Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitored facility with 24/7 access control prevents mail
                    theft and identity fraud.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 bg-white dark:bg-gray-900">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange-200 dark:bg-orange-950 dark:border-orange-800">
                  <Package className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Package Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure receiving from USPS, UPS, FedEx, and DHL — no more
                    stolen packages.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500 bg-white dark:bg-gray-900">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Never Miss Deliveries</h3>
                  <p className="text-sm text-muted-foreground">
                    We sign for packages requiring signatures and hold them
                    safely until pickup.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 bg-white dark:bg-gray-900">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Professional Image</h3>
                  <p className="text-sm text-muted-foreground">
                    Impress clients with a real street address — not a generic
                    PO Box.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why We&apos;re Better Than Post Office & UPS Store
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly how much you save with Mail All Center compared to
              major competitors. No hidden fees, no surprises, just better
              service.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                  <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Real Street Address</h3>
                  <p className="text-sm text-muted-foreground">
                    PO Boxes can&apos;t receive packages from FedEx/UPS. Our
                    addresses can receive from all carriers.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">24/7 Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Unlike the Post Office, access your mailbox anytime — day or
                    night.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-200 dark:bg-purple-950 dark:border-purple-800">
                  <Bell className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email & Text Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Know instantly when mail or packages arrive — no guessing
                    games.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange-200 dark:bg-orange-950 dark:border-orange-800">
                  <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Flexible Mail Forwarding
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Traveling? We forward your mail anywhere, anytime — no
                    restrictions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-200 dark:bg-green-950 dark:border-green-800">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">No Hidden Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing. No key deposit or long-term contract
                    required.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-200 dark:bg-red-950 dark:border-red-800">
                  <Zap className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Lower Rates + 3 Free Months
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Starting at just $25/month — way more affordable than UPS
                    Store mailboxes.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Our Pricing Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Professional Mailbox Service - Just $25/Month
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get all the features you need for secure mail handling at an
              unbeatable price
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Pricing Card */}
            <Card className="relative p-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 mb-8">
              <Badge
                variant="default"
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
              >
                Special Offer: 3 Months FREE
              </Badge>
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Complete Mailbox Package
                </h3>
                <div className="text-5xl font-bold text-primary mb-2">$25</div>
                <div className="text-lg text-muted-foreground mb-6">
                  per month + 3 FREE months for new customers
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>Real street address (not a PO Box)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>24/7 secure access</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>All carrier package acceptance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>Email & SMS notifications</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>Mail forwarding service</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>Package holding & security</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>Professional business image</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>No hidden fees or contracts</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Key Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-blue-900 mb-2">
                  Better than PO Boxes
                </h4>
                <p className="text-sm text-blue-700">
                  Real street address accepts packages from all carriers, unlike
                  PO Boxes that can&apos;t receive FedEx/UPS
                </p>
              </Card>

              <Card className="p-6 text-center bg-gradient-to-b from-emerald-50 to-emerald-100 border border-emerald-200">
                <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="font-bold text-emerald-900 mb-2">
                  24/7 Convenience
                </h4>
                <p className="text-sm text-emerald-700">
                  Access your mail anytime, unlike store-based services with
                  limited business hours
                </p>
              </Card>

              <Card className="p-6 text-center bg-gradient-to-b from-purple-50 to-purple-100 border border-purple-200">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-purple-900 mb-2">
                  Exceptional Value
                </h4>
                <p className="text-sm text-purple-700">
                  Premium features at $25/month plus 3 FREE months - the best
                  value in professional mail services
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-primary/5 to-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join hundreds of satisfied customers who trust Mail All Center
                for their professional mailbox needs.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary text-lg">
                  Limited Time: 3 Months FREE!
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Sign up now and save $75 on your first year. This special offer
                won&apos;t last long - secure your professional mailbox today.
              </p>
              <Button size="lg" asChild>
                <Link href="tel:650-961-4646">
                  <Phone className="mr-2 h-4 w-4" />
                  Reserve Your Mailbox Now
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>809 Cuesta Dr, Suite B, Mountain View, CA 94040</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Mon-Fri: 10AM-5PM | Sat: 10AM-2PM | Sun: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
