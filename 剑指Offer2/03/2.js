/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  const set = new Set()
  while(nums.length) {
      const num = nums.pop()
      if (set.has(num)) {
          return num
      } else {
          set.add(num)
      }
  }
};