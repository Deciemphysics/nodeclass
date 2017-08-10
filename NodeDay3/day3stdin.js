let fs = require('fs');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
    fs.appendFile('message.txt', chunk, (err) => {
        if (err) throw err;
        console.log('The file has been updated.');
    });
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});