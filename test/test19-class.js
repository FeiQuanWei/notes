class cla {
  getName(name){
    console.log(name)
  }
  getAge(age){
    console.log(age)
  }
  constructor (a, b) {
    this.a = a
    this.b = b
  }
  add () {
    console.log(this.a + this.b)
  }
}
let cla2 = new cla();
// cla2.getName("asdf");
let cla3 = new cla(1,2)
// cla3.add();

class cla4 extends cla{}
let cla5 = new cla4()
cla5.getName("qwer")