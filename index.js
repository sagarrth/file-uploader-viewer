var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var routeMap = {};
routeMap["/"] = requestHandler.base;
routeMap["/base"] = requestHandler.base;
routeMap["/upload"] = requestHandler.upload;
routeMap["/display"] = requestHandler.display;

server.start(router.route, routeMap);
