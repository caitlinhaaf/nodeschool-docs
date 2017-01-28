// ( param 1) print list of files in given directory...
//(param 2) sort list by file ext...

var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext = '.' + process.argv[3];
// console.log(directory, ext);

// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html
   
fs.readdir(directory, function(err, list){
  if (err) throw err;

  for(var i=0; i<list.length; i++){
    if( path.extname(list[i]) == ext){
      console.log( list[i] );
    }
  }
});
