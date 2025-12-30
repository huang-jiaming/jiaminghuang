/**
 * AppLauncher Page — Dedicated Product Page for AppLauncher v2
 * 
 * This page represents AppLauncher v2 — the current, active, clarity-first product.
 * AppLauncher v1 (code generation tool) is referenced only as historical context.
 * 
 * Focus:
 * - Clarity
 * - Intent
 * - Understanding before execution
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/AppLauncher.module.css';

export default function AppLauncher() {
  return (
    <Layout
      title="AppLauncher v2"
      description="Understanding before execution. A clarity-first tool for founders and teams who want to think clearly before building."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Hero
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>AppLauncher v2</span>
          <h1 className={styles.heroTitle}>
            Understanding<br />
            <span className={styles.heroAccent}>before execution.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A clarity-first tool that helps you understand your intent deeply 
            before any code is written. For founders and teams who want to 
            build the right thing, not just build things right.
          </p>
          <div className={styles.heroCta}>
            <a 
              href="https://forms.gle/jZF2GacPQSnQXYNK6" 
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Early Access
            </a>
            <span className={styles.heroStatus}>Currently in private beta</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Product Manifesto
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.manifesto}>
        <div className={styles.manifestoContent}>
          <h2 className={styles.manifestoTitle}>The Manifesto</h2>
          <div className={styles.manifestoBody}>
            <p className={styles.manifestoLine}>
              The bottleneck isn't execution anymore — it's understanding.
            </p>
            <p className={styles.manifestoLine}>
              We can build anything. But most projects fail because they solve 
              the wrong problem.
            </p>
            <p className={styles.manifestoLine}>
              The hard part isn't generating code. It's knowing what to generate.
            </p>
            <p className={styles.manifestoLine}>
              AppLauncher v2 exists to close that gap.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Problem / Solution
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="The Problem"
          subtitle="Why most projects fail before they start."
        />
        
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <h3 className={styles.problemTitle}>Vague Intent</h3>
            <p className={styles.problemText}>
              You know you want to build something, but you can't quite articulate 
              what. There's a gap between the idea in your head and words that 
              capture it.
            </p>
          </div>
          <div className={styles.problemCard}>
            <h3 className={styles.problemTitle}>Premature Execution</h3>
            <p className={styles.problemText}>
              You start building before you understand what you're building. 
              Weeks later, you realize you've been solving the wrong problem.
            </p>
          </div>
          <div className={styles.problemCard}>
            <h3 className={styles.problemTitle}>Communication Gaps</h3>
            <p className={styles.problemText}>
              Your team thinks they understand. You think you've explained. 
              But the built thing doesn't match anyone's actual intent.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          How It Works
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="How It Works"
          subtitle="Clarity through structured understanding."
        />
        
        <div className={styles.howList}>
          <div className={styles.howItem}>
            <span className={styles.howNumber}>01</span>
            <div className={styles.howContent}>
              <h4 className={styles.howTitle}>Express Raw Intent</h4>
              <p className={styles.howText}>
                Start with whatever's in your head — vague descriptions, 
                half-formed ideas, scattered thoughts. No polish required.
              </p>
            </div>
          </div>
          <div className={styles.howItem}>
            <span className={styles.howNumber}>02</span>
            <div className={styles.howContent}>
              <h4 className={styles.howTitle}>Structured Clarification</h4>
              <p className={styles.howText}>
                Through targeted questions and frameworks, we help you uncover 
                what you actually mean. Ambiguity becomes specificity.
              </p>
            </div>
          </div>
          <div className={styles.howItem}>
            <span className={styles.howNumber}>03</span>
            <div className={styles.howContent}>
              <h4 className={styles.howTitle}>Validated Understanding</h4>
              <p className={styles.howText}>
                You end up with a clear, validated specification of intent. 
                Now you know what to build — and why.
              </p>
            </div>
          </div>
          <div className={styles.howItem}>
            <span className={styles.howNumber}>04</span>
            <div className={styles.howContent}>
              <h4 className={styles.howTitle}>Confident Execution</h4>
              <p className={styles.howText}>
                With clarity established, execution becomes straightforward. 
                Build knowing you're building the right thing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Evolution from v1
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="03"
          title="The Evolution"
          subtitle="How v2 is fundamentally different from v1."
        />
        
        <div className={styles.evolutionGrid}>
          <div className={styles.evolutionCard + ' ' + styles.evolutionPast}>
            <span className={styles.evolutionLabel}>AppLauncher v1</span>
            <span className={styles.evolutionStatus}>Archived</span>
            <h3 className={styles.evolutionTitle}>Code Generation</h3>
            <p className={styles.evolutionDescription}>
              v1 was a code generation tool. Given a description, it would 
              scaffold applications automatically. It worked — technically.
            </p>
            <ul className={styles.evolutionPoints}>
              <li>AI-powered code generation</li>
              <li>App scaffolding from descriptions</li>
              <li>Developer productivity focus</li>
            </ul>
            <p className={styles.evolutionLesson}>
              <strong>What we learned:</strong> The hard part isn't generating code. 
              Users struggled to describe what they actually wanted. The problem 
              was upstream of execution.
            </p>
          </div>
          
          <div className={styles.evolutionArrow}>→</div>
          
          <div className={styles.evolutionCard + ' ' + styles.evolutionCurrent}>
            <span className={styles.evolutionLabel}>AppLauncher v2</span>
            <span className={styles.evolutionStatus + ' ' + styles.evolutionActive}>Active</span>
            <h3 className={styles.evolutionTitle}>Understanding First</h3>
            <p className={styles.evolutionDescription}>
              v2 is a fundamental shift. Instead of generating code, we help 
              you understand what code to generate. Clarity before execution.
            </p>
            <ul className={styles.evolutionPoints}>
              <li>Intent clarification and validation</li>
              <li>Structured understanding frameworks</li>
              <li>Thinking partner for founders</li>
            </ul>
            <p className={styles.evolutionLesson}>
              <strong>The insight:</strong> The real leverage is in understanding. 
              Once you know what to build, building it is the easy part.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Who It's For
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="04"
          title="Who It's For"
          subtitle="The people we're building this with."
        />
        
        <div className={styles.audienceGrid}>
          <div className={styles.audienceCard}>
            <h4 className={styles.audienceTitle}>Founders</h4>
            <p className={styles.audienceText}>
              You have a vision but struggle to articulate it precisely. 
              You've started building too early before and paid the price.
            </p>
          </div>
          <div className={styles.audienceCard}>
            <h4 className={styles.audienceTitle}>Product Leaders</h4>
            <p className={styles.audienceText}>
              You need to translate stakeholder intent into specifications 
              that engineering can actually build correctly.
            </p>
          </div>
          <div className={styles.audienceCard}>
            <h4 className={styles.audienceTitle}>Technical Founders</h4>
            <p className={styles.audienceText}>
              You can build anything — but you've learned that knowing 
              what to build is harder than knowing how.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Join the Early Circle</h2>
          <p className={styles.ctaText}>
            We're building AppLauncher v2 with a small group of founders who 
            believe understanding is underrated. Get early access, shape the 
            product, and be part of the founding community.
          </p>
          <a 
            href="https://forms.gle/jZF2GacPQSnQXYNK6" 
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Early Access
          </a>
          <div className={styles.ctaMeta}>
            <span className={styles.ctaMetaItem}>Currently in private beta</span>
            <span className={styles.ctaMetaDivider}>·</span>
            <span className={styles.ctaMetaItem}>Expected Q1 2025</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Footer Note
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.footerNote}>
        <p className={styles.footerNoteText}>
          AppLauncher is built by <a href="/">Jia Ming Huang</a>. 
          Read about the <a href="/vision">vision</a> behind this work, 
          or explore other <a href="/work/built">projects</a>.
        </p>
      </Section>
    </Layout>
  );
}


