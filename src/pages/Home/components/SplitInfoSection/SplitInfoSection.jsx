import React from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './SplitInfoSection.module.css';

const SplitInfoSection = ({ 
  subtitle, 
  title, 
  paragraphs, 
  buttonText, 
  imageSrc, 
  imageAlt, 
  reverse = false 
}) => {
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
          <h2 className={styles.title}>{title}</h2>
          
          <div className={styles.paragraphs}>
            {paragraphs.map((text, idx) => (
              <p key={idx} className={styles.paragraph}>{text}</p>
            ))}
          </div>
          
          {buttonText && (
            <button className={styles.actionBtn}>
              {buttonText}
            </button>
          )}
        </div>
        
        <button className={styles.scrollUpBtn} aria-label="Scroll up">
          <ArrowUp size={20} />
        </button>
      </div>
    </section>
  );
};

export default SplitInfoSection;
