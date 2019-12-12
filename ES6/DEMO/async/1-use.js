async function add() {
  throw 'this is a mistake'
}
add().then(e=>console.log(e))
// async function add() {
//   return 'hello world'
// }
// add().then(v=>console.log(v))