import Header from "@/components/Header";
import Link from "next/link";
import styles from "./notes.module.css";
import contents from "@/data/contents.json";
import { getAllNotes } from "@/lib/notes";
import Social from "@/components/Social";

export default function Notes() {
    const notes = getAllNotes();
    const categories = contents.notes?.categories || [];
    const grouped = categories.reduce((acc, cat) => {
        acc[cat] = notes.filter((n) => (n.category || "").toLowerCase() === cat.toLowerCase());
        return acc;
    }, {});
    const uncategorized = notes.filter(
        (n) => !categories.map((c) => c.toLowerCase()).includes((n.category || "").toLowerCase())
    );

    return (
        <main className="page">
            <Header nav="avec" />
            <article>
                <h1 className={styles.title}>Notes</h1>
                {categories.length > 0 && (
                    <section className={styles.categories}>
                        <h2 className={styles.sectionTitle}>Categories</h2>
                        <ul className={styles.categoryList}>
                            {categories.map((cat) => (
                                <li key={cat} className={styles.categoryItem}>{cat}</li>
                            ))}
                        </ul>
                    </section>
                )}

                <section>
                    <h2 className={styles.sectionTitle}>All Notes</h2>
                    {categories.map((cat) => (
                        <div key={cat} className={styles.group}>
                            <h3 className={styles.groupTitle}>{cat}</h3>
                            <ul className={styles.list}>
                                {grouped[cat].map((note) => (
                                    <li key={note.slug} className={styles.item}>
                                        <Link href={`/notes/${note.slug}`}>{note.title || note.slug}</Link>
                                        {note.tags && note.tags.length > 0 && (
                                            <span className={styles.tags}>{note.tags.join(', ')}</span>
                                        )}
                                    </li>
                                ))}
                                {grouped[cat].length === 0 && (
                                    <li className={styles.empty}>No notes yet.</li>
                                )}
                            </ul>
                        </div>
                    ))}

                    {uncategorized.length > 0 && (
                        <div className={styles.group}>
                            <h3 className={styles.groupTitle}>Others</h3>
                            <ul className={styles.list}>
                                {uncategorized.map((note) => (
                                    <li key={note.slug} className={styles.item}>
                                        <Link href={`/notes/${note.slug}`}>{note.title || note.slug}</Link>
                                        {note.tags && note.tags.length > 0 && (
                                            <span className={styles.tags}>{note.tags.join(', ')}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            </article>
            <Social />
        </main>
    );
}