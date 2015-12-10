var restify = require('restify');
var request = require('request');

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.use(restify.CORS());
server.use(restify.fullResponse());

server.post('/ping', function create(req, res, next) {
    request(req.body.url, function (error, response, body) {
        console.log("Pinging: " + req.body.url);
        if (!error) {
            res.setHeader('Content-Type', 'application/json');
            console.log("Got response from " + req.body.url);
            res.send(200, {
                "code": response.statusCode,
                "description": "OK",
                "url": req.body.url
            });
            return next();
        }
    })
 });

server.listen(1235, function() {
    console.log('%s listening at %s', server.name, server.url);
});


