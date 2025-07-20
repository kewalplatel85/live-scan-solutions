import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function NotaryPublicPage() {
  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description:
        'Contact us to discuss your document notarization requirements and confirm the necessary identification.',
      icon: Phone,
    },
    {
      step: 2,
      title: 'Document Preparation',
      description:
        'Ensure your documents are ready for notarization. Our team will guide you through the process.',
      icon: FileText,
    },
    {
      step: 3,
      title: 'Identity Verification',
      description:
        'Present valid identification for verification. We ensure compliance with legal standards.',
      icon: Shield,
    },
    {
      step: 4,
      title: 'Notarization',
      description:
        'Our licensed Notary Public will witness the signing of your document and provide the official seal.',
      icon: CheckCircle,
    },
  ];

  const documentTypes = [
    'Contracts: Legal agreements between two or more parties',
    'Real Estate Documents: Deeds, mortgages, and other property-related papers',
    'Affidavits: Written statements confirmed by oath or affirmation, for use as evidence in court',
    'Power of Attorney: Legal authorization for one person to act on another&apos;s behalf in legal matters',
    'Wills and Trusts: Legal documents related to the distribution of a person&apos;s estate after death',
    'Business Documents: Articles of incorporation, business licenses, and partnership agreements',
  ];

  const notarizationTypes = [
    {
      title: 'Acknowledgments',
      description:
        'Confirm the identity of the signer and their willingness to sign a document.',
      icon: Users,
    },
    {
      title: 'Jurats',
      description:
        'Requires the signer to swear or affirm that the contents of a document are true.',
      icon: FileText,
    },
    {
      title: 'Oaths and Affirmations',
      description:
        'Legally binding promises made in writing or verbally before a Notary.',
      icon: Shield,
    },
    {
      title: 'Certified Copies',
      description:
        'Notary-certified copies of original documents, ensuring that the copy is an accurate reproduction.',
      icon: CheckCircle,
    },
  ];

  const benefits = [
    { text: 'Walk-in and on-site services', icon: MapPin },
    { text: 'Licensed Notaries with extensive experience', icon: Star },
    { text: 'Confidential handling of sensitive documents', icon: Shield },
    { text: 'Serving Mountain View and the Bay Area', icon: MapPin },
    { text: 'Ensuring documents meet legal requirements', icon: CheckCircle },
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
                  Licensed Notary
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  Same Day Service
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  Trusted & Reliable
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Professional{' '}
                  <span className="text-primary">Notary Public</span> Services
                  in Mountain View
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Accurate, efficient, and secure document notarization with
                  licensed professionals. Walk-ins welcome or book online for
                  guaranteed service.
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
                  <span className="text-sm font-medium">
                    Licensed professionals
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Secure handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Walk-ins welcome</span>
                </div>
              </div>

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
            </div>

            {/* Hero Image/Visual */}
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 flex items-center justify-center h-96">
                <FileText className="h-32 w-32 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Simple 4-Step Notary Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make document notarization straightforward and efficient with
              our proven process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">
                      Step {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why You Need a Notary Public
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Legal documents often require notarization to ensure
                authenticity and prevent fraud. Here are common documents that
                need notary services:
              </p>
              <ul className="space-y-4">
                {documentTypes.map((type, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <Shield className="h-32 w-32 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Notarizations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types of Notarizations We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced notaries handle all types of notarizations with
              precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notarizationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Notary Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide reliable, professional notary services with a focus on
              convenience and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-card p-6 rounded-lg shadow-sm"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Documents Notarized?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Don&apos;t wait - our professional notaries are ready to help you
            today. Walk-ins welcome or schedule an appointment for guaranteed
            service.
          </p>
          {/* FUTURE: Add a feature flag and uncomment this section */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/contact">Schedule Appointment</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
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
                    <br />
                    Sun: Closed
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
