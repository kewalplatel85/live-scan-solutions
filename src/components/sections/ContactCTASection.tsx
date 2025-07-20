import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our experts',
    action: '(555) 123-4567',
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us your questions',
    action: 'info@livescanexpress.com',
    primary: false,
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Walk-in service available',
    action: 'Get Directions',
    primary: false,
  },
  {
    icon: Calendar,
    title: 'Schedule Online',
    description: 'Book your appointment',
    action: 'Book Now',
    primary: true,
  },
];

const businessHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'By Appointment Only' },
];

export const ContactCTASection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contact LiveScan Express Hub today to schedule your fingerprinting
            appointment. Our certified professionals are ready to assist you
            with fast, secure, and reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method) => (
                <Card
                  key={method.title}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    method.primary
                      ? 'ring-2 ring-primary/20 bg-primary/5'
                      : 'hover:shadow-md'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          method.primary
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        <method.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <p
                          className={`text-sm font-medium ${
                            method.primary ? 'text-primary' : 'text-foreground'
                          }`}
                        >
                          {method.action}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                    >
                      <span className="text-sm font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <MessageCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      Emergency and after-hours appointments available upon
                      request. Contact us for special scheduling needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Fast, Secure, Professional
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust LiveScan Express
              Hub for their fingerprinting needs. Get started today with our
              certified professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Online
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span>Walk-ins Welcome</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Mobile Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
