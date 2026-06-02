import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../../constants/navigation';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only after scrolling 100vh
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksSection}>
          
          {/* Column 1: Store Info */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>STORE INFORMATION</h3>
            <div className={styles.storeInfo}>
              <div className={styles.infoRow}>
                <MapPin size={16} className={styles.infoIcon} />
                <p>
                  Since 2024, HIEIL has been redefining shopping with premium products.
                  <br /><br />
                  Every item is designed to add style, comfort, and innovation.
                </p>
              </div>
              <div className={styles.infoRow}>
                <Mail size={16} className={styles.infoIcon} />
                <p>contact@hieil.com</p>
              </div>
              <div className={styles.infoRow}>
                <Phone size={16} className={styles.infoIcon} />
                <p>(+91) 0123-456-789</p>
              </div>
            </div>

            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map((link) => (
                <a key={link.platform} href={link.href} className={styles.socialIcon} aria-label={link.platform}>
                  {link.platform === 'facebook' && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>}
                  {link.platform === 'instagram' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                  {link.platform === 'youtube' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>}
                  {link.platform === 'x' && <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                  {link.platform === 'pinterest' && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.105 0 7.307 2.922 7.307 6.815 0 4.079-2.57 7.368-6.136 7.368-1.2 0-2.327-.624-2.711-1.357 0 0-.593 2.259-.738 2.812-.267 1.027-1.002 2.315-1.492 3.097 1.124.343 2.317.528 3.551.528 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638 0 12.017 0z"/></svg>}
                  {link.platform === 'linkedin' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Explore */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>SERVICES</h3>
            <ul className={styles.linkList}>
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
              {FOOTER_LINKS.products.slice(0, 2).map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>QUICK LINKS</h3>
            <ul className={styles.linkList}>
              {FOOTER_LINKS.policies.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
              {FOOTER_LINKS.care.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>OUR NEWSLETTER</h3>
            <p className={styles.newsletterText}>
              Subscribe to our latest newsletter to get news about special discounts.
            </p>
            <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email" 
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.subscribeBtn}>
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
      </div>
      
      <button 
        className={`${styles.scrollTopBtn} ${showScrollTop ? styles.visible : ''}`} 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <div className={styles.currencyLang}>
            <span>USD $</span>
            <span>English</span>
          </div>
          <p className={styles.copyrightText}>
            © 2026, HIEIL - Connecting People Through Commerce
          </p>
          <div className={styles.paymentIcons}>
            <div className={styles.payIcon} aria-label="Visa">
              <svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.3 10.1c0-.8-1-1.3-1.9-1.8-1-.5-1.3-.9-1.3-1.4 0-.4.5-.8 1.4-.8.9 0 1.7.3 2.3.8l.4-1.9c-.6-.3-1.5-.5-2.6-.5-2.6 0-4.5 1.4-4.5 3.4 0 1.5 1.3 2.3 2.3 2.8 1.1.5 1.4.9 1.4 1.4 0 .8-1 1.2-1.9 1.2-1.2 0-2.1-.4-2.8-.8l-.4 2c.7.3 1.8.6 3 .6 2.8 0 4.6-1.4 4.6-3.5M16.5 4.6l-2.4 10.5h2.9l2.4-10.5h-2.9zm-4.7 0l-3 7.1-1.1-6c-.1-.7-.8-1.1-1.5-1.1h-4L.1 4.8c.6.1 1.2.3 2 .7l1.7 8.6h3.1l4.7-9.5h-3zm18.3 10.5l-2.2-10.5h-2.2l-3.3 10.5h2.8l.6-1.7h3.4l.3 1.7h2.6zm-4.3-3.7l1.2-3.3c0-.1.2-.5.2-.5s0 .1.1.5l.6 3.3h-2.1z" fill="#1434CB"/></svg>
            </div>
            <div className={styles.payIcon} aria-label="Mastercard">
              <svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/></svg>
            </div>
            <div className={styles.payIcon} aria-label="Amex">
              <svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-amex"><title id="pi-amex">American Express</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M12.9 14.5l-1.3-3H7.5l-1.3 3h-2l4.8-10h2l4.8 10h-2.9zm-4.9-4.5h3.6l-1.8-4.1-1.8 4.1zm11.7 4.5h-2l-1.8-5.3-1.9 5.3h-2l-2.4-10h2.4l1.3 7 1.6-7h2.2l1.6 7 1.3-7h2.3l-2.6 10zm11.6-6.6l-2-2.3v6.3h-2.1V4.5h3.3l1.8 2.3 1.8-2.3h3.3v10h-2V6.2l-2.1 2.3-2 2.1zm-8.3 1.1v-3.4h2.7v-2h-4.8v10h5v-2h-2.9V9h2.5V7.1H23z" fill="#006FCF"/></svg>
            </div>
            <div className={styles.payIcon} aria-label="PayPal">
              <svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.6.3-.7.6L14 15.2c0 .2.1.4.3.4h2.6l1.2-7.5c0-.2.2-.4.5-.4h1.7c1 0 1.9.2 2.4.7.5.5.7 1.2.5 2.1-.4 2.4-2.1 3.4-4 3.4h-1.4c-.2 0-.4.1-.4.4l-.8 4.9c0 .2.2.4.4.4h2.7c.3 0 .5-.2.5-.5l.1-.9.1-.6c.1-.2.3-.4.5-.4h.4c2.2 0 4.1-1 4.6-3.8.4-1.9.3-3.7-1-4.8z"/><path fill="#0079C1" d="M23.9 8.3l-.2.2c-.5 2.8-2.4 3.8-4.6 3.8h-.4c-.2 0-.4.2-.5.4l-.1.6-.1.9c0 .3-.2.5-.5.5h-2.7c-.2 0-.4-.2-.4-.4l.8-4.9c0-.2.2-.4.4-.4h1.4c1.9 0 3.6-1 4-3.4.2-.9 0-1.6-.5-2.1-.1-.1-.3-.3-.5-.4.5.3 1 .8 1.2 1.6.3 1.7.3 3.6-1.1 4.8z"/><path fill="#00457C" d="M23.3 8.1c-.1-.1-.2-.1-.3-.2-.5-.5-1.4-.7-2.4-.7h-1.7c-.3 0-.5.2-.5.4l-1.2 7.5h-2.6c-.2 0-.3-.2-.3-.4l1.4-9.5c.1-.3.4-.6.7-.6h4.1c1.4 0 2.5.3 3.1 1 .3.4.5.9.6 1.4l-.9 1.1z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
