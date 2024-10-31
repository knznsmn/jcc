import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css"; // Optional CSS module for styling

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(null);

  const icons = [
    { name: "NSCP", src: "/projects/nscp.svg", summary: "National Structural Code Project.", link: "https://www.jimacons.com"},
    { name: "50MM", src: "/projects/50mm.svg", summary: "Photography portfolio project.", link: "https://www.jccesar.com"},
    { name: "AMHA", src: "/projects/amha.svg", summary: "A responsive hotel website.", link: "https://amha.jccesar.com"},
    { name: "Herb Garden", src: "/projects/herb.svg", summary: "A website showcasing responsive design.", link: "https://www.jccesar.com"},
    { name: "MJAJC", src: "/projects/mjajc.svg", summary: "Responsive blog for dumping thoughts.", link: "https://www.jccesar.com"},
    { name: "Word Bride", src: "/projects/mjajc.svg", summary: "Responsive website written in JavaScript.", link: "https://www.jccesar.com"},
  ];

  const defaultSummary = "Explore some of the projects I’ve work on.";

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {icons.map((icon, index) => (
          <a
              key={icon.name}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={50}
                height={50}
                className={styles.icon}
              />
          </a>
        ))}
      </div>

      <div className={styles.summary}>
        <h4>{activeIndex !== null ? icons[activeIndex].name: "Projects"}</h4>
        <p>{activeIndex !== null ? icons[activeIndex].summary : defaultSummary}</p>
      </div>
    </div>
  );
}
