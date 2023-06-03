import React, { useState } from 'react';
import style from './../../styles/card.css';

/**
 * @typedef {Object} CardProps
 * @property {String} name
 * @property {function(CardProps): void} handleClick click handler callback function
 * @property {Number} [height]
 * @property {Number} [width]
 * @property {String} [displayName]
 * @property {String} [imagePath]
 */

/** @param {CardProps} props */
export default function Card({ name, displayName, imagePath, handleClick }) {
  const [playAnimation, setPlayAnimation] = useState(false);

  const handleOwnClick = () => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation((animation) => {
        return !animation;
      });
      handleClick({ name });
    }, 200);
  };

  return (
    <article
      className={'card__flex card' + (playAnimation ? ' card__animate' : '')}
      onClick={handleOwnClick}
    >
      <img className="card__image" src={imagePath} alt={displayName} />
      <span className="card__caption">{displayName}</span>
    </article>
  );
}
