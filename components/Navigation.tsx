/**
 * Navigation Component — Minimal top navigation
 * 
 * Links: Vision · Now · Work · Writing · Travel · Community · Contact
 * 
 * /applauncher is discoverable via Gallery, Work, and Waitlist pages
 * — not included in top-level nav
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navigation.module.css';

const navLinks = [
  { href: '/vision', label: 'Vision' },
  { href: '/now', label: 'Now' },
  { href: '/work/built', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/travel', label: 'Travel' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const isActive = (href: string) => {
    if (href === '/work/built') {
      return router.pathname.startsWith('/work');
    }
    return router.pathname === href;
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo / Home */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>JMH</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${isActive(link.href) ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.menuButton} ${isOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              style={{ animationDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${isActive(link.href) ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

