'use client';

import { BookingModal } from '@/components/booking/BookingModal';
import { ServiceGrid } from '@/components/booking/ServiceGrid';
import { Button } from '@/components/ui/button';
import {
  BOOKING_SERVICES,
  getServiceBySlug,
  LAST_SERVICE_STORAGE_KEY,
  type BookingService,
} from '@/data/booking-services';
import { cn } from '@/lib/utils';
import { CalendarCheck, Check, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';

// ── Booking progress steps ────────────────────────────────────────────────────
interface BookingStepsProps {
  isModalOpen: boolean;
  isCompleted: boolean;
}

function BookingSteps({ isModalOpen, isCompleted }: BookingStepsProps) {
  const steps = [
    {
      num: 1,
      label: 'Select Service',
      done: isModalOpen || isCompleted,
      active: !isModalOpen && !isCompleted,
    },
    {
      num: 2,
      label: 'Pick a Time',
      done: isCompleted,
      active: isModalOpen && !isCompleted,
    },
    { num: 3, label: 'Confirm', done: isCompleted, active: false },
  ];

  return (
    <div className="flex items-center mb-5" aria-label="Booking progress">
      {steps.map((step, i) => (
        <div key={step.num} className="flex items-center flex-1 last:flex-none">
          {/* Step circle + label */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div
              className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300',
                step.done
                  ? 'bg-primary text-primary-foreground'
                  : step.active
                    ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                    : 'bg-muted text-muted-foreground'
              )}
              aria-current={step.active ? 'step' : undefined}
            >
              {step.done ? (
                <Check className="w-3 h-3" aria-hidden="true" />
              ) : (
                step.num
              )}
            </div>
            <span
              className={cn(
                'text-xs font-medium whitespace-nowrap transition-colors duration-300',
                step.done || step.active
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {step.label}
            </span>
          </div>

          {/* Connector line */}
          {i < steps.length - 1 && (
            <div
              className={cn(
                'flex-1 h-px mx-2 transition-colors duration-500',
                step.done ? 'bg-primary' : 'bg-border'
              )}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main client component ─────────────────────────────────────────────────────
interface BookingPageClientInnerProps {
  initialServiceId?: string;
}

function BookingPageClientInner({
  initialServiceId,
}: BookingPageClientInnerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedService, setSelectedService] = useState<BookingService | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingCompleted, setBookingCompleted] = useState(false);

  const hasTrackedSelection = useRef(false);

  // ── Deep-link + prop init ────────────────────────────────────────────────
  // Only pre-select a service when there is an explicit ?service= query param
  // or an initialServiceId prop. We intentionally skip localStorage restore so
  // the page always starts with no card highlighted when visited fresh.
  useEffect(() => {
    const slugFromUrl = searchParams.get('service');
    if (slugFromUrl) {
      const service = getServiceBySlug(slugFromUrl);
      if (service) {
        setSelectedService(service);
        return;
      }
    }
    if (initialServiceId) {
      const service = BOOKING_SERVICES.find((s) => s.id === initialServiceId);
      if (service) {
        setSelectedService(service);
        return;
      }
    }
    // No URL param and no prop → clear any stale selection
    setSelectedService(null);
  }, [initialServiceId, searchParams]);

  // ── Service selection → opens modal immediately ──────────────────────────
  const handleServiceSelect = useCallback(
    (service: BookingService) => {
      setSelectedService(service);
      setModalOpen(true);

      try {
        localStorage.setItem(LAST_SERVICE_STORAGE_KEY, service.id);
      } catch {
        // silently ignore
      }

      router.replace(`/book?service=${service.id}`, { scroll: false });

      if (typeof window !== 'undefined' && !hasTrackedSelection.current) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
          'event',
          'service_selected',
          {
            event_category: 'Booking',
            event_label: service.name,
            service_id: service.id,
          }
        );
        hasTrackedSelection.current = true;
      }
      hasTrackedSelection.current = false;
    },
    [router]
  );

  const handleBookingCompleted = useCallback(() => {
    setBookingCompleted(true);
  }, []);

  return (
    <>
      <div className="space-y-4">
        {/* Progress indicator */}
        <BookingSteps isModalOpen={modalOpen} isCompleted={bookingCompleted} />

        {/* Compact service list — clicking opens the booking modal */}
        <ServiceGrid
          selectedService={selectedService}
          onSelect={handleServiceSelect}
          compact
        />

        {/* Walk-in reassurance */}
        <p className="text-xs text-center text-muted-foreground pt-1">
          <span className="font-medium text-foreground">
            Walk-ins always welcome
          </span>{' '}
          · No appointment? Come in anytime.
        </p>

        {/* Booking modal */}
        <BookingModal
          service={selectedService}
          open={modalOpen}
          onOpenChange={setModalOpen}
          onBookingCompleted={handleBookingCompleted}
        />
      </div>

      {/* ── Fixed bottom success toast ──────────────────────────────────── */}
      <AnimatePresence>
        {bookingCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-auto z-50"
            role="status"
            aria-label="Booking confirmed"
            aria-live="polite"
          >
            <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/95 shadow-2xl shadow-emerald-500/10 px-5 py-4 flex items-center gap-4 backdrop-blur-sm sm:min-w-[340px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.15,
                  type: 'spring',
                  stiffness: 500,
                  damping: 25,
                }}
                className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center flex-shrink-0"
              >
                <CalendarCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-emerald-900 dark:text-emerald-100">
                  Appointment Confirmed!
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                  Check your email for the calendar invite.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setBookingCompleted(false)}
                aria-label="Dismiss confirmation"
                className="flex-shrink-0 h-7 w-7 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/40"
              >
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Public export (wrapped in Suspense for useSearchParams) ──────────────────
interface BookingPageClientProps {
  initialServiceId?: string;
}

export function BookingPageClient({
  initialServiceId,
}: BookingPageClientProps) {
  return (
    <Suspense
      fallback={<div className="h-64 animate-pulse bg-muted rounded-2xl" />}
    >
      <BookingPageClientInner initialServiceId={initialServiceId} />
    </Suspense>
  );
}
