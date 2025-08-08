import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Shield, Users } from 'lucide-react';

const whyChooseUsData = [
  {
    icon: Shield,
    title: 'Certified & Trusted',
    description: 'DOJ & FBI authorized with 15+ years serving the Bay Area',
    badge: 'Official',
  },
  {
    icon: Clock,
    title: 'Fast & Convenient',
    description: 'Same-day processing with walk-ins welcome',
    badge: 'Quick',
  },
  {
    icon: Users,
    title: 'Expert Service',
    description: 'Professional staff with thousands of successful cases',
    badge: '15K+ Customers',
  },
  {
    icon: Award,
    title: 'Complete Solutions',
    description: 'All document services under one roof',
    badge: '10 Services',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Why Choose Mail All Center?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands for reliable, professional document and shipping (UPS, Fedex, DHL and USPS) services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item) => (
            <Card
              key={item.title}
              className="text-center hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-3">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
