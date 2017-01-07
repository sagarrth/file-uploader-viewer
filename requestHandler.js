var fs = require('fs');
var path = require('path');

function base(response){
  var filepath = path.join(__dirname, '/static/form.html');
  fs.readFile(filepath, 'utf-8', function (err, contents) {
    if(err) throw err;
    response.end(contents);
  });
}

function upload(){

}

function display(){

}

module.exports.base = base;
module.exports.upload = upload;
module.exports.display = display;
