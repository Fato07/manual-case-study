import React from 'react';
import styles from './styles.module.css';
import FacebookLogo from './facebook-logo.svg';
import TwitterLogo from './twitter-logo.svg';
import GoogleLogo from './google-logo.svg';
import ManualLogo from './manual-logo.svg';

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const footerData: NavSection[] = [
  {
    title: 'PRODUCT',
    items: [
      { label: 'Popular', href: '/popular' },
      { label: 'Trending', href: '/trending' },
      { label: 'Guided', href: '/guided' },
      { label: 'Products', href: '/products' },
    ],
  },
  {
    title: 'COMPANY',
    items: [
      { label: 'Press', href: '/press' },
      { label: 'Mission', href: '/mission' },
      { label: 'Strategy', href: '/strategy' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'INFO',
    items: [
      { label: 'Support', href: '/support' },
      { label: 'Customer Service', href: '/customer-service' },
      { label: 'Get started', href: '/get-started' },
    ],
  },
];


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <img 
            src={ManualLogo.src} 
            alt="Manual Logo" 
            className={styles.footer__logo_image}
          />
        </div>
        
        <nav className={styles.footer__nav_group}>
          {footerData.map((section) => (
            <div key={section.title} className={styles.footer__nav_section}>
              <h3 className={styles.footer__nav_title}>{section.title}</h3>
              {section.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.footer__nav_link}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </nav>

      <div className={styles.footer__social}>
          <span className={styles.footer__social_label}>Follow us</span>

          <div className={styles.footer__social_icons}>
            <a href="https://facebook.com" className={styles.footer__social_link}>
              <img 
                src={FacebookLogo.src} 
                alt="Facebook"
                className={styles.footer__social_icon}
              />
            </a>
            <a href="https://google.com" className={styles.footer__social_link}>
              <img 
                src={GoogleLogo.src} 
                alt="Google"
                className={styles.footer__social_icon}
              />
            </a>
            <a href="https://twitter.com" className={styles.footer__social_link}>
              <img 
                src={TwitterLogo.src} 
                alt="Twitter"
                className={styles.footer__social_icon}
              />
            </a>
          </div>
      
        </div>
      </div>

      <div className={styles.footer__copyright}>

        <p>© 2021 Manual. All rights reserved</p>
      
      </div>
    </footer>
  );
};

export default Footer;

/**
 * Footer Component
 * 
 * A responsive footer component that displays navigation links, social media icons, and copyright information.
 * 
 * Structure:
 * - Logo section with Manual brand image
 * - Navigation sections grouped by Product, Company, and Info categories
 * - Social media links with icons (Facebook, Google, Twitter)
 * - Copyright notice
 * 
 * @component
 * 
 * Features:
 * - Organized navigation using NavSection interface with title and items
 * - Social media integration with icon support
 * - Modular CSS using CSS Modules
 * - Fully typed with TypeScript
 * 
 * Usage:
 * 
 * import Footer from '@/components/Footer';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <main>Content</main>
 *       <Footer />
 *     </div>
 *   );
 * }
 * 
 * 
 * Props:
 * - None required
 * 
 * Interfaces:
 * @interface NavItem
 * @property {string} label - Display text for the navigation link
 * @property {string} href - URL for the navigation link
 * 
 * @interface NavSection
 * @property {string} title - Section heading
 * @property {NavItem[]} items - Array of navigation items
 */
