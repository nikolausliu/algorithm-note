/**
 * 十进制数转换为其它进制数
 * @param {Number} num 要被转换的十进制数
 * @param {Number} base 转换结果的进制位
 * @return {String} 转换结果
 */
function decimalToBase(num, base) {
  const stack = []
  let res = ''
  while (num > 0) {
      stack.push(num % base)
      num = Math.floor(num / base)
  }
  while (stack.length > 0) {
      res += stack.pop()
  }
  return res
}

decimalToBase(10, 2) // '1010'

// 以10进制转2进制为例，转换的过程就是：1.不断取模，余数入栈 2.不断从栈顶取数字，拼接出的结果就是转换后的结果
// num = 10, 10 % 2, 余数为0, 商为5, 0入栈 
// num = 5, 5 % 2, 余数为1, 商为2, 1入栈 
// num = 2, 2 % 2, 余数为0, 商为1, 0入栈 
// num = 1, 1 % 2, 余数为1, 商为0, 1入栈
// num = 0, 入栈过程结束, 此时栈为 [0,1,0,1]
// 现在开始从栈顶一个个出栈, 分别得到 1,0,1,0
// 拼接出来得到 '1010', 所以二进制形式的字符串形式结果就是 '1010'