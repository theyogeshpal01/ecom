import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Product.module.css';
import ProductGallery from './components/ProductGallery/ProductGallery';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ProductDetailsTab from './components/ProductDetailsTab/ProductDetailsTab';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import { products } from '../../data/products';

const Product = () => {
  const { id } = useParams();
  
  // Scroll to top when the ID changes (like when clicking a related product)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find product, fallback to the first product if not found just to ensure something renders
  const product = products.find(p => p.id === parseInt(id)) || products[0];

  if (!product) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Product not found</div>;
  }

  return (
    <main className={styles.productPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbContainer}>
          <Link to="/">Home</Link> / <span>{product.name}</span>
        </div>
      </div>

      {/* Main Top Section: Gallery + Info */}
      <section className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column: Image Gallery */}
            <div className={styles.galleryColumn}>
              <ProductGallery product={product} />
            </div>
            
            {/* Right Column: Product Details & Cart Actions */}
            <div className={styles.infoColumn}>
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Tabs, Description, Banner */}
      <ProductDetailsTab product={product} />

      {/* Related Products Carousel */}
      <RelatedProducts />

    </main>
  );
};

export default Product;
