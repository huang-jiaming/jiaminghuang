/**
 * Contact Page — Structured contact paths
 * 
 * Categories:
 * - Community organizers
 * - Sponsors
 * - Founders
 * - Collaborators
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Work with us — pilot Diaminate, sponsor a meetup, or partner on something new."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Contact</span>
        <h1 className={styles.title}>Work with Us</h1>
        <p className={styles.subtitle}>
          Pilot Diaminate. Sponsor a meetup. Partner on something new. 
          Be specific about what you're looking for.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Contact Paths
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="Structured Paths"
          subtitle="Choose the category that best fits your inquiry."
        />
        
        <div className={styles.pathGrid}>
          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>📊</div>
            <h3 className={styles.pathTitle}>Pilot Diaminate</h3>
            <p className={styles.pathDescription}>
              Event organizers and sponsors who want to measure sponsor ROI 
              properly. We'll deploy, track, and build case studies together.
            </p>
            <ul className={styles.pathExpectations}>
              <li>Events with sponsors to measure</li>
              <li>Willingness to share learnings</li>
              <li>Hands-on support from us</li>
            </ul>
            <a href="mailto:hello@jiaminghuang.com?subject=Diaminate%20Pilot" className={styles.pathLink}>
              Email about piloting →
            </a>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>💼</div>
            <h3 className={styles.pathTitle}>Sponsor a Meetup</h3>
            <p className={styles.pathDescription}>
              Sponsor Cursor meetups in Calgary or Toronto. Builder-heavy rooms, 
              real conversations, and measured outcomes using Diaminate.
            </p>
            <ul className={styles.pathExpectations}>
              <li>Developer tools, AI products, or adjacent</li>
              <li>Post-event report on engagement</li>
              <li>Real conversations, not just logo placement</li>
            </ul>
            <a href="mailto:hello@jiaminghuang.com?subject=Meetup%20Sponsorship" className={styles.pathLink}>
              Email about sponsoring →
            </a>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>🚀</div>
            <h3 className={styles.pathTitle}>Event Organizers</h3>
            <p className={styles.pathDescription}>
              Fellow event organizers who care about proving sponsor value. 
              Let's share learnings and explore how Diaminate can help.
            </p>
            <ul className={styles.pathExpectations}>
              <li>Running recurring events</li>
              <li>Sponsors asking hard questions about ROI</li>
              <li>Open to new measurement approaches</li>
            </ul>
            <a href="mailto:hello@jiaminghuang.com?subject=Event%20Organizer" className={styles.pathLink}>
              Email to connect →
            </a>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>🤝</div>
            <h3 className={styles.pathTitle}>Partners</h3>
            <p className={styles.pathDescription}>
              Strategic partnerships, integrations, or distribution opportunities 
              related to Diaminate or the Cursor meetups.
            </p>
            <ul className={styles.pathExpectations}>
              <li>Clear value alignment</li>
              <li>Long-term orientation</li>
              <li>Complementary reach or capabilities</li>
            </ul>
            <a href="mailto:hello@jiaminghuang.com?subject=Partnership" className={styles.pathLink}>
              Email about partnering →
            </a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          General Contact
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="General Contact"
          subtitle="For anything that doesn't fit the categories above."
        />
        
        <div className={styles.generalContact}>
          <div className={styles.contactMethod}>
            <span className={styles.contactLabel}>Email</span>
            <a href="mailto:hello@jiaminghuang.com" className={styles.contactValue}>
              hello@jiaminghuang.com
            </a>
            <span className={styles.contactNote}>
              Best for detailed inquiries. Usually respond within 48 hours.
            </span>
          </div>

          <div className={styles.contactMethod}>
            <span className={styles.contactLabel}>Twitter/X</span>
            <a href="https://twitter.com/jiaminghuang" className={styles.contactValue} target="_blank" rel="noopener noreferrer">
              @jiaminghuang
            </a>
            <span className={styles.contactNote}>
              Good for quick questions or public conversations.
            </span>
          </div>

          <div className={styles.contactMethod}>
            <span className={styles.contactLabel}>LinkedIn</span>
            <a href="https://linkedin.com/in/jiaminghuang" className={styles.contactValue} target="_blank" rel="noopener noreferrer">
              /in/jiaminghuang
            </a>
            <span className={styles.contactNote}>
              Professional context. Please include a note with connection requests.
            </span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Response Expectations
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.expectations}>
        <div className={styles.expectationsContent}>
          <h3 className={styles.expectationsTitle}>What to Expect</h3>
          <div className={styles.expectationsList}>
            <div className={styles.expectationItem}>
              <span className={styles.expectationLabel}>Response time</span>
              <span className={styles.expectationValue}>Within 48 hours for email</span>
            </div>
            <div className={styles.expectationItem}>
              <span className={styles.expectationLabel}>Best day to reach me</span>
              <span className={styles.expectationValue}>Tuesday through Thursday</span>
            </div>
            <div className={styles.expectationItem}>
              <span className={styles.expectationLabel}>Timezone</span>
              <span className={styles.expectationValue}>Varies (currently Asia/Pacific)</span>
            </div>
            <div className={styles.expectationItem}>
              <span className={styles.expectationLabel}>Preferred format</span>
              <span className={styles.expectationValue}>Specific, concise messages</span>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}


