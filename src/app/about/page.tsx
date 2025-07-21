import { GenericHero } from '@/components/common/GenericHero';
import { CTASection } from '@/components/sections/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { aboutData } from '@/data/about';
import { badgeData } from '@/data/badges';
import {
  CheckCircle,
  Clock,
  FileText,
  Heart,
  Phone,
  Shield,
  Target,
  Users,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <GenericHero
        badges={badgeData.about}
        title={
          <>
            {'We Care About You and Want to '}
            <span className="text-primary">Help</span>
          </>
        }
        description="We are an officially certified fingerprinting service provider agency authorized by the Department of Justice and FBI."
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
          <div className="bg-primary/10 rounded-2xl p-8 flex items-center justify-center h-96">
            <Heart className="h-32 w-32 text-primary/60" />
          </div>
        }
      />

      {/* Services Overview */}
      {/* <Section
        title="Services We Offer"
        description="Comprehensive solutions for all your documentation and identification needs."
        background="default"
        padding="lg"
      >
        <FeatureCards
          items={aboutData.services.map((service) => ({
            title: service.name,
            icon: service.icon,
          }))}
          layout="compact"
          columns="services"
          size="sm"
          variant="minimal"
        />
      </Section> */}

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your documentation and
              identification needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aboutData.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {service.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Live Scan Solutions is part of{' '}
                  <a
                    href="https://www.mailallcenter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Mail All Center
                  </a>
                  , offering both In-Office and Onsite fingerprinting services
                  to Northern California and surrounding areas. Whether you
                  prefer the convenience of walking in without an appointment or
                  having our services brought to your doorstep, we&apos;ve got
                  you covered.
                </p>
                <p>
                  Our fingerprinting services include both Computer-based and
                  Ink (card) based options, ensuring flexibility to meet your
                  needs. Our top priority is to save you time while providing
                  fingerprinting services of the highest quality and security.
                </p>
                <p>
                  We strive to offer utmost convenience and ease for all your
                  live scan fingerprint service requirements.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <FileText className="h-32 w-32 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <Users className="h-32 w-32 text-primary/60" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  At our company, safety and security are paramount. Founded to
                  meet the growing demand for top-tier Peer Service Providers
                  (PSP) in California, we prioritize your privacy and peace of
                  mind.
                </p>
                <p>
                  Our Department of Justice Certified Fingerprint Specialists
                  leverage their extensive training and expertise to ensure
                  swift and accurate capture of your information.
                </p>
                <p>
                  With over 20 years of combined experience in fingerprinting,
                  our dedicated staff is committed to delivering prompt and
                  convenient service to our community, neighbors, partners, and
                  employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and how we serve our
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We Do
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  As an accredited Department of Justice and FBI certified
                  fingerprinting service provider, our agency specializes in
                  electronically capturing and submitting fingerprints for
                  various purposes including licensure, certification,
                  volunteering, employment, and more.
                </p>
                <p>
                  Additionally, we offer mobile Live Scan fingerprinting
                  services for your convenience. Through our direct partnership
                  with the Department of Justice, we securely transmit your
                  fingerprints and associated data within seconds, expediting
                  the process.
                </p>
                <p>
                  With multiple &quot;Live Scan&quot; machines strategically
                  located throughout Northern California, we can accommodate
                  group or individual needs seven days a week.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <Shield className="h-32 w-32 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
              <Target className="h-32 w-32 text-primary/60" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Do It
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  We employ state-of-the-art technology for capturing
                  fingerprint information, ensuring precision and efficiency.
                  Our equipment is expertly manufactured and maintained to
                  uphold the highest standards of performance.
                </p>
                <p>
                  Accuracy is our foremost priority, and our team of Fingerprint
                  Specialists, certified by the California Department of
                  Justice, undergo rigorous training to ensure meticulous data
                  collection.
                </p>
                <p>
                  Adhering strictly to DOJ guidelines, our specialists process
                  fingerprint information with utmost care and attention to
                  detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Capabilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Live Scan Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the fingerprinting
              industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aboutData.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Contact Footer */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:650-961-4646"
                    className="text-primary hover:underline"
                  >
                    650-961-4646
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:mailallcenter1@gmail.com"
                    className="text-primary hover:underline"
                  >
                    mailallcenter1@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri: 10AM-5PM PST
                    <br />
                    Sat: 10AM-2PM PST
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
