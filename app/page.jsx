
import Hero from '@components/Hero'
import styles from './page.module.css'
import Introduction from '@components/(home)/Introduction';
import Grille from '@components/(home)/Grille';

export const metadata = {
  title: 'Home | Julius C. Cesar',
};
export default function Home() {
  return (
      <main>
        <article className={styles.home}>
          <h1>JCC Creative Concepts</h1>
        </article>
        <Grille />
      </main>
  );
}
