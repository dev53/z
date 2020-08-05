/* eslint-env jest */

const indexOf = require('./indexOf')

describe('indexOf', () => {
  it('should return proper index if element exists', () => {
    const str = 'ab3cd'
    const actual = indexOf.call(str, '3')
    const expected = 2
    expect(actual).toBe(expected)
  })

  it('should return the first index of elem found', () => {
    const str = 'ab3cd3e'
    const actual = indexOf.call(str, '3')
    const expected = 2
    expect(actual).toBe(expected)
  })

  it('should respect the fromIndex param', () => {
    const str = 'ab3cd3e'
    const actual = indexOf.call(str, '3', 3)
    const expected = 5
    expect(actual).toBe(expected)
  })

  it('should return -1 if element do not exists', () => {
    const str = 'ab3cd'
    const actual = indexOf.call(str, '4')
    const expected = -1
    expect(actual).toBe(expected)
  })

  it('should return -1 if element exists but fromIndex is bigger than elem index', () => {
    const str = 'ab3cd'
    const actual = indexOf.call(str, '3', 3)
    const expected = -1
    expect(actual).toBe(expected)
  })

  it('should return -1 if fromIndex is bigger than length', () => {
    const str = 'ab3cd'
    const actual = indexOf.call(str, '3', 10)
    const expected = -1
    expect(actual).toBe(expected)
  })
})
