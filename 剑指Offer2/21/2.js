/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let l = 0
    let r = nums.length - 1
    const isOdd = (n) => n % 2 === 1
    while(l < r) {
        let n1 = nums[l]
        let n2 = nums[r]
        if(isOdd(n1) && isOdd(n2)) {
            // 两边都是奇数。左指针递增
            l++
        } else if (isOdd(n1) && !isOdd(n2)) {
            // 左边是奇数,右边是偶数。则左指针递增，右指针递减
            l++
            r--
        } else if (!isOdd(n1) && isOdd(n2)) {
            // 左边是偶数，右边是奇数。互换位置
            let tmp = nums[l]
            nums[l] = nums[r]
            nums[r] = tmp
        } else {
            // 左边是偶数，右边是偶数。右指针递减
            r--
        }
    }
    return nums
};