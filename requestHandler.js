var fs = require('fs');
var path = require('path');
var formidable = require('formidable');

function base(request, response){
  var filepath = path.join(__dirname, '/static/form.html');
  response.writeHead('200',{'content-type':'text/html'});
  fs.createReadStream(filepath, 'utf-8').pipe(response);
}

function upload(request, response){
  var form = new formidable.IncomingForm();
  form.parse(request, function (error, fields, files) {
    fs.readFile(files.uploadedFile.path, function(error, data){
      if(error) throw error;
      var filePath = path.join(__dirname,'static', files.uploadedFile.name);
      fs.writeFile(filePath, data, function(error){
        response.writeHead('200', {'content-type':'text/html'});
        response.write('File uploaded<br>');
        response.end('<a href="/display">Directory</a>');
      });
    });
  });
}

function display(request, response){
  var directoryPath = path.join(__dirname,'static');
  fs.readdir(directoryPath, function(error, filesArr){
    if(error) throw error;
    response.writeHead('200', {'content-type':'text/html'});
    filesArr.forEach(function(name){
      response.write(name+'<br>');
    });
    response.end('<a href="/base">Upload more files</a>');
  });
}

module.exports.base = base;
module.exports.upload = upload;
module.exports.display = display;
