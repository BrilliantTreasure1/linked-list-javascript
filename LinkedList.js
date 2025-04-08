class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
      this.length = 0
    }
  
    append(value) {
      const newNode = new Node(value)
      if (!this.head) {
        this.head = newNode
      } else {
        let current = this.head
        while (current.next) {
          current = current.next
        }
        current.next = newNode
      }
      this.length++
    }
  
    prepend(value) {
      const newNode = new Node(value)
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
  
    insertAt(index, value) {
      if (index < 0 || index > this.length) return null
      if (index === 0) return this.prepend(value)
  
      const newNode = new Node(value)
      let current = this.head
      let prev = null
      let i = 0
  
      while (i < index) {
        prev = current
        current = current.next
        i++
      }
  
      newNode.next = current
      prev.next = newNode
      this.length++
    }
  
    remove(value) {
      if (!this.head) return null
  
      if (this.head.value === value) {
        this.head = this.head.next
        this.length--
        return
      }
  
      let current = this.head
      let prev = null
  
      while (current && current.value !== value) {
        prev = current
        current = current.next
      }
  
      if (!current) return null
  
      prev.next = current.next
      this.length--
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.length) return null
  
      let current = this.head
      if (index === 0) {
        this.head = current.next
        this.length--
        return current.value
      }
  
      let prev = null
      let i = 0
  
      while (i < index) {
        prev = current
        current = current.next
        i++
      }
  
      prev.next = current.next
      this.length--
      return current.value
    }
  
    find(value) {
      let current = this.head
      let index = 0
  
      while (current) {
        if (current.value === value) return index
        current = current.next
        index++
      }
  
      return -1
    }
  }
  
  module.exports = { LinkedList }
  