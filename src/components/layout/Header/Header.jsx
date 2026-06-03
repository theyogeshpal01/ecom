import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, HeadphonesIcon, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { HEADER_LINKS } from '../../../constants/navigation';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (e, label) => {
    e.preventDefault();
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };
  return (
    <>
      <header className={styles.headerTop}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <p>Free Shipping World wide for all orders over $199 <a href="#">SHOP NOW</a></p>
        </div>

        {/* Middle Bar */}
        <div className={styles.middleBar}>
          <button className={styles.hamburgerBtn} onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>

          <div className={styles.contactInfo}>
            <HeadphonesIcon size={24} className={styles.accentColor} strokeWidth={1.5} />
            <span>CALL : (+91)0123-456-789</span>
          </div>

          <div className={styles.logoContainer}>
            <a href="/">
              <img src="/logo.png" alt="HIEIL Logo" className={styles.logoImage} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
            </a>
          </div>
          
          <div className={styles.actions}>
            <button className={styles.iconButton} aria-label="Search">
              <Search size={22} strokeWidth={1.5} />
            </button>
            <Link to="/login" className={styles.iconButton} aria-label="User Profile">
              <User size={22} strokeWidth={1.5} />
            </Link>
            <button className={`${styles.iconButton} ${styles.wishlistBtn}`} aria-label="Wishlist">
              <Heart size={22} strokeWidth={1.5} />
              <span className={styles.badge}>0</span>
            </button>
            <button className={styles.iconButton} aria-label="Cart">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className={styles.badge}>0</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className={`${styles.navigation} ${styles.stickyNav}`}>
        <ul className={styles.navList}>
          {HEADER_LINKS.map((link) => (
            <li key={link.label} className={styles.navItem}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
                {link.hasDropdown && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.dropdownIcon}><polyline points="6 9 12 15 18 9"></polyline></svg>
                )}
              </a>
              
              {/* Dropdown Menu */}
              {link.dropdownItems && (
                <div className={styles.dropdownMenu}>
                  <ul className={styles.dropdownList}>
                    {link.dropdownItems.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className={styles.dropdownItemLink}>
                          {item.label}
                          {item.hasArrow && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.dropdownItemIcon}><polyline points="9 18 15 12 9 6"></polyline></svg>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.open : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarTitle}>MENU</span>
          <button className={styles.closeBtn} onClick={() => setIsSidebarOpen(false)} aria-label="Close menu">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <ul className={styles.sidebarNavList}>
          {HEADER_LINKS.map((link) => (
            <li key={link.label}>
              {link.dropdownItems ? (
                <>
                  <div 
                    className={styles.sidebarNavLink} 
                    onClick={(e) => toggleMobileDropdown(e, link.label)}
                    style={{ cursor: 'pointer' }}
                  >
                    {link.label}
                    <ChevronRight 
                      size={16} 
                      strokeWidth={1.5} 
                      className={openMobileDropdown === link.label ? styles.rotateIcon : ''}
                    />
                  </div>
                  <div className={`${styles.sidebarSubMenu} ${openMobileDropdown === link.label ? styles.open : ''}`}>
                    {link.dropdownItems.map((item) => (
                      <a key={item.label} href={item.href} className={styles.sidebarSubLink}>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={link.href} className={styles.sidebarNavLink}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.sidebarFooter}>
          <HeadphonesIcon size={20} className={styles.accentColor} strokeWidth={1.5} />
          <span>CALL : (+91)0123-456-789</span>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919050001972"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        
      </a>
    </>
  );
};

export default Header;
