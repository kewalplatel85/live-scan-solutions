import { GenericHero } from '@/components/common/GenericHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Package Drop-Off Services | Live Scan Solutions Mountain View',
  description:
    'Convenient package drop-off services in Mountain View, CA. Secure package handling and delivery coordination. Serving Bay Area businesses and individuals.',
};

export default function DropOffPage() {
  return (
    <div>
      <GenericHero
        title="Package Drop-Off Services"
        subtitle="Convenient package drop-off and delivery coordination services"
        description="Secure package drop-off services for all major carriers. We handle your packages with care and ensure proper delivery coordination."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Drop-Off Services Available</h2>
            <p>We offer comprehensive package drop-off solutions including:</p>
            <p>
              Pre-labeled package acceptance, carrier coordination, secure
              storage, and delivery confirmation services.
            </p>

            <h2>Why Choose Our Drop-Off Services?</h2>
            <p>
              With secure package handling, multiple carrier relationships, and
              professional service, we ensure your packages are processed
              efficiently at our convenient Mountain View location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
