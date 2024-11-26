"use client";
import React from 'react'
import styles from './portfolio.module.css'
import Masonry from '@components/Masonry'

const items = [
  { src: '/portfolio/masonry/cards.jpg',
    alt: 'Card Gen',
    heading: 'Card Gen',
    description: 'Presentation & Print',
    link: '/projects/cards'
  },
  { src: '/portfolio/masonry/50mm.jpg',
    alt: 'Photography Website',
    heading: '50mm Lens',
    description: 'Photography & Responsive Design',
    link: '/projects/50mm'
  },
    { src: '/portfolio/masonry/mjajc.jpg',
    alt: 'Logo Design',
    heading: 'MJAJC',
    description: 'Logo Design & Branding',
    link: '#'
  },
  { src: '/portfolio/masonry/poster.jpg',
    alt: 'Poster Design',
    heading: 'Branding',
    description: 'A branding design for a client project.',
    link: '/projects/branding'
  },

];

const Portfolio = () => {
  return (
    <main>
      <article className={styles.portfolio}>
        <h1>Portfolio</h1>
        <Masonry items={items} />
      </article>
    </main>
  )
}

export default Portfolio
