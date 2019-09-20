class asdf{
  constructor(value){
    console.log(value)
    this.value = value
  }
  [Symbol.search](asdf){
    console.log(asdf)
    return asdf.indexOf(this.value)
  }
}
'hello word'.search(new asdf('e'))