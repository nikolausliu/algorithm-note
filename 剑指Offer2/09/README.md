[剑指 Offer 09. 用两个栈实现队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

这题首先要搞懂题目是啥意思...


```
// 1. queue = new CQueue()
stack1 = [], stack2 = []
返回null

// 2. queue.appendTail(1)
stack1 = [1], stack2 = []
返回null

// 3. queue.appendTail(2)
stack1 = [1, 2], stack2 = []
返回null

// 4. queue.deleteHead()
stack1 = [1, 2], stack2 = []
=>
stack1 = [], stack2 = [2, 1]
=> stack2.pop() === 1 =>
stack1 = [], stack2 = [2]
返回1

// 5. queue.deleteHead()
stack1 = [], stack2 = [2]
=> stack2.pop() === 2 =>
stack1 = [], stack2 = []
返回2

// 6. queue.deleteHead()
stack1 = [], stack2 = []
返回-1
```