import type React from "react"
import "./globals.css"
import Link from "next/link"
import styles from "./layout.module.css"

export const metadata = {
  title: "Make a Beeline into Tech",
  description: "A tech blog for beginners by maddy-bee",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
              🐝 Make a Beeline into Tech
            </Link>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.navLink}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>&copy; 2025 Make a Beeline into Tech. All rights reserved. 🌻</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

