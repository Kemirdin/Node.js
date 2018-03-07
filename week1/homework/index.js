'use strict';
let state = 10;
const http = require('http');
const server = http.createServer();

server.on('connection', () => {
  console.log('server is connected');
});

server.on('request', (req, res) => {
  console.log('requesting', req.url);
  function setResponse(header) {
    res.setHeader('Content-Type', 'Text-html');
    res.write(
      `<h1 style="background-color:blue;color:white;font-size:46px;">${header}</h1>`
    );
    res.end();
  }
  switch (req.url) {
    case '/add':
      setResponse(state++);
      break;
    case '/remove':
      setResponse(state--);
      break;
    case '/reset':
<<<<<<< HEAD
      setResponse(state = 10);
=======
      setResponse((state = 10));
>>>>>>> f243ee9ebac0802e90efc5d5ab473cd5f4af545d
      break;
    case '/state':
      setResponse(state);
      break;
    default:
      setResponse('Error 404, page not found');
  }
});
const port = 8080;
server.listen(port, () => {
  console.log('We are now listening on port...', port);
});
