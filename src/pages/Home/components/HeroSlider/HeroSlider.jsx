import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    subtitle: 'Handcrafted Products, Inspired By India',
    title: 'WELCOME TO HIEIL',
    image: '/carousel1.png',
  },
  {
    id: 2,
    subtitle: 'Authentic Indian Craftsmanship',
    title: 'PREMIUM HANDICRAFTS',
    image: '/carousel2.png',
  },
  {
    id: 3,
    subtitle: 'Sustainable & Ethical Practices',
    title: 'GLOBAL EXPORT',
    image: '/carousel3.png',
  },
  {
    id: 4,
    subtitle: 'Preserving Traditional Techniques',
    title: 'TIMELESS ARTISTRY',
    image: '/carousel4.png',
  },
  {
    id: 5,
    subtitle: 'Quality Assured Delivery',
    title: 'WORLDWIDE SHIPPING',
    image: '/carousel5.png',
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.heroSection}>
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
        </div>
      ))}
      
      <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous slide">
        <ArrowLeft size={20} />
      </button>
      <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next slide">
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default HeroSlider;
