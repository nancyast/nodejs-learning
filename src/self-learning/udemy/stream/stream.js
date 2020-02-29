let fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt', {
  encoding: 'utf8',
  highWaterMark: 32 * 1024, // max size of buffer, set to 32kbytes
});

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
  console.log(chunk.length);
  writable.write(chunk);
});
// A stream is a sequence of pieces of data that broken up into what 's called chunks.
// A chunk: a piece of data being sent through a stream.
// When data is fully filled a chunk, an event 'data' was emitted.
