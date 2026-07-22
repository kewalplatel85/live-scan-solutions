'use client';

import { BookingModal } from '@/components/booking/BookingModal';
import { ServiceGrid } from '@/components/booking/ServiceGrid';
import { TSAInterceptorBanner } from '@/components/booking/TSAInterceptorBanner';
import {
  BOOKING_SERVICES,
  getServiceBySlug,
  LAST_SERVICE_STORAGE_KEY,
  type BookingService,
} from '@/data/booking-services';
import { CalendarCheck, CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';

interface BookingPageClientInnerProps {
  initialServiceId?: string;
}

function BookingPageClientInner({
  initialServiceId,
}: BookingPageClientInnerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ── State ──────────────────────────────────────────────────────────────────
  const [selectedService, setSelectedService] = useState<BookingService | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingCompleted, setBookingCompleted] = useState(false);

  const hasTrackedSelection = useRef(false);

  // ── Deep-link + localStorage init ─────────────────────────────────────────
  useEffect(() => {
    // 1. URL query param takes highest priority
    const slugFromUrl = searchParams.get('service');
    if (slugFromUrl) {
      const service = getServiceBySlug(slugFromUrl);
      if (service) {
        setSelectedService(service);
        return;
      }
    }

    // 2. Then fall back to server-passed initialServiceId
    if (initialServiceId) {
      const service = BOOKING_SERVICES.find((s) => s.id === initialServiceId);
      if (service) {
        setSelectedService(service);
        return;
      }
    }

    // 3. Then check localStorage for last used service
    try {
      const cached = localStorage.getItem(LAST_SERVICE_STORAGE_KEY);
      if (cached) {
        const service = BOOKING_SERVICES.find((s) => s.id === cached);
        if (service) setSelectedService(service);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — silently ignore
    }
  }, [initialServiceId, searchParams]);

  // ── Service selection handler — opens modal immediately ───────────────────
  const handleServiceSelect = useCallback(
    (service: BookingService) => {
      setSelectedService(service);
      setModalOpen(true);

      // Persist to localStorage
      try {
        localStorage.setItem(LAST_SERVICE_STORAGE_KEY, service.id);
      } catch {
        // silently ignore
      }

      // Sync URL (shallow replace, no scroll)
      router.replace(`/book?service=${service.id}`, { scroll: false });

      // Analytics: Service Selected
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

  // ── Booking completed ──────────────────────────────────────────────────────
  const handleBookingCompleted = useCallback(() => {
    setBookingCompleted(true);
  }, []);

  return (
    <div className="space-y-8">
      {/* TSA PreCheck Interceptor */}
      <TSAInterceptorBanner />

      {/* Service Selection Grid */}
      <ServiceGrid
        selectedService={selectedService}
        onSelect={handleServiceSelect}
      />

      {/* Booking Modal — opens on card click */}
      <BookingModal
        service={selectedService}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onBookingCompleted={handleBookingCompleted}
      />

      {/* On-page success badge — persists after modal closes */}
      <AnimatePresence>
        {bookingCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 px-6 py-6 flex items-center gap-4"
            role="status"
            aria-label="Booking confirmed"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
              <CalendarCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Appointment Confirmed
              </p>
              <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-0.5">
                Check your email for the confirmation and calendar invite.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface BookingPageClientProps {
  initialServiceId?: string;
}

export function BookingPageClient({
  initialServiceId,
}: BookingPageClientProps) {
  return (
    <Suspense
      fallback={<div className="h-96 animate-pulse bg-muted rounded-2xl" />}
    >
      <BookingPageClientInner initialServiceId={initialServiceId} />
    </Suspense>
  );
}
