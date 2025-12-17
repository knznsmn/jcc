import { getNoteBySlug, getNoteSlugs } from "@/lib/notes";
import styles from "../notes.module.css";
import mdStyles from "./md.module.css";
import Social from "@/components/Social";
import Header from "@/components/Header";
import Copy from "@/components/Copy";

export async function generateStaticParams() {
  const slugs = getNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function NotePage({ params }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) return <section>Note not found</section>;
  return (
    <main className={mdStyles.page}>
      <Header nav="avec"/>
      <article className={mdStyles.post}>
        <h1 className={styles.title}>{note.title || note.slug}</h1>
        {note.category && (
          <section className={styles.meta}>
            <span className={styles.category}>{note.category}</span>
            {note.tags && note.tags.length > 0 && (
              <span className={styles.tags}>{note.tags.join(', ')}</span>
            )}
            <hr />
          </section>
        )}
        <section className={mdStyles.md} dangerouslySetInnerHTML={{ __html: note.contentHtml }} />
      </article>
      <Social />
      <Copy />
    </main>
  );
}
