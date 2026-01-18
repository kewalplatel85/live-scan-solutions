/**
 * Google Reviews Module - Type Definitions
 * All types used across the module
 */

// ============================================
// API Types
// ============================================

export type GoogleReview = {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  time?: number;
  role?: string;
  city?: string;
  tags?: string[];
  date?: string; // ISO format
};

export type GoogleReviewsResponse = {
  name?: string;
  place_id?: string;
  url?: string;
  rating?: number;
  user_ratings_total?: number;
  editorial_summary?: string;
  html_attributions?: string[];
  reviews: GoogleReview[];
};

export type GoogleReviewsError = {
  error: string;
};

// ============================================
// Hook Types
// ============================================

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type UseGoogleReviewsReturn = {
  /** Full response from the API including business info */
  data: GoogleReviewsResponse | null;
  /** Just the reviews array for convenience */
  reviews: GoogleReview[];
  /** Average rating (from API or calculated from reviews) */
  averageRating: number;
  /** Total number of reviews (from API or reviews count) */
  totalReviews: number;
  /** Loading state machine */
  loading: LoadingState;
  /** Error message if any */
  error: string | null;
  /** Simple boolean for loading state */
  isLoading: boolean;
  /** Refetch function to manually trigger a new fetch */
  refetch: () => Promise<void>;
};

// ============================================
// Component Types
// ============================================

export type Review = GoogleReview; // Alias for component use

export type ReviewCardProps = {
  testimonial: Review;
  index: number;
  expandable: boolean;
  isTruncatable: boolean;
  defaultAvatar: string;
  fixedHeight: boolean;
  truncateLength: number;
  className?: string;
};

export type StarRatingProps = {
  rating?: number;
  size?: 'sm' | 'lg';
  showNumber?: boolean;
};

export type MasonryWallProps = {
  testimonials: Review[];
  expandable?: boolean;
  defaultAvatar?: string;
  fixedHeight?: boolean;
};

export type ReviewsCarouselProps = {
  testimonials: GoogleReview[];
};

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

// ============================================
// Configuration Types
// ============================================

export type GoogleReviewsConfig = {
  /** API endpoint for fetching reviews */
  apiEndpoint?: string;
  /** Google Place ID for write review link */
  placeId?: string;
  /** Use dummy data instead of real API */
  useDummyData?: boolean;
  /** Default avatar image path */
  defaultAvatar?: string;
};
