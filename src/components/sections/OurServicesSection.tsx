import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Camera,
  CheckCircle,
  FileText,
  FileX,
  Fingerprint,
  Mail,
  Package,
  Printer,
  Scissors,
  Shield,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Fingerprint,
    title: 'Live Scan & Ink Fingerprinting',
    description:
      'Electronic & traditional fingerprinting for background checks',
    href: '/live-scan',
  },
  {
    icon: FileText,
    title: 'Notary Public',
    description: 'Professional document notarization services',
    href: '/notary',
  },
  {
    icon: CheckCircle,
    title: 'Apostille Services',
    description: 'Document authentication for international use',
    href: '/apostille',
  },
  {
    icon: Camera,
    title: 'Passport Photos',
    description: 'Professional photos meeting all official requirements',
    href: '/passport-photos',
  },
  {
    icon: Mail,
    title: 'Mailbox Rental',
    description: 'Secure mailbox services for business & personal use',
    href: '/mailbox-rental',
  },
  {
    icon: Package,
    title: 'Packing & Shipping',
    description: 'Professional packing & reliable shipping solutions',
    href: '/pack-ship',
  },
  {
    icon: Printer,
    title: 'Printing Services',
    description: 'High-quality printing for documents & business materials',
    href: '/printing',
  },
  {
    icon: FileX,
    title: 'Fax & Copy',
    description: 'Convenient fax & copy services for documents',
    href: '/printing',
  },
  {
    icon: Shield,
    title: 'Lamination',
    description: 'Professional document protection & preservation',
    href: '/printing',
  },
  {
    icon: Scissors,
    title: 'Shredding',
    description: 'Secure document destruction & confidential handling',
    href: '/printing',
  },
];

export const OurServicesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete business solutions in one convenient location.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20 h-full">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-xl p-6 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-xl font-bold mb-3">Need Multiple Services?</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Save time and get everything done in one visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button className="w-full sm:w-auto">Contact Us Today</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="w-full sm:w-auto">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
