import React from 'react';
import styles from './ShopByCategories.module.css';

const categories = [
  { id: 1, name: 'BLUE POTTERY', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500&auto=format&fit=crop' },
  { id: 2, name: 'METAL CRAFT', image: 'https://images.unsplash.com/photo-1577908976451-c67be8f9b940?q=80&w=500&auto=format&fit=crop' },
  { id: 3, name: 'STONE ART', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?q=80&w=500&auto=format&fit=crop' },
  { id: 4, name: 'WOODEN DECOR', image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=500&auto=format&fit=crop' },
  { id: 5, name: 'LUXURY CLOCKS', image: 'https://images.unsplash.com/photo-1508013861974-9f6347ce682c?q=80&w=500&auto=format&fit=crop' },
];

const ShopByCategories = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>SHOP BY CATEGORIES</h2>
        <p className={styles.subtitle}>Explore our diverse range of authentic Indian handicrafts</p>
      </div>

      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryItem}>
            <div className={styles.imageContainer}>
              <img src={category.image} alt={category.name} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
            </div>
            <h3 className={styles.categoryName}>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategories;
