/**
 * @template T
 */

/**
 * @param {Object[]} arr
 * @returns {Object[]}
 */
function shuffle(arr) {
  return arr
    .map((value) => {
      return { number: Math.random(), val: value };
    })
    .sort((obj1, obj2) => {
      return obj1.number - obj2.number;
    })
    .map((val) => val.val);
}

export { shuffle };
