import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, MapPin, Phone, Shield, Star } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                DOJ Certified
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                FBI Authorized
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                4.9/5 Rating
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Professional <span className="text-primary">Live Scan</span>{' '}
                Fingerprinting Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Fast, secure, and certified fingerprinting for employment,
                licensing, and legal requirements. Walk-ins welcome or book
                online.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Same-day processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">
                  No appointment needed
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">
                  Mobile services available
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">
                  Electronic transmission
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">
                  Trusted by local schools and churches
                </span>
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

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>
                  Mon-Fri: 10AM-5PM PST | Sat: 10AM-2PM PST | Sun: Closed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Multiple Bay Area Locations</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="mx-auto w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Secure & Certified
                  </h3>
                  <p className="text-muted-foreground">
                    State-of-the-art fingerprinting technology with instant
                    electronic transmission to DOJ and FBI.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">
                      Scans Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24hrs</div>
                    <div className="text-sm text-muted-foreground">
                      Average Processing
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">
                      Trusted by Schools and Churches
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
