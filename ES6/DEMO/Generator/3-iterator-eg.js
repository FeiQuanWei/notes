class foo{
  constructor(start,end){
    this.value = start
    this.end = end
  }
  [Symbol.iterator](){
    return this
  }
  next(){
    if(this.value<this.end){
      this.value++;
      return {
        value:this.value,
        done:false
      }
    }
    return {
      value:undefined,
      done:true
    }
  }
}
for(let a of new foo(0,3)){
  console.log(a)
}