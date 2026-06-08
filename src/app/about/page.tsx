import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <p>Two Sisters CBD was founded with a singular vision: to elevate the standard of everyday wellness.</p>
        <p>As two sisters deeply passionate about holistic health and uncompromising aesthetics, we noticed a gap in the market for CBD products that were both highly effective and beautifully designed.</p>
        <p>What started as a personal journey to find better, cleaner, and more reliable CBD has blossomed into a brand dedicated to sharing the power of botanical luxury with the world.</p>
      </div>
    </div>
  );
}
