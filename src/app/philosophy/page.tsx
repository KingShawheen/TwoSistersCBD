import styles from "./page.module.css";

export default function Philosophy() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Our Philosophy</h1>
      <div className={styles.content}>
        <p>At Two Sisters CBD, we believe that true wellness is found at the intersection of nature's purity and modern scientific rigor.</p>
        <p>Our approach to botanical luxury is simple: uncompromising quality, transparent sourcing, and elegantly formulated products designed to bring everyday balance back into your life.</p>
        <p>We refuse to compromise on the integrity of our ingredients, ensuring every tincture, edible, and topical is crafted with intention and care.</p>
      </div>
    </div>
  );
}
