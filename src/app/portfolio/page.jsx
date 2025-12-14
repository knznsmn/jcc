import Header from "@/components/Header";
import Link from "next/link";
import styles from "./portfolio.module.css";
import contents from "@/data/contents.json";
import Social from "@/components/Social";

export default function Portfolio() {
    return (
        <>
        <main className="page">
        <Header nav="avec" />
        <section>
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
            </section>
            <Social />
        </main>
        </>
    );
}