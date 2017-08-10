const net = require('net');
let fs = require('fs');

const user = Math.ceil (Math.random() * 2);

process.stdin.setEncoding('utf8');

const client = net.createConnection({port: 8124}, ()=>{
  console.log('connected');
  client.write(('1...anyone there?\r\n'));
  client.write('2...what did you say?\r\n');
});
client.on('data', (data)=>{
  console.log('message from server' + data.toString());
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      client.write('User'+user+' : '+chunk);
    };
  });
});
client.on('end', () =>{
  console.log('disconnented from server');
});