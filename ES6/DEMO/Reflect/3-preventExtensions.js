const asdf = {}
console.log(Object.isExtensible(asdf))
console.log(Reflect.isExtensible(asdf))
Reflect.preventExtensions(asdf)
console.log(Reflect.isExtensible(asdf))