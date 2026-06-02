import React from 'react';
import { FileText } from 'lucide-react';
import styles from './Certifications.module.css';

const certifications = [
  {
    id: 1,
    title: 'IMPORTER EXPORTER (IEC) CODE',
    type: 'Certified Document',
  },
  {
    id: 2,
    title: 'PAN CARD',
    type: 'Certified Document',
  },
  {
    id: 3,
    title: 'UDYAM REGISTRATION CERTIFICATE',
    type: 'Certified Document',
  },
  {
    id: 4,
    title: 'INCOME TAX (ITR)',
    type: 'Certified Document',
  }
];

const Certifications = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>OUR CERTIFICATIONS & ACCREDITATIONS</h2>
          <p className={styles.subtitle}>Recognized for excellence in quality and authentic Indian handicraft exports</p>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeGroup}>
              {certifications.map((cert) => (
                <div key={cert.id} className={styles.card}>
                  <div className={styles.pdfIconArea}>
                    <div className={styles.pdfIcon}>
                      <FileText size={48} strokeWidth={1.5} />
                      <span className={styles.pdfLabel}>PDF</span>
                    </div>
                  </div>
                  
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certType}>{cert.type}</p>
                  
                  <div className={styles.buttonGroup}>
                    <button className={styles.viewBtn}>View Certificate</button>
                    <button className={styles.downloadBtn}>Download</button>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate group for seamless looping */}
            <div className={styles.marqueeGroup}>
              {certifications.map((cert) => (
                <div key={`${cert.id}-dup`} className={styles.card}>
                  <div className={styles.pdfIconArea}>
                    <div className={styles.pdfIcon}>
                      <FileText size={48} strokeWidth={1.5} />
                      <span className={styles.pdfLabel}>PDF</span>
                    </div>
                  </div>
                  
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certType}>{cert.type}</p>
                  
                  <div className={styles.buttonGroup}>
                    <button className={styles.viewBtn}>View Certificate</button>
                    <button className={styles.downloadBtn}>Download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
