const fs = require('fs');

fs.writeFile('./writeme.txt', 'write something', (err)=>{
    if(err) throw err;

    fs.readFile('./writeme.txt', (err, data)=>{
        if(err) throw err;
        console.log(data.toString());
    })
})