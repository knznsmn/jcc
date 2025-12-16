import Link from 'next/link';
import Image from 'next/image';
import styles from './Masonry.module.css';

/**
 * Masonry component for displaying images in golden ratio
 * @param {Array} items - Array of objects with { src, link, alt, orientation }
 * orientation: 'portrait' (1:1.618) or 'landscape' (1.618:1)
 */
export default function Masonry({ items = [] }) {
  return (
    <div className={styles.masonry}>
      {items.map((item, index) => {
        const isPortrait = item.orientation === 'portrait';
        const aspectRatio = isPortrait ? '1 / 1.618' : '1.618 / 1';
        
        return (
          <Link 
            href={item.link} 
            key={index}
            className={`${styles.item} ${isPortrait ? styles.portrait : styles.landscape}`}
          >
            <div 
              className={styles.imageWrapper}
              style={{ aspectRatio }}
            >
              <Image
                src={item.src}
                alt={item.alt || ''}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
