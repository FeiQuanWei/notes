class foo{
  count = 1;
  get value(){
    return this.count;
  }
  add(){
    console.log(this.count++)
  }
}
console.log(foo.value)