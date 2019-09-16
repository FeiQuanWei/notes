let p = new Proxy({},{
  defineProperty(target,prop,descriptor){
    console.log(target)
    console.log(prop)
    console.log(descriptor)
    return Reflect.defineProperty(target,prop,descriptor)
  }
})
p.foo = 1
console.log(p.foo)