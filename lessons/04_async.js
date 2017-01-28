var fs = require('fs');

// var buf = fs.readFileSync('array.js');
var file = process.argv[2];

// var buf = fs.readFileSync(file).toString();
fs.readFile(file, function(err, data){
  if (err) throw err;
  // console.log(data);
  // console.log( data.toString() );
  var string = data.toString();
  var lineCount = (string.split('\n').length) - 1;
  console.log(lineCount);
});
