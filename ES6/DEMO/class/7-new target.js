class foo{
  constructor(){
    console.log(new.target)
  }
}
let foo1 = new foo()