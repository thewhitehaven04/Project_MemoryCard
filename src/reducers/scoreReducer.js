/**
 * @typedef {Object} GameAction
 * @prop {String} type
 * @prop {{score: Number}} data
 */

/**
 * @typedef {Object} GameState
 * @prop {Number[]} history
 * @prop {{record: Number, currentScore: Number}} score 
 */

/**
 * @param {GameAction} action
 * @param {GameState} state
 */
export default function gameReducer(state, action) {
  if (action.type === 'attempt') {
    if (action.data.score > state.score.record) {
      setScore({ currentScore: action.data.score, record: action.data.score });
    } else setScore({ ...score, currentScore: count });
  };
  }
}