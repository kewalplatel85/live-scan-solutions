'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, ExternalLink, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const SESSION_KEY = 'mac_tsa_banner_dismissed';

export function TSAInterceptorBanner() {
  const [dismissed, setDismissed] = useState(true); // start hidden to prevent SSR flash

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(SESSION_KEY) === 'true';
    if (!wasDismissed) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, 'true');
    setDismissed(true);
  }, []);

  if (dismissed) return null;

  return (
    <div
      role="alert"
      aria-label="TSA PreCheck enrollment routing notice"
      className="relative rounded-xl border border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/40 px-5 py-4 shadow-sm"
    >
      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        aria-label="Dismiss TSA PreCheck notice"
        className="absolute top-3 right-3 text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 transition-colors rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-4 pr-6">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/60 border border-amber-200 dark:border-amber-700 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">
            Looking for TSA PreCheck® Enrollment?
          </p>
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed mb-3">
            Federal guidelines require scheduling directly through the official{' '}
            <strong>IDEMIA government registry</strong>. Store-managed slots
            below cannot process TSA credentials — you must book through the
            Department of Homeland Security.
          </p>
          <Button
            asChild
            size="sm"
            className="bg-amber-600 hover:bg-amber-700 text-white border-0 font-semibold"
          >
            <a
              href="https://universalenroll.dhs.gov/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book TSA PreCheck enrollment at universalenroll.dhs.gov (opens in new tab)"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Book at IDEMIA Official Registry
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
