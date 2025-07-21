import { AboutSection } from '@/components/sections/AboutSection';
import { CustomerTypesSection } from '@/components/sections/CustomerTypesSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowWorksSection } from '@/components/sections/HowWorksSection';
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
      <HowWorksSection />
      <FAQSection />
    </main>
  );
}
