import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';

const topFAQs = [
  {
    question: 'How long does Live Scan fingerprinting take?',
    answer:
      'The Live Scan fingerprinting process typically takes 10-15 minutes. Our experienced technicians ensure quick and accurate capture of your fingerprints.',
  },
  {
    question: 'What do I need to bring for my appointment?',
    answer:
      "Bring a valid government-issued photo ID (driver's license, passport, or state ID) and any required forms from your employer or licensing agency. Cash, check, or card payments are accepted.",
  },
  {
    question: 'Do I need an appointment or accept walk-ins?',
    answer:
      'We offer both options for your convenience. You can schedule an appointment for guaranteed service time, or you can walk in during our business hours. Appointments are recommended during busy periods.',
  },
  {
    question: 'How quickly will my results be processed?',
    answer:
      'Results are electronically transmitted to the requesting agency immediately after your session. Processing time by the agency varies but typically takes 1-3 business days for most applications.',
  },
  {
    question: 'What if my fingerprints are rejected?',
    answer:
      'If fingerprints are rejected due to poor quality, we will re-scan them at no additional charge. In rare cases where fingerprints cannot be captured electronically, alternative methods may be required.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Get quick answers to the most common questions about our Live Scan
              fingerprinting services.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-8">
            {topFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
