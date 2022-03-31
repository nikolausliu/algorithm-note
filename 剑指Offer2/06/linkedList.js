class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = this.head
    this.length = 0
  }

  append(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

  prepend(value) {
    const node = new Node(value)
    node.next = head
    this.head = node
    this.length++
  }

  insert(value, index) {
    if (index >= this.length) {
      this.prepend(value)
    }
    const node = new Node(value)
    const { prevNode, nextNode } = this.getPrevNextNode(index)
    prevNode.next = node
    node.next = nextNode
    this.length++
  }

  lookup(index) {
    let count = 0
    let curNode = this.head
    while (count < index) {
      curNode = curNode.next
      count++
    }
    return curNode
  }

  remove(index) {
    const { prevNode, nextNode } = this.getPrevNextNode(index)
    prevNode.next = nextNode.next
    this.length--
  }

  reverse (){
    let i = 0
    let prevNode = null
    let curNode = this.head
  
    while(curNode !== null) {
      let nextNode = curNode.next
      curNode.next = prevNode
      prevNode = curNode
      curNode = nextNode
      console.log(`第${i}循环`)
      console.table({ prevNode, curNode, nextNode, list: JSON.stringify(this) })
      i++
    }
  
    this.head = prevNode
  }

  getPrevNextNode(index) {
    let count = 0
    let prevNode = this.head
    let nextNode = prevNode.next
    while (count < index - 1) {
      prevNode = prevNode.next
      nextNode = prevNode.next
      count++
    }
    return {
      prevNode,
      nextNode
    }
  }
}