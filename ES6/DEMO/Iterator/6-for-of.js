let a = [1,2,3,4,5,6]
let b = {
  name:'b',
  age:18,
  sex:'boy'
}
for(let n of a){
  console.log(n)
}
for(let n of b){
  console.log(n)
}
for(let [item,index] in a){
  console.log(item)
  console.log(index)
}
for(let (item,index) in b){
  console.log(item)
  console.log(index)
}