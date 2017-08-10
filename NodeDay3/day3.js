let fs = require('fs')
let filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err){
    throw err;  
  } 
  console.log(data)
});

fs.writeFile('message.txt', 'day3stdin.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});