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
      title="Jia Ming Huang — Co-founder & CPO @ Diaminate"
      description="Co-founder & CPO at Diaminate. Turning events into measurable sponsor ROI with meeting + outcomes intelligence. Organizer of Cursor meetups Calgary/Toronto."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Hero / Manifesto Section
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="hero" className={styles.hero}>
        <div className={styles.manifesto}>
          <h1 className={styles.manifestoTitle}>
            <span className={styles.line}>Proving sponsor ROI</span>
            <span className={styles.lineAccent}>at events.</span>
          </h1>
          
          <div className={styles.manifestoBody}>
            <p>Meetings tracked.</p>
            <p>Outcomes measured.</p>
            <p>Follow-ups closed.</p>
          </div>

          <p className={styles.manifestoContext}>
            Co-founder & CPO at{' '}
            <a href="/vision" className={styles.inlineLink}>Diaminate</a>. 
            We track the full loop—meetings → outcomes → follow-ups—so sponsors 
            and organizers can measure what actually happened. I also run{' '}
            <a href="/community" className={styles.inlineLink}>Cursor meetups</a>{' '}
            in Calgary and Toronto.
          </p>
          
          <div className={styles.closingLinks} style={{ marginTop: '2rem' }}>
            <a href="/contact" className="btn">Work with us</a>
            <a href="/vision" className="btn btn--ghost">See what I'm building</a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Build Section — Infinite Gallery as Proof of Work
          Demonstrates: Velocity, Repetition, Ecosystem density, Builder credibility
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="wide" spacing="medium" className={styles.buildSection}>
        <div className={styles.buildHeader}>
          <h2 className={styles.buildTitle}>Build</h2>
          <span className={styles.buildSubtitle}>Shipping products, convening rooms, measuring outcomes.</span>
        </div>
        
        <StackedInfiniteGallery images={buildImages} className={styles.buildGallery} />
        
        <div className={styles.buildContext}>
          <p>
            This isn't a highlight reel. It's the surface area of consistent execution — 
            building event intelligence at Diaminate, running Cursor meetups in Calgary 
            and Toronto, and testing ideas where sponsors and builders collide. The work 
            compounds through repetition and the density of people you surround yourself with.
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
            Interested in sponsoring an event, piloting Diaminate, or partnering 
            on something new? Let's talk.
          </p>
          <div className={styles.closingLinks}>
            <a href="/contact" className="btn">Work with us</a>
            <a href="/community" className="btn btn--ghost">Sponsor a Meetup</a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
