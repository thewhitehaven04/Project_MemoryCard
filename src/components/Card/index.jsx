import React from 'react';
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
export default function Card({
  name,
  displayName,
  imagePath,
  handleClick,
}) {
  return (
    <article className="card__flex card" onClick={() => handleClick({ name })}>
      <img className='card__image'
        src={imagePath}
        alt={displayName}
      />
      <span className="card__caption">{displayName}</span>
    </article>
  );
}
