import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const quickFAQs = [
  {
    question: 'Do I need an appointment?',
    answer:
      'No appointment needed! We welcome walk-ins during business hours. However, you can call ahead if you prefer.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'Most fingerprinting appointments take 10-15 minutes. Processing time varies by agency but is typically same-day for electronic submissions.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Bring a valid photo ID and the completed request form from your employer or agency. We can help with forms if needed.',
  },
  {
    question: 'What are your hours?',
    answer:
      'Monday-Friday: 10AM-5PM, Saturday: 10AM-2PM, Sunday: Closed. Multiple Bay Area locations available.',
  },
];

export const QuickFAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to the most common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {quickFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
