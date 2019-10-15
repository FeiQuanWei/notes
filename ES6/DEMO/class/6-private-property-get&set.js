class foo{
  #pro1 = 1;
  #pro2 = 2;
  get #pro1 (){
    console.log(`get private property pro1`)
  }
  set #pro2 (){
    console.log('get private property')
  }
  getVal(){
    return this.#pro1;
  }
  setVal(){
    this.#pro2 += this.#pro1 
  }
}
let foo1 = new foo()
foo1.getVal()
foo1.setVal()