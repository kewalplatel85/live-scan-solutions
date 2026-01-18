import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Award,
  Camera,
  ExternalLink,
  FileText,
  Fingerprint,
  Mailbox,
  Package,
  Plane,
  Printer,
} from 'lucide-react';
import Link from 'next/link';

const servicesData = [
  {
    icon: Fingerprint,
    title: 'Live Scan Fingerprinting',
    description:
      'DOJ & FBI authorized electronic fingerprinting for employment, licensing, and background checks. Listed on California DOJ website. Same-day processing with quick turnaround times.',
    href: '/Live-Scan-Fingerprinting',
    badge: 'DOJ Listed',
    keywords: 'Live Scan, Electronic Fingerprinting, Background Check',
  },
  {
    icon: FileText,
    title: 'Notary Public Services',
    description:
      'Certified notary public services for all your document authentication needs. Loan signings, legal documents, affidavits, and more. Professional, reliable, and convenient.',
    href: '/notary',
    badge: 'Certified',
    keywords: 'Notary Public, Document Authentication, Legal Services',
  },
  {
    icon: Award,
    title: 'Apostille Services',
    description:
      'Complete apostille and document legalization services for international use. California Secretary of State apostille processing with fast turnaround and expert guidance.',
    href: '/apostille',
    badge: 'International',
    keywords: 'Apostille, Document Legalization, International Documents',
  },
  {
    icon: Camera,
    title: 'Passport Photos',
    description:
      'Professional passport and ID photos meeting all official requirements. US passports, visas, green cards, and international travel documents. Instant printing available.',
    href: '/passport-photos',
    badge: 'Same Day',
    keywords: 'Passport Photos, ID Photos, Visa Photos',
  },
  {
    icon: Mailbox,
    title: 'Mailbox Rental',
    description:
      'Secure mailbox rental with a real street address for your business or personal use. Package acceptance, mail forwarding, and professional business presence.',
    href: '/mailbox-rental',
    badge: 'Secure',
    keywords: 'Mailbox Rental, Virtual Address, Mail Services',
  },
  {
    icon: Package,
    title: 'Pack & Ship',
    description:
      'Full-service packing and shipping solutions for all carriers. FedEx, UPS, USPS, DHL services with expert packaging, international shipping, and freight services.',
    href: '/pack-ship',
    badge: 'All Carriers',
    keywords: 'Shipping, Packing Services, FedEx, UPS, USPS, DHL',
  },
  {
    icon: Printer,
    title: 'Printing Services',
    description:
      'Professional printing services for business and personal needs. Color and black & white printing, copying, binding, laminating, shredding, and document finishing services.',
    href: '/printing',
    badge: 'Professional',
    keywords: 'Printing, Copying, Shredding, Document Services',
  },
  {
    icon: Plane,
    title: 'TSA PreCheck® Enrollment by IDEMIA',
    description:
      'Official TSA PreCheck® enrollment center. Expedite your airport security screening with TSA PreCheck. Enjoy faster, more convenient travel through dedicated screening lanes at 200+ airports.',
    href: 'https://tsaenrollmentbyidemia.tsa.dhs.gov/',
    badge: 'TSA Authorized',
    keywords: 'TSA PreCheck, Trusted Traveler, Airport Security, IDEMIA',
    isExternal: true,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="text-sm px-4 py-1">
              Professional Business Services
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Business Services in Mountain View
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From Live Scan fingerprinting to notary services, apostille,
            passport photos, and shipping solutions – we&apos;re your one-stop
            center for all business and personal document needs in the Bay Area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {servicesData.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-3">
                  {service.description}
                </CardDescription>
                <div className="text-xs text-muted-foreground/70 italic border-t pt-3 mt-2">
                  {service.keywords}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {service.isExternal ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Enroll Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                ) : (
                  <Link href={service.href}>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Need multiple services? We&apos;re here to help with all your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us">
              <Button size="lg" className="min-w-[200px]">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/about-us">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Learn About Us
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Walk-ins welcome • Same-day service available • Serving all Bay Area
            cities
          </p>
        </div>
      </div>
    </section>
  );
};
