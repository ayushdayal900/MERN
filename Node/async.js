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



// ------------------>> visual diag

// Thread Pool Thread
//       ↓
// Completes task
//       ↓
// Notifies Event Loop
//       ↓
// Callback queued
//       ↓
// Main Thread executes callback

// --------------->> visual flow

// fs.readFile()
//       |
//       v
// Main Thread
//       |
//       v
// libuv Thread Pool
//       |
//       | Reads file
//       v
// Task Complete
//       |
//       v
// Callback Queue
//       |
//       v
// Event Loop
//       |
//       v
// Main Thread executes callback