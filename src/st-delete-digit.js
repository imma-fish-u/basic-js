import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

export default function deleteDigit(n) {
  const arr = [...n.toString()].map(Number);
  let biggest = 0;
 
  arr.forEach((el, item) => {
    let array = [...arr];
    array.splice(item, 1);
    let newAnswer = array.join('');
    if (biggest < newAnswer) biggest = newAnswer;
  })
  return +biggest;
}
