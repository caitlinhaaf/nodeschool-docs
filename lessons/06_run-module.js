var mymodule = require('./module.js');
// console.log("hello world...");
// console.log(process.argv[0]);
var directory = process.argv[2];
var ext = process.argv[3];

// console.log(directory, ext);

mymodule(directory, ext);

// OFFICIAL SOLUTION:
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
