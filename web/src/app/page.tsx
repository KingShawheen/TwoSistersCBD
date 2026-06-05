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
            src="/tincture_v3.png" 
            alt="Two Sisters CBD Tincture"
            fill
            className={styles.heroImage}
            priority
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

      {/* Shop the Collection */}
      <section className={styles.shopSection}>
        <div className={styles.sectionHeader}>
          <span className={`material-symbols-outlined ${styles.sectionIcon}`}>spa</span>
          <h2 className={styles.sectionTitle}>Curated Wellness</h2>
          <p className={styles.heroDesc}>
            Elevate your daily ritual with our meticulously crafted formulations, designed to restore balance and enhance vitality.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Main Product (Tincture) */}
          <div className={styles.mainProduct}>
            <div className={`${styles.productCard} ${styles.mainProductCard}`}>
              <div className={`${styles.badge} ${styles.badgeRight}`}>Bestseller</div>
              <Image 
                src="/tincture_v3.png" 
                alt="Two Sisters CBD Tincture" 
                fill 
                className={styles.productImage}
              />
              <div className={styles.quickAddContainer}>
                <button className={styles.quickAddBtn}>Quick Add</button>
              </div>
            </div>
            <div className={styles.productInfo}>
              <div>
                <h3 className={styles.productTitle}>Two Sisters CBD Tincture</h3>
                <p className={styles.productSubtitle}>Full Spectrum • 1000mg</p>
              </div>
              <span className={styles.productPrice}>$120</span>
            </div>
          </div>

          {/* Side Products */}
          <div className={styles.sideProducts}>
            {/* Gummies */}
            <div>
              <div className={`${styles.productCard} ${styles.sideProductCard}`} style={{ backgroundColor: "var(--color-surface-variant)" }}>
                <Image 
                  src="/gummies_v3.png" 
                  alt="Two Sisters CBD Gummies" 
                  fill 
                  className={styles.productImage}
                />
                <div className={styles.quickAddContainer}>
                  <button className={styles.quickAddBtn}>Quick Add</button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <div>
                  <h3 className={styles.productTitle}>Two Sisters CBD Gummies</h3>
                  <p className={styles.productSubtitle}>Citrus Flavor • Daily Balance</p>
                </div>
                <span className={styles.productPrice}>$85</span>
              </div>
            </div>

            {/* Pet Treats */}
            <div>
              <div className={`${styles.productCard} ${styles.sideProductCard}`} style={{ backgroundColor: "var(--color-tertiary-container)" }}>
                <div className={`${styles.badge} ${styles.badgeLeft}`}>New</div>
                <Image 
                  src="/pettreats_v3.png" 
                  alt="Two Sisters CBD Pet Treats" 
                  fill 
                  className={styles.productImage}
                />
                <div className={styles.quickAddContainer}>
                  <button className={styles.quickAddBtn}>Quick Add</button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <div>
                  <h3 className={styles.productTitle}>Two Sisters CBD Pet Treats</h3>
                  <p className={styles.productSubtitle}>Organic • Calming</p>
                </div>
                <span className={styles.productPrice}>$60</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "96px" }}>
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
            <span>View All Collections</span>
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>trending_flat</span>
          </button>
        </div>
      </section>
    </>
  );
}
