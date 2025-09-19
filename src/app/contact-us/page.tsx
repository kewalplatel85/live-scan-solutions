import { InteractiveMap } from '@/components/InteractiveMap';
import SEOGraph, {
  buildBreadcrumb,
  buildWebPage,
  BUSINESS_NODE,
  WEBSITE_NODE,
} from '@/components/SEOGraph';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SITE_URL } from '@/lib/config';
import { Calendar, Car, Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Mail All Center | Location & Hours | Mountain View, CA',
  description:
    'Contact Mail All Center in Mountain View, CA. Located at 809 Cuesta Dr, Suite B. Phone: (650) 961-4646. Hours: Mon-Fri 10AM-5PM, Sat 10AM-2PM. Serving entire Bay Area with professional fingerprinting services. Supporting school districts like Mountain View, Palo Alto, Sunnyvale, Cupertino, and organizations like Boy Scouts and AYSO.',
  keywords:
    'contact Mail All Center, mountain view fingerprinting location, live scan hours, fingerprinting near me, 809 cuesta dr mountain view, bay area fingerprinting contact, live scan phone number, Mountain View School District, Los Altos School District, Sunnyvale School District, Cupertino School District, Menlo Park School District, Palo Alto School District, Santa Clara School District, San Jose School District, Boys Scouts, Sunnyvale Boy Scouts, Redwood City School District, Los Gatos School District, AYSO',
  openGraph: {
    type: 'website',
    title: 'Contact Mail All Center | Location & Hours',
    description:
      'Contact Mail All Center in Mountain View, CA. Phone: (650) 961-4646. Professional fingerprinting services.',
    url: `${SITE_URL}/contact-us`,
  },
  alternates: {
    canonical: `${SITE_URL}/contact-us`,
  },
};

const url = `${SITE_URL}/contact-us`;
const nodes = [
  WEBSITE_NODE,
  BUSINESS_NODE,
  buildWebPage({
    url,
    title: 'Contact Mail All Center | Mountain View, CA',
    description:
      'Call, email, or visit us. See hours, directions, and parking info.',
  }),
  buildBreadcrumb([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Contact Us', url },
  ]),
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SEOGraph id="ld-contact" nodes={nodes} />
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Contact{' '}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Us
            </span>{' '}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? We&apos;re here to help. Reach
            out to us through any of the methods below, and our team will
            respond as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information Card */}
          <Card className="border-0 from-background via-background backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    Email
                  </h3>
                  <a
                    href="mailto:info@mailallcenter.com"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    info@mailallcenter.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    Phone
                  </h3>
                  <a
                    href="tel:+16509614646"
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  >
                    +1 (650) 961-4646
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available during business hours
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 px-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">Mon - Fri</span>
                      <span className="text-primary font-semibold">
                        10AM - 5PM PST
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">Saturday</span>
                      <span className="text-primary font-semibold">
                        10AM - 2PM PST
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground font-semibold">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Information Card */}
          <Card className="border-0 from-background via-background backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                Visit Our Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    Address
                  </h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=809+Cuesta+Dr+Suite+B,+Mountain+View,+CA+94040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors leading-relaxed cursor-pointer"
                  >
                    <p className="font-medium">809 Cuesta Dr, Suite B</p>
                    <p className="font-medium">Mountain View, CA 94040</p>
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click to view on map
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <Car className="h-5 w-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    Parking
                  </h3>
                  <p className="text-muted-foreground">
                    Ample free parking available in the business complex.
                  </p>
                </div>
              </div>

              {/* Appointments */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                  <Calendar className="h-5 w-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    Appointments
                  </h3>
                  <p className="text-muted-foreground">
                    Walk-ins welcome. Appointments can also be scheduled in
                    advance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Need Help Section */}
        <Card className="mb-16 border-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re an employer, individual, or agency looking for
              fingerprinting services, feel free to get in touch with us.
              We&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-lg font-semibold"
              >
                <Link href="tel:+16509614646">
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-lg font-semibold border-2"
              >
                <Link href="mailto:info@mailallcenter.com">
                  <Mail className="mr-3 h-5 w-5" />
                  Send Us a Message
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <Card className="border-0 from-background via-background backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold">
              Find Us on the Map
            </CardTitle>
            <p className="text-muted-foreground mt-2 mb-4">
              Conveniently located in Mountain View with easy access and free
              parking
            </p>
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-lg font-semibold mx-auto"
            >
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=809+Cuesta+Dr+Suite+B,+Mountain+View,+CA+94040"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-3 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <InteractiveMap address="809 Cuesta Dr, Suite B, Mountain View, CA 94040" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
