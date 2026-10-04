import { COMPANY } from '@/config/company';
import { MapPin } from 'lucide-react';

const nearbyCities = [
  'Palo Alto',
  'Sunnyvale',
  'Los Altos',
  'Menlo Park',
  'Cupertino',
  'Santa Clara',
  'San Jose',
];

type NearbyServiceCitiesProps = {
  serviceName: string;
};

export function NearbyServiceCities({ serviceName }: NearbyServiceCitiesProps) {
  return (
    <section className="border-y bg-primary/5 py-10" aria-label="Nearby cities">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border bg-background p-6 text-center shadow-sm sm:p-8">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            {serviceName} Near You
          </h2>
          <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Customers throughout the Bay Area visit our Mountain View location
            for {serviceName.toLowerCase()}. We are conveniently located at{' '}
            {COMPANY.address.full}.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {nearbyCities.map((city) => (
              <a
                key={city}
                href={COMPANY.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                {serviceName} near {city}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
