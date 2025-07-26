'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Badge } from './badge';

interface GlowingBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  textSize?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg';
  padding?: string;
  renderCustomBadge?: boolean; // If true, children should be a complete Badge component
}

export function GlowingBadge({
  children,
  className,
  variant = 'outline',
  size = 'md',
  textSize = 'text-sm',
  padding,
  renderCustomBadge = false,
}: GlowingBadgeProps) {
  // Dynamic padding based on size
  const getPadding = () => {
    if (padding) return padding;
    switch (size) {
      case 'sm':
        return 'px-2 py-1.5';
      case 'lg':
        return 'px-4 py-2';
      default:
        return 'px-3 py-1';
    }
  };

  // Dynamic border thickness based on content size
  const getBorderThickness = () => {
    switch (size) {
      case 'sm':
        return 'p-[1px]'; // Much thinner border for small badges
      case 'lg':
        return 'p-[3px]';
      default:
        return 'p-[1.5px]'; // Slightly thinner default border
    }
  };

  // Dynamic corner radius based on size
  const getCornerRadius = () => {
    switch (size) {
      case 'sm':
        return 'rounded-md';
      case 'lg':
        return 'rounded-lg';
      default:
        return 'rounded-md';
    }
  };

  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated border wrapper */}
      <div
        className={cn(
          'relative overflow-hidden',
          getCornerRadius(),
          getBorderThickness()
        )}
      >
        {/* Rotating gradient border */}
        <motion.div
          className={cn('absolute inset-0', getCornerRadius())}
          // className={cn('absolute inset-0')}
          style={{
            background:
              'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #ff6b6b)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 0,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Glowing effect */}
        <motion.div
          className={cn(
            'absolute inset-0 blur-sm opacity-75',
            getCornerRadius()
          )}
          style={{
            background:
              'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #ff6b6b)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />

        {/* Render custom badge or default badge */}
        {renderCustomBadge ? (
          <div className="relative z-10">{children}</div>
        ) : (
          <Badge
            variant={variant}
            className={cn(
              'relative z-10 bg-background border-0',
              textSize,
              getPadding(),
              className
            )}
          >
            {children}
          </Badge>
        )}
      </div>
    </motion.div>
  );
}
