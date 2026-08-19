/**
 * Company Configuration — Single Source of Truth
 *
 * All business contact details, hours, and location info live here.
 * Update this one file and changes will automatically reflect everywhere.
 */

export const COMPANY = {
  name: 'Mail All Center',
  legalName: 'Mail All Center LLC',
  tagline:
    'Your Trusted Partner for Professional Live Scan, Notary, and Business Services',
  foundingYear: 2010,

  // ── Contact ────────────────────────────────────────────────────────────────
  phone: '650-961-4646',
  phoneFormatted: '(650) 961-4646',
  phoneTel: 'tel:650-961-4646',
  phoneE164: '+1-650-961-4646',

  email: 'info@mailallcenter.com',
  emailMailto: 'mailto:info@mailallcenter.com',

  // ── Address ────────────────────────────────────────────────────────────────
  address: {
    street: '809 Cuesta Dr, Suite B',
    city: 'Mountain View',
    state: 'CA',
    zip: '94040',
    country: 'US',
    full: '809 Cuesta Dr, Suite B, Mountain View, CA 94040',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=809+Cuesta+Dr+Suite+B,+Mountain+View,+CA+94040',
    placeUrl:
      'https://www.google.com/maps/place/Mail+All+Center+-+Live+Scan,+Fingerprinting,+Notary+%26+Apostille/@37.372944,-122.0904646,17z/data=!3m2!4b1!5s0x808fb12bb56363e1:0xd088afecb64126dc!4m6!3m5!1s0x808fb151a6503caf:0xbf74aa58e146623c!8m2!3d37.372944!4d-122.0878897!16s%2Fg%2F11t7s0wkk7',
    geo: {
      lat: 37.372944,
      lng: -122.0878897,
    },
  },

  // ── Business Hours ─────────────────────────────────────────────────────────
  hours: {
    weekdays: {
      label: 'Mon - Fri',
      display: '10AM - 6PM PST',
      opens: '10:00',
      closes: '18:00',
    },
    saturday: {
      label: 'Saturday',
      display: '10AM - 2PM PST',
      opens: '10:00',
      closes: '14:00',
    },
    sunday: {
      label: 'Sunday',
      display: 'Closed',
    },
    summary: 'Mon-Fri 10AM-6PM, Sat 10AM-2PM',
  },

  // ── Social / Listings ──────────────────────────────────────────────────────
  sameAs: [
    'https://www.google.com/search?q=mailallcenter',
    'https://www.yelp.com/biz/mail-all-center-mountain-view-9',
    'https://www.mapquest.com/us/california/mail-all-center-11725516',
    'https://oag.ca.gov/fingerprints/locations/mail-all-center',
  ],
} as const;
