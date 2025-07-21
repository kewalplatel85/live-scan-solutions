import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { badgeData } from '@/data/badges';
import {
  Award,
  CheckCircle,
  Clock,
  Lock,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-primary/5 via-white to-primary/3">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100/20 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="absolute top-32 left-16 w-16 h-16 bg-primary/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-blue-400/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-12 items-center">
          {/* Left Content - 4/7 of the space on desktop, full width on mobile */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            {/* Badge Section - Only Original Service Badges */}
            <div className="space-y-3">
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
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Professional{' '}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                  Live Scan
                </span>{' '}
                Fingerprinting Services
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl">
                Fast, secure, and certified fingerprinting for employment,
                licensing, and legal requirements. Walk-ins welcome or book
                online.
              </p>
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
                  <benefit.icon className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800">
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
          <div className="lg:col-span-3 flex items-center justify-center mt-8 lg:mt-0">
            <Card className="p-4 lg:p-6 bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-sm w-full max-w-md">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3">Why Choose Us?</h3>
                  {/* Rating moved to top of right side */}
                  <Badge className="flex items-center gap-1 px-3 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 text-sm mb-4 mx-auto w-fit">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </div>
                    4.9/5 Rating
                  </Badge>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: Shield,
                      title: 'DOJ Certified',
                      description:
                        'California Department of Justice authorized fingerprinting service provider',
                      color: 'text-blue-600',
                      badge: 'Official',
                    },
                    {
                      icon: Award,
                      title: 'FBI Approved',
                      description:
                        'Federal Bureau of Investigation certified for background checks',
                      color: 'text-purple-600',
                      badge: 'Federal',
                    },
                    {
                      icon: Lock,
                      title: 'Secure Processing',
                      description: 'Encrypted data transmission protocols',
                      color: 'text-green-600',
                    },
                    {
                      icon: Zap,
                      title: 'Instant Transmission',
                      description: 'Electronic submission directly to agencies',
                      color: 'text-orange-600',
                    },
                  ].map((indicator, index) => {
                    const Icon = indicator.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className={`h-4 w-4 ${indicator.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm text-slate-900">
                              {indicator.title}
                            </span>
                            {indicator.badge && (
                              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                                {indicator.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600">
                            {indicator.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Simple Stats - Remove Duplicates */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex justify-center gap-6 text-center text-xs text-slate-600">
                    <div>
                      <div className="font-semibold text-sm text-primary">
                        15K+
                      </div>
                      <div>Customers</div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary">
                        99.9%
                      </div>
                      <div>Success Rate</div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary">
                        15+
                      </div>
                      <div>Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
