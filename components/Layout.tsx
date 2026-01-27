/**
 * Layout Component — The structural frame for every page
 * 
 * Provides:
 * - Consistent navigation
 * - Page transitions
 * - Footer
 * - Metadata
 */

import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function Layout({
  children,
  title = 'Jia Ming Huang — Co-founder & CPO @ Diaminate',
  description = 'Co-founder & CPO at Diaminate. Turning events into measurable sponsor ROI with meeting + outcomes intelligence. Organizer of Cursor meetups Calgary/Toronto.',
  className = '',
}: LayoutProps) {
  const fullTitle = title === 'Jia Ming Huang — Co-founder & CPO @ Diaminate' ? title : `${title} — Jia Ming Huang`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        
        {/* Typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={`${styles.layout} ${className}`}>
        <Navigation />
        
        <main className={styles.main}>
          {children}
        </main>
        
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <span className={styles.footerName}>Jia Ming Huang</span>
              <span className={styles.footerDivider}>·</span>
              <span className={styles.footerTagline}>Co-founder & CPO @ Diaminate</span>
            </div>
            <div className={styles.footerRight}>
              <span className={styles.footerYear}>{new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

