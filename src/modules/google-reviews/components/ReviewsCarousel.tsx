'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReviewsCarouselProps } from '../types';
import { InfiniteSlider } from './InfiniteSlider';
import { ReviewCard } from './ReviewCard';

/**
 * Reviews Carousel Component
 * Auto-scrolling horizontal carousel of review cards
 */
export const ReviewsCarousel = ({ testimonials }: ReviewsCarouselProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <InfiniteSlider
        duration={80}
        durationOnHover={6000}
        gap={16}
        className="md:[mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-128px),_transparent_100%)]"
      >
        {testimonials.map((r, i) => (
          <ReviewCard
            key={r.id}
            testimonial={r}
            index={i}
            expandable={false}
            isTruncatable={r.text.length > 220}
            defaultAvatar="/images/default-avatar.png"
            fixedHeight={true}
            truncateLength={150}
            className="w-[320px] sm:w-[380px] shrink-0"
          />
        ))}
      </InfiniteSlider>
    </motion.div>
  );
};
