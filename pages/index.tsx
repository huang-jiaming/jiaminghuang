/**
 * Home Page — Desktop-led layout with strong opening manifesto
 * 
 * Features:
 * - Short manifesto section (3-5 sharp lines)
 * - Build gallery — Proof of work (infinite scroll)
 * - Explore gallery — Products, writing, experiments
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import Gallery from '../components/Gallery';
import { StackedInfiniteGallery } from '../components/InfiniteGallery';
import { galleryItems } from '../data/gallery';
import { buildImages } from '../data/buildGallery';
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
            <a href="/applauncher" className={styles.inlineLink}>AppLauncher v2</a>{' '}
            and organizing builders in Calgary.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Build Section — Infinite Gallery as Proof of Work
          Demonstrates: Velocity, Repetition, Ecosystem density, Builder credibility
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="wide" spacing="medium" className={styles.buildSection}>
        <div className={styles.buildHeader}>
          <h2 className={styles.buildTitle}>Build</h2>
          <span className={styles.buildSubtitle}>Consistent execution across surfaces.</span>
        </div>
        
        <StackedInfiniteGallery images={buildImages} className={styles.buildGallery} />
        
        <div className={styles.buildContext}>
          <p>
            This isn't a highlight reel. It's the surface area of consistent execution — 
            shipping products, convening rooms, and testing ideas in the real world. 
            From hackathons in Calgary to demos in Tokyo, the work compounds through 
            repetition and the density of builders you surround yourself with.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Explore Section — Products, writing, experiments
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="wide" className={styles.gallerySection}>
        <SectionHeader 
          number="02"
          title="Explore"
          subtitle="Products, writing, and experiments — a living archive."
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
