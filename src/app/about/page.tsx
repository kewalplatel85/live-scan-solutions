import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  CheckCircle,
  Clock,
  FileText,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  Target,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const services = [
    { name: 'Live Scan Fingerprinting', icon: FileText },
    { name: 'Notary Public', icon: Shield },
    { name: 'Passport Photos', icon: Users },
    { name: 'Apostille Services', icon: Award },
    { name: 'Mail Box Rental', icon: MapPin },
    { name: 'Pack & Ship', icon: CheckCircle },
  ];

  const values = [
    {
      title: 'Safety & Security',
      description: 'Your privacy and peace of mind are our top priorities.',
      icon: Shield,
    },
    {
      title: 'Speed & Accuracy',
      description: 'Swift and precise capture of your information every time.',
      icon: Target,
    },
    {
      title: 'Convenience',
      description: 'Walk-in or mobile services to meet your scheduling needs.',
      icon: Clock,
    },
    {
      title: 'Community Care',
      description: 'Committed to serving our community with dedication.',
      icon: Heart,
    },
  ];

  const features = [
    'DOJ & FBI Certified Fingerprint Specialists',
    'Over 20 years of combined experience',
    'State-of-the-art fingerprinting technology',
    'Mobile Live Scan services available',
    'Direct partnership with Department of Justice',
    'Multiple locations throughout Northern California',
    'Seven days a week availability',
    'Group and individual accommodations',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  DOJ Certified
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  FBI Authorized
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  20+ Years Experience
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  We Care About You and Want to{' '}
                  <span className="text-primary">Help</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  We are an officially certified fingerprinting service provider
                  agency authorized by the Department of Justice and FBI.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" asChild>
                  <Link href="tel:650-961-4646">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 650-961-4646
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base"
                  asChild
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 flex items-center justify-center h-96">
                <Heart className="h-32 w-32 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your documentation and
              identification needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {service.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  At Live Scan Solutions, we offer both In-Office and Onsite
                  fingerprinting services to Northern California and surrounding
                  areas. Whether you prefer the convenience of walking in
                  without an appointment or having our services brought to your
                  doorstep, we&apos;ve got you covered.
                </p>
                <p>
                  Our fingerprinting services include both Computer-based and
                  Ink (card) based options, ensuring flexibility to meet your
                  needs. Our top priority is to save you time while providing
                  fingerprinting services of the highest quality and security.
                </p>
                <p>
                  We strive to offer utmost convenience and ease for all your
                  live scan fingerprint service requirements.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <FileText className="h-32 w-32 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <Users className="h-32 w-32 text-primary/60" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  At our company, safety and security are paramount. Founded to
                  meet the growing demand for top-tier Peer Service Providers
                  (PSP) in California, we prioritize your privacy and peace of
                  mind.
                </p>
                <p>
                  Our Department of Justice Certified Fingerprint Specialists
                  leverage their extensive training and expertise to ensure
                  swift and accurate capture of your information.
                </p>
                <p>
                  With over 20 years of combined experience in fingerprinting,
                  our dedicated staff is committed to delivering prompt and
                  convenient service to our community, neighbors, partners, and
                  employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and how we serve our
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We Do
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  As an accredited Department of Justice and FBI certified
                  fingerprinting service provider, our agency specializes in
                  electronically capturing and submitting fingerprints for
                  various purposes including licensure, certification,
                  volunteering, employment, and more.
                </p>
                <p>
                  Additionally, we offer mobile Live Scan fingerprinting
                  services for your convenience. Through our direct partnership
                  with the Department of Justice, we securely transmit your
                  fingerprints and associated data within seconds, expediting
                  the process.
                </p>
                <p>
                  With multiple &quot;Live Scan&quot; machines strategically
                  located throughout Northern California, we can accommodate
                  group or individual needs seven days a week.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <Shield className="h-32 w-32 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <Target className="h-32 w-32 text-primary/60" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Do It
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  We employ state-of-the-art technology for capturing
                  fingerprint information, ensuring precision and efficiency.
                  Our equipment is expertly manufactured and maintained to
                  uphold the highest standards of performance.
                </p>
                <p>
                  Accuracy is our foremost priority, and our team of Fingerprint
                  Specialists, certified by the California Department of
                  Justice, undergo rigorous training to ensure meticulous data
                  collection.
                </p>
                <p>
                  Adhering strictly to DOJ guidelines, our specialists process
                  fingerprint information with utmost care and attention to
                  detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Capabilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Live Scan Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the fingerprinting
              industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference of working with certified professionals
            who care about your needs. Contact us today for fast, secure, and
            reliable fingerprinting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base" asChild>
              <Link href="tel:650-961-4646">
                <Phone className="mr-2 h-5 w-5" />
                Call: 650-961-4646
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:650-961-4646"
                    className="text-primary hover:underline"
                  >
                    650-961-4646
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:mailallcenter1@gmail.com"
                    className="text-primary hover:underline"
                  >
                    mailallcenter1@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri: 10AM-5PM PST
                    <br />
                    Sat: 10AM-2PM PST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
