
require('./js/keypressHandler').initialize();
const handler = require('./js/httpHandler');
const requestHandler = require('./js/request-handler').requestHandler;

const http = require('http');
// const server = http.createServer(handler);
const server = http.createServer(requestHandler);


const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
