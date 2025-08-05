import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const trustBadges = [
  { icon: Shield, text: 'DOJ Certified', variant: 'secondary' as const },
  { icon: Award, text: 'FBI Approved', variant: 'secondary' as const },
  { icon: Star, text: '4.9/5 Rating', variant: 'outline' as const },
];

const keyBenefits = [
  { text: 'Same-day processing', icon: Zap },
  { text: 'Walk-ins welcome', icon: Users },
  { text: 'Electronic transmission', icon: CheckCircle },
  { text: 'Trusted by 15,000+ customers', icon: Award },
];

const quickStats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Satisfied Customers', value: '15K+' },
  { label: 'Services Offered', value: '10+' },
  { label: 'Bay Area Locations', value: '3+' },
];

export const NewHeroSection = () => {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100/20 dark:bg-grid-slate-900/20 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.2),transparent)]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge, index) => (
                <Badge
                  key={index}
                  variant={badge.variant}
                  className="px-3 py-1 text-sm"
                >
                  <badge.icon className="w-3 h-3 mr-1" />
                  {badge.text}
                </Badge>
              ))}
            </div>

            {/* Main Headline - More Compact */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Your One-Stop{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Document Center
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                From fingerprinting to notary services, we handle all your
                document needs quickly and professionally in the Bay Area.
              </p>
            </div>

            {/* Key Benefits - Compact List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm"
                >
                  <benefit.icon className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-6" asChild>
                <Link href="tel:(650)961-4646">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (650) 961-4646
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-6"
                asChild
              >
                <Link href="/contact">
                  <MapPin className="mr-2 h-4 w-4" />
                  Find Location
                </Link>
              </Button>
            </div>

            {/* Hours */}
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Fri: 10AM-5PM | Sat: 10AM-2PM</span>
            </div>
          </div>

          {/* Right Side - Our Services Grid */}
          <div className="space-y-6">
            {/* Services Header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Our Services</h3>
              <p className="text-sm text-muted-foreground">
                Complete business solutions in one convenient location
              </p>
            </div>

            {/* Services Grid - Compact Version */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                {
                  name: 'Live & Ink Fingerprinting',
                  icon: '🔍',
                  href: '/services/live-scan',
                },
                {
                  name: 'Notary Public',
                  icon: '📋',
                  href: '/services/notary',
                },
                {
                  name: 'Apostille Services',
                  icon: '✅',
                  href: '/services/apostille',
                },
                {
                  name: 'Passport Photos',
                  icon: '📷',
                  href: '/services/passport-photos',
                },
                {
                  name: 'Mailbox Rental',
                  icon: '📫',
                  href: '/services/mailbox-rental',
                },
                {
                  name: 'Packing & Shipping',
                  icon: '📦',
                  href: '/pack-ship/packing',
                },
                {
                  name: 'Printing',
                  icon: '🖨️',
                  href: '/printing',
                },
                {
                  name: 'Fax & Copy',
                  icon: '📄',
                  href: '/printing',
                },
                {
                  name: 'Lamination',
                  icon: '🛡️',
                  href: '/printing',
                },
              ].map((service, index) => (
                <Link key={index} href={service.href} className="group block">
                  <Card className="p-3 h-full transition-all duration-200 hover:shadow-md hover:scale-105 bg-card/50 hover:bg-card border-muted hover:border-primary/20">
                    <CardContent className="p-0 text-center">
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <h4 className="text-xs font-medium leading-tight text-foreground group-hover:text-primary">
                        {service.name}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Quick Stats Row */}
            <Card className="p-4 bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {quickStats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-lg font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
