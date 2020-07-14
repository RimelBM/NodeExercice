const fs = require('fs') ; 

fs.readFile((process.argv[2]), function (err, data) {
  if (err) {
    return console.log(err)
  }
 
  k = data.toString().split('\n').length ;
  console.log(--k) ;
})