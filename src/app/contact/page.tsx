import { InteractiveMap } from '@/components/InteractiveMap';
import { GenericHero } from '@/components/common/GenericHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { badgeData } from '@/data/badges';
import {
  Clock,
  FileText,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'Call Us',
      description: 'Speak directly with our team',
      icon: Phone,
      value: '650-961-4646',
      href: 'tel:650-961-4646',
      subtext: 'Available during business hours',
    },
    {
      title: 'Email Us',
      description: 'Send us your questions',
      icon: Mail,
      value: 'mailallcenter1@gmail.com',
      href: 'mailto:mailallcenter1@gmail.com',
      subtext: 'We respond within 24 hours',
    },
    {
      title: 'Visit Us',
      description: 'Walk-ins welcome',
      icon: MapPin,
      value: '809 Cuesta Dr, Suite B\nMountain View, CA 94040',
      href: 'https://www.google.com/maps/place/809+Cuesta+Dr+Suite+B,+Mountain+View,+CA+94040',
      subtext: 'Easy parking available',
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 5:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM PST' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const services = [
    { name: 'Live Scan Fingerprinting', available: true },
    { name: 'Notary Public Services', available: true },
    { name: 'Passport Photos', available: true },
    { name: 'Apostille Services', available: true },
    { name: 'Mail Box Rental', available: true },
    { name: 'Pack & Ship Services', available: true },
  ];

  const quickInfo = [
    {
      title: 'Walk-ins Welcome',
      description: 'No appointment necessary for most services',
      icon: Users,
    },
    {
      title: 'Same Day Service',
      description: 'Fast processing for urgent needs',
      icon: Clock,
    },
    {
      title: 'Certified Professionals',
      description: 'DOJ & FBI authorized specialists',
      icon: Shield,
    },
    {
      title: 'Mobile Services',
      description: 'On-site services available upon request',
      icon: Navigation,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        layout="centered"
        badges={badgeData.contact}
        title={
          <>
            We Assure A <span className="text-primary">Prompt Response</span>
          </>
        }
        subtitle="To All Your Enquiries"
        description="Ready to help with all your fingerprinting, notary, and documentation needs. Contact us today for fast, professional service."
        buttons={[
          {
            text: 'Call Now: 650-961-4646',
            href: 'tel:650-961-4646',
            icon: Phone,
            variant: 'default',
          },
          {
            text: 'Send Email',
            href: 'mailto:mailallcenter1@gmail.com',
            icon: Mail,
            variant: 'outline',
          },
        ]}
      />

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach us. We&apos;re here to help with all
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <a
                        href={method.href}
                        className="text-primary hover:underline font-medium whitespace-pre-line"
                        target={
                          method.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          method.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {method.value}
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {method.subtext}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Business Hours
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We&apos;re open six days a week to serve you. Walk-ins are
                welcome during all business hours.
              </p>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b last:border-b-0"
                      >
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <Clock className="h-32 w-32 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <FileText className="h-32 w-32 text-primary/60" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Services Available
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We offer a comprehensive range of services to meet all your
                documentation and identification needs.
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/about">Learn More About Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make it easy to get the services you need with professional,
              reliable support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map and Directions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Our Location
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in Mountain View with easy parking and
              accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Our Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Live Scan Solutions</p>
                    <p className="text-muted-foreground">
                      809 Cuesta Dr, Suite B<br />
                      Mountain View, CA 94040
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      ✓ Free parking available
                      <br />
                      ✓ Wheelchair accessible
                      <br />✓ Public transportation nearby
                    </p>

                    <Button asChild>
                      <Link
                        href="https://www.google.com/maps/place/809+Cuesta+Dr+Suite+B,+Mountain+View,+CA+94040"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <InteractiveMap address="809 Cuesta Dr, Suite B, Mountain View, CA 94040" />
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
            Don&apos;t wait - contact us today for fast, professional service.
            We&apos;re here to help with all your fingerprinting and
            documentation needs.
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
              <Link href="mailto:mailallcenter1@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Footer */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <a
                    href="tel:650-961-4646"
                    className="text-primary hover:underline"
                  >
                    650-961-4646
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <a
                    href="mailto:mailallcenter1@gmail.com"
                    className="text-primary hover:underline"
                  >
                    mailallcenter1@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-sm text-muted-foreground text-center">
                    809 Cuesta Dr, Suite B<br />
                    Mountain View, CA 94040
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
