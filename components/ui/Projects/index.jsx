import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css"; // Optional CSS module for styling

export default function ProjectGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  const icons = [
    { name: "50MM Photography", src: "/projects/50mm.svg", summary: "Photography portfolio project", link: "https://50mm.jccesar.com"},
    { name: "Herb Garden", src: "/projects/herb.svg", summary: "App for gardening enthusiasts", link: "https://herb.jccesar.com"},
    { name: "AMHA", src: "/projects/amha.svg", summary: "A responsive React website", link: "https://amha.jccesar.com"},
    { name: "NSCP 2015", src: "/projects/nscp.svg", summary: "Digitalized engineers' Bible.", link: "https://nscp.jccesar.com"},
  ];

  const def = {
    summ: "Explore some of the projects I’m working on.",
    name: "Project"
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <div
            key={icon.name}
            onClick={() => handleClick(index)}
            className={styles.icon}
          >
            <Image
              src={icon.src}
              alt={icon.name}
              width={50}
              height={50}
              className={styles.icon}
            />
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        {activeIndex !== null ? (
          <>
            <a
              href={icons[activeIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <h4>{icons[activeIndex].name}</h4>
            </a>
            <p>{icons[activeIndex].summary}</p>
          </>
        ) : (
          <>
            <h4>{def.name}</h4>
            <p>{def.summ}</p>
          </>
        )}
      </div>
    </section>
  );
}
