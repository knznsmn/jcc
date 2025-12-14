import Image from "next/image";
import contents from "@/data/contents.json";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Social from "@/components/Social";

export default function Home() {
  return (
    <main className={styles.page}>
      <Header />
      <section>
        
        <nav>
          <ul>
            {contents.navigation.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
     <Social /> 
    </main>
  );
}
