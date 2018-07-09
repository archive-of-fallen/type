/**
 * ©️ WhomHasFallen 2018-2019
 * All rights reserved
 */

class Type {
  constructor(input) {
    this.input = input
  }
  
  /**
   * @param {string|boolean|number} input
   */
  type(input) {
    switch(input) {
      case typeof(input === 'string'):
        console.log('String');
        break;
      case typeof(input === 'boolean'):
        console.log('Boolean');
        break;
      case typeof(input === 'number'):
        console.log('Integer');
        break;
      default:
        throw new Error('Unrecognized type passed!');
    }
  }
}

module.exports = Type;
