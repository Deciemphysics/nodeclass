let fs = require('fs'),
    path = require('path');
 
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to");
    process.exit(-1);
}
 
var dir = process.argv[2];
 
fs.readdir(dir, function (err, files) {
    if (err) {
        throw err;
    }

    files.forEach( (file) => {
      let loc = path.join(dir, file);
      fs.stat(loc, function(err, stats) {
          if (stats.isFile()) {
            fs.readFile(loc, (err, data)=>{
              console.log(data);
            });
          }
      });
    })
});
  
