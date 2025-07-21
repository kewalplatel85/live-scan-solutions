import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Live Scan Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Live Scan Solutions is part of{' '}
            <a
              href="https://www.mailallcenter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              All Mail Center
            </a>
            . Our organization holds official authorization from the Department
            of Justice and is certified by the FBI as a fingerprinting service
            provider. We specialize in capturing and submitting fingerprints
            electronically or via ink. Our services cater to various needs,
            including licensure, certification, volunteering, employment,
            business permits, record reviews, immigration clearances, and other
            licensing or employment purposes.
          </p>
          <Button size="lg" asChild>
            <Link href="/about">About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
