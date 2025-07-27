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
  title:
    'About Live Scan Solutions | Trusted Fingerprinting Experts | Mountain View, CA',
  description:
    "Learn about Live Scan Solutions, Bay Area's trusted fingerprinting experts since 2010. DOJ & FBI certified, serving Mountain View, Palo Alto, Sunnyvale. Over 15 years experience, 10,000+ customers served.",
  keywords:
    'about live scan solutions, fingerprinting experts, DOJ FBI certified, mountain view fingerprinting company, bay area background check services, trusted notary services, professional document services',
  openGraph: {
    title: 'About Live Scan Solutions | Trusted Fingerprinting Experts',
    description:
      "Bay Area's trusted fingerprinting experts since 2010. DOJ & FBI certified, 15+ years experience, 10,000+ customers served.",
    url: 'https://livescansolutions.com/about',
  },
  alternates: {
    canonical: 'https://livescansolutions.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
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
              About <span className="text-primary">Live Scan Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your trusted partner for professional fingerprinting and document
              services. Officially certified by the Department of Justice and
              FBI with over 15 years of experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Certified Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  DOJ & FBI authorized specialists
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">15+ Years Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Trusted by thousands of clients
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Northern California</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple convenient locations
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
                Building trust through excellence in fingerprinting services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Live Scan Solutions is part of{' '}
                  <a
                    href="https://www.mailallcenter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Mail All Center
                  </a>
                  , established to meet the growing demand for top-tier
                  fingerprinting services in California. We&apos;ve grown from a
                  local service provider to a trusted partner for individuals
                  and organizations across Northern California.
                </p>
                <p className="text-muted-foreground">
                  Our journey began with a simple mission: to provide accurate,
                  secure, and convenient fingerprinting services while
                  maintaining the highest standards of privacy and
                  professionalism. Today, we serve thousands of clients
                  annually, from healthcare professionals to educators, from
                  small businesses to large corporations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div className="text-center">
                  <FileText className="h-20 w-20 text-primary/70 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Part of Mail All Center
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive business services company serving Northern
                    California
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
                  To provide accurate, secure, and convenient fingerprinting
                  services while maintaining the highest standards of privacy,
                  professionalism, and customer care. We strive to make the
                  fingerprinting process seamless and stress-free for every
                  client.
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
                  To be Northern California&apos;s most trusted fingerprinting
                  service provider, known for our expertise, reliability, and
                  commitment to excellence. We envision a future where secure
                  identification services are accessible to everyone.
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
              Comprehensive solutions for all your documentation and
              identification needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
              Why Choose Live Scan Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the fingerprinting
              industry.
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
