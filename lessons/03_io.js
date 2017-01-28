var fs = require('fs');

// var buf = fs.readFileSync('array.js');
var file = process.argv[2];

var buf = fs.readFileSync(file).toString();
var lineCount = buf.split('\n').length;
var count = lineCount - 1;

console.log(count);
