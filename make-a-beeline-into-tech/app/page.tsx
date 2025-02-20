import Link from "next/link"
import styles from "./page.module.css"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
}

const posts: Post[] = [
  {
    id: 1,
    title: "Understanding TypeScript Interfaces",
    excerpt: "Learn how to use TypeScript interfaces to define object shapes and improve your code.",
    date: "2025-05-15",
    slug: "understanding-typescript-interfaces",
  },
  // Add more blog posts here
]

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Make a Beeline into Tech 🐝</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.id} className={styles.card}>
            <h2 className={styles.cardTitle}>
              <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                {post.title}
              </Link>
            </h2>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDate}>{post.date}</span>
              <Link href={`/blog/${post.slug}`} className={styles.cardReadMore}>
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

