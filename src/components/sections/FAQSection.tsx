import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';

const topFAQs = [
  {
    question: 'Do I need an appointment?',
    answer:
      'Walk-ins are welcome for many services during regular business hours. You can also book online when you prefer a reserved time. Mobile Live Scan and mobile notary requests should be arranged by phone in advance.',
  },
  {
    question: 'What should I bring for Live Scan fingerprinting?',
    answer:
      'Bring a valid photo ID and the completed Request for Live Scan Service form provided by your employer, licensing agency, school, or requesting organization. Government submission fees vary by application type.',
  },
  {
    question: 'What should I bring for notary service?',
    answer:
      'Bring the complete document, acceptable photo identification, and every person whose signature must be notarized. The receiving agency or your attorney should tell you which notarial act is required.',
  },
  {
    question: 'Can you come to our home, school, church, or office?',
    answer:
      'Mobile Live Scan is available for qualifying groups, and mobile notary service may be arranged by request. Call us with your location, preferred time, and number of people so we can confirm availability and any travel fees.',
  },
  {
    question: 'Where are you located and when are you open?',
    answer: `Mail All Center is located at ${COMPANY.address.full}. Our regular hours are ${COMPANY.hours.summary}. Call ${COMPANY.phoneFormatted} if you need help choosing or scheduling a service.`,
  },
];

export const FAQSection = () => {
  return (
    <section className="bg-muted/30 py-12 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-9 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Questions Before You Visit?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Start with these quick answers, or call us when you need help.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border bg-card px-5 shadow-sm"
          >
            {topFAQs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href={COMPANY.phoneTel}>Call {COMPANY.phoneFormatted}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
