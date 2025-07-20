import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, CheckCircle, Lock, Shield, Users, Zap } from 'lucide-react';

const trustIndicators = [
  {
    icon: Shield,
    title: 'DOJ Certified',
    description:
      'California Department of Justice authorized fingerprinting service provider',
    badge: 'Official',
  },
  {
    icon: Award,
    title: 'FBI Approved',
    description:
      'Federal Bureau of Investigation certified for background checks',
    badge: 'Federal',
  },
  {
    icon: Lock,
    title: 'Secure Processing',
    description: 'Encrypted data transmission and secure storage protocols',
    badge: 'Secure',
  },
  {
    icon: Zap,
    title: 'Instant Transmission',
    description:
      'Electronic fingerprint submission directly to government agencies',
    badge: 'Fast',
  },
  {
    icon: Users,
    title: '15+ Years Experience',
    description: 'Thousands of successful fingerprinting sessions completed',
    badge: 'Trusted',
  },
  {
    icon: CheckCircle,
    title: '99.9% Success Rate',
    description: 'Industry-leading acceptance rate for all submissions',
    badge: 'Reliable',
  },
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Trust LiveScan Express Hub?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a fully certified and authorized fingerprinting service
            provider with the highest standards of security and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustIndicators.map((item) => (
            <Card key={item.title} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
