/**
 * Home Page — Desktop-led layout with strong opening manifesto
 * 
 * Features:
 * - Short manifesto section (3-5 sharp lines)
 * - Infinite vertical gallery component
 * - Gallery flows in columns on desktop, stacked on mobile
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import Gallery from '../components/Gallery';
import { galleryItems } from '../data/gallery';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout
      title="Jia Ming Huang"
      description="Building systems for the post-verbal world. Intent → clarity → action."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Hero / Manifesto Section
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="hero" className={styles.hero}>
        <div className={styles.manifesto}>
          <h1 className={styles.manifestoTitle}>
            <span className={styles.line}>Building for the</span>
            <span className={styles.lineAccent}>post-verbal world.</span>
          </h1>
          
          <div className={styles.manifestoBody}>
            <p>Clarity before code.</p>
            <p>Intent before execution.</p>
            <p>Understanding before action.</p>
          </div>

          <p className={styles.manifestoContext}>
            I design systems that help people articulate what they truly want — 
            then make it happen. Currently building{' '}
            <a href="/applauncher" className={styles.inlineLink}>AppLauncher v2</a>.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Gallery Section — Infinite vertical exploration
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="wide" className={styles.gallerySection}>
        <SectionHeader 
          number="01"
          title="Explore"
          subtitle="Products, writing, travels, and experiments — a living archive."
        />
        
        <Gallery items={galleryItems} columns={3} />
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Closing Invitation
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.closing}>
        <div className={styles.closingContent}>
          <p className={styles.closingText}>
            This site is a personal operating system and public memory — 
            not a portfolio. It evolves as I do.
          </p>
          <div className={styles.closingLinks}>
            <a href="/vision" className="btn">Read the Vision</a>
            <a href="/contact" className="btn btn--ghost">Get in Touch</a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

