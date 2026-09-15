'use client';

import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';
import { LocateFixed, MapPin, Navigation, RotateCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

type SupportedCity = {
  name: string;
  driveTime: string;
  latitude: number;
  longitude: number;
};

const STORAGE_KEY = 'passport-photo-nearby-city';
const MAX_NEARBY_DISTANCE_MILES = 75;

const supportedCities: SupportedCity[] = [
  {
    name: 'Mountain View',
    driveTime: 'a few minutes',
    latitude: COMPANY.address.geo.lat,
    longitude: COMPANY.address.geo.lng,
  },
  {
    name: 'Los Altos',
    driveTime: 'about 10 minutes',
    latitude: 37.3852,
    longitude: -122.1141,
  },
  {
    name: 'Sunnyvale',
    driveTime: 'about 10 minutes',
    latitude: 37.3688,
    longitude: -122.0363,
  },
  {
    name: 'Palo Alto',
    driveTime: 'about 15 minutes',
    latitude: 37.4419,
    longitude: -122.143,
  },
  {
    name: 'Menlo Park',
    driveTime: 'about 15 minutes',
    latitude: 37.453,
    longitude: -122.1817,
  },
  {
    name: 'Cupertino',
    driveTime: 'about 15 minutes',
    latitude: 37.323,
    longitude: -122.0322,
  },
  {
    name: 'Santa Clara',
    driveTime: 'about 20 minutes',
    latitude: 37.3541,
    longitude: -121.9552,
  },
  {
    name: 'San Jose',
    driveTime: 'about 25 minutes',
    latitude: 37.3382,
    longitude: -121.8863,
  },
];

function distanceInMiles(
  latitudeA: number,
  longitudeA: number,
  latitudeB: number,
  longitudeB: number
) {
  const earthRadiusMiles = 3958.8;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const latitudeDelta = toRadians(latitudeB - latitudeA);
  const longitudeDelta = toRadians(longitudeB - longitudeA);
  const startLatitude = toRadians(latitudeA);
  const endLatitude = toRadians(latitudeB);

  const haversine =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(startLatitude) *
      Math.cos(endLatitude) *
      Math.sin(longitudeDelta / 2) ** 2;

  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(haversine));
}

function findNearestCity(latitude: number, longitude: number) {
  return supportedCities.reduce((nearest, city) => {
    const cityDistance = distanceInMiles(
      latitude,
      longitude,
      city.latitude,
      city.longitude
    );
    const nearestDistance = distanceInMiles(
      latitude,
      longitude,
      nearest.latitude,
      nearest.longitude
    );

    return cityDistance < nearestDistance ? city : nearest;
  });
}

export function PassportPhotoLocationPersonalization() {
  const [selectedCity, setSelectedCity] = useState<SupportedCity | null>(null);
  const [locationStatus, setLocationStatus] = useState<
    'idle' | 'locating' | 'error'
  >('idle');
  const [locationMessage, setLocationMessage] = useState('');

  useEffect(() => {
    const savedCityName = window.localStorage.getItem(STORAGE_KEY);
    const savedCity = supportedCities.find(
      (city) => city.name === savedCityName
    );
    if (savedCity) setSelectedCity(savedCity);
  }, []);

  const chooseCity = (city: SupportedCity | null) => {
    setSelectedCity(city);
    setLocationStatus('idle');
    setLocationMessage('');

    if (city) {
      window.localStorage.setItem(STORAGE_KEY, city.name);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('error');
      setLocationMessage('Location is not available in this browser.');
      return;
    }

    setLocationStatus('locating');
    setLocationMessage('');

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const distanceFromStore = distanceInMiles(
          coords.latitude,
          coords.longitude,
          COMPANY.address.geo.lat,
          COMPANY.address.geo.lng
        );

        if (distanceFromStore > MAX_NEARBY_DISTANCE_MILES) {
          setLocationStatus('error');
          setLocationMessage(
            'You appear to be outside our nearby service area. Select a city to preview the experience.'
          );
          return;
        }

        chooseCity(findNearestCity(coords.latitude, coords.longitude));
      },
      () => {
        setLocationStatus('error');
        setLocationMessage(
          'We could not access your location. Select a city instead.'
        );
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
    );
  };

  return (
    <section
      className="border-y bg-primary/5 py-10"
      aria-labelledby="nearby-passport-photos"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-background shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                <LocateFixed className="h-4 w-4" />
                Location personalization demo
              </div>
              <h2
                id="nearby-passport-photos"
                className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Find Passport Photos Near You
              </h2>
              <p className="mt-3 text-muted-foreground">
                Choose a city to preview the personalized message, or use your
                approximate location only when you want to.
              </p>

              <label
                htmlFor="passport-photo-city"
                className="mt-6 block text-sm font-semibold"
              >
                Your city
              </label>
              <select
                id="passport-photo-city"
                value={selectedCity?.name ?? ''}
                onChange={(event) =>
                  chooseCity(
                    supportedCities.find(
                      (city) => city.name === event.target.value
                    ) ?? null
                  )
                }
                className="mt-2 h-11 w-full rounded-lg border bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a city</option>
                {supportedCities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>

              <Button
                type="button"
                variant="outline"
                className="mt-3 w-full"
                onClick={useMyLocation}
                disabled={locationStatus === 'locating'}
              >
                <Navigation className="mr-2 h-4 w-4" />
                {locationStatus === 'locating'
                  ? 'Finding nearby city…'
                  : 'Use my location'}
              </Button>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Your exact coordinates are processed only in your browser and
                are not saved by this website.
              </p>
              {locationMessage ? (
                <p className="mt-3 text-sm font-medium text-destructive">
                  {locationMessage}
                </p>
              ) : null}
            </div>

            <div className="flex min-h-72 items-center bg-gradient-to-br from-primary/10 via-background to-background p-6 sm:p-8">
              {selectedCity ? (
                <div className="w-full">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    <MapPin className="h-4 w-4" />
                    Personalized for {selectedCity.name}
                  </div>
                  <h3 className="mt-5 text-3xl font-bold tracking-tight">
                    Passport Photos Near {selectedCity.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    Our Mountain View store is {selectedCity.driveTime} away.
                    Get compliant passport and visa photos for $9.99, with
                    walk-in service and photos ready in about five minutes.
                  </p>
                  <p className="mt-4 flex items-start gap-2 text-sm">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>
                      <strong>Store location:</strong> {COMPANY.address.full}
                    </span>
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button asChild>
                      <a
                        href={COMPANY.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => chooseCity(null)}
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reset location
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">
                    Select a city to see the personalized experience
                  </h3>
                  <p className="mt-3 max-w-xl text-muted-foreground">
                    The normal Passport Photos page remains available to
                    everyone. Only this helpful travel message changes based on
                    the visitor&apos;s selection.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Palo Alto', 'Sunnyvale', 'San Jose'].map((cityName) => (
                      <Button
                        key={cityName}
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          chooseCity(
                            supportedCities.find(
                              (city) => city.name === cityName
                            ) ?? null
                          )
                        }
                      >
                        Preview {cityName}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
