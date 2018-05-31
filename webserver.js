const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

<<<<<<< HEAD
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
=======
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
>>>>>>> 40d32cbddfb4bb7a7243beff0a8a9e7733ae8ebf
  console.log(`Server running at http://${hostname}:${port}/`);
});
