import React from 'react';
import ListPane from '../ListPane';
import style from './../../styles/history.css';

/**
 * @typedef {Object} StatsProps
 * @property {Number[]} scores
 */

/**
 * @param {StatsProps} props
 */
export default function Stats(props) {
  const { scores } = props;

  return (
    <section className="history__flex">
      <span className="history__title">Stats</span>
      <ListPane
        listItems={scores.map((score) =>
          score === 1 ? `1 character` : `${score} characters`,
        )}
        title="Attempt history:"
      ></ListPane>
    </section>
  );
}
