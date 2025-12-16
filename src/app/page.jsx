import Image from "next/image";
import contents from "@/data/contents.json";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Social from "@/components/Social";
import { Darkmode } from "@/components/Darkmode";

export default function Home() {
  return (
    <>
    <Header />
    <main className={styles.main}>
      <Darkmode />
      <nav>
        <ul>
          {contents.navigation.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Social />
    </main>
    </>
  );
}
