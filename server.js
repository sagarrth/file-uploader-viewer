var http = require('http');
var url = require('url');
var formdiable = require('formidable');

function start(route, routeMap){
  var httpServer = http.createServer();

  httpServer.on('request', function (request, response) {
    var pathName = url.parse(request.url).pathname;
    route(pathName, routeMap, request, response);
  });

  httpServer.listen(3000, function (){
    console.log('server listening on port 3000');
  });
}

module.exports.start = start;
