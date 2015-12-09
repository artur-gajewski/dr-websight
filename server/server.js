var restify = require('restify');
var request = require('request');

var server = restify.createServer();
server.post('/ping', function create(req, res, next) {
    request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    res.send(200, {"status":response.statusCode, "description": "OK", "url":req.body.url});
   return next();
  }
    })
   
 });

server.get('/ping', function create(req, res, next) {
    request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    res.send(200, {"status":response.statusCode, "description": "OK", "url":"http://www.google.com"});
   return next();
  }
    })
   
 });

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});