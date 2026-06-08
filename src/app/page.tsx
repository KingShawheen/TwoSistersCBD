import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image 
            src="/hero_lifestyle_v1.png" 
            alt="Two Sisters CBD Lifestyle"
            fill
            className={styles.heroImage}
            priority
            quality={100}
            sizes="100vw"
          />
          <div className={styles.heroGradient} />
          <div className={styles.heroGradientSide} />
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroBox}>
            <span className={styles.heroLabel}>Botanical Collection</span>
            <h1 className={styles.heroTitle}>The New Standard of Botanical Luxury</h1>
            <p className={styles.heroDesc}>
              Experience the intersection of science and style with our curated CBD collection. Formulated for the modern aesthete.
            </p>
            <button className={styles.primaryButton}>
              Shop the Collection
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* The Collection - Editorial Showcase */}
      <section className={styles.editorialSection}>
        <div className={styles.bgBlockBlush} />
        <div className={styles.bgBlockCharcoal} />
        
        <div className={styles.editorialHeader}>
          <h2 className={styles.editorialTitle}>The Collection</h2>
          <p className={styles.heroDesc} style={{color: 'var(--color-on-background)', margin: '0 auto'}}>
            A curated edit of high-fashion wellness essentials.
          </p>
        </div>

        <div className={styles.editorialGrid}>
          
          {/* Tincture */}
          <div className={`${styles.productBlock} ${styles.product1}`}>
            <div className={styles.productImageWrapper}>
              <Image 
                src="/tincture_real.png" 
                alt="The Daily Ritual Tincture" 
                fill 
                className={styles.editorialImage}
              />
            </div>
            <div className={styles.productMeta}>
              <h3 className={styles.productTitle}>The Daily Ritual</h3>
              <p className={styles.productPrice}>$120</p>
              <button className={styles.editorialLink}>Add to Cart</button>
            </div>
          </div>

          {/* Gummies */}
          <div className={`${styles.productBlock} ${styles.product2}`}>
            <div className={styles.productImageWrapper} >
              <Image 
                src="/gummies_real.png" 
                alt="Midnight Confections Gummies" 
                fill 
                className={styles.editorialImage}
              />
            </div>
            <div className={styles.productMeta}>
              <h3 className={styles.productTitle}>Midnight Confections</h3>
              <p className={styles.productPrice}>$85</p>
              <button className={styles.editorialLink}>Add to Cart</button>
            </div>
          </div>

          {/* Pet Treats */}
          <div className={`${styles.productBlock} ${styles.product3}`}>
            <div className={styles.productImageWrapper} >
              <Image 
                src="/treats_real.png" 
                alt="Paws & Presence Pet Treats" 
                fill 
                className={styles.editorialImage}
              />
            </div>
            <div className={styles.productMeta}>
              <h3 className={styles.productTitle}>Paws & Presence</h3>
              <p className={styles.productPrice}>$65</p>
              <button className={styles.editorialLink}>Add to Cart</button>
            </div>
          </div>

        </div>
        
        <div style={{ textAlign: "center", marginTop: "128px", position: "relative", zIndex: 10 }}>
          <button style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px",
            color: "var(--color-primary)",
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            borderBottom: "1px solid var(--color-primary)",
            paddingBottom: "4px",
            transition: "all 0.3s ease"
          }}>
            <span>Shop the Full Collection</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </section>
    </>
  );
}
