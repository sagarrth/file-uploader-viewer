function route(path, response){
  console.log('received the request: '+path);
  response.end('Hello World');
}

module.exports.route = route;
