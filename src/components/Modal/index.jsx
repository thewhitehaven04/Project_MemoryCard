import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import style from './../../styles/dialog.css';
import React, { useState } from 'react';

/**
 * @typedef {Object} ModalProps
 * @property {String} title
 */

/** @param {ModalProps} props */
export default function Modal(props) {
  const { title } = props;

  const [display, setDisplay] = useState(true);

  const handleClick = () => setDisplay(false);

  /** displayed by defualt for debugging purposes */
  return (
    display && (
      <div className="dialog-modal__backdrop">
        <div className="dialog-modal dialog-modal_flex">
          <div className="dialog-modal__header dialog-modal__header_flex">
            <span className="dialog-modal__title">{title}</span>
            <button
              type="button"
              className="dialog-modal__button"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="dialog-modal__content">{props.children}</div>
        </div>
      </div>
    )
  );
}
