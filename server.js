global.restify = require('restify');
global.mysql = require('mysql');

//Set up Server
var server = {};
var routes = require('./routes.js');

//If we don't already have a global listenPort variable that was set
//in bootstrap via a command line arg, use the one in the config file.
if (!listenPort) {
  var listenPort = 7777;
}

server = global.restify.createServer({
  name: "Laptop Factoy"
});

server.use(global.restify.gzipResponse());
server.use(global.restify.requestLogger());
server.use(global.restify.fullResponse());
server.use(global.restify.bodyParser());
server.use(global.restify.queryParser());
//server.use(global.restifyValidator);
//server.use(global.restify.authorizationParser());
routes.route(server);

//START THE SERVER!!!
server.listen(listenPort, function() {
  console.log(server.name + ' listening at ' + server.url);
});


server.use(function(req, req, next) {
console.log('post processor');
  return res.send();
});

