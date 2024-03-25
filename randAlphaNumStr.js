function alphaNumericString(givenlength) {
  let str = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < givenlength; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return str
}

let resultStr = alphaNumericString(18)
console.log(resultStr)
