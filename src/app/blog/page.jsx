import Header from "@/components/Header";
import Link from "next/link";
import styles from "./blog.module.css";
import contents from "@/data/contents.json";

export default function Blog() {
    return (
        <main className="page">
        <Header nav="avec" />
        {contents.projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <section>
              <i className={`icon-${project.name}`}></i>
              <h2>{project.title}</h2>
            </section>

            <p>{project.description}</p>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </Link>
          </article>
        ))}
        </main>
    );
}