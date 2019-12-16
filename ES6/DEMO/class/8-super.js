class foo{
  constructor(){
    this.x = 2
  }
  print(){
    console.log(this)
  }
}
class foo1 extends foo{
  constructor(x){
    super()
    this.x = x
  }
  asdf(){
    super.print()
  }
}
let foo1_1 = new foo1(4)
foo1_1.asdf()