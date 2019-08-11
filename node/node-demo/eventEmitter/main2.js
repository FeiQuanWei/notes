var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function(){
  console.log('listener1')
}
var listener2 = function(){
  console.log('listener2')
}
eventEmitter.addListener('connection',listener1)
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
console.log("Listner1 will not listen now.");
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");