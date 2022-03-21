/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  const stack = []
  while(nums.length) {
      const num = nums.pop()
      if (stack.indexOf(num) === -1) {
          stack.push(num)
      } else {
          return num
      }
  }
};
