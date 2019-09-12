let handler = {
  defineProperty(target,key,descriptor){
    console.log(target)
    console.log(key)
    console.log(descriptor)
    return descriptor
  }
}
let proo = {
  _pro:'1'
}
let pro = new Proxy(proo,handler)
pro.asdf = 2
console.log(proo.asdf)