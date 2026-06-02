import React from 'react';
import { Award, Globe, Handshake, Check } from 'lucide-react';
import styles from './GlobalClients.module.css';

const certifications = [
  'MSME Certified',
  'Handicraft Export Promotion Council Member',
  'Fair Trade Certified',
  'Eco-Friendly Production Certified',
  'Government of India Recognized Exporter'
];

const countries = [
  'USA', 'UK', 'Canada', 'Australia', 'Germany', 
  'France', 'UAE', 'Japan', 'Singapore', 'South Africa'
];

const associations = [
  'Member - Federation of Indian Export Organisations (FIEO)',
  'Member - Export Promotion Council for Handicrafts (EPCH)',
  'Partner - Craftmark (All India Artisans & Craftworkers)',
  'Associated with 500+ Artisan Clusters',
  'Government Recognized MSME Unit'
];

const GlobalClients = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>TRUSTED BY GLOBAL CLIENTS & PARTNERS</h2>
          <p className={styles.subtitle}>
            With over 7+ years of excellence in exporting authentic Indian handicrafts, we maintain the highest standards of quality and reliability that clients worldwide trust.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Award size={36} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>CERTIFICATIONS & QUALITY STANDARDS</h3>
            <ul className={styles.list}>
              {certifications.map((item, index) => (
                <li key={index}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Globe size={36} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>GLOBAL EXPORT NETWORK</h3>
            <p className={styles.highlightText}>Serving 25+ Countries Worldwide</p>
            <div className={styles.tagsGrid}>
              {countries.map((country, index) => (
                <span key={index} className={styles.tag}>{country}</span>
              ))}
            </div>
            <p className={styles.bottomText}>Fast & Reliable Shipping Worldwide</p>
          </div>

          {/* Column 3 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Handshake size={36} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>TRADE ASSOCIATIONS & PARTNERSHIPS</h3>
            <ul className={styles.list}>
              {associations.map((item, index) => (
                <li key={index}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statBox}>
            <h3 className={styles.statNumber}>50+</h3>
            <p className={styles.statLabel}>Global Exports</p>
          </div>
          <div className={styles.statBox}>
            <h3 className={styles.statNumber}>1000+</h3>
            <p className={styles.statLabel}>Local</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalClients;
