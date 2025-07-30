import { ServicesCarousel } from '@/components/ServicesCarousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { badgeData } from '@/data/badges';
import {
  Award,
  CheckCircle,
  Clock,
  Lock,
  MapPin,
  Phone,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[40vh] bg-gradient-to-b from-background via-background to-primary/10 z-0">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-100/20 dark:bg-grid-slate-900/20 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="absolute top-32 left-16 w-16 h-16 bg-primary/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-primary/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12 overflow-hidden z-10">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 md:gap-6 lg:gap-12 items-center min-w-0">
          {/* Left Content - 4/7 of the space on desktop, full width on mobile */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6 text-center lg:text-left">
            {/* Badge Section - Only Original Service Badges */}
            <div className="space-y-2 md:space-y-3">
              {/* Filter out DOJ, FBI, and Rating badges */}
              <div className="flex flex-wrap gap-2">
                {badgeData.liveScanHome
                  .filter(
                    (badge) =>
                      !badge.text.includes('DOJ') &&
                      !badge.text.includes('FBI') &&
                      !badge.text.includes('Rating')
                  )
                  .map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <Badge
                        key={index}
                        variant={badge.variant || 'default'}
                        className="flex items-center gap-2 px-3 py-1"
                      >
                        <Icon
                          className={`h-4 w-4 ${badge.iconClassName || ''}`}
                        />
                        {badge.text}
                      </Badge>
                    );
                  })}
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                We simplify{' '}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                  Live Scan, Notary Public, and Apostille services
                </span>{' '}
                for busy professionals.
              </h1>

              {/* <p className="text-lg text-muted-foreground max-w-2xl">
                We simplify Live Scan, Notary Public, and Apostille services for
                busy professionals.
              </p> */}
            </div>

            {/* Benefits - Compact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { text: 'Same-day processing', icon: Zap },
                { text: 'No appointment needed', icon: Users },
                { text: 'Mobile services available', icon: CheckCircle },
                { text: 'Electronic transmission', icon: Lock },
                { text: 'Trusted by local schools and churches', icon: Award },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm"
                >
                  <benefit.icon className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="font-medium text-foreground">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Please call us to schedule your appointment
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-base lg:text-lg px-6 py-3 w-full sm:w-auto"
                  asChild
                >
                  <Link href="tel:(650)961-4646">
                    <Phone className="mr-2 h-4 w-4" />
                    (650) 961-4646
                  </Link>
                </Button>
              </div>

              {/* Hours and Location Info */}
              <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>Mon-Fri: 10AM-5PM | Sat: 10AM-2PM | Sun: Closed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>Multiple Bay Area Locations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3/7 of space, Centered */}
          <div className="lg:col-span-3 flex items-center justify-center mt-6 md:mt-8 lg:mt-0 overflow-hidden">
            <div className="w-full max-w-full px-4 sm:px-0">
              <ServicesCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
