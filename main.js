import { LinkedList } from './LinkedList.js'

const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.print()

list.prepend(5)
list.print()

list.insertAt(2, 15)
list.print()

list.remove(20)
list.print()

console.log('Find 15:', list.find(15))
console.log('Remove at 2:', list.removeAt(2))
list.print()
