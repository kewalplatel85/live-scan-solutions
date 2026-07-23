import { AlertTriangle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

/**
 * Permanent (non-dismissible) TSA PreCheck routing notice.
 * Placed at the top of the /book hero so users looking for TSA
 * are redirected immediately before scanning services.
 */
export function TSAInterceptorBanner() {
  return (
    <div
      role="note"
      aria-label="TSA PreCheck enrollment routing notice"
      className="rounded-xl border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 px-4 py-3"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        {/* Icon + text */}
        <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
          <AlertTriangle
            className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5 sm:mt-0"
            aria-hidden="true"
          />
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-snug">
            <span className="font-semibold">
              Looking for TSA PreCheck® Enrollment?
            </span>{' '}
            Federal guidelines require scheduling through the official{' '}
            <strong>IDEMIA government registry</strong> — not available through
            this store booking system.
          </p>
        </div>

        {/* CTA link */}
        <Link
          href="https://tsaenrollmentbyidemia.tsa.dhs.gov/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book TSA PreCheck at universalenroll.dhs.gov (opens in new tab)"
          className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 underline underline-offset-2 transition-colors sm:ml-auto"
        >
          Book at IDEMIA
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
