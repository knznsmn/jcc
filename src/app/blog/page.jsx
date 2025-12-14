import Header from "@/components/Header";
import Link from "next/link";
import styles from "./blog.module.css";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/formatDate";
import Social from "@/components/Social";

export default function Blog() {
    const posts = getAllPosts();
    return (
        <main className="page">
            <Header nav="avec"/>
            <article>
            <h1 className={styles.title}>Blog</h1>
            <ul className={styles.list}>
                {posts.map((post) => (
                  <li key={post.slug} className={styles.item}>
                      {post.date && <div className={styles.date}>{post.date}</div>}
                        <Link href={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>
                        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                    </li>
                ))}
            </ul>
            </article>
            <Social />
        </main>
    );
}