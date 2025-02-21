import type { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Make a Beeline into Tech",
  description: "Learn about the Make a Beeline into Tech blog and its author, Maddy.",
}

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Make a Beeline into Tech</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About the Blog</h2>
        <p>
          This blog is designed for beginners who are just starting out on their coding journey. Each post will take you
          through a tutorial using hands-on practical tasks to build your knowledge. At the end of each workshop, you'll
          have a GitHub repository that demonstrates the knowledge you have just learned.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p>
          I'm Maddy, a junior developer hoping to use tech for good and to contribute positively to the tech community.
          If you would like to get in touch, you can find me on{" "}
          <a
            href="https://www.linkedin.com/in/madeleine-walsh-81737498/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          
        </p>
        <Image src="/images/image.png" alt="Image of Maddy" className={styles.image} width={200} height={230}/>
      </section>
    </div>
  )
}

