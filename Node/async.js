const fs  = require('fs')

console.log('ops: 1')

fs.readFile('./contact.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})


console.log('ops: 2')

// Default thred pool size : 4
// Max pool size : max core of cpu's the machine have