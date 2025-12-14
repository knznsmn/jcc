import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { formatDate } from "@/lib/formatDate";
import styles from "../blog.module.css";
import mdStyles from "./md.module.css";
import Social from "@/components/Social";
import Header from "@/components/Header";
import contents from "@/data/contents.json";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return <section>Post not found</section>;
  return (
    <main className={mdStyles.page}>
      <Header nav="avec"/>
      <article className={mdStyles.post}>
        <h1 className={styles.title}>{post.title}</h1>
        {post.date && <section className={styles.date}>{formatDate(post.date)}
          <hr />
        </section>}
        <section className={mdStyles.md} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <section className={mdStyles.signature}>
        <p>&mdash; Written by {contents.author.name}</p>
      </section>
        </article>
      <Social />
    </main>
  );
}
