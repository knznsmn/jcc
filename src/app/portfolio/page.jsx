import Header from "@/components/Header";
import Link from "next/link";
import styles from "./portfolio.module.css";
import contents from "@/data/contents.json";
import Social from "@/components/Social";
import Masonry from "@/components/Masonry";

export default function Portfolio() {
    return (
        <>
        <Header nav="avec" />
        <main className="page">
            <section>
                {contents.portfolio.map((project) => (
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
            <Masonry items={contents.gallery || []} />
            <Social />
        </main>
        </>
    );
}