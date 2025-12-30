/**
 * Gallery Component — Infinite vertical exploration experience
 * 
 * Displays gallery items in a flowing, column-based layout on desktop
 * and stacked layout on mobile. Creates a sense of discovery.
 */

import React from 'react';
import Card from './Card';
import { GalleryItem } from '../data/gallery';
import styles from './Gallery.module.css';

interface GalleryProps {
  items: GalleryItem[];
  columns?: 2 | 3;
  className?: string;
}

export default function Gallery({
  items,
  columns = 3,
  className = '',
}: GalleryProps) {
  // Distribute items across columns for masonry-like effect
  const columnItems: GalleryItem[][] = Array.from({ length: columns }, () => []);
  
  items.forEach((item, index) => {
    // Featured items go in the first column
    if (item.featured) {
      columnItems[0].push(item);
    } else {
      columnItems[index % columns].push(item);
    }
  });

  return (
    <div 
      className={`${styles.gallery} ${styles[`columns-${columns}`]} ${className}`}
    >
      {columnItems.map((column, columnIndex) => (
        <div key={columnIndex} className={styles.column}>
          {column.map((item, itemIndex) => (
            <div 
              key={item.id} 
              className={styles.item}
              style={{ animationDelay: `${(columnIndex * 100) + (itemIndex * 50)}ms` }}
            >
              <Card
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                link={item.link}
                tags={item.tags}
                status={item.status}
                featured={item.featured}
                variant={item.featured ? 'featured' : 'default'}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Gallery Grid — Alternative flat grid layout
   ───────────────────────────────────────────────────────────────────────────── */
interface GalleryGridProps {
  items: GalleryItem[];
  className?: string;
}

export function GalleryGrid({ items, className = '' }: GalleryGridProps) {
  return (
    <div className={`${styles.grid} ${className}`}>
      {items.map((item, index) => (
        <div 
          key={item.id} 
          className={`${styles.gridItem} ${item.featured ? styles.gridItemFeatured : ''}`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <Card
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            link={item.link}
            tags={item.tags}
            status={item.status}
            featured={item.featured}
          />
        </div>
      ))}
    </div>
  );
}


