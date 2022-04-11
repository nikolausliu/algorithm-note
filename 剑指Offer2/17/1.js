/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
  const ret = []
  const len = Math.pow(10, n) - 1
  for(let i = 1; i <= len; i++) {
      ret.push(i)
  }
  return ret
};