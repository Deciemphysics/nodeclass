const net = require('net');

const server = net.createServer((socket) => {
  
  socket.write('Welcome to my Echo Server \r\n');

  socket.on('data', (data)=>{
    let textChunk = data.toString('utf8');
    console.log('msg from the client: ' + textCheck);
    socket.write('server >' + data);
  })


  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});

// grab an arbitrary unused port.
server.listen(8124, () => {
  console.log('opened server on', server.address());
});