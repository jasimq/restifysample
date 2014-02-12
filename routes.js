var controllers = require('./controllers.js');

exports.route = function route(server) {
  server.get('/laptops', controllers.getLaptops);
};
