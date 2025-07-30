import { GenericHero } from '@/components/common/GenericHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FedEx Shipping Services | Live Scan Solutions Mountain View',
  description:
    'Professional FedEx shipping services in Mountain View, CA. Fast, reliable package delivery with tracking. Serving Bay Area businesses and individuals.',
};

export default function FedExPage() {
  return (
    <div>
      <GenericHero
        title="FedEx Shipping Services"
        subtitle="Fast, reliable FedEx shipping with full tracking and insurance options"
        description="Professional FedEx shipping services for all your delivery needs. From overnight express to ground shipping, we handle your packages with care."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>FedEx Services Available</h2>
            <p>We offer comprehensive FedEx shipping solutions including:</p>
            <p>
              Express delivery, Ground shipping, 2-Day service, and
              International shipping options.
            </p>

            <h2>Why Choose Our FedEx Services?</h2>
            <p>
              As an authorized FedEx shipping center, we provide professional
              package preparation, real-time tracking, and insurance options at
              our convenient Mountain View location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
