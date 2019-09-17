function* asdf(){
  console.log(1)
  yield 'hello';
  console.log(2)
  yield 'world';
  console.log(3)
  return 'ending';
}
let lf = asdf()
console.log(lf.next())
console.log(lf.next())
console.log(lf.next())