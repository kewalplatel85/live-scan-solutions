'use client';

import { useCallback, useEffect, useState } from 'react';

import { fetchGoogleReviews, isGoogleReviewsError } from '../api';
import type {
  GoogleReview,
  GoogleReviewsResponse,
  LoadingState,
  UseGoogleReviewsReturn,
} from '../types';

/**
 * Calculate average rating from an array of reviews
 */
export function calcAverageRating(reviews: GoogleReview[]): number {
  const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
  return reviews.length ? Math.round((total / reviews.length) * 10) / 10 : 0;
}

/**
 * Hook to fetch Google Reviews from the API
 * Returns both the full response and extracted reviews for convenience
 */
export const useGoogleReviews = (): UseGoogleReviewsReturn => {
  const [data, setData] = useState<GoogleReviewsResponse | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(async () => {
    setLoading('loading');
    setError(null);

    try {
      const result = await fetchGoogleReviews();

      if (isGoogleReviewsError(result)) {
        setError(result.error);
        setLoading('error');
        setData(null);
        return;
      }

      setData(result);
      setLoading('success');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch Google reviews'
      );
      setLoading('error');
      setData(null);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const reviews = data?.reviews ?? [];
  const averageRating = data?.rating ?? calcAverageRating(reviews);
  const totalReviews = data?.user_ratings_total ?? reviews.length;

  return {
    data,
    reviews,
    averageRating,
    totalReviews,
    loading,
    error,
    isLoading: loading === 'loading',
    refetch: fetchReviews,
  };
};
