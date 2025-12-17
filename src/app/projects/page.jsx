import Link from "next/link";
import Social from "@/components/Social";
import Header from "@/components/Header";
import styles from "./projects.module.css";
import contents from "@/data/contents.json";

export default function Projects() {
    return (
        <>
        <Header nav="avec" />
        <main className="page">
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