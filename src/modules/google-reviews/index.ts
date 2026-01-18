/**
 * Google Reviews Module
 *
 * A self-contained, reusable module for displaying Google Reviews
 * in your Next.js application.
 *
 * @example
 * ```tsx
 * import { HomePageReviews } from '@/modules/google-reviews';
 *
 * export default function Page() {
 *   return <HomePageReviews />;
 * }
 * ```
 */

// ============================================
// Components
// ============================================
export {
  HomePageReviews,
  InfiniteSlider,
  MasonryWall,
  ReviewCard,
  ReviewsCarousel,
  StarRating,
} from './components';

// ============================================
// Hooks
// ============================================
export { calcAverageRating, useGoogleReviews } from './hooks';

// ============================================
// API
// ============================================
export {
  fetchGoogleReviews,
  isGoogleReviewsError,
  type GoogleReview,
  type GoogleReviewsError,
  type GoogleReviewsResponse,
} from './api';

// ============================================
// Types
// ============================================
export type {
  GoogleReviewsConfig,
  InfiniteSliderProps,
  LoadingState,
  MasonryWallProps,
  Review,
  ReviewCardProps,
  ReviewsCarouselProps,
  StarRatingProps,
  UseGoogleReviewsReturn,
} from './types';

// ============================================
// Utilities
// ============================================
export { cn, formatReviewDate, truncateAtWord } from './utils';
