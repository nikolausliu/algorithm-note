var CQueue = function() {
  // 用来入栈
  this.stack1 = []
  // 用来出栈
  this.stack2 = []
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  // stack1入栈
  this.stack1.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  // 如果stack2不为空，则返回stack2栈顶元素
  if(this.stack2.length) {
      return this.stack2.pop()
  }
  // 如果stack2为空，stack1也为空，则说明队列中已经没有元素了，返回-1
  if(!this.stack1.length) {
      return -1
  }
  // 如果stack2为空,stack1不为空
  // 则需要把stack1依次pop(),并依次push到stack2
  // 这样相当于把stack2相当于把stack1反转了一下
  // 反转完成后stack2.pop()就返回的是栈顶的元素了
  while(this.stack1.length) {
      this.stack2.push(this.stack1.pop())
  }
  return this.stack2.pop()
};