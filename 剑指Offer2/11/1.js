/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
  // 设置left和right指针分别指向首尾
  let left = 0
  let right = numbers.length - 1
  // 当left小于right的时候while循环（最后的结果是left等于right）
  while(left < right) {
      // 取left与right的中位向下取整为mid
      let mid = Math.floor((left + right) / 2)        
      if(numbers[mid] > numbers[right]) {
          // 当mid指向的值大于right指向的值，说明应该在[mid+1, right]这个区间继续找
          left = mid + 1
      } else if(numbers[mid] < numbers[right]) {
          // 当mid指向的值小于right指向的值，说明应该在[left, mid]这个区间继续找
          right = mid
      } else {
          // 除了上面两种情况，还有mid指向的值等于right指向的值的情况
          // 比如[1,0,1,1,1]和[1,1,1,0,1]这两种情况
          // 上面这两种情况,mid都是2,但是我们不知道递增的是在mid的左边区间还是右边区间
          // 这种情况下，我们需要遍历[left, right]区间找到最小值，这个最小值就是最终的返回值
          let n = numbers[left]
          for(let i = left; i <= right; i++) {
              if(numbers[i] < n) {
                  n = numbers[i]
              }
          }
          return n
      }
  }
  // while循环结束后，left === right，此时left(或right)指向的值就是我们要找的值
  return numbers[left]
};