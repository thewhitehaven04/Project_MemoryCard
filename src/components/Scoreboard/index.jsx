/**
 * @typedef {Object} ScoreboardProps
 * @property {Number} record
 * @property {Number} currentScore
 */

import React, { createContext } from "react";
import style from './../../styles/scoreboard.css'

export default function Scoreboard({ record, currentScore }) {
  return (
    <div className='scoreboard__flex scoreboard__padded'>
      <span>Best score: {record}</span>
      <span>Current score: {currentScore}</span>
    </div>
  );
}
