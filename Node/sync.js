const fs  = require('fs')

console.log('ops: 1')

const data = fs.readFileSync('./contact.txt', 'utf-8')
console.log(data)

console.log('ops: 2')

