const headers = require('./cors');
const directions = ['left', 'right', 'up', 'down']

var requestHandler = function(request, response) {
  var randomDir = directions[Math.floor(Math.random() * directions.length)]
  if(request.method === 'GET') {
    console.log('randomDir: ' + randomDir);
    response.writeHead(200, headers);
    response.end(randomDir);
  }
}

exports.requestHandler = requestHandler;