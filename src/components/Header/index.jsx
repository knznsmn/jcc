import styles from "./Header.module.css";
import contents from "@/data/contents.json";
import Image from "next/image";
import Link from "next/link";

export default function Header({ nav }) {
  return (
    <header className={styles.header}>
      <Link href="/">
          <Image
            src="/brand/jcc.svg"
            alt={contents.author.name}
            width={40}
            height={40}
          />
      </Link> 

      {nav === "avec" && (
      <nav>
        <ul>
          {contents.navigation.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      )}
    </header>
  );
}