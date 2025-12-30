/**
 * Section Component — Consistent spacing and rhythm
 * 
 * Variants:
 * - default: Standard content width
 * - narrow: Reading-optimized width
 * - wide: Full bleed content
 * - hero: Large top padding for hero sections
 */

import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'narrow' | 'wide' | 'hero';
  className?: string;
  id?: string;
  as?: 'section' | 'article' | 'div';
  spacing?: 'none' | 'small' | 'medium' | 'large';
}

export default function Section({
  children,
  variant = 'default',
  className = '',
  id,
  as: Component = 'section',
  spacing = 'large',
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`
        ${styles.section}
        ${styles[variant]}
        ${styles[`spacing-${spacing}`]}
        ${className}
      `}
    >
      <div className={styles.inner}>
        {children}
      </div>
    </Component>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Section Header — Optional header for sections
   ───────────────────────────────────────────────────────────────────────────── */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  number,
  className = '',
}: SectionHeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      {number && <span className={styles.number}>{number}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}

