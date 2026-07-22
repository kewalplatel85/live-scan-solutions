'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { type BookingService } from '@/data/booking-services';
import Cal, { getCalApi } from '@calcom/embed-react';
import { CheckCircle2, RefreshCw } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Reads a CSS custom property from :root and converts it to a #rrggbb hex string.
 * The canvas approach lets the browser handle any color format (oklch, hsl, etc.)
 * without manual color-space math.
 *
 * --primary is now oklch(0.488 0.217 264.382) = #1d4ed8, WCAG AA (6.70:1 vs white)
 * so it is safe to pass directly to Cal.com as a brand color.
 */
function getCssColorAsHex(property: string, fallback = '#1d4ed8'): string {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(property)
      .trim();
    if (!raw) return fallback;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return fallback;
    ctx.fillStyle = raw;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    return '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');
  } catch {
    return fallback;
  }
}

interface BookingWidgetProps {
  service: BookingService;
  onBookingCompleted: () => void;
  onBookingStarted: () => void;
}

export function BookingWidget({
  service,
  onBookingCompleted,
  onBookingStarted,
}: BookingWidgetProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const calInitialized = useRef(false);

  // Initialize Cal.com API once (singleton pattern)
  useEffect(() => {
    async function initCal() {
      try {
        const cal = await getCalApi({ namespace: 'booking' });

        // Only set up UI config once
        if (!calInitialized.current) {
          // --primary is now WCAG AA compliant (#1d4ed8, 6.70:1 vs white)
          // so we can read it directly from the design token.
          const brandColor = getCssColorAsHex('--primary');
          cal('ui', {
            theme: 'auto',
            hideEventTypeDetails: false,
            layout: 'month_view',
            styles: { branding: { brandColor } },
          });
          calInitialized.current = true;
        }

        // Track Cal.com postMessage events for analytics
        cal('on', {
          action: 'bookingSuccessful',
          callback: () => {
            setIsLoading(false);
            onBookingCompleted();

            // Push to Google Analytics / dataLayer
            if (
              typeof window !== 'undefined' &&
              (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
            ) {
              (
                window as Window & { gtag?: (...args: unknown[]) => void }
              ).gtag?.('event', 'booking_completed', {
                event_category: 'Booking',
                event_label: service.name,
                service_id: service.id,
              });
            }
          },
        });

        cal('on', {
          action: 'eventTypeSelected',
          callback: () => {
            onBookingStarted();
            if (
              typeof window !== 'undefined' &&
              (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
            ) {
              (
                window as Window & { gtag?: (...args: unknown[]) => void }
              ).gtag?.('event', 'booking_started', {
                event_category: 'Booking',
                event_label: service.name,
                service_id: service.id,
              });
            }
          },
        });

        // Signal iframe loaded
        cal('on', {
          action: '*',
          callback: () => {
            setIsLoading(false);
          },
        });

        // Fallback: hide skeleton after 3 seconds regardless
        const fallbackTimer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(fallbackTimer);
      } catch {
        setHasError(true);
        setIsLoading(false);
      }
    }

    initCal();
  }, [service.id, onBookingCompleted, onBookingStarted, service.name]);

  const handleRetry = useCallback(() => {
    setHasError(false);
    setIsLoading(true);
    calInitialized.current = false;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      id="booking-widget"
      aria-label={`Booking calendar for ${service.name}`}
      aria-live="polite"
      className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm"
    >
      {/* Widget header */}
      <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h3 className="font-semibold text-sm">
            Select a time for{' '}
            <span className="text-primary">{service.name}</span>
          </h3>
        </div>
        <span className="text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-1">
          Powered by Cal.com
        </span>
      </div>

      <div className="relative min-h-[600px]">
        {/* Skeleton loader */}
        <AnimatePresence>
          {isLoading && !hasError && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-6 space-y-4 bg-card z-10"
              aria-label="Loading calendar..."
              aria-busy="true"
            >
              <div className="flex gap-3">
                <Skeleton className="h-8 w-8 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 rounded-md" />
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className={`h-9 rounded-md ${i % 7 === 0 || i % 7 === 6 ? 'opacity-30' : ''}`}
                  />
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <Skeleton className="h-4 w-32" />
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 rounded-lg" />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error state */}
        {hasError && (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <RefreshCw className="w-7 h-7 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold mb-1">
                Calendar temporarily unavailable
              </p>
              <p className="text-sm text-muted-foreground">
                Please try refreshing or call us directly at{' '}
                <a
                  href="tel:650-961-4646"
                  className="text-primary hover:underline font-medium"
                >
                  (650) 961-4646
                </a>
              </p>
            </div>
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 text-sm text-primary hover:underline font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <RefreshCw className="w-4 h-4" />
              Try again
            </button>
          </div>
        )}

        {/* Cal.com embed */}
        {!hasError && (
          <Cal
            namespace="booking"
            calLink={service.calSlug}
            style={{ width: '100%', height: '100%', minHeight: '600px' }}
            config={{
              layout: 'month_view',
            }}
          />
        )}
      </div>

      {/* Bottom confirmation hint */}
      <div className="px-6 py-3 border-t border-border bg-muted/20 flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
        <p className="text-xs text-muted-foreground">
          You&apos;ll receive a confirmation email instantly after booking.
          Walk-ins are always welcome without an appointment.
        </p>
      </div>
    </motion.div>
  );
}
