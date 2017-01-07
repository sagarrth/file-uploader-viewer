var http = require('http');
var url = require('url');
var router = require('./router');
function start(){
  var httpServer = http.createServer();

  httpServer.on('request', function (request, response) {
    var pathName = url.parse(request.url).pathname;
    router.route(pathName, response);
  });

  httpServer.listen(3000, function (){
    console.log('server listening on port 3000');
  });
}

module.exports.start = start;
