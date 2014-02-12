global.restify = require('restify');
global.mysql = require('mysql');

//Set up Server
var server = {};
var routes = require('./routes.js');

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

