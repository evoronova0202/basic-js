const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let count = 1;
  str.split('').forEach((e, i, array) => {
    if (e === array[i + 1]) {
      count = count + 1;
    } else {
      if(count > 1){
        result.push(`${count}${e}`)
      } else{result.push(e)} 
      count = 1
    }
  })
  return result.join('');
}

module.exports = {
  encodeLine
};
