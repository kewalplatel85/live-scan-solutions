'use client';

import type { MasonryWallProps, Review } from '../types';
import { ReviewCard } from './ReviewCard';

const TRUNCATE_LENGTH = 220;
const FIXED_HEIGHT_TRUNCATE_LENGTH = 150; // ~3-4 lines of text

/**
 * Masonry Wall Component
 * Displays reviews in a responsive masonry grid layout
 */
export const MasonryWall = ({
  testimonials,
  expandable = true,
  defaultAvatar = '/images/default-avatar.png',
  fixedHeight = false,
}: MasonryWallProps) => {
  return (
    <div
      data-component="MasonryWall"
      className="[column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6"
    >
      {testimonials.map((t: Review, idx: number) => {
        const truncateLength = fixedHeight
          ? FIXED_HEIGHT_TRUNCATE_LENGTH
          : TRUNCATE_LENGTH;
        const isTruncatable = t.text.length > truncateLength;
        return (
          <ReviewCard
            key={t.id}
            testimonial={t}
            index={idx}
            expandable={expandable && !fixedHeight}
            isTruncatable={isTruncatable}
            defaultAvatar={defaultAvatar}
            fixedHeight={fixedHeight}
            truncateLength={truncateLength}
          />
        );
      })}
    </div>
  );
};
