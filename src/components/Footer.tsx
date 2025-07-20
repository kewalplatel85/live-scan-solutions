import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Live Scan Fingerprinting', href: '/livescan' },
    { name: 'Notary Public', href: '/notary-public' },
    { name: 'Apostille Services', href: '/apostille' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    L
                  </span>
                </div>
                <span className="font-bold text-xl">Live Scan Solutions</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                We are an officially certified fingerprinting service provider
                agency authorized by the Department of Justice and FBI.
              </p>
              <div className="flex flex-col space-y-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="tel:650-961-4646">
                    <Phone className="mr-2 h-4 w-4" />
                    650-961-4646
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="mailto:mailallcenter1@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    mailallcenter1@gmail.com
                  </Link>
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-semibold mb-4 flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>10AM - 5PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10AM - 2PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Live Scan Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
