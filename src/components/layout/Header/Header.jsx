import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, HeadphonesIcon, Menu, X, ChevronRight } from 'lucide-react';
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
            <button className={styles.iconButton} aria-label="User Profile">
              <User size={22} strokeWidth={1.5} />
            </button>
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
    </>
  );
};

export default Header;
