/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    // 遍历数组
    while (nums[i] !== i) {
      // 当 当前遍历项的 索引 与 值 不相等的时候，不断地交换位置，像等后跳出当前while循环
      if (nums[i] === nums[nums[i]]) {
        // 如果【当前遍历项的值】，与【以当前项的值为索引的数组项的值】，相等，则说明当前项重复了，返回当前项的值
        return nums[i];
      }
      // 最重要的步骤，交换位置
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
};