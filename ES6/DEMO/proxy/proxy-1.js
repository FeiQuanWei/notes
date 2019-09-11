let obj = new Proxy({},{
  get(target,key,receiver){
    return 35
  }
})
let newObj = Object.create(obj)
console.log(newObj.name)