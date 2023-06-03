/**
 * @typedef GalleryProps
 * @property {import('../../service/assets').CardData[]} cards
 * @property {function(Number): void} reportScore
 */

import React, { useState } from 'react';
import Card from '../Card';
import style from './../../styles/gallery.css';
import { shuffle } from '../../utils/array';

/** @param {GalleryProps} param0 */
export default function Gallery({ cards, reportScore }) {
  const [galleryCards, setGalleryCards] = useState(shuffle(cards));
  const [selectedCards, setSelectedCards] = useState([]);

  /**
   * @param {import('../Card').CardProps} param0
   */
  const handleClick = ({ name }) => {
    if (!selectedCards.find((card) => card.name === name)) {
      const newCard = galleryCards.find(
        (galleryCard) => galleryCard.name === name,
      );
      setSelectedCards(selectedCards.concat(newCard));
      reportScore(selectedCards.length + 1);
    } else {
      setSelectedCards([]);
      reportScore(0);
    }

    setGalleryCards(shuffle(galleryCards));
  };

  return (
    <section className="gallery__grid gallery__padded">
      {galleryCards.map((card) => (
        <Card key={card.name} {...card} handleClick={handleClick} />
      ))}
    </section>
  );
}
