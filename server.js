const http = require('http');

http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify({data: 'Hello World!'}))

}).listen(4001, () => {
  console.log('O servidor está rodadndo na porta 4001')
})
