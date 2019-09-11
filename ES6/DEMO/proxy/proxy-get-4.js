const handler = {
  get (target, key) {
    invariant(key, 'get');
    console.log(1);
    return target[key];
  },
  set (target, key, value) {
    invariant(key, 'set');
    console.log(2);
    target[key] = value;
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}
const target = {};
const proxy = new Proxy(target, handler);
console.log(proxy._prop)
// Error: Invalid attempt to get private "_prop" property
proxy._prop = 'c'
// Error: Invalid attempt to set private "_prop" property