var restify = require('restify');
var request = require('request');

var server = restify.createServer();

server.post('/ping', function create(req, res, next) {
    request(req.body.url, function (error, response, body) {
      if (!error) {
        res.send(200, {"status":response.statusCode, "description": "OK", "url":req.body.url});
        return next();
      }
    })
   
 });

server.listen(1235, function() {
  console.log('%s listening at %s', server.name, server.url);
});
