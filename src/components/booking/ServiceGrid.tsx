'use client';

import { BOOKING_SERVICES, type BookingService } from '@/data/booking-services';
import { cn } from '@/lib/utils';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { useCallback } from 'react';

const SERVICE_TOP_STRIP: Record<string, string> = {
  'live-scan': 'bg-blue-500',
  'ink-fingerprint': 'bg-violet-500',
  notary: 'bg-emerald-500',
  'passport-photo': 'bg-amber-500',
};

const SERVICE_HOVER_SHADOW: Record<string, string> = {
  'live-scan': 'hover:shadow-blue-500/20',
  'ink-fingerprint': 'hover:shadow-violet-500/20',
  notary: 'hover:shadow-emerald-500/20',
  'passport-photo': 'hover:shadow-amber-500/20',
};

const SERVICE_SELECTED_SHADOW: Record<string, string> = {
  'live-scan': 'shadow-blue-500/20',
  'ink-fingerprint': 'shadow-violet-500/20',
  notary: 'shadow-emerald-500/20',
  'passport-photo': 'shadow-amber-500/20',
};

interface ServiceGridProps {
  selectedService: BookingService | null;
  onSelect: (service: BookingService) => void;
  /** Compact = horizontal list layout (one column). Default = 2x2 grid with full cards. */
  compact?: boolean;
}

export function ServiceGrid({
  selectedService,
  onSelect,
  compact = false,
}: ServiceGridProps) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, service: BookingService) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect(service);
      }
    },
    [onSelect]
  );

  // ── COMPACT MODE: horizontal list items ─────────────────────────────────
  if (compact) {
    return (
      <div
        className="flex flex-col gap-2.5"
        role="group"
        aria-label="Bookable services"
      >
        {BOOKING_SERVICES.map((service, index) => {
          const isSelected = selectedService?.id === service.id;
          const Icon = service.icon;

          return (
            <motion.button
              key={service.id}
              id={`service-card-${service.id}`}
              role="button"
              aria-pressed={isSelected}
              aria-label={`Book ${service.name} — ${service.priceLabel}`}
              onClick={() => onSelect(service)}
              onKeyDown={(e) => handleKeyDown(e, service)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.07,
                duration: 0.35,
                ease: 'easeOut',
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.982 }}
              className={cn(
                'relative w-full flex items-center gap-3 rounded-xl border bg-card px-4 py-3.5',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary',
                'group overflow-hidden transition-all duration-250 text-left cursor-pointer',
                isSelected
                  ? cn(
                      'border-primary ring-2 ring-primary/15 shadow-lg',
                      SERVICE_SELECTED_SHADOW[service.id]
                    )
                  : cn(
                      'border-border hover:border-transparent hover:shadow-lg',
                      SERVICE_HOVER_SHADOW[service.id]
                    )
              )}
            >
              {/* Colored left strip */}
              <div
                className={cn(
                  'absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-opacity duration-200',
                  SERVICE_TOP_STRIP[service.id],
                  isSelected
                    ? 'opacity-100'
                    : 'opacity-40 group-hover:opacity-100'
                )}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0 ml-1 transition-transform duration-200',
                  service.colorScheme.bg,
                  service.colorScheme.border,
                  isSelected && 'scale-110'
                )}
              >
                <Icon
                  className={cn('w-5 h-5', service.colorScheme.icon)}
                  aria-hidden="true"
                />
              </div>

              {/* Service name + price */}
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    'font-semibold text-sm leading-tight transition-colors duration-200',
                    isSelected
                      ? 'text-primary'
                      : 'text-foreground group-hover:text-primary'
                  )}
                >
                  {service.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {service.priceLabel}
                </p>
              </div>

              {/* Duration chip + arrow */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={cn(
                    'hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full',
                    service.colorScheme.badge,
                    service.colorScheme.badgeText
                  )}
                >
                  <Clock className="w-2.5 h-2.5" aria-hidden="true" />
                  {service.duration}
                </span>
                <ArrowRight
                  className={cn(
                    'w-4 h-4 transition-all duration-200',
                    isSelected
                      ? 'text-primary translate-x-0.5'
                      : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'
                  )}
                  aria-hidden="true"
                />
              </div>
            </motion.button>
          );
        })}
      </div>
    );
  }

  // ── FULL MODE: 2×2 card grid ─────────────────────────────────────────────
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
      role="group"
      aria-label="Bookable services"
    >
      {BOOKING_SERVICES.map((service, index) => {
        const isSelected = selectedService?.id === service.id;
        const Icon = service.icon;

        return (
          <motion.button
            key={service.id}
            id={`service-card-${service.id}`}
            role="button"
            aria-pressed={isSelected}
            aria-label={`Book ${service.name} — ${service.priceLabel}, ${service.duration}`}
            onClick={() => onSelect(service)}
            onKeyDown={(e) => handleKeyDown(e, service)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.985 }}
            className={cn(
              'relative w-full text-left rounded-2xl border bg-card',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
              'group overflow-hidden transition-all duration-300 shadow-sm cursor-pointer',
              isSelected
                ? cn(
                    'border-primary ring-2 ring-primary/20 shadow-xl',
                    SERVICE_SELECTED_SHADOW[service.id]
                  )
                : cn(
                    'border-border hover:border-transparent hover:shadow-xl',
                    SERVICE_HOVER_SHADOW[service.id]
                  )
            )}
          >
            <div
              className={cn('h-[3px] w-full', SERVICE_TOP_STRIP[service.id])}
              aria-hidden="true"
            />
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div
                  className={cn(
                    'w-[52px] h-[52px] rounded-xl flex items-center justify-center border flex-shrink-0 transition-transform duration-300',
                    service.colorScheme.bg,
                    service.colorScheme.border,
                    isSelected && 'scale-110'
                  )}
                >
                  <Icon
                    className={cn('w-6 h-6', service.colorScheme.icon)}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col items-end gap-1.5 mt-1">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full',
                      service.colorScheme.badge,
                      service.colorScheme.badgeText
                    )}
                  >
                    <DollarSign className="w-3 h-3" aria-hidden="true" />
                    {service.priceLabel}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {service.duration}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-base md:text-lg leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
                {service.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-5">
                {service.description}
              </p>
              <div
                className={cn(
                  'flex items-center justify-between pt-4 border-t border-border',
                  'text-sm font-semibold transition-colors duration-200',
                  isSelected
                    ? 'text-primary'
                    : 'text-muted-foreground group-hover:text-primary'
                )}
              >
                <span>Book this service</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
