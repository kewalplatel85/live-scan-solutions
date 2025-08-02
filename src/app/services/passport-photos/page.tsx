import { GenericHero } from '@/components/common/GenericHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Camera,
  CheckCircle,
  Clock,
  Globe,
  MapPin,
  Phone,
  Shield,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function PassportPhotosPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        title="Professional Passport Photos"
        subtitle="Official Passport & ID Photography"
        description="Get professional passport photos that meet all official requirements for US passports, visas, and international identification documents. Same-day service available with guaranteed acceptance."
        ctaText="Visit us for your passport photos today"
        buttons={[
          {
            text: '(650) 961-4646',
            href: 'tel:650-961-4646',
            icon: Phone,
            variant: 'outline',
            size: 'lg',
          },
        ]}
        quickInfo={[
          {
            icon: Clock,
            text: 'Mon-Fri: 10AM-5PM PST | Sat: 10AM-2PM PST | Sun: Closed',
          },
          {
            icon: MapPin,
            text: 'Bay Area Locations',
          },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-6">
            <Card className="relative p-4 md:p-6">
              <Badge
                variant="outline"
                className="absolute -top-3 left-4 bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900"
              >
                Guaranteed Acceptance
              </Badge>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">
                  Photo Requirements Met
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Camera className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">
                      US State Department compliant
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">International standards</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Professional quality</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        }
      />

      {/* Service Details Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Passport Photo Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide high-quality passport photos that meet all official
              requirements for passports, visas, and identification documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
                  <Camera className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">Official Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Photos taken to exact US State Department specifications for
                  passports and other official documents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    2x2 inch format
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Proper lighting & background
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Correct head positioning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Same-Day Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get your passport photos printed and ready within minutes. No
                  appointment necessary for walk-in service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Instant printing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    No appointment needed
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Quick turnaround
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:bg-purple-950 dark:border-purple-800">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">All Ages Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized service for adults, children, and infants with
                  patient, professional photographers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Adult passport photos
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Child & infant photos
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Patient service
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Types Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Photo Types We Provide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional photography services for various official documents
              and identification needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'US Passport',
                description:
                  'Standard 2x2 inch photos for US passport applications',
                icon: Globe,
              },
              {
                title: 'Visa Photos',
                description: 'Country-specific visa application photos',
                icon: Camera,
              },
              {
                title: 'ID Cards',
                description: 'State ID and driver license photos',
                icon: Shield,
              },
              {
                title: 'Other Documents',
                description: 'Professional photos for various official uses',
                icon: Users,
              },
            ].map((type, index) => (
              <Card key={index} className="text-center p-4">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Passport Photos Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit our location for professional passport photos. No
              appointment necessary - walk-ins welcome during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="tel:650-961-4646">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (650) 961-4646
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">View Locations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
