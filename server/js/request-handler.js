const headers = require('./cors');

var requestHandler = function(request, response) {
  if(request.method === 'GET') {
    console.log('test');
    response.writeHead(200, headers);
    response.end('work');
  }
}

exports.requestHandler = requestHandler;