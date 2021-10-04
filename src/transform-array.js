import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  
  let answer = [...arr];
  const commands =  ['--double-next', '--double-prev', '--discard-prev', '--discard-next'];

  for(let item = 0; item < answer.length; item++) {
    if (commands.includes(answer[item])) {
      switch(answer[item]) {
        case '--double-next': 
          if (!commands.includes(answer[item - 1]) && (item < answer.length - 1))
            answer.splice(item, 0, answer[item + 1]); 
            item++;
          break;
        case '--double-prev': 
          if (!commands.includes(answer[item - 1]) && (item > 0))
            answer.splice(item, 0, answer[item - 1]); 
            item++;
          break;
        case '--discard-next': 
          if (!commands.includes(answer[item + 1]) && (item < answer.length - 1))
            answer.splice(item + 1, 1); 
          break;
        case  '--discard-prev': 
          if (!commands.includes(answer[item + 1]) && (item > 0))
            answer.splice(item - 1, 1); 
          break;
      }
    }
  }
  return answer.filter(el => !commands.includes(el));
}


