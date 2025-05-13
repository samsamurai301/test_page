const https = require('https');
const fs = require('fs');


// Create a basic HTTPS server
https.createServer((req, res) => {
  res.writeHead(200);
  res.end('✅ Hello from secure Node.js HTTPS server on port 5000!\n');
}).listen(5000, '0.0.0.0', () => {
  console.log('🚀 HTTPS server running at https://0.0.0.0:5000/');
});
