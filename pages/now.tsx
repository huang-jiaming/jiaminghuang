/**
 * Now Page — Present-tense clarity page
 * 
 * Sections:
 * - Current focus (this quarter)
 * - Explicitly not doing
 * - Locations / ecosystems
 * - Open asks
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/Now.module.css';

export default function Now() {
  return (
    <Layout
      title="Now"
      description="What I'm focused on right now — and what I'm deliberately not doing."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Now</span>
        <h1 className={styles.title}>Present Tense</h1>
        <p className={styles.subtitle}>
          What I'm focused on, where I am, and what I'm looking for.
          <br />
          <span className={styles.updated}>Last updated: December 2024</span>
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Current Focus
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="Current Focus"
          subtitle="What I'm actively building and thinking about this quarter."
        />
        
        <div className={styles.grid}>
          <div className={styles.focusCard}>
            <h3 className={styles.focusTitle}>AppLauncher v2</h3>
            <p className={styles.focusDescription}>
              The primary project. Moving from code generation to understanding. 
              Building a tool that helps founders clarify intent before building. 
              Currently in early access with a small group of users.
            </p>
            <a href="/applauncher" className={styles.focusLink}>Learn more →</a>
          </div>

          <div className={styles.focusCard}>
            <h3 className={styles.focusTitle}>Intent Framework</h3>
            <p className={styles.focusDescription}>
              Developing a structured methodology for decomposing complex goals 
              into clear, actionable intent units. This informs the product work 
              and will eventually become a standalone resource.
            </p>
          </div>

          <div className={styles.focusCard}>
            <h3 className={styles.focusTitle}>Writing Practice</h3>
            <p className={styles.focusDescription}>
              Publishing essays on clarity, intent, and the post-verbal world. 
              Thinking through writing. Currently focused on a longer piece about 
              why understanding is the new execution.
            </p>
            <a href="/writing" className={styles.focusLink}>Read essays →</a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Not Doing
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="Not Doing"
          subtitle="Clarity about what I'm saying no to."
        />
        
        <ul className={styles.notDoingList}>
          <li className={styles.notDoingItem}>
            <span className={styles.notDoingLabel}>Full-time employment</span>
            <span className={styles.notDoingReason}>
              Focused on building my own products. Open to advisory roles.
            </span>
          </li>
          <li className={styles.notDoingItem}>
            <span className={styles.notDoingLabel}>Freelance client work</span>
            <span className={styles.notDoingReason}>
              Not taking on contract projects. All energy goes to AppLauncher.
            </span>
          </li>
          <li className={styles.notDoingItem}>
            <span className={styles.notDoingLabel}>Speaking engagements</span>
            <span className={styles.notDoingReason}>
              Paused for now. May return once v2 is launched.
            </span>
          </li>
          <li className={styles.notDoingItem}>
            <span className={styles.notDoingLabel}>New social platforms</span>
            <span className={styles.notDoingReason}>
              Sticking with existing channels. No new networks for now.
            </span>
          </li>
        </ul>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Location / Ecosystems
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="03"
          title="Location & Ecosystems"
          subtitle="Where I am and the communities I'm part of."
        />
        
        <div className={styles.locationGrid}>
          <div className={styles.locationCard}>
            <h4 className={styles.locationTitle}>Based</h4>
            <p className={styles.locationValue}>Remote / Nomadic</p>
            <p className={styles.locationNote}>
              Currently splitting time between Asia and Europe. 
              No permanent base — work happens everywhere.
            </p>
          </div>

          <div className={styles.locationCard}>
            <h4 className={styles.locationTitle}>Ecosystems</h4>
            <ul className={styles.ecosystemList}>
              <li>Indie hackers & solo founders</li>
              <li>AI/LLM tool builders</li>
              <li>Post-verbal research community</li>
              <li>Async-first remote teams</li>
            </ul>
          </div>

          <div className={styles.locationCard}>
            <h4 className={styles.locationTitle}>Timezone</h4>
            <p className={styles.locationValue}>Flexible</p>
            <p className={styles.locationNote}>
              Usually available async. Sync calls work best in 
              overlapping hours between Asia and US.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Open Asks
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="04"
          title="Open Asks"
          subtitle="Where I could use help or connection."
        />
        
        <div className={styles.askGrid}>
          <div className={styles.askCard}>
            <h4 className={styles.askTitle}>Early Users</h4>
            <p className={styles.askDescription}>
              Looking for founders who struggle with clarity — people who 
              know they want to build something but can't articulate what. 
              Especially interested in repeat founders.
            </p>
          </div>

          <div className={styles.askCard}>
            <h4 className={styles.askTitle}>Feedback Partners</h4>
            <p className={styles.askDescription}>
              Seeking people willing to give honest, critical feedback on 
              early product iterations. Not cheerleaders — truth-tellers.
            </p>
          </div>

          <div className={styles.askCard}>
            <h4 className={styles.askTitle}>Adjacent Builders</h4>
            <p className={styles.askDescription}>
              Interested in connecting with others building in the "understanding" 
              space — thought-to-action tools, clarity systems, intent interfaces.
            </p>
          </div>

          <div className={styles.askCard}>
            <h4 className={styles.askTitle}>Writing Collaborators</h4>
            <p className={styles.askDescription}>
              Open to co-authoring pieces on clarity, intent, and the future of 
              human-AI collaboration. Especially interested in researchers.
            </p>
          </div>
        </div>

        <div className={styles.askCta}>
          <a href="/contact" className="btn">Get in Touch</a>
        </div>
      </Section>
    </Layout>
  );
}


