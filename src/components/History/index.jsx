import React from 'react';
import ListPane from '../ListPane';
import style from './../../styles/history.css';

/**
 * @typedef {Object} HistoryProps
 * @property {Number[]} scores
 */

/**
 * @param {HistoryProps} props
 */
export default function History(props) {
  const { scores } = props;

  return (
    <section className="history__flex">
      <span>History</span>
      <ListPane
        listItems={scores.map((score) => `Score ${score}`)}
        title="Previous attempts"
      ></ListPane>
    </section>
  );
}
