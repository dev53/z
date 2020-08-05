module.exports = function indexOf (searchValue = '', fromIndex = 0) {
  const str = this

  for (let index = fromIndex; index < str.length; index++) {
    const element = str[index]
    if (element === searchValue) {
      return index
    }
  }
  return -1
}
