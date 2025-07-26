// import { HeroSectionCarousel } from '@/components/HeroSectionCarousel';
// import { ServicesBanner } from '@/components/ServicesBanner';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowWorksSection } from '@/components/sections/HowWorksSection';
import { SectorsSection } from '@/components/sections/SectorsSection';
// import { ServiceTypesSection } from '@/components/sections/ServiceTypesSection';

export default function HomePage() {
  return (
    <main>
      {/* <HeroSectionCarousel /> */}
      {/* <ServicesBanner /> */}
      <HeroSection />
      {/* <ServiceTypesSection /> */}
      <SectorsSection />
      <HowWorksSection />
      <FAQSection />
    </main>
  );
}
