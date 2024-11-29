"use client";
import React from 'react'
import styles from './portfolio.module.css'
import Masonry from '@components/Masonry'

const items = [
  { src: '/portfolio/masonry/cards.jpg',
    alt: 'Card Gen',
    heading: 'Card Gen',
    description: 'Presentation & Print',
    link: '#'
  },
  { src: '/portfolio/masonry/50mm.jpg',
    alt: 'Photography Website',
    heading: '50mm Lens',
    description: 'Photography & Responsive Website',
    link: 'https://50mm.jccesar.com'
  },
    { src: '/portfolio/masonry/mjajc.jpg',
    alt: 'Logo Design',
    heading: 'Graphics',
    description: 'Logo Design & Branding',
    link: '#'
  },
  { src: '/portfolio/masonry/creation.jpg',
    alt: 'Composition',
    heading: 'Composition',
  description: 'Collage & Digital Art',
    link: '/projects/branding'
  },
  { src: '/portfolio/masonry/poster.jpg',
    alt: 'Poster Design',
    heading: 'Branding',
    description: 'Poster Design',
    link: '#'
  },
  { src: '/portfolio/masonry/cards-responsive.jpg',
    alt: 'Responsive Web Design',
    heading: 'Web Design',
    description: 'Responsive Web Design',
    link: 'https://amha.jccesar.com'
  },
  { src: '/portfolio/masonry/cover.jpg',
    alt: 'Social media cover design',
    heading: 'Social Media',
    description: 'Cover Design',
    link: '#'
  },

];

const Portfolio = () => {
  return (
    <main>
      <article className={styles.portfolio}>
        <h1>Portfolio</h1>
        <p className={styles.lead}>Graphic Design/Web Development</p>
        <Masonry items={items} />
      </article>
    </main>
  )
}

export default Portfolio
