class myclass{
  #asdf=12
  constructor(x,y){
    this.y = y
    this.x = x
  }
  getMyName(){
    // console.log(this.#asdf)
    return myclass.name
  }
}
let asd = new class asdf extends myclass {
  constructor(x,y) {
    super(x,y)
    console.log(this)
    console.log(this.y)
    console.log(this.x)
  }
  getMyName(){
    // console.log(this)
    return super.getMyName()
  }
}(parseInt(1),parseInt(2))
// console.log(myclass)
// console.log(asd.getMyName())
// let me = new myclass()
// console.log(me.getMyName()) 