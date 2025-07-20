import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Mail, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Live Scan',
    description:
      'Electronic fingerprinting process used to capture fingerprints digitally for background checks, employment screening, and licensing.',
  },
  {
    icon: FileText,
    title: 'Notary Public',
    description:
      'Professional notary services to authenticate documents for legal, educational, and personal purposes.',
  },
  {
    icon: CheckCircle,
    title: 'Apostille',
    description:
      'Document authentication services for international use, ensuring your documents are recognized globally.',
  },
  {
    icon: Users,
    title: 'Passport Photo',
    description:
      'Professional passport photos that meet all official requirements for passports and identification documents.',
  },
  {
    icon: Mail,
    title: 'Mail Box Rental',
    description:
      'Secure mailbox rental services for your business or personal mail handling needs.',
  },
  {
    icon: FileText,
    title: 'Pack & Ship',
    description:
      'Reliable packing and shipping solutions for all your document and package delivery needs.',
  },
];

export const DetailedServicesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
