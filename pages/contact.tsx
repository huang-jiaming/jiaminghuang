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
      description="Get in touch — structured paths for different types of conversations."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Contact</span>
        <h1 className={styles.title}>Let's Talk</h1>
        <p className={styles.subtitle}>
          I respond to every thoughtful message. Please be specific about 
          what you're looking for — it helps me give you a better response.
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
            <div className={styles.pathIcon}>🎤</div>
            <h3 className={styles.pathTitle}>Community Organizers</h3>
            <p className={styles.pathDescription}>
              Interested in having me speak, run a workshop, or participate in 
              your community event. Currently selective but open to the right fit.
            </p>
            <ul className={styles.pathExpectations}>
              <li>Topic alignment with clarity/intent themes</li>
              <li>2-4 weeks advance notice preferred</li>
              <li>Virtual or select in-person events</li>
            </ul>
            <a href="mailto:hello@jiaminghuang.com?subject=Community%20Event" className={styles.pathLink}>
              Email about events →
            </a>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>💼</div>
            <h3 className={styles.pathTitle}>Sponsors & Partners</h3>
            <p className={styles.pathDescription}>
              Exploring sponsorship, partnership, or investment opportunities 
              related to AppLauncher or other projects.
            </p>
            <ul className={styles.pathExpectations}>
              <li>Clear value alignment</li>
              <li>Long-term orientation over quick deals</li>
              <li>Transparency about expectations</li>
            </ul>
            <a href="mailto:hello@jiaminghuang.com?subject=Partnership" className={styles.pathLink}>
              Email about partnerships →
            </a>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>🚀</div>
            <h3 className={styles.pathTitle}>Founders</h3>
            <p className={styles.pathDescription}>
              Fellow founders looking for feedback, advice, or just a conversation 
              about the building journey. Especially interested in clarity-related problems.
            </p>
            <ul className={styles.pathExpectations}>
              <li>Specific questions get better answers</li>
              <li>Happy to share learnings both ways</li>
              <li>Async preferred, sync when needed</li>
            </ul>
            <a href="mailto:hello@jiaminghuang.com?subject=Founder%20Chat" className={styles.pathLink}>
              Email to connect →
            </a>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>🤝</div>
            <h3 className={styles.pathTitle}>Collaborators</h3>
            <p className={styles.pathDescription}>
              Interested in collaborating on research, writing, or building 
              something together. Especially open to adjacent builders.
            </p>
            <ul className={styles.pathExpectations}>
              <li>Clear project or collaboration idea</li>
              <li>Complementary skills or perspectives</li>
              <li>Async-first work style</li>
            </ul>
            <a href="mailto:hello@jiaminghuang.com?subject=Collaboration" className={styles.pathLink}>
              Email about collaborating →
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


