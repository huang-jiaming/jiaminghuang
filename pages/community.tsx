/**
 * Community Page — Fisherman's Village
 * 
 * Sections:
 * - What I'm looking for
 * - What I offer
 * - Communities I participate in
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/Community.module.css';

export default function Community() {
  return (
    <Layout
      title="Community"
      description="The Fisherman's Village — what I'm looking for, what I offer, where I participate."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Community</span>
        <h1 className={styles.title}>Fisherman's Village</h1>
        <p className={styles.subtitle}>
          Building in public means building in community. This page is an 
          open invitation to connect, collaborate, and create together.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          What I'm Looking For
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="What I'm Looking For"
          subtitle="The kinds of people and conversations I'm drawn to."
        />
        
        <div className={styles.lookingGrid}>
          <div className={styles.lookingCard}>
            <h3 className={styles.lookingTitle}>Clarity Seekers</h3>
            <p className={styles.lookingText}>
              People who believe understanding is underrated. Founders who think 
              before they build. Writers who clarify before they publish.
            </p>
          </div>
          
          <div className={styles.lookingCard}>
            <h3 className={styles.lookingTitle}>Intent-First Builders</h3>
            <p className={styles.lookingText}>
              Those working on tools for thought, understanding, or collaboration. 
              Especially interested in human-AI interface explorers.
            </p>
          </div>
          
          <div className={styles.lookingCard}>
            <h3 className={styles.lookingTitle}>Async-First Teams</h3>
            <p className={styles.lookingText}>
              Remote teams experimenting with reducing meeting overhead through 
              better async practices. Happy to share what I've learned.
            </p>
          </div>
          
          <div className={styles.lookingCard}>
            <h3 className={styles.lookingTitle}>Early Users</h3>
            <p className={styles.lookingText}>
              Founders and product people willing to try early versions of 
              AppLauncher v2 and provide honest, critical feedback.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          What I Offer
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="What I Offer"
          subtitle="How I can help if our interests align."
        />
        
        <div className={styles.offerList}>
          <div className={styles.offerItem}>
            <div className={styles.offerIcon}>→</div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerTitle}>Product Thinking</h4>
              <p className={styles.offerText}>
                Helping clarify product direction, especially for technical founders 
                who have built something but struggle to articulate the "why."
              </p>
            </div>
          </div>
          
          <div className={styles.offerItem}>
            <div className={styles.offerIcon}>→</div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerTitle}>Technical Architecture</h4>
              <p className={styles.offerText}>
                Reviewing system designs, especially for AI-integrated applications 
                and developer tools. Focus on simplicity and maintainability.
              </p>
            </div>
          </div>
          
          <div className={styles.offerItem}>
            <div className={styles.offerIcon}>→</div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerTitle}>Async Communication Patterns</h4>
              <p className={styles.offerText}>
                Sharing frameworks for reducing meeting overhead and improving 
                written communication in remote teams.
              </p>
            </div>
          </div>
          
          <div className={styles.offerItem}>
            <div className={styles.offerIcon}>→</div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerTitle}>Introductions</h4>
              <p className={styles.offerText}>
                Connecting people in my network who might benefit from knowing 
                each other. Particularly strong in startup and AI communities.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Communities I Participate In
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="03"
          title="Communities"
          subtitle="Where you might find me."
        />
        
        <div className={styles.communityGrid}>
          <div className={styles.communityCard}>
            <h4 className={styles.communityName}>Indie Hackers</h4>
            <p className={styles.communityRole}>Active member</p>
            <p className={styles.communityDescription}>
              Sharing building progress, discussing product strategy with 
              other solo founders and small teams.
            </p>
          </div>
          
          <div className={styles.communityCard}>
            <h4 className={styles.communityName}>AI Builders</h4>
            <p className={styles.communityRole}>Contributor</p>
            <p className={styles.communityDescription}>
              Exploring the frontier of AI-native applications and 
              discussing practical implementation patterns.
            </p>
          </div>
          
          <div className={styles.communityCard}>
            <h4 className={styles.communityName}>Remote Work Research</h4>
            <p className={styles.communityRole}>Occasional contributor</p>
            <p className={styles.communityDescription}>
              Participating in discussions about async-first practices 
              and distributed team dynamics.
            </p>
          </div>
          
          <div className={styles.communityCard}>
            <h4 className={styles.communityName}>Tools for Thought</h4>
            <p className={styles.communityRole}>Observer & learner</p>
            <p className={styles.communityDescription}>
              Following research and experiments in augmenting human 
              cognition through software.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Connect CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.connect}>
        <div className={styles.connectContent}>
          <h3 className={styles.connectTitle}>Let's Connect</h3>
          <p className={styles.connectText}>
            If any of this resonates, I'd love to hear from you. 
            I respond to every thoughtful message.
          </p>
          <a href="/contact" className="btn btn--primary">Get in Touch</a>
        </div>
      </Section>
    </Layout>
  );
}


