/**
 * Google Reviews API Client
 * Centralized function to fetch Google Reviews data
 */

import type {
  GoogleReview,
  GoogleReviewsError,
  GoogleReviewsResponse,
} from '../types';
import sampleResponse from './sampleResponse.json';

// ============================================
// Configuration
// ============================================

/**
 * Set to true to use dummy data for local development
 * Set to false to use the real API in production
 */
const USE_DUMMY_DATA = false;

/**
 * API endpoint for fetching reviews
 * Change this to your actual API endpoint
 */
const API_ENDPOINT = '/api/google-reviews';

// ============================================
// Helper Functions
// ============================================

/**
 * Convert Google Review to proper format with mapped properties
 */
function normalizeReview(review: GoogleReview, index: number): GoogleReview {
  return {
    ...review,
    id: review.id || `google-${review.time || index}`,
    profile_photo_url: review.profile_photo_url || '',
    role: review.role || '',
    tags: review.tags || ['Google Review', 'Verified'],
    date:
      review.date ||
      (review.time
        ? new Date(review.time * 1000).toISOString()
        : new Date().toISOString()),
  };
}

/**
 * Transform response data with normalized reviews
 */
function transformResponse(data: GoogleReviewsResponse): GoogleReviewsResponse {
  const transformedReviews =
    data.reviews?.map((review: GoogleReview, index: number) =>
      normalizeReview(review, index)
    ) || [];

  return {
    ...data,
    reviews: transformedReviews,
  };
}

// ============================================
// Main API Function
// ============================================

/**
 * Fetches Google Reviews from the API endpoint
 * @returns Promise with reviews data or error
 */
export async function fetchGoogleReviews(): Promise<
  GoogleReviewsResponse | GoogleReviewsError
> {
  // Return dummy data for local development
  if (USE_DUMMY_DATA) {
    return transformResponse(sampleResponse as GoogleReviewsResponse);
  }

  // Real API logic
  try {
    const response = await fetch(API_ENDPOINT);
    console.log('<> response', response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data?.error) {
      return { error: data.error };
    }

    return transformResponse(data);
  } catch (error) {
    console.error('Failed to fetch Google reviews:', error);
    return {
      error:
        error instanceof Error
          ? error.message
          : 'Failed to load reviews. Please try again later.',
    };
  }
}

// ============================================
// Type Guards
// ============================================

/**
 * Type guard to check if the response is an error
 */
export function isGoogleReviewsError(
  response: GoogleReviewsResponse | GoogleReviewsError
): response is GoogleReviewsError {
  return 'error' in response;
}

// Re-export types for convenience
export type { GoogleReview, GoogleReviewsError, GoogleReviewsResponse };
