import styles from "./page.module.css";

export default function Ingredients() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Our Ingredients</h1>
      <div className={styles.content}>
        <p>Transparency is the cornerstone of our brand. We source only the highest-grade, organically grown hemp from trusted domestic farms.</p>
        <p>Our extraction process preserves the full spectrum of beneficial cannabinoids, terpenes, and flavonoids without introducing harmful solvents or chemicals.</p>
        <p>From organic MCT oil carriers to naturally derived botanical flavors, every single ingredient is meticulously selected to ensure efficacy, safety, and a luxurious experience.</p>
      </div>
    </div>
  );
}
