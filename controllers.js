
exports.getLaptops = function(req, res, next) {
  console.log('Calling getLaptops');

  return res.send(500, 'unknown error');
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  res.end(JSON.stringify({laptops:1}));

  return next();
}
