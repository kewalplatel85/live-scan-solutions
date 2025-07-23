import { CustomerTypesAccordion } from '@/components/sections/CustomerTypesAccordion';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowWorksSection } from '@/components/sections/HowWorksSection';
import { ServiceTypesSection } from '@/components/sections/ServiceTypesSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceTypesSection />
      <CustomerTypesAccordion />
      <HowWorksSection />
      <FAQSection />
    </main>
  );
}
