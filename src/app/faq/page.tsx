import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Live Scan?',
    answer:
      'Live Scan is an electronic fingerprinting process used to capture fingerprints digitally instead of using traditional ink and paper. It is commonly used for background checks, employment screening, licensing, and certification purposes.',
  },
  {
    question: 'Who needs to undergo Live Scan?',
    answer:
      'Various professionals and individuals need Live Scan services including teachers, healthcare workers, childcare providers, security guards, real estate professionals, contractors, volunteers, and anyone requiring background checks for employment or licensing.',
  },
  {
    question: 'How does Live Scan work?',
    answer:
      'During a Live Scan session, your fingerprints are captured electronically using a digital scanner. The prints are then transmitted directly to the California Department of Justice and/or FBI for processing. Results are typically available much faster than traditional ink fingerprinting.',
  },
  {
    question: 'Can I make an appointment for live scan or just walk in?',
    answer:
      'We offer both options for your convenience. You can schedule an appointment for guaranteed service time, or you can walk in during our business hours. Appointments are recommended during busy periods.',
  },
  {
    question: 'Is Live Scan fingerprinting the same as a background check?',
    answer:
      'Live Scan fingerprinting is the method of capturing your fingerprints. The background check is the actual search of criminal databases using those fingerprints. Live Scan is just the first step in the background check process.',
  },
  {
    question: 'Is Live Scan fingerprinting secure?',
    answer:
      'Yes, Live Scan fingerprinting is highly secure. All data is encrypted during transmission to government agencies. Our facility is certified by the Department of Justice and follows strict security protocols to protect your personal information.',
  },
  {
    question: 'What happens if my fingerprints are rejected?',
    answer:
      'If fingerprints are rejected due to poor quality, we will re-scan them at no additional charge. In rare cases where fingerprints cannot be captured electronically, alternative methods such as ink fingerprinting may be required.',
  },
  {
    question:
      "Is it necessary to undergo Live Scan fingerprinting again if I've already completed it in the past?",
    answer:
      'It depends on the specific requirements of your employer or licensing agency. Some organizations require new fingerprints for each application, while others may accept recent results. Check with the requesting agency for their specific requirements.',
  },
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-xl text-muted-foreground">
            Find the answers to common questions for Live Scan and our services.
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
