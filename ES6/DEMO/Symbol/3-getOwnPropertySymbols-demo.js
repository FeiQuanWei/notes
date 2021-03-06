let size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

let x = new Collection();
Collection.sizeOf(x) // 0

x.add('foo');
console.log(Collection.sizeOf(x)) // 1

console.log(Object.keys(x)) // ['0']
console.log(Object.getOwnPropertyNames(x)) // ['0']
console.log(Object.getOwnPropertySymbols(x)) // [Symbol(size)]
console.log(Reflect.ownKeys(x))