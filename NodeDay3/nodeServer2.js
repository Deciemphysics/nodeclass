let net = require('net');

const server = net.createServer((socket) => {
  socket.write('Welcome to Echo Server\r\n');
  socket.on('data', (data) => {
    let textChunk = data.toString('utf8');
    console.log('msg from client: ' + textChunk);
    socket.write('server >' + textChunk);
  });

  socket.on('end', socket.end);
});

server.listen(8124, () => {
  console.log('server is up');
});