import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={22} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={22} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={22} />
          </a>
        </div>

        {/* Links Columns */}
        <div className={styles.footerColumns}>
          <ul className={styles.column}>
            <li><a href="#audio-description">Audio Description</a></li>
            <li><a href="#investor-relations">Investor Relations</a></li>
            <li><a href="#legal-notices">Legal Notices</a></li>
          </ul>

          <ul className={styles.column}>
            <li><a href="#help-centre">Help Centre</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#cookie-preferences">Cookie Preferences</a></li>
          </ul>

          <ul className={styles.column}>
            <li><a href="#gift-cards">Gift Cards</a></li>
            <li><a href="#terms-of-use">Terms of Use</a></li>
            <li><a href="#corporate-information">Corporate Information</a></li>
          </ul>

          <ul className={styles.column}>
            <li><a href="#media-centre">Media Centre</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; 1997-2026 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;