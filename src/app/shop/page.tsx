import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Shop() {
  const products = [
    { id: 'caps', name: 'Balance Capsules', image: '/products/CAPS.webp', price: '$75' },
    { id: 'chill', name: 'Chill Tincture', image: '/products/CHILL.webp', price: '$120' },
    { id: 'gum', name: 'Wellness Gummies', image: '/products/GUM.webp', price: '$85' },
    { id: 'joint', name: 'Joint Support', image: '/products/JOINT.webp', price: '$95' },
    { id: 'pain', name: 'Pain Relief Stick', image: '/products/PAINST.webp', price: '$65' },
    { id: 'pet1', name: 'Paws & Presence Drops', image: '/products/PET-1.webp', price: '$55' },
    { id: 'relax', name: 'Relax Tincture', image: '/products/RELAX.webp', price: '$110' },
    { id: 'zen', name: 'Zen Tincture', image: '/products/ZEN.webp', price: '$130' }
  ];

  return (
    <div className={styles.shopContainer}>
      <header className={styles.shopHeader}>
        <h1 className={styles.shopTitle}>The Full Collection</h1>
        <p className={styles.shopDesc}>Explore our complete range of botanical luxury wellness essentials.</p>
      </header>

      <section className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className={styles.productImage}
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <button className={styles.addToCartBtn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
