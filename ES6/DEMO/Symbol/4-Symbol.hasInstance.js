class asdf{
  [Symbol.hasInstance](obj){
    return obj instanceof Array
  }
}
console.log( [1,2,3] instanceof new asdf())