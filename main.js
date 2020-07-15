var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을 사용할 것이다

function templateHTML(title, list, body){
  return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${body}
    </body>
    </html>
    `;
}
function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while (i < filelist.length) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i++;
  }
  list += '</ul>';
  return list;``
}

var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    fs.readdir('./data', function(error, filelist) {
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
        if(queryData.id === undefined){
          var title = 'Welcome';
          var description = 'hello, Node.js';
        }else{
          var title = queryData.id;
        }
        var template = templateHTML(title, templateList(filelist), `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);
      });
    })
  } else {
    response.writeHead(404); // 404는 에러의 약속된 번호
    response.end('Not found');
  }
});
app.listen(3000);
