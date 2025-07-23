import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Monitor, Shield } from 'lucide-react';

export const HowWorksSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Our Technology Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced technology and certified processes ensure secure, accurate,
            and reliable service delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Digital Live Scan Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our state-of-the-art live scan fingerprinting system digitally
                captures your fingerprints and immediately transmits them
                electronically to the California State Department of Justice in
                Sacramento.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Apostille Authentication Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide fast, reliable apostille services to authenticate
                documents for international use. Our expert team ensures
                accurate processing for legal, educational, and personal
                documents.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Secure Document Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All documents are handled with the highest security standards.
                Our certified processes ensure privacy protection and compliance
                with all federal and state regulations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
