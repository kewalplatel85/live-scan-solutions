import { GenericHero } from '@/components/common/GenericHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'USPS Shipping Services | Live Scan Solutions Mountain View',
  description:
    'Professional USPS shipping services in Mountain View, CA. Affordable postal delivery with tracking. Serving Bay Area businesses and individuals.',
};

export default function USPSPage() {
  return (
    <div>
      <GenericHero
        title="USPS Shipping Services"
        subtitle="Affordable USPS postal services with reliable delivery and tracking"
        description="Professional USPS shipping services for all your mailing needs. From Priority Mail to Ground Advantage, we handle your packages with care."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>USPS Services Available</h2>
            <p>We offer comprehensive USPS shipping solutions including:</p>
            <p>
              Priority Mail Express, Priority Mail, Ground Advantage, and
              International shipping options.
            </p>

            <h2>Why Choose Our USPS Services?</h2>
            <p>
              As an authorized USPS shipping partner, we provide professional
              package preparation, tracking services, and postal insurance at
              our convenient Mountain View location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
