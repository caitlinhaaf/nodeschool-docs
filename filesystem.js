// sychronous read
var fs = require('fs');
var text = fs.readFileSync( 'random.txt' , 'utf-8' );
console.log( text );

// async read
fs.readFile('random.txt', 'utf-8', function(err, text){
  if(err) throw err;
  console.log(text);
});

console.log("we're done programming!");
