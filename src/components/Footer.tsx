import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Clock, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Live Scan', href: '/Live-Scan-Fingerprinting' },
    { name: 'Notary Public', href: '/notary' },
    { name: 'Apostille', href: '/apostille' },
    { name: 'Passport Photos', href: '/passport-photos' },
    { name: 'Mailbox Rental', href: '/mailbox-rental' },
    { name: 'Pack & Ship', href: '/pack-ship' },
    { name: 'Printing', href: '/printing' },
  ],
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export const Footer = () => {
  return (
    <footer
      aria-label="Site footer"
      className="bg-footer text-footer-foreground"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Logo
                  size="md"
                  showText={true}
                  animated
                  variant="gradient"
                  textClassName="!text-footer-foreground !bg-none [-webkit-text-fill-color:white]"
                />
              </div>
              <p className="text-sm text-footer-muted mb-4">
                Mail All Center is listed on the California DOJ website as an
                approved Live Scan fingerprinting location. Serving the Bay Area
                for over 15 years with professional business services.
              </p>
              <div className="mb-4">
                <p className="text-xs text-footer-muted mb-2">
                  <strong className="text-footer-foreground">Address:</strong>{' '}
                  809 Cuesta Dr, Suite B, Mountain View, CA 94040
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-footer-border bg-footer-border/30 hover:bg-footer-border/60 text-footer-foreground hover:text-white justify-start"
                  asChild
                >
                  <Link href="tel:650-961-4646">
                    <Phone className="mr-2 h-4 w-4" />
                    650-961-4646
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-footer-border bg-footer-border/30 hover:bg-footer-border/60 text-footer-foreground hover:text-white justify-start"
                  asChild
                >
                  <Link href="mailto:info@mailallcenter.com">
                    <Mail className="mr-2 h-4 w-4" />
                    info@mailallcenter.com
                  </Link>
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-footer-foreground mb-4">
                Services
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-footer-muted hover:text-footer-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-footer-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-footer-muted hover:text-footer-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-semibold text-footer-foreground mb-4 flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-footer-muted">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-footer-foreground">10AM - 6PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-footer-foreground">10AM - 2PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-footer-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-border" />

        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
            <div className="text-center space-y-2">
              <p className="text-sm text-footer-muted">
                © {new Date().getFullYear()} Mail All Center. All rights
                reserved.
              </p>
              {/* Bumped from /60 to text-footer-muted for WCAG AA compliance */}
              <p className="text-xs text-footer-muted">
                Mail All Center is a private business and is not affiliated with
                any government agency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
