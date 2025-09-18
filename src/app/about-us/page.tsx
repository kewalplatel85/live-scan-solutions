import { SEOStructuredData } from '@/components/SEOStructuredData';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { aboutData } from '@/data/about';
import { badgeData } from '@/data/badges';
import {
  Award,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  Shield,
  Target,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Mail All Center | DOJ & FBI Certified Business Services',
  description:
    "Bay Area's trusted DOJ & FBI certified business services provider since 2010. Live scan, notary, mailbox rental, printing, shipping and more. Supporting school districts like Mountain View, Palo Alto, Sunnyvale, Cupertino, and organizations like Boy Scouts and AYSO.",
  keywords: [
    'DOJ FBI certified business services',
    'live scan fingerprinting bay area',
    'Mountain View School District',
    'Los Altos School District',
    'Sunnyvale School District',
    'Cupertino School District',
    'Menlo Park School District',
    'Palo Alto School District',
    'Santa Clara School District',
    'San Jose School District',
    'Boys Scouts',
    'Sunnyvale Boy Scouts',
    'Redwood City School District',
    'Los Gatos School District',
    'AYSO',
  ],
  openGraph: {
    type: 'website',
    title: 'About Mail All Center | DOJ & FBI Certified Business Services',
    description:
      "Bay Area's trusted DOJ & FBI certified business services provider since 2010. Live scan, notary, mailbox rental, printing, shipping and more.",
    url: '/about-us',
  },
  alternates: {
    canonical: '/about-us',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Business Schema */}
      <SEOStructuredData type="business" />
      {/* Hero Section - Company Introduction */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {badgeData.about.map((badge, index) => (
                <Badge
                  key={index}
                  variant={badge.variant || 'secondary'}
                  className="px-4 py-2"
                >
                  <badge.icon
                    className={`w-4 h-4 mr-2 ${badge.iconClassName || ''}`}
                  />
                  {badge.text}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              About <span className="text-primary">Mail All Center</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your one-stop business services center offering live and ink
              fingerprinting, notary public, apostille services, passport
              photos, mailbox rental, packing & shipping, printing, lamination,
              fax & copy, and secure shredding. DOJ & FBI certified with over 15
              years of trusted service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">DOJ & FBI Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Officially authorized specialists
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Complete Business Hub</h3>
                <p className="text-sm text-muted-foreground">
                  10+ essential services under one roof
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">15+ Years Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Trusted by thousands in Bay Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Your complete business services destination in the heart of the
                Bay Area
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Founded in 2010, Mail All Center has grown from a specialized
                  fingerprinting service into the Bay Area&apos;s premier
                  one-stop business services destination. We recognized early on
                  that busy professionals and organizations needed a reliable
                  partner who could handle multiple essential services with the
                  same level of expertise and care.
                </p>
                <p className="text-muted-foreground">
                  Today, we offer a complete suite of business services: Live
                  and Ink Fingerprinting, Notary Public services, Apostille
                  Services, Passport Photos, Mailbox Rental, Packing & Shipping,
                  professional Printing, Lamination, Fax & Copy services, and
                  secure Shredding. Whether you&apos;re a healthcare
                  professional needing background checks, a business owner
                  requiring notarization, or someone who needs convenient
                  mailbox services, we&apos;ve got you covered under one roof.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div className="text-center">
                  <FileText className="h-20 w-20 text-primary/70 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    10+ Essential Services
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    From fingerprinting to shipping - everything you need for
                    your business requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  To be your trusted one-stop destination for all essential
                  business services, from DOJ & FBI certified fingerprinting and
                  notary services to mailbox rental, printing, shipping, and
                  secure document solutions. We maintain the highest standards
                  of security, professionalism, and customer care in everything
                  we do, making complex processes simple and convenient for our
                  clients.
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  To be the Bay Area&apos;s premier comprehensive business
                  services center, recognized as the go-to destination where
                  individuals and businesses can efficiently handle all their
                  essential needs - from certified fingerprinting and document
                  services to mailbox solutions and office support. We envision
                  a future where quality business services are accessible,
                  convenient, and delivered with unmatched expertise.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From fingerprinting and notary services to mailbox rental and
              office support - we provide 10+ essential services to meet all
              your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {aboutData.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center leading-tight">
                    {service.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and how we serve our
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutData.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-4 gap-0">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Mail All Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the convenience of having all your essential business
              services handled by one trusted provider with over 15 years of
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {aboutData.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
