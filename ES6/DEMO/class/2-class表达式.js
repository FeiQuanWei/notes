class myclass{
  constructor(){

  }
  getMyName(){
    return myclass.name
  }
}
let me = new myclass()
console.log(me.getMyName())