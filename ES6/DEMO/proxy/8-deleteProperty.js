let handler = {
  deleteProperty(target,key){
    console.log(key)
    if(key[0] == '_'){
      return false
    }
    return true;
  }
}
let proo = {
  pro:'1'
}
let pro = new Proxy(proo,handler)
delete pro._pro
console.log(proo._pro)