/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  while(s.indexOf(' ') !== -1) {
      const index = s.indexOf(' ')
      s = `${s.substr(0, index)}%20${s.substr(index + 1)}`
  }
  return s
};