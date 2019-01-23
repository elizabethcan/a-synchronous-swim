const headers = require('./cors');
// const directions = ['left', 'right', 'up', 'down']
const directions = require('./keypressHandler').validMessages;
const dequeue = require('./messageQueue').dequeue;

var requestHandler = function(request, response) {
  // var randomDir = directions[Math.floor(Math.random() * directions.length)]
  // if(request.method === 'GET') {
  //   console.log('randomDir: ' + randomDir);
  //   response.writeHead(200, headers);
  //   response.end(randomDir);
  // }
  if (request.method === 'GET') {
    var move = dequeue();
    console.log(move);
    response.writeHead(200, headers);
    response.end(move);
  }
}

exports.requestHandler = requestHandler;