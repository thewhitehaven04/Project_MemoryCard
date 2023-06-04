import React from 'react';
import { ListOrder } from './listOrder';
import style from './../../styles/listpane.css';
/**
 * @typedef {Object} ListPaneProps
 * @property {String[]} listItems
 * @property {String} title
 * @property {ListOrder} [order]
 */

/**
 * @param {ListPaneProps} props
 */
export default function ListPane(props) {
  return (
    <div>
      <span>{props.title}</span>
      <ul className='listpane__flex'>
        {props.listItems.map((item) => (
          <li key={crypto.randomUUID()}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
