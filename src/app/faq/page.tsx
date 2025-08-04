import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Live Scan FAQ | Fingerprinting Questions Answered | Mountain View, CA',
  description:
    'Get answers to frequently asked questions about Live Scan fingerprinting, notary services, and apostille in Mountain View, CA. Expert guidance from certified professionals serving Bay Area.',
  keywords:
    'live scan FAQ, fingerprinting questions, live scan answers, notary FAQ, apostille questions, background check FAQ, fingerprinting help, live scan guide',
  openGraph: {
    title: 'Live Scan FAQ | Fingerprinting Questions Answered',
    description:
      'Get answers to frequently asked questions about Live Scan fingerprinting and notary services.',
    url: 'https://www.mailallcenter.com/faq',
  },
  alternates: {
    canonical: 'https://www.mailallcenter.com/faq',
  },
};

const faqs = [
  // Live Scan FAQs
  {
    category: 'Live Scan',
    question: 'What is Live Scan?',
    answer:
      'Live Scan is an electronic fingerprinting process used to capture fingerprints digitally instead of using traditional ink and paper. It is commonly used for background checks, employment screening, licensing, and certification purposes.',
  },
  {
    category: 'Live Scan',
    question: 'Who needs to undergo Live Scan?',
    answer:
      'Various professionals and individuals need Live Scan services including teachers, healthcare workers, childcare providers, security guards, real estate professionals, contractors, volunteers, and anyone requiring background checks for employment or licensing.',
  },
  {
    category: 'Live Scan',
    question: 'How does Live Scan work?',
    answer:
      'During a Live Scan session, your fingerprints are captured electronically using a digital scanner. The prints are then transmitted directly to the California Department of Justice and/or FBI for processing. Results are typically available much faster than traditional ink fingerprinting.',
  },
  {
    category: 'Live Scan',
    question: 'Can I make an appointment for live scan or just walk in?',
    answer:
      'We offer both options for your convenience. You can schedule an appointment for guaranteed service time, or you can walk in during our business hours. Appointments are recommended during busy periods.',
  },
  {
    category: 'Live Scan',
    question: 'Is Live Scan fingerprinting the same as a background check?',
    answer:
      'Live Scan fingerprinting is the method of capturing your fingerprints. The background check is the actual search of criminal databases using those fingerprints. Live Scan is just the first step in the background check process.',
  },
  {
    category: 'Live Scan',
    question: 'Is Live Scan fingerprinting secure?',
    answer:
      'Yes, Live Scan fingerprinting is highly secure. All data is encrypted during transmission to government agencies. Our facility is certified by the Department of Justice and follows strict security protocols to protect your personal information.',
  },
  {
    category: 'Live Scan',
    question: 'What happens if my fingerprints are rejected?',
    answer:
      'If fingerprints are rejected due to poor quality, we will re-scan them at no additional charge. In rare cases where fingerprints cannot be captured electronically, alternative methods such as ink fingerprinting may be required.',
  },
  {
    category: 'Live Scan',
    question:
      "Is it necessary to undergo Live Scan fingerprinting again if I've already completed it in the past?",
    answer:
      'It depends on the specific requirements of your employer or licensing agency. Some organizations require new fingerprints for each application, while others may accept recent results. Check with the requesting agency for their specific requirements.',
  },
  // Apostille FAQs
  {
    category: 'Apostille',
    question: 'What is an Apostille?',
    answer:
      'An apostille is a form of authentication issued to documents for use in countries that participate in the Hague Convention. It verifies the authenticity of the document for international use.',
  },
  {
    category: 'Apostille',
    question: 'Which countries accept apostille?',
    answer:
      'All countries that are members of the Hague Convention accept apostille. This includes most European countries, many Asian countries, Australia, and others. For non-Hague countries, documents require embassy legalization.',
  },
  {
    category: 'Apostille',
    question: 'How long does the apostille process take?',
    answer:
      'Standard processing typically takes 5-10 business days, while expedited service can be completed in 2-3 business days. Processing times may vary depending on the document type and state requirements.',
  },
  {
    category: 'Apostille',
    question: 'Do I need to notarize my documents first?',
    answer:
      'Some documents may require notarization before apostille. We provide comprehensive services including notarization, translation, and authentication to simplify the entire process.',
  },
  {
    category: 'Apostille',
    question: 'What types of documents can be apostilled?',
    answer:
      'We can apostille various document types including birth certificates, death certificates, marriage certificates, diplomas, transcripts, business documents, court orders, and affidavits. Contact us to verify if your specific document can be apostilled.',
  },
  {
    category: 'Apostille',
    question: 'How much does apostille service cost?',
    answer:
      'Our apostille services start at $75 for standard processing (5-10 business days) and $125 for express processing (2-3 business days). Additional fees may apply for document preparation, notarization, or translation services.',
  },
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about Live Scan, Apostille
            services, and more.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
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
      </div>
    </div>
  );
}
