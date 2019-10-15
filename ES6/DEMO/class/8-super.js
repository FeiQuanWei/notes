class foo{
  constructor(a,b){
    console.log(a+b)
  }
  add(){
    console.log('function of parent')
  }
}
class foo1 extends foo{
  constructor(){
    super(1,2)
    super.add()
  }
}
let foo1_1 = new foo1()