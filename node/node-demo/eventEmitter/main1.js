var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function(){
  console.log('事件处理器')
  eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
  console.log('data received succesfully.');
});

eventEmitter.emit('connection');
console.log("Program Ended.");