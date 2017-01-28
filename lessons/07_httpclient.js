//07 HTTP CLIENT REQUEST
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html

var http = require('http');
var url = process.argv[2];


http.get(url, function(res) {
  // console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(data){
    console.log(data);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

// http.get("http://www.google.com/index.html", function(res) {
//   console.log("Got response: " + res.statusCode);
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });


// OFFICIAL SOLUTION:
// var http = require('http')  
//
//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     })
