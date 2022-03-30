/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  const pattern = /\s/g
  return s.replace(pattern, '%20')
};