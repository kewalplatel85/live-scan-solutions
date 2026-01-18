# Google Reviews Module

A self-contained, reusable module for displaying Google Reviews in Next.js applications.

## 📁 Module Structure

```
google-reviews/
├── index.ts                    # Main export file
├── README.md                   # This file
├── types.ts                    # All TypeScript types
├── utils.ts                    # Utility functions
├── api/
│   ├── index.ts               # API exports
│   ├── googleReviews.ts       # API client
│   └── sampleResponse.json    # Sample/mock data
├── hooks/
│   ├── index.ts               # Hook exports
│   └── useGoogleReviews.ts    # React hook
└── components/
    ├── index.ts               # Component exports
    ├── HomePageReviews.tsx    # Main reviews section
    ├── ReviewCard.tsx         # Individual review card
    ├── ReviewsCarousel.tsx    # Carousel display
    ├── MasonryWall.tsx        # Masonry grid layout
    ├── StarRating.tsx         # Star rating component
    └── InfiniteSlider.tsx     # Auto-scrolling slider
```

## 🚀 Quick Start

### 1. Copy the Module

Copy the entire `google-reviews` folder to your project's `src/modules/` directory.

### 2. Install Dependencies

```bash
npm install framer-motion lucide-react react-use-measure clsx tailwind-merge
```

### 3. Configure Next.js

Add Google's image domain to your `next.config.js`:

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
};
```

### 4. Add Required Assets

Place `google_g_icon.svg` in your `public/` folder. You can get this from Google's brand assets.

### 5. Set Environment Variables

```env
PUBLIC_GOOGLE_PLACE_ID=your_google_place_id_here
```

### 6. Use the Component

```tsx
import { HomePageReviews } from '@/modules/google-reviews';

export default function Page() {
  return (
    <main>
      <HomePageReviews />
    </main>
  );
}
```

## 📦 Exports

### Components

| Component         | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `HomePageReviews` | Full-featured reviews section with header, carousel, and actions |
| `ReviewsCarousel` | Auto-scrolling horizontal carousel of reviews                    |
| `MasonryWall`     | Masonry grid layout for reviews                                  |
| `ReviewCard`      | Individual review card component                                 |
| `StarRating`      | Star rating display component                                    |
| `InfiniteSlider`  | Generic infinite scrolling slider                                |

### Hooks

| Hook                | Description                               |
| ------------------- | ----------------------------------------- |
| `useGoogleReviews`  | Fetches and manages Google Reviews state  |
| `calcAverageRating` | Utility to calculate average from reviews |

### API

| Function               | Description                                   |
| ---------------------- | --------------------------------------------- |
| `fetchGoogleReviews`   | Fetches reviews from API or returns mock data |
| `isGoogleReviewsError` | Type guard for error responses                |

## ⚙️ Configuration

### Using Mock Data (Development)

In `api/googleReviews.ts`, set:

```ts
const USE_DUMMY_DATA = true;
```

Edit `api/sampleResponse.json` with your sample reviews.

### Using Real API (Production)

1. Set `USE_DUMMY_DATA = false` in `api/googleReviews.ts`
2. Update `API_ENDPOINT` to your actual API route
3. Create an API route that fetches from Google Places API

Example API route (`app/api/google-reviews/route.ts`):

```ts
import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,url&key=${apiKey}`
  );

  const data = await response.json();
  return NextResponse.json(data.result);
}
```

## 🎨 Customization

### Styling

The module uses Tailwind CSS with CSS variables for theming:

- `--primary` - Primary color
- `--muted` - Muted text color
- `--border` - Border color
- `--card` - Card background
- `--foreground` - Text color

### Default Avatar

Update `DEFAULT_AVATAR` in `ReviewCard.tsx` or pass `defaultAvatar` prop.

### Truncation Length

Adjust in `MasonryWall.tsx`:

```ts
const TRUNCATE_LENGTH = 220;
const FIXED_HEIGHT_TRUNCATE_LENGTH = 150;
```

## 📋 Peer Dependencies

- `react` >= 18
- `next` >= 13 (App Router)
- `framer-motion` >= 10
- `lucide-react` >= 0.300
- `react-use-measure` >= 2
- `clsx` >= 2
- `tailwind-merge` >= 2
- `tailwindcss` >= 3

## 🔧 TypeScript

All types are exported from the module:

```ts
import type {
  GoogleReview,
  GoogleReviewsResponse,
  UseGoogleReviewsReturn,
  ReviewCardProps,
} from '@/modules/google-reviews';
```

## 📄 License

MIT - Feel free to use in any project!
