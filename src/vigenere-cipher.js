import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor() {}

  static checkValues(mess, key) {
    if (mess === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
  }

  encrypt(mess, key) {
    VigenereCipheringMachine.checkValues(mess, key);

    let item = 0;
    return mess.split('')
      .map((el) => {
        let char = el.toLowerCase().charCodeAt() - 97;
        if (item == key.length) key += key;
        if ((char >= 0) && (char < 26)) {
          char = (char + key[item].toLowerCase().charCodeAt() - 97) % 26;
          item++;
          return el = String.fromCharCode(char + 97);
        } 
        return el;
      }).join('').toUpperCase();
  }

  decrypt(mess, key) {
    VigenereCipheringMachine.checkValues(mess, key);

    let item = 0;
    return mess.split('')
      .map((el) => {
        let char = el.toLowerCase().charCodeAt() - 97;
        if (item == key.length) key += key;
        if ((char >= 0) && (char < 26)) {
          char = (char - (key[item].toLowerCase().charCodeAt() - 97)) % 26;
          item++;
          return el = String.fromCharCode(((char < 0) ? char + 26 : char)  + 97);
        } 
        return el;
      }).join('').toUpperCase();

    }
}
