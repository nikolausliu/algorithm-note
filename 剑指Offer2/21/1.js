/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    const ret = []
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            ret.push(nums[i])
        } else {
           ret.unshift(nums[i]) 
        }
    }
    return ret
};