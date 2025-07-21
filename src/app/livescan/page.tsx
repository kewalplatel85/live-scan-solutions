import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  Building2,
  Calendar,
  Check,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  MapPin,
  Phone,
  Shield,
  Smartphone,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const liveScanFeatures = [
  {
    icon: Zap,
    title: 'Digital Live Scan',
    description: 'Electronic fingerprint capture directly into digital format',
    benefits: [
      'Cleaner and faster than ink methods',
      'Less prone to errors',
      'Instant transmission to AFIS systems',
      'Real-time quality verification',
    ],
  },
  {
    icon: FileText,
    title: 'Ink Fingerprinting',
    description:
      'Traditional FBI FD-258 card fingerprints for specific requirements',
    benefits: [
      'Authentic FBI FD-258 cards provided',
      'DOJ guidelines compliance',
      'Hard card backup option',
      'International acceptance',
    ],
  },
];

const serviceOptions = [
  {
    icon: Users,
    title: 'Walk-In Service',
    description: 'No appointment needed - fast and convenient',
    badge: 'Most Popular',
    features: ['Immediate service', 'Quick turnaround', 'Professional staff'],
  },
  {
    icon: Calendar,
    title: 'Scheduled Appointments',
    description: 'Book your preferred time slot',
    badge: 'Recommended',
    features: [
      'Private consultation',
      'Guaranteed time',
      'After-hours available',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Service',
    description: 'On-site fingerprinting at your location',
    badge: 'Enterprise',
    features: ['Group sessions', 'Corporate rates', 'HR support'],
  },
];

const certifications = [
  {
    icon: Shield,
    title: 'DOJ Certified',
    description: 'Authorized by Department of Justice',
  },
  {
    icon: Shield,
    title: 'FBI Authorized',
    description: 'Official FBI fingerprinting provider',
  },
  {
    icon: Award,
    title: 'CJIS Compliant',
    description: 'Criminal Justice Information Services certified',
  },
];

const pricingPlans = [
  {
    name: 'Individual',
    price: '$35',
    description: 'Perfect for personal background checks',
    features: [
      'Live Scan fingerprinting',
      'DOJ processing',
      'Same-day service',
      'Digital delivery option',
    ],
    popular: false,
  },
  {
    name: 'Employment',
    price: '$45',
    description: 'Comprehensive employment screening',
    features: [
      'Live Scan fingerprinting',
      'FBI & DOJ processing',
      'Priority handling',
      'Employment verification',
      'Follow-up support',
    ],
    popular: true,
  },
  {
    name: 'Express',
    price: '$75',
    description: 'Rush processing for urgent needs',
    features: [
      'Live Scan fingerprinting',
      'Same-day processing',
      'Priority queue',
      'Rush handling',
      'Expedited delivery',
    ],
    popular: false,
  },
];

const locations = [
  'Palo Alto',
  'Sunnyvale',
  'Los Altos',
  'Cupertino',
  'Menlo Park',
  'Santa Clara',
  'San Jose',
  'Milpitas',
  'Redwood City',
  'Mountain View',
  'Fremont',
  'Campbell',
  'Saratoga',
  'Morgan Hill',
];

export default function LiveScanPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  DOJ Certified
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  FBI Authorized
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  5-Star Service
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Professional <span className="text-primary">Live Scan</span>{' '}
                  Fingerprinting
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Certified digital and ink fingerprinting services for
                  employment, licensing, and background checks. Trusted by
                  businesses and individuals across the Bay Area.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">
                    Same-day processing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Walk-ins welcome</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">
                    Mobile service available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Expert assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">
                    Trusted by local schools and churches
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              {/* Primary CTAs */}
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <span>Please call us to schedule your appointment</span>
                </div>
                <div className="flex">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6"
                    asChild
                  >
                    <Link href="tel:650-961-4646">
                      <Phone className="mr-2 h-5 w-5" />
                      (650) 961-4646
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Mon-Fri: 10AM-5PM PST | Sat: 10AM-2PM PST | Sun: Closed
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Bay Area Locations
                </div>
              </div>
            </div>

            {/* Right Content - Service Cards */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Live Scan Services</h3>
                  <div className="flex items-center ">
                    <Badge className="mr-2" variant="secondary">
                      Rolling fee lowest in town
                    </Badge>
                    <Badge variant="default">$17</Badge>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-3 text-green-600" />
                    Digital fingerprint capture
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-3 text-green-600" />
                    Real-time quality verification
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-3 text-green-600" />
                    Instant electronic transmission
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-3 text-green-600" />
                    AFIS system integration
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Ink Fingerprinting</h3>
                  <Badge variant="outline">FBI FD-258</Badge>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-3 text-green-600" />
                    Authentic FBI cards provided
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-3 text-green-600" />
                    DOJ guidelines compliance
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-3 text-green-600" />
                    International acceptance
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-3 text-green-600" />
                    Hard card backup option
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certified & Authorized Provider
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are officially certified and authorized by law enforcement
              agencies to provide secure and reliable fingerprinting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-8">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Comparison */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Fingerprinting Method
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer both modern digital Live Scan and traditional ink
              fingerprinting to meet all your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveScanFeatures.map((feature, index) => (
              <Card key={index} className="p-8">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Service Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service option that best fits your schedule and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceOptions.map((option, index) => (
              <Card key={index} className="p-6 relative">
                {option.badge && (
                  <Badge className="absolute -top-3 left-6" variant="secondary">
                    {option.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center">
                    {option.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center">
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
                        <Check className="w-4 h-4 mr-2 text-green-600" />
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

      {/* Service Packages Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service package that best fits your needs. All packages
              include professional fingerprinting with expert assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  {/* FUTURE: Add a feature flag and uncomment this section */}
                  {/* <div className="text-4xl font-bold text-primary my-4">
                    {plan.price}
                  </div> */}
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* FUTURE: Add a feature flag and uncomment this section */}
                  {/* <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bay Area Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve communities across the Bay Area with our
              professional fingerprinting services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location, index) => (
              <div
                key={index}
                className="inline-flex items-center px-4 py-2 bg-muted/30 rounded-full border border-muted"
              >
                <MapPin className="w-3 h-3 mr-2 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer convenient payment methods to make your experience
              seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <CreditCard className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Individual Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cash, credit cards, and debit cards accepted for individual
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Corporate Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monthly invoicing available for businesses with service
                  agreements.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Payment Vouchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Special discount pricing and payment vouchers for employee
                  programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Fingerprinting Done?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust us for their
            fingerprinting needs. Walk-ins welcome or schedule your appointment
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* FUTURE: Add a feature flag and uncomment this section */}
            {/* <Button size="lg" variant="secondary" className="px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Now
            </Button> */}
            <Button
              size="lg"
              className="px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (650) 961-4646
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>Mon-Fri: 10AM-5PM PST | Sat: 10AM-2PM PST | Sun: Closed</p>
            <p>Walk-ins welcome | Same-day processing available</p>
          </div>
        </div>
      </section>
    </main>
  );
}
