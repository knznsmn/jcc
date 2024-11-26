import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '@components/Modal';
import styles from './Masonry.module.css';

const Masonry = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleOverlayClick = (link) => {
    window.location.href = link;
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.masonry}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <Image
            src={item.src}
            alt={item.alt}
            layout="responsive"
            width={200}
            height={200}
            className={styles.image}
            onClick={() => handleImageClick(item)}
          />
          <div className={styles.overlay} onClick={() => handleOverlayClick(item.link)}>
            <h2 className={styles.heading}>{item.heading}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
      {selectedImage && (
        <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Masonry;