"use client";

import styles from "./Header.module.css";
import contents from "@/data/contents.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header({ nav }) {
  const [isOpen, setIsOpen] = useState(false);

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
        <>
          <button
            className={`${styles.burger} ${isOpen ? styles.open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <ul>
              {contents.navigation.map((item) => (
                <li key={item.link}>
                  <Link href={item.link} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}