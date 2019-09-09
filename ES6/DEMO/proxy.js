let target = {
  age:1,
  add(){
    return this.age++
  }
}

let pro = new Proxy({
  age:1,
  add(val){
    return val+100
  }
},{
  get:function(target,key,receiver){
    // console.log(target)
    // console.log(key)
    // console.log(receiver)
  },
  set:function(target,key,value,receiver){
    console.log(value)
    console.log('set function')
  },
  apply:function(target,ctx,args){
    
  }
});
pro.age = 2