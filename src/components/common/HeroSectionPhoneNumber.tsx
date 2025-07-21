import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export const HeroSectionPhoneNumber = () => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        <span>Please call us to schedule your appointment</span>
      </div>
      <div className="flex">
        <Button
          size="lg"
          variant="outline"
          className="text-lg px-8 py-6"
          asChild
        >
          <Link href="tel:650-961-4646">
            <Phone className="mr-2 h-5 w-5" />
            (650) 961-4646
          </Link>
        </Button>
      </div>
    </div>
  );
};
