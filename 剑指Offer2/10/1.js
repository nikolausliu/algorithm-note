/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  if(n < 2) return n
  // 动态规划
  let a = 1, b = 1, mod = 1e9 + 7
  for(let i = 3; i <= n; i++) {
      tmp = (a + b) % mod
      a = b
      b = tmp
  }
  return b
};

/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
  if(n < 2) return 1
  let a = 1, b = 2, mod = 1e9 + 7
  for(let i = 3; i <= n; i++) {
      let tmp = (a + b) % mod
      a = b
      b = tmp
  }
  return b
};