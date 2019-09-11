let pro = new Proxy({
  age:1,
  add(val){
    return val+100
  }
},{
  get:function(target,key,receiver){
    console.log(target)
    console.log(key)
    console.log(receiver);
    console.log('....................')
  },
  set:function(target,key,value,receiver){
    // console.log(target)
    // console.log(key)
    // console.log(value)
    // console.log('set function')
    // console.log('....................')
  }
});
pro.age++
//  = 2