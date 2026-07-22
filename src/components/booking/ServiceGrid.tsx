'use client';

import { BOOKING_SERVICES, type BookingService } from '@/data/booking-services';
import { cn } from '@/lib/utils';
import { Clock, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { useCallback } from 'react';

interface ServiceGridProps {
  selectedService: BookingService | null;
  onSelect: (service: BookingService) => void;
}

export function ServiceGrid({ selectedService, onSelect }: ServiceGridProps) {
  // Keyboard navigation handler
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, service: BookingService) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect(service);
      }
    },
    [onSelect]
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' as const },
    }),
  };

  return (
    <section aria-labelledby="service-grid-heading">
      <div className="text-center mb-8">
        <h2
          id="service-grid-heading"
          className="text-2xl md:text-3xl font-bold mb-2"
        >
          Select a Service
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Choose the appointment type below to see details and book your slot.
        </p>
      </div>

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
              data-service-card
              id={`service-card-${service.id}`}
              role="button"
              aria-pressed={isSelected}
              aria-label={`Select ${service.name}, ${service.priceLabel}, ${service.duration}`}
              onClick={() => onSelect(service)}
              onKeyDown={(e) => handleKeyDown(e, service)}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={cn(
                'relative w-full text-left rounded-2xl border-2 p-5 md:p-6 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary group',
                isSelected
                  ? cn(
                      'border-primary bg-primary/5 shadow-lg shadow-primary/10',
                      `ring-2 ${service.colorScheme.ring}`
                    )
                  : 'border-border bg-card hover:border-primary/40 hover:shadow-md'
              )}
            >
              {/* Selected indicator dot */}
              {isSelected && (
                <motion.div
                  layoutId="selected-indicator"
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}

              {/* Icon */}
              <div
                className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-200',
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

              {/* Service name */}
              <h3 className="font-semibold text-base md:text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                {service.name}
              </h3>

              {/* Meta row */}
              <div className="flex items-center gap-4 mt-3">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full',
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

              {/* Brief description */}
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {service.description}
              </p>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
