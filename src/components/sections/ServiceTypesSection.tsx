import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  CalendarCheck,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  Package,
  Phone,
  Smartphone,
  Stamp,
  Users,
} from 'lucide-react';

const primaryServices = [
  {
    icon: Users,
    title: 'Personal Background Checks',
    description:
      'Individual background screening for employment, licensing, and personal verification',
    features: ['DOJ Clearance', 'FBI Criminal History', 'Personal Records'],
    pricing: 'From $35',
    popular: false,
  },
  {
    icon: Building2,
    title: 'Employment Screening',
    description:
      'Comprehensive employee background verification for businesses of all sizes',
    features: ['Pre-employment', 'Ongoing Monitoring', 'Bulk Processing'],
    pricing: 'From $45',
    popular: true,
  },
  {
    icon: Clock,
    title: 'Express Processing',
    description:
      'Priority fingerprinting with expedited processing and same-day service',
    features: ['Same-Day Service', 'Priority Queue', 'Rush Processing'],
    pricing: 'From $75',
    popular: false,
  },
];

const serviceDeliveryMethods = [
  {
    icon: Users,
    title: 'Walk-In Service',
    description:
      'Visit us during office hours without an appointment for quick and convenient service.',
    badge: 'No Appointment',
  },
  {
    icon: CalendarCheck,
    title: 'Scheduled Appointments',
    description:
      'Book private appointments for your convenience, including after-hours availability.',
    badge: 'Private',
  },
  {
    icon: Smartphone,
    title: 'Mobile Service',
    description:
      'On-site fingerprinting and notary services at your location for groups and businesses.',
    badge: 'On-Site',
  },
];

const additionalServices = [
  {
    icon: Stamp,
    title: 'Notary Services',
    description:
      'Professional document notarization with experienced certified notaries.',
  },
  {
    icon: CheckCircle,
    title: 'Apostille Services',
    description:
      'Document authentication for international use with fast, reliable processing.',
  },
  {
    icon: FileText,
    title: 'Passport Services',
    description:
      'Complete passport application and renewal assistance for hassle-free travel.',
  },
  {
    icon: Package,
    title: 'Pack & Ship',
    description:
      'Reliable packing and shipping solutions for documents and packages.',
  },
];

export const ServiceTypesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fingerprinting Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional LiveScan fingerprinting solutions with competitive
            pricing and industry-leading accuracy rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {primaryServices.map((service) => (
            <Card
              key={service.title}
              className={`relative transition-all duration-200 hover:shadow-lg ${
                service.popular
                  ? 'ring-2 ring-primary/20 shadow-lg'
                  : 'hover:shadow-md'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* FUTURE: add feature flag and uncomment this section */}
                {/* <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {service.pricing}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      per session
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    variant={service.popular ? 'default' : 'secondary'}
                  >
                    Schedule Now
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Additional Services
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete business solutions beyond fingerprinting to serve all your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {additionalServices.map((service) => (
            <Card
              key={service.title}
              className="text-center hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-base font-semibold mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Delivery Options */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            How We Serve You
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the service option that best fits your schedule and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {serviceDeliveryMethods.map((method) => (
            <Card
              key={method.title}
              className="text-center h-full hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold mb-1">{method.title}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {method.badge}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us today to schedule your fingerprinting appointment or
              learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button size="lg" variant="secondary">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
