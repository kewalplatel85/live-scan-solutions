import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import Link from 'next/link';

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
          <div className="space-y-4 md:space-y-6">
            {/* Pricing Card */}
            <Card className="relative p-4 md:p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <Badge
                variant="default"
                className="absolute -top-3 left-4 bg-primary text-primary-foreground"
              >
                Best Price Guarantee
              </Badge>
              <div className="mt-2 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  $9.99
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete passport photo service
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Price match guarantee
                  </div>
                  <div className="flex items-center justify-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    No hidden fees
                  </div>
                </div>
              </div>
            </Card>

            {/* Standards Card */}
            <Card className="relative p-4 md:p-6">
              <Badge
                variant="outline"
                className="absolute -top-3 left-4 bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900"
              >
                100% Compliant
              </Badge>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">
                  Official Standards Met
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">US State Dept compliant</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">International standards</span>
                  </li>
                  <li className="flex items-center">
                    <Camera className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Professional equipment</span>
                  </li>
                </ul>
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
                            Live Scan Solutions
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

      {/* Why Choose Us Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Cheapest in Town',
                description:
                  'Only $9.99 with price match guarantee. No hidden fees or coupons needed.',
                color: 'text-green-600',
                bgColor:
                  'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
              },
              {
                icon: Zap,
                title: 'Quick & Reliable',
                description:
                  'Get your photos done in minutes. No appointment needed - walk-ins welcome.',
                color: 'text-blue-600',
                bgColor:
                  'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
              },
              {
                icon: Shield,
                title: 'Compliant & Professional',
                description:
                  'Advanced digital cameras and strict adherence to US State Department guidelines.',
                color: 'text-purple-600',
                bgColor:
                  'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
              },
              {
                icon: CheckCircle,
                title: 'Guaranteed Acceptance',
                description:
                  "Photos guaranteed to be accepted or we'll retake them for free.",
                color: 'text-emerald-600',
                bgColor:
                  'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 border`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Types & Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Photo Types We Provide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional photography services that meet specific requirements
              for various official documents and identification needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'US Passport',
                description: '2x2 inch photos for US passport applications',
                icon: Globe,
                features: ['2x2 inch format', 'White background', 'Front view'],
              },
              {
                title: 'Visa Photos',
                description: 'Country-specific visa application photos',
                icon: Camera,
                features: [
                  'Multiple country standards',
                  'Various sizes available',
                  'Specific requirements met',
                ],
              },
              {
                title: 'ID Cards',
                description: 'State ID and driver license photos',
                icon: Shield,
                features: [
                  'DMV compliant',
                  'Professional lighting',
                  'Instant printing',
                ],
              },
              {
                title: 'Immigration',
                description: 'USCIS and immigration document photos',
                icon: Users,
                features: [
                  'USCIS specifications',
                  'Green card applications',
                  'Citizenship documents',
                ],
              },
            ].map((type, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-center">
                    {type.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground text-center">
                    {type.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Age Groups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Adults',
                description: 'Standard passport photos for adults',
                icon: Users,
                features: [
                  'Professional service',
                  'Multiple copies available',
                  'Same-day service',
                ],
              },
              {
                title: 'Children',
                description: 'Patient service for children and minors',
                icon: Users,
                features: [
                  'Child-friendly environment',
                  'Patient photographers',
                  'Quick sessions',
                ],
              },
              {
                title: 'Infants',
                description: 'Specialized infant photography',
                icon: Users,
                features: [
                  'Infant photography experts',
                  'Flexible positioning',
                  'Parent assistance welcome',
                ],
              },
            ].map((group, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                    <group.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {group.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm justify-center"
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

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Simple 3-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting your passport photos is quick and easy. Walk in today and
              walk out with compliant photos in just minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Visit Us',
                description:
                  'Walk in during business hours - no appointment needed',
                icon: MapPin,
              },
              {
                step: '2',
                title: 'Photo Session',
                description:
                  'Professional photo taken with proper lighting and positioning',
                icon: Camera,
              },
              {
                step: '3',
                title: 'Get Your Photos',
                description:
                  'Receive printed photos immediately - guaranteed compliant',
                icon: CheckCircle,
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.step}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-primary/5 via-background to-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit Us Today in Mountain View
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We&apos;re conveniently located in Mountain View, CA and serve
                surrounding areas including Sunnyvale, Los Altos, Palo Alto, and
                Cupertino. Walk in today and walk out with compliant passport
                photos in just minutes!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Contact Info */}
              <Card className="p-8">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Visit Our Location
                      </CardTitle>
                      <p className="text-muted-foreground">
                        No appointment needed
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-muted-foreground">
                      809 Cuesta Dr, Suite B<br />
                      Mountain View, CA 94040
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <div className="space-y-2">
                      <p className="flex items-center text-muted-foreground">
                        <Phone className="w-4 h-4 mr-2" />
                        (650) 961-4646
                      </p>
                      <p className="text-muted-foreground">
                        Email: mailallcenter1@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-background border-primary/20">
                <CardContent className="text-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Ready for Your Passport Photos?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Get professional passport photos for just $9.99 with our
                      price match guarantee. Same-day service available.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button size="lg" className="w-full" asChild>
                      <Link href="tel:650-961-4646">
                        <Phone className="mr-2 h-5 w-5" />
                        Call (650) 961-4646
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href="https://maps.apple.com/maps?saddr=Current%20Location&daddr=809%20Cuesta%20Dr,%20Suite%20B,%20Mountain%20View%20CA&hl=en&oq=671&mra=ls&t=m&z=10">
                        <MapPin className="mr-2 h-5 w-5" />
                        Get Directions
                      </Link>
                    </Button>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>
                        Trusted by locals for affordable passport photos
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
