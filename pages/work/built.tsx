/**
 * Built Page — Products and experiments
 * 
 * Explicitly separates:
 * - Active / Current (including AppLauncher v2)
 * - Past / Archived (including AppLauncher v1)
 */

import React from 'react';
import Layout from '../../components/Layout';
import Section, { SectionHeader } from '../../components/Section';
import Card from '../../components/Card';
import styles from '../../styles/Work.module.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Product Data — Inline for clarity and easy updates
   ───────────────────────────────────────────────────────────────────────────── */
const activeProducts = [
  {
    id: 'applauncher-v2',
    title: 'AppLauncher v2',
    subtitle: 'Understanding before execution',
    description: 'The evolution from code generation to clarity. A tool that helps founders and teams understand their intent deeply before taking action. Currently in early access.',
    link: '/applauncher',
    tags: ['product', 'clarity', 'intent'],
    year: '2024–present',
    status: 'active' as const,
  },
  {
    id: 'intent-framework',
    title: 'Intent Framework',
    subtitle: 'A methodology for clarity',
    description: 'A structured approach to decomposing complex goals into clear, actionable intent units. Used internally and shared with early collaborators.',
    tags: ['methodology', 'frameworks'],
    year: '2024–present',
    status: 'active' as const,
  },
  {
    id: 'personal-os',
    title: 'Personal Operating System',
    subtitle: 'This website',
    description: 'A manifesto-driven personal website built as a living system. Statically generated, desktop-first, and designed for calm exploration.',
    link: '/',
    tags: ['web', 'design-system'],
    year: '2024–present',
    status: 'active' as const,
  },
];

const archivedProducts = [
  {
    id: 'applauncher-v1',
    title: 'AppLauncher v1',
    subtitle: 'Code generation tool',
    whatItWas: 'An AI-powered code generation tool that could scaffold entire applications from descriptions. Used by developers to accelerate prototyping.',
    whyItMattered: 'Proved that code generation was possible but revealed a deeper truth: the hard part isn\'t generating code—it\'s knowing what to generate. This insight led to v2.',
    tags: ['code-generation', 'automation', 'ai'],
    year: '2023',
    status: 'archived' as const,
  },
  {
    id: 'async-protocols',
    title: 'Async Protocols',
    subtitle: 'Remote team experiments',
    whatItWas: 'A collection of async-first communication patterns for distributed teams. Tested with several remote-first companies.',
    whyItMattered: 'Showed that clarity in written communication reduces meeting overhead by 60%+. Many patterns now inform how I think about intent-first interfaces.',
    tags: ['remote-work', 'communication'],
    year: '2022–2023',
    status: 'archived' as const,
  },
  {
    id: 'fintech-tools',
    title: 'Fintech Experiments',
    subtitle: 'Payment and banking tools',
    whatItWas: 'A series of tools for cross-border payments and personal finance management, built during a consulting engagement.',
    whyItMattered: 'Learned the importance of regulatory clarity and how complex systems can be made understandable through good interface design.',
    tags: ['fintech', 'consulting'],
    year: '2021–2022',
    status: 'archived' as const,
  },
  {
    id: 'dev-tools-suite',
    title: 'Developer Tools Suite',
    subtitle: 'CLI and automation tools',
    whatItWas: 'A collection of command-line tools for developer productivity: deployment scripts, code generators, and workflow automation.',
    whyItMattered: 'First real experience with developer experience design. Learned that good tools disappear into workflows.',
    tags: ['developer-tools', 'cli'],
    year: '2020–2021',
    status: 'archived' as const,
  },
];

export default function Built() {
  return (
    <Layout
      title="Built"
      description="Products and experiments — what I've created, why it mattered."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.header}>
        <span className={styles.label}>Work</span>
        <h1 className={styles.title}>Built</h1>
        <p className={styles.subtitle}>
          Products, experiments, and learning artifacts. 
          Organized by what's active now and what came before.
        </p>
        
        <nav className={styles.subnav}>
          <a href="/work/built" className={styles.subnavLink + ' ' + styles.active}>Built</a>
          <a href="/work/stats" className={styles.subnavLink}>Stats</a>
          <a href="/work/chronology" className={styles.subnavLink}>Chronology</a>
        </nav>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Active / Current
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="Active"
          subtitle="What I'm currently building and maintaining."
        />
        
        <div className={styles.productGrid}>
          {activeProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              link={product.link}
              tags={product.tags}
              status={product.status}
              featured={product.id === 'applauncher-v2'}
            />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Past / Archived
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section} id="applauncher-v1">
        <SectionHeader 
          number="02"
          title="Archived"
          subtitle="Past projects. No longer active, but lessons persist."
        />
        
        <div className={styles.archiveList}>
          {archivedProducts.map((product) => (
            <div key={product.id} className={styles.archiveCard} id={product.id}>
              <div className={styles.archiveHeader}>
                <h3 className={styles.archiveTitle}>{product.title}</h3>
                <span className={styles.archiveYear}>{product.year}</span>
              </div>
              <span className={styles.archiveSubtitle}>{product.subtitle}</span>
              
              <div className={styles.archiveContent}>
                <div className={styles.archiveBlock}>
                  <span className={styles.archiveLabel}>What it was</span>
                  <p className={styles.archiveText}>{product.whatItWas}</p>
                </div>
                <div className={styles.archiveBlock}>
                  <span className={styles.archiveLabel}>Why it mattered</span>
                  <p className={styles.archiveText}>{product.whyItMattered}</p>
                </div>
              </div>
              
              <div className={styles.archiveTags}>
                {product.tags.map((tag) => (
                  <span key={tag} className={styles.archiveTag}>#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}


