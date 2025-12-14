import Link from 'next/link';
import styles from './Social.module.css';
import contents from '@/data/contents.json';
export default function Social() {
    return (
        <section className={styles.social}>
        {contents.author.social.map((s) => (
          <Link key={s.name} href={s.link} target="_blank" rel="noopener noreferrer">
            <i className={`icon-${s.name}`}></i>
          </Link>
        ))}
      </section>
    );
}