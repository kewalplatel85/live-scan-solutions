'use client';

import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';
import { Mail, Phone, Send, Users } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

const inputClassName =
  'min-h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20';

export function MobileLiveScanQuoteForm() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fallbackEmail, setFallbackEmail] = useState<string>(
    COMPANY.emailMailto
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) || '').trim();

    const subject = `Mobile Live Scan Quote Request — ${value('organization')}`;
    const body = [
      'Mobile Live Scan Quote Request',
      '',
      `Organization: ${value('organization')}`,
      `Contact name: ${value('contactName')}`,
      `Email: ${value('email')}`,
      `Phone: ${value('phone') || 'Not provided'}`,
      `Service city or ZIP: ${value('location')}`,
      `Estimated group size: ${value('groupSize')}`,
      `Preferred date: ${value('preferredDate') || 'Flexible / not specified'}`,
      '',
      'Additional details:',
      value('details') || 'None provided',
    ].join('\n');

    setFallbackEmail(
      `${COMPANY.emailMailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/mobile-live-scan-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = (await response.json()) as {
        error?: string;
        ok?: boolean;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Unable to send your request.');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your request. Please try again.'
      );
      setStatus('error');
    }
  }

  return (
    <section
      id="mobile-quote"
      className="scroll-mt-24 border-y bg-primary/5 py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
              <Users className="h-4 w-4 text-primary" />
              Groups of 5 to 500
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Request a Mobile Live Scan Quote
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tell us about your organization and group. We’ll review the
              location, scheduling needs, and participant count before
              confirming availability and pricing.
            </p>
            <div className="mt-6 rounded-2xl border bg-background p-5 shadow-sm">
              <h3 className="font-semibold">Prefer to speak with us?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Call during business hours for help planning your session.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 w-full sm:w-auto"
              >
                <Link href={COMPANY.phoneTel}>
                  <Phone className="mr-2 h-4 w-4" />
                  {COMPANY.phoneFormatted}
                </Link>
              </Button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border bg-card p-5 shadow-lg sm:p-7"
          >
            <div
              className="absolute -left-[10000px] h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                Organization name
                <input
                  name="organization"
                  required
                  autoComplete="organization"
                  className={inputClassName}
                  placeholder="Company, school, nonprofit, or agency"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Contact name
                <input
                  name="contactName"
                  required
                  autoComplete="name"
                  className={inputClassName}
                  placeholder="Your full name"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClassName}
                  placeholder="you@organization.com"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Phone{' '}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClassName}
                  placeholder="(650) 555-0123"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Service city or ZIP
                <input
                  name="location"
                  required
                  autoComplete="postal-code"
                  className={inputClassName}
                  placeholder="Palo Alto or 94301"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Estimated group size
                <select
                  name="groupSize"
                  required
                  className={inputClassName}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select group size
                  </option>
                  <option value="5–10 participants">5–10</option>
                  <option value="11–25 participants">11–25</option>
                  <option value="26–50 participants">26–50</option>
                  <option value="51–100 participants">51–100</option>
                  <option value="101–250 participants">101–250</option>
                  <option value="251–500 participants">251–500</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Preferred date{' '}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
                <input
                  name="preferredDate"
                  type="date"
                  className={inputClassName}
                />
              </label>

              <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                Additional details{' '}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
                <textarea
                  name="details"
                  rows={4}
                  className={inputClassName}
                  placeholder="Tell us about timing, parking, access, billing, or special requirements."
                />
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full"
              disabled={status === 'submitting'}
            >
              <Send className="mr-2 h-4 w-4" />
              {status === 'submitting'
                ? 'Sending Request…'
                : 'Request My Group Quote'}
            </Button>
            <div className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Mail className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
              <p>
                Your request is securely emailed to {COMPANY.email}. We use the
                information only to respond to your mobile-service inquiry.
              </p>
            </div>
            {status === 'success' && (
              <div
                role="status"
                className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
              >
                <strong>Request sent.</strong> Thank you—we’ll review your group
                details and follow up as soon as possible.
              </div>
            )}
            {status === 'error' && (
              <div
                role="alert"
                className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
              >
                <strong>Request not sent.</strong> {errorMessage}{' '}
                <a href={fallbackEmail} className="font-semibold underline">
                  Send it with your email app instead
                </a>
                .
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
