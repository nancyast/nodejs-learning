const fs = require('fs');

const string = fs.readFileSync(__dirname + '/data.txt', 'utf8');
const output = string
  .trim()
  .split('\n')
  .map(line => line.split(' '));
console.log('output ', JSON.stringify(output, null, 2));
