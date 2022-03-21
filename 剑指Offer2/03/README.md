[剑指 Offer 03. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

# 解法一

```javascript
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
```

这个是比较容易想到的，维护一个stack数组，不断地pop原数组，如果stack里没有pop出的数组项，就把pop出的数组项push进stack；如果stack里包含了pop出的数组项，则说明这一项是重复的，return这一项。

这个方法跑完25个测试用例耗时6468ms，恐怖，但是我把stack数组替换成Set数据结构，逻辑不变，耗时就大幅度减少了。

```javascript
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
```

耗时降低到88ms。

# 解法二

第二种解法，我是从题解里看到的，很巧妙。因为总共有`n`项数组，而数组的值又在 `0 ~ n-1` 这个范围内，根据这个条件，可以把数组值和数组索引对应起来，一个萝卜一个坑，如果有找不到坑的萝卜，那重复的就是这个萝卜了。

```javascript
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
```

```javascript
[2, 3, 1, 0, 2, 5, 3]
// 【遍历】i === 0，进循环
// nums[0] === 2, nums[0] !== 0 
// 交换位置: nums[0] = 2, nums[2] = 0,交换位置后：
[1, 3, 2, 0, 2, 5, 3]
// nums[0] === 1, nums[0] !== 0 
// 交换位置: nums[0] = 3, nums[1] = 1,交换位置后：
[3, 1, 2, 0, 2, 5, 3]
// nums[0] === 3, nums[0] !== 0 
// 交换位置: nums[0] = 0, nums[3] = 0,交换位置后：
[0, 1, 2, 3, 2, 5, 3]
// nums[0] === 0,跳出循环,下一轮遍历
// 【遍历】i === 1，进循环
// nums[1] === 1,跳出循环,下一轮遍历
// 【遍历】i === 2，进循环
// nums[2] === 2,跳出循环,下一轮遍历
// 【遍历】i === 3，进循环
// nums[3] === 3,跳出循环,下一轮遍历
// 【遍历】i === 4，进循环
// nums[4] === 2, nums[4] !== 4
// nums[4] === 2, nums[2] === 2, nums[4] === nums[2], return nums[4],所以结果是2
```