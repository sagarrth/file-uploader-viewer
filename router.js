function route(urlPath, routeMap, response){
  console.log('received the request: '+urlPath);
  if(typeof routeMap[urlPath]==='function'){
    routeMap[urlPath](response);
  } else if (urlPath==='favicon.ico') {
    response.end();
  } else {
    response.writeHead('404', {'content-type':'text/html'});
    response.end('Page Not Found');
  }
}

module.exports.route = route;
