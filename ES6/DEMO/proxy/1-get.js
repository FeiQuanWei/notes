var pipe = (function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        console.log(pipeObject)
        console.log(fnName)
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            // console.log(fn)
            return fn(val);
          },value);
        }
        funcStack.push(window[fnName]);
        return oproxy;
      }
    });

    return oproxy;
  }
}());

var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

console.log(pipe(3).double.pow.reverseInt.get);