import { CustomerTypesAccordion } from '@/components/sections/CustomerTypesAccordion';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowWorksSection } from '@/components/sections/HowWorksSection';
import { ServiceTypesSection } from '@/components/sections/ServiceTypesSection';
import { ServicesBanner } from '@/components/ServicesBanner';

export default function HomePage() {
  return (
    <main>
      <ServicesBanner />
      <HeroSection />
      <ServiceTypesSection />
      <CustomerTypesAccordion />
      <HowWorksSection />
      <FAQSection />
    </main>
  );
}
