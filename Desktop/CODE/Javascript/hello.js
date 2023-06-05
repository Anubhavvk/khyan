// Importing the built-in 'http' module
const http = require('http');

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.setHeader('Content-Type', 'text/plain');

  // Writing the response
  res.end('Hello, World!');
});

// Starting the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
