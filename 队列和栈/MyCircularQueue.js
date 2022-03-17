class MyCircularQueue {
  constructor(k) {
    this.size = k
    this.head = -1
    this.tail = -1
    this.data = []
  }

  /**
   * 1. 如果队列已满，返回false
   * 2. 如果队列是空的，head设为0
   * 3. tail递增（由于是循环队列，要考虑递增到最大值重置）
   * 4. 给索引tail的数据赋值为value
   * 5. 如果入队成功，返回true
   */
  enQueue(value) {
    if (this.isFull()) return false
    if (this.isEmpty()) {
      this.head = 0
    }
    this.tail = (this.tail + 1) % this.size
    this.data[this.tail] = value
    return true
  }

  /**
   * 1. 如果队列是空的,返回false
   * 2. 如果head与tail相等，把head与tail都设为-1
   * 3. 否则，head递增（循环队列，到最大值重置）
   * 4. 如果出队成功，返回true
   */
  deQueue(value) {
    if (this.isEmpty()) return false
    if (this.head === this.tail) {
      this.head = -1
      this.tail = -1
    } else {
      this.head = (this.head + 1) % this.size
    }
    return true
  }

  /**
   * 1. 如果head是-1就返回-1
   * 2. 否则返回head索引对应的值
   */
  Front() {
    return this.head === - 1 ? -1 : this.data[this.head]
  }

  /**
   * 1. 如果tail是-1就返回-1
   * 2. 否则返回tail索引对应的值
   */
  Rear() {
    return this.tail === - 1 ? -1 : this.data[this.tail]
  }

  /**
   * 如果head和tail都是-1则返回true
   */
  isEmpty() {
    return this.head === - 1 && this.tail === -1
  }

  /**
   * 返回(tail + 1) % size === head
   */
  isFull() {
    return (this.tail + 1) % this.size === this.head
  }
}

// 测试用例
const circularQueue = new MyCircularQueue(3) // 设置长度为 3
console.log(circularQueue.enQueue(1))  // 返回 true
console.log(circularQueue.enQueue(2))  // 返回 true
console.log(circularQueue.enQueue(3))  // 返回 true
console.log(circularQueue.enQueue(4))  // 返回 false，队列已满
console.log(circularQueue.Rear())  // 返回 3
console.log(circularQueue.isFull())  // 返回 true
console.log(circularQueue.deQueue())  // 返回 true
console.log(circularQueue.enQueue(4))  // 返回 true
console.log(circularQueue.Rear())  // 返回 4