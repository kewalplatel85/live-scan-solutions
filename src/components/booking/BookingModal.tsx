'use client';

import { BookingWidget } from '@/components/booking/BookingWidget';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { type BookingService } from '@/data/booking-services';
import { cn } from '@/lib/utils';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  Clock,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useCallback, useState } from 'react';

type BookingStep = 'details' | 'calendar' | 'success';

interface BookingModalProps {
  service: BookingService | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookingCompleted?: () => void;
}

export function BookingModal({
  service,
  open,
  onOpenChange,
  onBookingCompleted,
}: BookingModalProps) {
  const [step, setStep] = useState<BookingStep>('details');

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (!nextOpen) {
        // Reset step when closing so next open starts fresh
        setTimeout(() => setStep('details'), 300);
      }
      onOpenChange(nextOpen);
    },
    [onOpenChange]
  );

  const handleBookingCompleted = useCallback(() => {
    setStep('success');
    onBookingCompleted?.();
  }, [onBookingCompleted]);

  const handleBookingStarted = useCallback(() => {
    // analytics handled inside BookingWidget
  }, []);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="!max-w-[min(calc(100vw-2rem),56rem)] w-full p-0 gap-0 overflow-hidden rounded-2xl max-h-[97vh] flex flex-col"
        aria-labelledby="booking-modal-title"
        aria-describedby="booking-modal-desc"
      >
        {/* ── Modal Header ───────────────────────────────────────────── */}
        <div
          className={cn(
            'flex items-start justify-between gap-4 px-6 pt-5 pb-4 border-b border-border flex-shrink-0',
            service.colorScheme.bg
          )}
        >
          <div className="flex items-center gap-3 min-w-0">
            {/* Service icon */}
            <div
              className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0',
                service.colorScheme.bg,
                service.colorScheme.border
              )}
            >
              <Icon
                className={cn('w-5 h-5', service.colorScheme.icon)}
                aria-hidden="true"
              />
            </div>

            {/* Service name + meta */}
            <div className="min-w-0">
              <DialogTitle
                id="booking-modal-title"
                className="text-base font-bold leading-tight"
              >
                {service.name}
              </DialogTitle>
              <DialogDescription
                id="booking-modal-desc"
                className="flex items-center gap-3 mt-0.5"
              >
                <span className="flex items-center gap-1 text-xs font-medium">
                  {service.priceLabel}
                </span>
                <span className="text-muted-foreground/50">·</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  {service.duration}
                </span>
              </DialogDescription>
            </div>
          </div>

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleOpenChange(false)}
            aria-label="Close booking dialog"
            className="flex-shrink-0 text-muted-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* ── Step Indicator ─────────────────────────────────────────── */}
        {step !== 'success' && (
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30 flex-shrink-0">
            {/* Back to Details — visible only on calendar step */}
            {step === 'calendar' && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep('details')}
                aria-label="Back to details"
                className="mr-2 gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </Button>
            )}

            {/* Step 1 — clickable badge (goes back when on step 2) */}
            <button
              onClick={() => step === 'calendar' && setStep('details')}
              className={cn(
                'flex items-center gap-2 rounded-md px-1 py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                step === 'calendar'
                  ? 'cursor-pointer hover:opacity-75 transition-opacity'
                  : 'cursor-default'
              )}
              aria-label={
                step === 'calendar' ? 'Go back to details step' : undefined
              }
            >
              <div
                className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors',
                  step === 'details'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-emerald-500 text-white'
                )}
                aria-current={step === 'details' ? 'step' : undefined}
              >
                {step === 'details' ? (
                  '1'
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                )}
              </div>
              <span
                className={cn(
                  'text-xs font-medium',
                  step === 'details'
                    ? 'text-foreground'
                    : 'text-emerald-600 dark:text-emerald-400'
                )}
              >
                Details
              </span>
            </button>

            {/* Connector */}
            <div className="flex-1 mx-2 h-px bg-border" aria-hidden="true" />

            {/* Step 2 */}
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors',
                  step === 'calendar'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
                aria-current={step === 'calendar' ? 'step' : undefined}
              >
                2
              </div>
              <span
                className={cn(
                  'text-xs font-medium',
                  step === 'calendar'
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                Pick a Time
              </span>
            </div>
          </div>
        )}

        {/* ── Step Content ───────────────────────────────────────────── */}
        <div
          className="flex-1 overflow-y-auto"
          aria-live="polite"
          aria-label="Booking step content"
        >
          <AnimatePresence mode="wait" initial={false}>
            {/* ── Step 1: Details ──────────────────────────────────── */}
            {step === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="px-6 py-5 space-y-5"
              >
                {/* What to Bring */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase
                      className="w-4 h-4 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                      What to Bring
                    </h3>
                  </div>

                  <ul
                    className="space-y-3"
                    aria-label="Requirements for this appointment"
                  >
                    {service.whatToBring.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.25 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed">
                          {item.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Walk-in notice */}
                <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg px-4 py-3">
                  <AlertCircle
                    className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                    Walk-ins are always welcome during business hours.
                    Appointments are prioritized and help reduce your wait time.
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {service.description}
                </p>
              </motion.div>
            )}

            {/* ── Step 2: Calendar ─────────────────────────────────── */}
            {step === 'calendar' && (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <BookingWidget
                  service={service}
                  onBookingCompleted={handleBookingCompleted}
                  onBookingStarted={handleBookingStarted}
                />
              </motion.div>
            )}

            {/* ── Step 3: Success ──────────────────────────────────── */}
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="px-6 py-12 flex flex-col items-center text-center gap-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center"
                >
                  <CalendarCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Appointment Confirmed!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                    You&apos;re all set for <strong>{service.name}</strong>.
                    Check your email for a confirmation and calendar invite. We
                    look forward to seeing you at Mail All Center.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full max-w-xs">
                  <Button
                    className="flex-1"
                    onClick={() => handleOpenChange(false)}
                  >
                    Done
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href="/contact-us">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Modal Footer CTA (Details step only) ───────────────────── */}
        {step === 'details' && (
          <div className="px-6 py-4 border-t border-border bg-muted/20 flex-shrink-0">
            <Button
              id={`book-cta-modal-${service.id}`}
              size="lg"
              className="w-full gap-2 active:scale-[0.98]"
              onClick={() => setStep('calendar')}
              aria-label={`Open booking calendar for ${service.name}`}
            >
              Book This Appointment
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
