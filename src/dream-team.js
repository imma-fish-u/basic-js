import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let team = '';

  if (!Array.isArray(members)) return false;
  members
  .filter((el) => typeof el === 'string')
  .map(el => {
    if (typeof el === 'string') {
      return el.trim();
    }
  })
  .forEach(el => team += el[0].toUpperCase());
  return team.split('').sort().join('');
}
