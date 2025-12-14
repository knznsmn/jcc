import styles from "./Header.module.css";
import contents from "@/data/contents.json";
import Image from "next/image";
import Link from "next/link";

export default function Header({ nav }) {
  return (
    <header className={styles.header}>
      <Image
        src="/brand/icon.png"
        alt={`${contents.website.title} Logo`}
        width={50}
        height={50}
      />

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