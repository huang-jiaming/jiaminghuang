/**
 * InfiniteGallery Component — Continuous scrolling image gallery
 * 
 * Creates a sense of momentum through seamless horizontal scrolling.
 * No captions, no dates, no labels. Let density imply credibility.
 * 
 * Used for Build and Travel galleries.
 */

import React, { useRef, useEffect, useState } from 'react';
import styles from './InfiniteGallery.module.css';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

interface InfiniteGalleryProps {
  images: GalleryImage[];
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteGallery({
  images,
  speed = 'normal',
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: InfiniteGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  const speedMap = {
    slow: '60s',
    normal: '40s',
    fast: '25s',
  };

  return (
    <div 
      className={`${styles.container} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div 
        ref={scrollRef}
        className={`${styles.track} ${direction === 'right' ? styles.reverse : ''}`}
        style={{
          animationDuration: speedMap[speed],
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div 
            key={`${image.id}-${index}`}
            className={`${styles.imageWrapper} ${styles[image.aspectRatio || 'landscape']}`}
          >
            {/* Placeholder div for images - replace src with actual images */}
            <div className={styles.placeholder} aria-label={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stacked Infinite Gallery — Two rows scrolling in opposite directions
   ───────────────────────────────────────────────────────────────────────────── */
interface StackedInfiniteGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function StackedInfiniteGallery({
  images,
  className = '',
}: StackedInfiniteGalleryProps) {
  // Split images into two rows
  const midpoint = Math.ceil(images.length / 2);
  const topRow = images.slice(0, midpoint);
  const bottomRow = images.slice(midpoint);

  return (
    <div className={`${styles.stacked} ${className}`}>
      <InfiniteGallery 
        images={topRow} 
        direction="left" 
        speed="normal"
      />
      <InfiniteGallery 
        images={bottomRow} 
        direction="right" 
        speed="slow"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Grid Infinite Gallery — Implies infinity through dense grid
   For when animation is too heavy
   ───────────────────────────────────────────────────────────────────────────── */
interface GridInfiniteGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function GridInfiniteGallery({
  images,
  className = '',
}: GridInfiniteGalleryProps) {
  return (
    <div className={`${styles.grid} ${className}`}>
      {images.map((image) => (
        <div 
          key={image.id}
          className={`${styles.gridItem} ${styles[image.aspectRatio || 'landscape']}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={styles.image}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

