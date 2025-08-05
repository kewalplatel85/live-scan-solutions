import { GenericHero } from '@/components/common/GenericHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { badgeData } from '@/data/badges';
import { CheckCircle, FileText, Phone, Shield, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Notary Public Services Bay Area | Mail All Center | Licensed Notary Near Me',
  description:
    'Mail All Center offers professional notary public services in Mountain View, CA and entire Bay Area. Licensed notaries for contracts, real estate, wills, affidavits, power of attorney, loan documents. Walk-ins welcome, same-day service. Mobile notary available. Serving Palo Alto, Sunnyvale, San Jose, Cupertino, Fremont. Call (650) 961-4646.',
  keywords:
    'notary public mountain view, notary services bay area, notary near me, notary public near me, Mail All Center notary, document notarization mountain view, licensed notary mountain view, mobile notary mountain view, mobile notary bay area, contract notarization, real estate notary mountain view, will notarization, affidavit notary, same day notary, power of attorney notarization, loan document notary, notary public palo alto, notary public sunnyvale, notary public san jose, notary public cupertino, notary public fremont, notary public santa clara, notary services silicon valley, bay area notary services, peninsula notary services, south bay notary',
  openGraph: {
    title: 'Notary Public Services Mountain View | Mail All Center',
    description:
      'Mail All Center provides professional notary public services in Mountain View, CA. Licensed notaries, walk-ins welcome, same-day service.',
    url: 'https://www.mailallcenter.com/notary',
  },
  alternates: {
    canonical: 'https://www.mailallcenter.com/notary',
  },
};

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
    { text: 'Same-day processing' },
    // { text: 'Licensed professionals' },
    // { text: 'Secure handling' },
    { text: 'Walk-ins welcome' },
    // { text: 'Walk-in and on-site services' },
    { text: 'Licensed Notaries with extensive experience' },
    { text: 'Confidential handling of sensitive documents' },
    { text: 'Serving Mountain View and the Bay Area' },
    { text: 'Ensuring documents meet legal requirements' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        layout="split-70-30"
        badges={badgeData.notaryPublic}
        title={
          <>
            Professional <span className="text-primary">Notary Public</span>{' '}
            Services in Mountain View
          </>
        }
        description="Accurate, efficient, and secure document notarization with licensed professionals. Walk-ins welcome or book online for guaranteed service."
        benefits={benefits}
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
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">Notarization Types</CardTitle>
              <p className="text-xs text-muted-foreground">
                We handle all types with precision
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {notarizationTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium text-foreground leading-tight">
                          {type.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t">
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground mb-1">
                    Need Service Today?
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Walk-ins welcome • Same-day processing
                  </div>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {documentTypes.map((type, index) => {
              const [title, description] = type.split(': ');
              return (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-card p-4 rounded-lg shadow-sm"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 text-sm">
                      {title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-tight">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
