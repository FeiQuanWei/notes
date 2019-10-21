// let asdf = [1,2,3,4,5]
// let iter = asdf[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
let asdf = {
  [Symbol.iterator](){
    return {
      next:function(){
        console.log(1)
        return {
          value:1,
          done:false
        }
      }
    }
  },
  name:'alice',
  age:12,
  sex:'girl'
}
let iter = asdf[Symbol.iterator]()
console.log(iter.next())