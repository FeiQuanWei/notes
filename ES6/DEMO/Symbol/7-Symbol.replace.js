class asf{
  [Symbol.replace](...arr){
    console.log(arr)
  } 
}
'hello'.replace(new asf(),'word')