'use client';

import { ExternalLink, MessageSquare, Star } from 'lucide-react';
import { useGoogleReviews } from '../hooks';
import { ReviewsCarousel } from './ReviewsCarousel';
import { StarRating } from './StarRating';

/**
 * Home Page Reviews Section
 * Full-featured reviews section with header, carousel, and actions
 */
export const HomePageReviews = () => {
  const { data, error, isLoading } = useGoogleReviews();

  // Error State
  if (error) {
    return (
      <section
        id="GoogleReviews"
        data-component="GoogleReviews"
        className="rounded-2xl border bg-card p-8 shadow-sm"
      >
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Customer Reviews
          </h3>
          <p className="text-muted-foreground">
            Unable to load Google reviews at the moment. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  // Loading State
  if (isLoading || !data) {
    return (
      <section
        id="GoogleReviews"
        data-component="GoogleReviews"
        className="rounded-2xl border bg-card p-8 shadow-sm animate-pulse"
      >
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="h-8 w-48 bg-muted rounded-lg mx-auto" />
            <div className="h-6 w-32 bg-muted rounded-lg mx-auto" />
            <div className="h-4 w-64 bg-muted rounded-lg mx-auto" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-muted rounded-full" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-24 bg-muted rounded" />
                    <div className="h-3 w-20 bg-muted rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-3/4 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const {
    rating,
    place_id,
    user_ratings_total,
    url,
    editorial_summary,
    html_attributions,
    reviews,
  } = data;

  return (
    <section
      id="GoogleReviews"
      data-component="GoogleReviews"
      className="w-full py-16 px-8 md:px-6 lg:px-8"
    >
      <div className="space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Star className="h-4 w-4 fill-current" />
            Google Reviews
          </div>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Our Customers Say
          </h2>

          <div className="flex items-center justify-center gap-3">
            <StarRating rating={rating ?? 0} size="lg" />
            <span className="text-2xl font-bold">{rating?.toFixed(1)}</span>
            <span className="text-muted-foreground">
              ({user_ratings_total?.toLocaleString()} reviews)
            </span>
          </div>

          {editorial_summary && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {editorial_summary}
            </p>
          )}
        </div>

        {/* Reviews Carousel */}
        <ReviewsCarousel testimonials={reviews} />

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View all reviews
            </a>
          )}

          {place_id && (
            <a
              href={`https://search.google.com/local/writereview?placeid=${encodeURIComponent(place_id)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Star className="mr-2 h-4 w-4" />
              Write a review
            </a>
          )}
        </div>

        {/* Required Google Attribution */}
        {html_attributions?.length ? (
          <div className="text-center">
            <div
              className="text-xs text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: html_attributions.join(' ') }}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};
