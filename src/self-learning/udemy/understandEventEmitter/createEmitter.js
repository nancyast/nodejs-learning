let Emitter = require('./emitter.js.js');

let emtr = new Emitter();

emtr.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
  console.log('A greeting occured!');
});

emtr.emit('greet');
