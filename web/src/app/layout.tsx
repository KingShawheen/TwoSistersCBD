import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Two Sisters CBD | The New Standard of Botanical Luxury",
  description: "Experience the intersection of science and style with our curated CBD collection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <button aria-label="Toggle Menu" className="material-symbols-outlined" style={{ display: "none" /* Handle mobile later */ }}>
              menu
            </button>
            <Link href="/" className={styles.brandLogo} style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="Two Sisters CBD Logo" style={{ height: "60px", width: "auto", objectFit: "contain" }} />
            </Link>
            <ul className={styles.navLinks}>
              <li><Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>Shop</Link></li>
              <li><Link href="/" className={styles.navLink}>Philosophy</Link></li>
              <li><Link href="/" className={styles.navLink}>Ingredients</Link></li>
              <li><Link href="/" className={styles.navLink}>About</Link></li>
            </ul>
            <div className={styles.navActions}>
              <button aria-label="Cart" style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        
        <main className={styles.mainContent}>
          {children}
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <h4>Two Sisters CBD</h4>
              <p>Curated wellness for the modern aesthete. High-fashion minimalism meets botanical luxury.</p>
            </div>
            <div className={styles.footerCol}>
              <h4>Explore</h4>
              <Link href="/">Shop All</Link>
              <Link href="/">Our Story</Link>
              <Link href="/">Journal</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>Support</h4>
              <Link href="/">Wholesale Portal</Link>
              <Link href="/">Shipping & Returns</Link>
              <Link href="/">Contact</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>The Inner Circle</h4>
              <p>Subscribe for exclusive access to new releases and curated insights.</p>
              <form className={styles.newsletterForm}>
                <input type="email" placeholder="Email Address" required />
                <button type="submit" aria-label="Subscribe">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </form>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Two Sisters CBD. All rights reserved.</p>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="#">IG</Link>
              <Link href="#">PI</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
