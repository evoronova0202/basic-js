const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let array = domains.map(elem => elem.split('.')).map(elem => elem.reverse());
  for (let i = 0; i < array.length; i++) {
    let key = '';
        for (let j = 0; j < array[i].length; j++) {
      key += `.${array[i][j]}`;
      res.hasOwnProperty(key) ? res[key] = res[key] + 1 : res[key] = 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
