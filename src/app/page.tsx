// import { HeroSectionCarousel } from '@/components/HeroSectionCarousel';
// import { ServicesBanner } from '@/components/ServicesBanner';
import { FAQSection } from '@/components/sections/FAQSection';
import { NewHeroSection } from '@/components/sections/NewHeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';

export default function HomePage() {
  return (
    <main>
      {/* New Hero with clear value proposition */}
      <NewHeroSection />

      {/* Our Services - compact grid */}
      {/* <OurServicesSection /> */}

      {/* Why choose us - trust indicators */}
      <WhyChooseUsSection />

      {/* Quick FAQ - most common questions */}
      {/* <QuickFAQSection /> */}
      <FAQSection />

      {/* Final CTA */}
      {/* <SimpleCTASection /> */}
    </main>
  );
}
