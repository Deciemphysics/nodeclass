const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stream = fs.createWriteStream('sayings.txt');

rl.on('line', line => {
  if(line.toLowerCase().trim() === 'exit') {
    stream.close();
    rl.close();
  }
  else {
    stream.write(line + '\n');
  }
});