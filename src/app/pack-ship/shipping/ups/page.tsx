import { GenericHero } from '@/components/common/GenericHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UPS Shipping Services | Live Scan Solutions Mountain View',
  description:
    'Professional UPS shipping services in Mountain View, CA. Reliable package delivery with tracking. Serving Bay Area businesses and individuals.',
};

export default function UPSPage() {
  return (
    <div>
      <GenericHero
        title="UPS Shipping Services"
        subtitle="Reliable UPS shipping with comprehensive tracking and delivery options"
        description="Professional UPS shipping services for all your delivery needs. From ground shipping to next-day air, we ensure your packages arrive safely."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>UPS Services Available</h2>
            <p>We offer comprehensive UPS shipping solutions including:</p>
            <p>
              Next Day Air, 2nd Day Air, Ground shipping, and International
              delivery options.
            </p>

            <h2>Why Choose Our UPS Services?</h2>
            <p>
              As an authorized UPS shipping center, we provide professional
              package preparation, comprehensive tracking, and shipping
              insurance at our convenient Mountain View location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
