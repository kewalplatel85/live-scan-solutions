'use client';

import { Button } from '@/components/ui/button';
import { type BookingService } from '@/data/booking-services';
import { cn } from '@/lib/utils';
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ServiceDetailPanelProps {
  service: BookingService | null;
  onBook: () => void;
  bookingOpen: boolean;
}

export function ServiceDetailPanel({
  service,
  onBook,
  bookingOpen,
}: ServiceDetailPanelProps) {
  return (
    <AnimatePresence mode="wait">
      {service && (
        <motion.section
          key={service.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-label={`Details for ${service.name}`}
          className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
        >
          {/* Header band */}
          <div
            className={cn(
              'px-6 py-5 border-b border-border',
              service.colorScheme.bg
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0',
                    service.colorScheme.bg,
                    service.colorScheme.border
                  )}
                >
                  <service.icon
                    className={cn('w-5 h-5', service.colorScheme.icon)}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg leading-tight">
                    {service.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing & Duration chips */}
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="flex items-center gap-1.5 bg-background/70 rounded-lg px-3 py-2 border border-border">
                <DollarSign
                  className={cn('w-4 h-4', service.colorScheme.icon)}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold leading-none">
                    {service.priceLabel}
                  </p>
                  {service.priceSub && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {service.priceSub}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-background/70 rounded-lg px-3 py-2 border border-border">
                <Clock
                  className={cn('w-4 h-4', service.colorScheme.icon)}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold leading-none">
                    {service.duration}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Estimated time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What to bring */}
          <div className="px-6 py-5">
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
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Important notice */}
            <div className="mt-5 flex items-start gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg px-4 py-3">
              <AlertCircle
                className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                Walk-ins are always welcome during business hours. Appointments
                are prioritized and help reduce your wait time.
              </p>
            </div>

            {/* CTA */}
            {!bookingOpen && (
              <Button
                id={`book-cta-${service.id}`}
                onClick={onBook}
                size="lg"
                className="w-full mt-6 font-semibold text-base"
                aria-label={`Open booking calendar for ${service.name}`}
              >
                Book This Appointment
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
            )}

            {bookingOpen && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-primary font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Calendar is open below — pick your slot
              </div>
            )}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
