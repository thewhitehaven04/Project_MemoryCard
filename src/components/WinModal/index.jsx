import React from 'react';
import Modal from '../Modal';

/**
 * @typedef {Object} WinModalProps 
 * @property {Number} score
 * @property {Number} maxScore 
 */

/**
 * @param {WinModalProps} props
 */
export function WinModal(props) {
  const { score, maxScore } = props;
  return (
    <Modal title="Victory">
      <span>
        You've won! You've correctly guessed {score} cards out of{' '}
        {maxScore} possible.
      </span>
    </Modal>
  );
}
