class cla{
  constructor(){

  }
  get prop(){
    console.log('get函数')
  }
  set prop(val){
    console.log('set函数'+val)
  }
}
let cl = new cla()
// cl.prop = 123
cl.prop