let obj = {}
Object.defineProperty(obj,'hidden',{
  value: true,
  enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(obj,'hidden'))
console.log(Reflect.getOwnPropertyDescriptor(obj,'hidden'))