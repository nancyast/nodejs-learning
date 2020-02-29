let fs = require('fs');

let greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

let greetAsync = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  console.log(data);
});
