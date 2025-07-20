import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield } from 'lucide-react';

export const DocumentsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Documents</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Computer Based Live Scan Fingerprint</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our state of the art live scan fingerprinting system can
                digitally scan and capture your fingerprints, and then
                immediately transmit them electronically to the California State
                Department of Justice in Sacramento.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Apostille</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide fast, reliable apostille services to authenticate
                documents for international use. Our expert team ensures
                accurate processing for legal, educational, and personal
                documents, simplifying the complexities of global documentation
                requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
