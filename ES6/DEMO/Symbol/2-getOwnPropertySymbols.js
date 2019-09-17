let a = Symbol('a')
let b = Symbol('b')
let c = Symbol('c')
let obj = {
  [a]:'hello',
  [b]:'world',
  [c]:'!'
}
let syArr = Object.getOwnPropertySymbols(obj)
console.log(syArr)