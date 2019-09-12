let p = new Proxy(function () {},{
  construct:function(target,args){
    console.log('called: ' + args.join(', '));
    return { value: args[0] * 10 };
  }
})
console.log((new p(1)).value)