// src/components/sections/ApostilleCountries.tsx
// Reusable "Hague Convention Countries" section for apostille pages.
// Renders country flag cards with SVG flags from country-flag-icons.

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  HAGUE_COUNTRIES,
  NON_HAGUE_COUNTRIES,
} from '@/data/city-pages/apostille-countries';
import { Globe, Phone, Shield } from 'lucide-react';
import Link from 'next/link';

// — Flag imports (tree-shaken: only the flags we use are bundled) ————————
import AE from 'country-flag-icons/react/3x2/AE';
import AU from 'country-flag-icons/react/3x2/AU';
import BR from 'country-flag-icons/react/3x2/BR';
import CN from 'country-flag-icons/react/3x2/CN';
import CO from 'country-flag-icons/react/3x2/CO';
import DE from 'country-flag-icons/react/3x2/DE';
import ES from 'country-flag-icons/react/3x2/ES';
import FR from 'country-flag-icons/react/3x2/FR';
import GB from 'country-flag-icons/react/3x2/GB';
import IL from 'country-flag-icons/react/3x2/IL';
import IN from 'country-flag-icons/react/3x2/IN';
import IT from 'country-flag-icons/react/3x2/IT';
import JP from 'country-flag-icons/react/3x2/JP';
import KR from 'country-flag-icons/react/3x2/KR';
import KW from 'country-flag-icons/react/3x2/KW';
import MX from 'country-flag-icons/react/3x2/MX';
import NL from 'country-flag-icons/react/3x2/NL';
import PH from 'country-flag-icons/react/3x2/PH';
import QA from 'country-flag-icons/react/3x2/QA';
import TW from 'country-flag-icons/react/3x2/TW';
import VN from 'country-flag-icons/react/3x2/VN';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FLAG_MAP: Record<string, React.ComponentType<any>> = {
  MX,
  IN,
  KR,
  PH,
  IT,
  ES,
  DE,
  FR,
  JP,
  CN,
  GB,
  BR,
  NL,
  IL,
  AU,
  CO,
  AE,
  VN,
  QA,
  KW,
  TW,
};

interface ApostilleCountriesProps {
  /** Pass city name for city-specific headings, omit for main apostille page */
  cityName?: string;
}

export function ApostilleCountries({ cityName }: ApostilleCountriesProps) {
  const headingSuffix = cityName ? ` from ${cityName}` : '';

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border-blue-200 text-blue-700 bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:bg-blue-950/50"
          >
            <Globe className="w-3.5 h-3.5 mr-1.5" />
            International Authentication
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apostille for{' '}
            <span className="text-primary underline decoration-primary/30 underline-offset-4">
              125+
            </span>{' '}
            Hague Convention Countries
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most-requested destinations{headingSuffix} include Mexico, India,
            South Korea, and the Philippines, plus{' '}
            <span className="font-medium text-foreground">
              embassy legalization
            </span>{' '}
            for non-Hague countries like UAE, Vietnam, and Qatar.
          </p>
        </div>

        {/* Hague Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 mb-8">
          {HAGUE_COUNTRIES.map((country) => {
            const Flag = FLAG_MAP[country.code];
            return (
              <Card
                key={country.code}
                className="group relative p-4 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {/* Flag */}
                <div className="w-12 h-8 mb-3 rounded-sm overflow-hidden shadow-sm border border-border/50 group-hover:shadow-md transition-shadow duration-300">
                  {Flag ? (
                    <Flag
                      className="w-full h-full object-cover"
                      title={`${country.name} flag`}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
                      {country.code}
                    </div>
                  )}
                </div>
                {/* Country name */}
                <span className="text-sm font-medium leading-tight">
                  {country.name}
                </span>
                {/* Meta label */}
                <span className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                  {country.meta}
                </span>
              </Card>
            );
          })}
        </div>

        {/* Second row: more Hague + Non-Hague callout */}
        <div className="max-w-4xl mx-auto">
          {/* Non-Hague Countries */}
          <Card className="p-5 md:p-6 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200/50 dark:border-amber-800/50">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center border border-amber-200 dark:border-amber-800">
                  <Shield className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    Non-Hague Countries?
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Embassy legalization available
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 flex-1">
                {NON_HAGUE_COUNTRIES.map((country) => {
                  const Flag = FLAG_MAP[country.code];
                  return (
                    <div
                      key={country.code}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-border text-sm"
                    >
                      <div className="w-5 h-3.5 rounded-sm overflow-hidden border border-border/30 flex-shrink-0">
                        {Flag ? (
                          <Flag
                            className="w-full h-full object-cover"
                            title={`${country.name} flag`}
                          />
                        ) : (
                          <span className="text-[8px]">{country.code}</span>
                        )}
                      </div>
                      <span className="font-medium text-xs">
                        {country.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                href="tel:650-961-4646"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium transition-colors flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Us
              </Link>
            </div>
          </Card>
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          All{' '}
          <span className="font-medium">
            125+ Hague Convention member countries
          </span>{' '}
          are supported. For countries not listed above, please{' '}
          <Link
            href="/contact-us"
            className="text-primary hover:underline font-medium"
          >
            contact us
          </Link>{' '}
          for country-specific requirements and guidance.
        </p>
      </div>
    </section>
  );
}
