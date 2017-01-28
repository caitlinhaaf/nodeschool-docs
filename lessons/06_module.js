// function receiving 3 arguments: dir name, ext filter, callback

module.exports = function (dir, ext){
  var fs = require('fs');
  var path = require('path');

  var extFilter = '.' + ext;

  fs.readdir(dir, function(err, list){
    if (err) throw err;
    for(var i=0; i<list.length; i++){
      if( path.extname(list[i]) == extFilter){
        console.log( list[i] );
      }
    }
  });
}


// OFFICIAL SOLUTION:
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }
