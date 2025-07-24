import { GenericHero } from '@/components/common/GenericHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { badgeData } from '@/data/badges';
import {
  CheckCircle,
  FileText,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from 'lucide-react';

export default function NotaryPublicPage() {
  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description:
        'Contact us to discuss your document notarization requirements and confirm the necessary identification.',
      icon: Phone,
    },
    {
      step: 2,
      title: 'Document Preparation',
      description:
        'Ensure your documents are ready for notarization. Our team will guide you through the process.',
      icon: FileText,
    },
    {
      step: 3,
      title: 'Identity Verification',
      description:
        'Present valid identification for verification. We ensure compliance with legal standards.',
      icon: Shield,
    },
    {
      step: 4,
      title: 'Notarization',
      description:
        'Our licensed Notary Public will witness the signing of your document and provide the official seal.',
      icon: CheckCircle,
    },
  ];

  const documentTypes = [
    'Contracts: Legal agreements between two or more parties',
    'Real Estate Documents: Deeds, mortgages, and other property-related papers',
    'Affidavits: Written statements confirmed by oath or affirmation, for use as evidence in court',
    'Power of Attorney: Legal authorization for one person to act on another&apos;s behalf in legal matters',
    'Wills and Trusts: Legal documents related to the distribution of a person&apos;s estate after death',
    'Business Documents: Articles of incorporation, business licenses, and partnership agreements',
  ];

  const notarizationTypes = [
    {
      title: 'Acknowledgments',
      description:
        'Confirm the identity of the signer and their willingness to sign a document.',
      icon: Users,
    },
    {
      title: 'Jurats',
      description:
        'Requires the signer to swear or affirm that the contents of a document are true.',
      icon: FileText,
    },
    {
      title: 'Oaths and Affirmations',
      description:
        'Legally binding promises made in writing or verbally before a Notary.',
      icon: Shield,
    },
    {
      title: 'Certified Copies',
      description:
        'Notary-certified copies of original documents, ensuring that the copy is an accurate reproduction.',
      icon: CheckCircle,
    },
  ];

  const benefits = [
    { text: 'Walk-in and on-site services', icon: MapPin },
    { text: 'Licensed Notaries with extensive experience', icon: Star },
    { text: 'Confidential handling of sensitive documents', icon: Shield },
    { text: 'Serving Mountain View and the Bay Area', icon: MapPin },
    { text: 'Ensuring documents meet legal requirements', icon: CheckCircle },
  ];

  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        badges={badgeData.notaryPublic}
        title={
          <>
            Professional <span className="text-primary">Notary Public</span>{' '}
            Services in Mountain View
          </>
        }
        description="Accurate, efficient, and secure document notarization with licensed professionals. Walk-ins welcome or book online for guaranteed service."
        benefits={[
          { text: 'Same-day processing' },
          { text: 'Licensed professionals' },
          { text: 'Secure handling' },
          { text: 'Walk-ins welcome' },
        ]}
        ctaText="Please call us to schedule your appointment"
        buttons={[
          {
            text: '(650) 961-4646',
            href: 'tel:650-961-4646',
            icon: Phone,
            variant: 'outline',
          },
        ]}
        rightContent={
          <Card className="h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl mb-2">
                Why Choose Our Services?
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Professional, reliable, and convenient notary services
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {benefits.slice(0, 5).map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        }
      />

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Simple 4-Step Notary Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make document notarization straightforward and efficient with
              our proven process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="text-center h-full gap-0">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">
                      Step {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why You Need a Notary Public
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Legal documents often require notarization to ensure authenticity
              and prevent fraud. Our certified notaries handle a wide range of
              documents with precision and legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documentTypes.map((type, index) => {
              const [title, description] = type.split(': ');
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-sm"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Notarizations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types of Notarizations We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced notaries handle all types of notarizations with
              precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {notarizationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="h-full gap-0">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
