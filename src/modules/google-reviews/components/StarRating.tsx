'use client';

import { Star } from 'lucide-react';
import type { StarRatingProps } from '../types';

/**
 * Star Rating Component
 * Displays a 5-star rating with filled/empty stars
 */
export const StarRating = ({
  rating = 0,
  size = 'sm',
  showNumber = false,
}: StarRatingProps) => {
  const sizeClass = size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {stars.map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= Math.round(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
      {showNumber && (
        <span className="ml-1 text-sm font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
