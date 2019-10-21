var str = new String("hi");

// console.log([...str]) // ["h", "i"]

str[Symbol.iterator] = function() {
  return {
    next: function() {
      console.log(this._first)
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};

console.log([...str]) // ["bye"]
// console.log(str) // "hi"