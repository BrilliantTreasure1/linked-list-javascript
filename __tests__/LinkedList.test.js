const { LinkedList } = require('../LinkedList')

describe('LinkedList', () => {
  let list

  beforeEach(() => {
    list = new LinkedList()
  })

  test('append adds elements to the end', () => {
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.head.value).toBe(1)
    expect(list.head.next.value).toBe(2)
    expect(list.head.next.next.value).toBe(3)
  })

  test('prepend adds element to the beginning', () => {
    list.append(2)
    list.prepend(1)
    expect(list.head.value).toBe(1)
  })

  test('insertAt adds element at correct index', () => {
    list.append(1)
    list.append(3)
    list.insertAt(1, 2)
    expect(list.head.next.value).toBe(2)
  })

  test('remove deletes element by value', () => {
    list.append(1)
    list.append(2)
    list.remove(1)
    expect(list.head.value).toBe(2)
  })

  test('removeAt deletes element by index', () => {
    list.append(1)
    list.append(2)
    list.append(3)
    const removed = list.removeAt(1)
    expect(removed).toBe(2)
    expect(list.length).toBe(2)
  })

  test('find returns correct index', () => {
    list.append(10)
    list.append(20)
    list.append(30)
    expect(list.find(20)).toBe(1)
    expect(list.find(99)).toBe(-1)
  })
})
