const path = require('path');

console.log('dirname:', path.dirname(__filename));
console.log('__filename ', __filename);
console.log('basename:', path.basename(__filename));
console.log('extname:', path.extname(__filename));
console.log('resolve', path.resolve('./sub', '../test.txt'));
console.log('join', path.join('.', 'sub', 'test.txt'));
console.log('relative', path.relative(__dirname, '/Users/thanh'));
console.log('relative', path.relative('/Users/thanh', __dirname));
console.log('__dirname', __dirname);
