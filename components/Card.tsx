/**
 * Card Component — Reusable for gallery, products, waitlists
 * 
 * Variants:
 * - default: Standard card
 * - featured: Larger, more prominent
 * - compact: Smaller, denser
 */

import React from 'react';
import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  tags?: string[];
  status?: 'active' | 'archived' | 'coming-soon';
  featured?: boolean;
  variant?: 'default' | 'featured' | 'compact' | 'stat';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  title,
  subtitle,
  description,
  link,
  tags,
  status,
  featured,
  variant = 'default',
  className = '',
  onClick,
}: CardProps) {
  const cardVariant = featured ? 'featured' : variant;

  const content = (
    <>
      <div className={styles.header}>
        {status && (
          <span className={`${styles.status} ${styles[`status-${status}`]}`}>
            {status === 'active' && 'Active'}
            {status === 'archived' && 'Archived'}
            {status === 'coming-soon' && 'Coming Soon'}
          </span>
        )}
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>

      {description && (
        <p className={styles.description}>{description}</p>
      )}

      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}

      {link && (
        <span className={styles.arrow}>→</span>
      )}
    </>
  );

  const cardClasses = `
    ${styles.card}
    ${styles[cardVariant]}
    ${link ? styles.clickable : ''}
    ${className}
  `;

  if (link) {
    return (
      <Link href={link} className={cardClasses}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={cardClasses}>
        {content}
      </button>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stat Card — For numerical displays
   ───────────────────────────────────────────────────────────────────────────── */
interface StatCardProps {
  value: string | number;
  label: string;
  context?: string;
  className?: string;
}

export function StatCard({
  value,
  label,
  context,
  className = '',
}: StatCardProps) {
  return (
    <div className={`${styles.card} ${styles.stat} ${className}`}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
      {context && <span className={styles.statContext}>{context}</span>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Waitlist Card — For product waitlists
   ───────────────────────────────────────────────────────────────────────────── */
interface WaitlistCardProps {
  name: string;
  tagline: string;
  description: string;
  status: 'active' | 'coming-soon' | 'closed';
  featured?: boolean;
  formUrl?: string;
  expectedLaunch?: string;
  className?: string;
}

export function WaitlistCard({
  name,
  tagline,
  description,
  status,
  featured,
  formUrl,
  expectedLaunch,
  className = '',
}: WaitlistCardProps) {
  return (
    <div className={`
      ${styles.card}
      ${styles.waitlist}
      ${featured ? styles.featured : ''}
      ${className}
    `}>
      <div className={styles.header}>
        {featured && <span className={styles.featuredBadge}>Featured</span>}
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.subtitle}>{tagline}</span>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.waitlistFooter}>
        {expectedLaunch && (
          <span className={styles.launch}>Expected: {expectedLaunch}</span>
        )}
        
        {status === 'active' && formUrl ? (
          <a
            href={formUrl}
            className={styles.waitlistButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </a>
        ) : (
          <span className={styles.waitlistStatus}>
            {status === 'coming-soon' ? 'Coming Soon' : 'Closed'}
          </span>
        )}
      </div>
    </div>
  );
}

