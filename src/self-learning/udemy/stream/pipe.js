let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet.txt');

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

let compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

let gzip = zlib.createGzip(); // Create a transform stream which is readable and writable, transform the data to a compressed version.

// Pipe: connecting two streams.
// In node you pipe from a readable stream to a writable stream.
readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);
