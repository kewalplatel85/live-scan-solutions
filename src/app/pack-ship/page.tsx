import { GenericHero } from '@/components/common/GenericHero';
import { SEOStructuredData } from '@/components/SEOStructuredData';
import { Card } from '@/components/ui/card';
import { packingShippingServiceSchema } from '@/data/google-business-schema';
import { SiDhl, SiFedex, SiUps, SiUsps } from '@icons-pack/react-simple-icons';
import {
  CheckCircle,
  Clock,
  Globe,
  MapPin,
  Package,
  Phone,
  Shield,
  Truck,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Ship Packages Fast  Domestic & International Shipping | UPS, FedEx, USPS and DHL',
  description:
    'Mail All Center offers professional packing and shipping services in Mountain View, CA. Expert packing, UPS, FedEx, USPS shipping, package tracking. Safe handling of fragile items. Serving Bay Area businesses and individuals. Call (650) 961-4646.',
  keywords:
    'packing services mountain view, shipping services mountain view, Mail All Center shipping, UPS shipping mountain view, FedEx shipping mountain view, USPS shipping mountain view, package packing mountain view, fragile item packing, professional packing services, shipping near me, package services mountain view, shipping center mountain view, pack and ship mountain view, shipping solutions bay area',
  openGraph: {
    type: 'website',
    title: 'Packing & Shipping Services Mountain View | Mail All Center',
    description:
      'Mail All Center offers professional packing and shipping services with UPS, FedEx, USPS. Expert handling of all package types in Mountain View, CA.',
    url: `/pack-ship`,
  },
  alternates: {
    canonical: `/pack-ship`,
  },
  robots: { index: true, follow: true },
};

export default function PackShipPage() {
  return (
    <main>
      {/* Business Schema */}
      <SEOStructuredData type="business" />

      {/* Service Schema */}
      <SEOStructuredData
        type="service"
        serviceSchema={packingShippingServiceSchema}
      />

      {/* Hero Section */}
      <GenericHero
        layout="split-60-40"
        title={
          <>
            Professional{' '}
            <span className="text-primary">Packing & Shipping</span> Services
          </>
        }
        subtitle="Your Complete Shipping Solution Center"
        description="Expert packing, multi-carrier shipping, and package services all in one place. From delicate items to large packages, we handle everything with professional care and guaranteed reliability."
        benefits={[
          {
            text: 'Professional packing with 90+ box sizes & insurance',
            icon: Package,
          },
          {
            text: 'FedEx, UPS, USPS & DHL authorized shipping center',
            icon: Truck,
          },
          {
            text: 'Daily pickups & convenient package drop-off',
            icon: CheckCircle,
          },
          {
            text: 'Domestic & international shipping worldwide',
            icon: Globe,
          },
        ]}
        ctaText="Get expert packing and shipping services today"
        buttons={[
          {
            text: 'Send Your Package Today',
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
            text: 'Authorized FedEx, UPS, USPS & DHL Location',
          },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-6">
            {/* Shipping Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <Card className="p-4 md:p-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <SiFedex
                      className="w-12 h-12 mr-3 flex-shrink-0"
                      color="#4d148c"
                    />
                    <span>FedEx</span>
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">
                        Early A.M. Delivery Available
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Same Day Delivery</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Express Saver® (3-Day)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">International First®</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-4 md:p-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <SiUps
                      className="w-12 h-12 mr-3 flex-shrink-0"
                      color="#C67D30"
                    />
                    <span>UPS</span>
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">
                        My Choice® Delivery Control
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Carbon Neutral Shipping</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Access Point™ Network</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">WorldShip® Integration</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-4 md:p-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <SiUsps
                      className="w-12 h-12 mr-3 flex-shrink-0"
                      color="#004b87"
                    />
                    <span>USPS</span>
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">
                        Flat Rate Pricing Available
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Free Package Pickup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">APO/FPO Military Shipping</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">P.O. Box Delivery</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-4 md:p-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <SiDhl
                      className="w-12 h-12 mr-3 flex-shrink-0"
                      color="#d40511"
                    />
                    <span>DHL</span>
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">220+ Countries Coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">
                        Customs Clearance Expertise
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">
                        GoGreen Plus Sustainability
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Real-Time Tracking</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        }
      />

      {/* Package Drop-Off Information */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950 dark:to-cyan-950 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Package Drop-Off Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Already have your packages packed and labeled? Drop them off at
                our authorized location for daily carrier pickup - no additional
                charges for account holders.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-emerald-600" />
                    What We Accept
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pre-labeled FedEx, UPS, USPS & DHL packages</li>
                    <li>• Letters and packages with valid shipping accounts</li>
                    <li>• Business and personal shipments</li>
                    <li>• Daily carrier pickup included</li>
                  </ul>
                </div>

                <div className="text-left">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-600" />
                    Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Valid carrier account required</li>
                    <li>• Packages must be properly labeled</li>
                    <li>• Additional packaging/taping may incur fees</li>
                    <li>• No USPS Registered Mail accepted</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Perfect for businesses and individuals who prefer to pack their
                own items but need convenient drop-off with guaranteed daily
                pickup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Highlight */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-950 dark:to-blue-950 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our Packing & Shipping Services?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                From fragile electronics to oversized items, our certified
                specialists treat every package with professional care. We
                guarantee your items are packed to meet all carrier requirements
                for insurability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    title: 'Premium Materials',
                    description:
                      '90+ box sizes, bubble wrap, foam, and specialty packaging',
                    icon: Package,
                  },
                  {
                    title: 'Custom Solutions',
                    description:
                      'From elk antlers to car bumpers - we pack anything',
                    icon: Shield,
                  },
                  {
                    title: 'Full Insurance',
                    description:
                      'Comprehensive coverage options for valuable shipments',
                    icon: CheckCircle,
                  },
                  {
                    title: 'Expert Guidance',
                    description:
                      'International docs, customs forms, and shipping advice',
                    icon: Phone,
                  },
                ].map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                  Computers & Electronics
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                  Artwork & Antiques
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                  Medical Devices
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                  Auto Parts & Household Goods
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
