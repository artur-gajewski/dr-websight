var restify = require('restify');
var request = require('request');
var pg = require('pg');
var config = require('config');

var server = restify.createServer();

var dbConfig = config.get('Server.dbConfig');
var conString = "postgres://"+dbConfig.user+":"+dbConfig.password+"@"+dbConfig.host+"/"+dbConfig.dbName;

var client = new pg.Client(conString);
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.use(restify.CORS());
server.use(restify.fullResponse());

var handleError = function(err) {
  // no error occurred, continue with the request
  if(!err) return false;

  if(client){
    done(client);
  }
  res.send(500, {
    "code": "500",
    "description": err,
    "url": req.body.url
  });
  return true;
};

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
    } else {
      res.send(200, {
        "code": "DNS-3",
        "description": "Not Found",
        "url": req.body.url
      });
      return next();
    }
  })
 });

server.post('/url', function create(req, res, next) {
     // get a pg client from the connection pool
  pg.connect(conString, function(err, client, done) {

    // handle an error from the connection
    if(handleError(err)) return;

    // record the visit
    client.query('INSERT INTO URI (uri) VALUES ($1)', [req.body.url], function(err, result) {

      // handle an error from the query
      if(handleError(err)) return;
      res.send(200, {
        "code": "200",
        "description": "OK",
        "url": req.body.url
      });
      done();
    });
  });
});

server.get('/urls', function create (req, res, next) {
  pg.connect(conString, function(err, client, done) {

    // handle an error from the connection
    if(handleError(err)) return;

    // record the visit
    // get the total number of visits today (including the current visit)
    client.query('SELECT * FROM uri', function(err, result) {

      // handle an error from the query
      if(handleError(err)) return;

      // return the client to the connection pool for other requests to reuse
      done();
      var rows = result.rows;
      res.send(200, {
             rows
      });
    });
  });
});

server.del('/url/:uuid', function rm (req, res, next) {
  pg.connect(conString, function(err, client, done) {

    // handle an error from the connection
    if(handleError(err)) return;

    // record the visit
    // get the total number of visits today (including the current visit)
    client.query('DELETE FROM uri WHERE id = $1',[req.params.uuid], function(err, result) {

      // handle an error from the query
      if(handleError(err)) return;

      // return the client to the connection pool for other requests to reuse
      done();
      res.send(200, {
        "code": "200",
        "description": "DEL OK",
        "url": req.body.url
      });
    });
  });
});

server.put('/url/:uuid', function rm (req, res, next) {
  pg.connect(conString, function(err, client, done) {

    // handle an error from the connection
    if(handleError(err)) return;

    // record the visit
    // get the total number of visits today (including the current visit)
    client.query('UPDATE uri SET uri=$2 WHERE id = $1',[req.params.uuid, req.body.url], function(err, result) {

      // handle an error from the query
      if(handleError(err)) return;

      // return the client to the connection pool for other requests to reuse
      done();
      res.send(200, {
        "code": "200",
        "description": "UPDATE OK",
        "url": req.body.url
      });
    });
  });
});


server.listen(1235, function() {
  console.log('%s listening at %s', server.name, server.url);
});
