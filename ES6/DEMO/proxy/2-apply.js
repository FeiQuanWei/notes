var handler = {
  get: function(target, name) {
    console.log(target)
    console.log(name)
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    // console.log(11)
    console.log(thisBinding)
    console.log(args)
    return args[0];
  },

  construct: function(target, args) {
    console.log(111)
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

// console.log(fproxy(1, 2)) // 1

console.log(new fproxy(1, 2)) // {value: 2}
// fproxy.prototype === Object.prototype // true
// fproxy.foo === "Hello, foo" // true