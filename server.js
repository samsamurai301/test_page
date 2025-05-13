const http = require('http');

// Create a basic HTTP server
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('✅ Hello from Node.js HTTP server on port 5000!\n');
}).listen(5000, '0.0.0.0', () => {
  console.log('🚀 HTTP server running at http://0.0.0.0:5000/');
});
