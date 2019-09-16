let target = {},
    handler = {};
let {proxy,revoke} = Proxy.revocable(target,handler);
proxy.foo = 123;
console.log(proxy.foo)
revoke()
console.log(proxy.foo)