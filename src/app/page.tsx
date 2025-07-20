import { AboutSection } from '@/components/sections/AboutSection';
import { ContactCTASection } from '@/components/sections/ContactCTASection';
import { CustomerTypesSection } from '@/components/sections/CustomerTypesSection';
import { DocumentsSection } from '@/components/sections/DocumentsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceTypesSection } from '@/components/sections/ServiceTypesSection';
import { TrustSection } from '@/components/sections/TrustSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ServiceTypesSection />
      <AboutSection />
      <CustomerTypesSection />
      <DocumentsSection />
      <FAQSection />
      <ContactCTASection />
    </main>
  );
}
