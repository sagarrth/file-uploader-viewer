var http = require('http');

function start(){
  var httpServer = http.createServer();

  httpServer.on('request', function (request, response) {
    response.end('Hello world');
  });

  httpServer.listen(3000, function (){
    console.log('server listening on port 3000');
  });
}

module.exports.start = start;
