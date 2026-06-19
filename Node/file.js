const fs = require('fs')

// sync writing, have return type
// fs.writeFileSync('./contact.txt', 'Ayush Dayal: +91 9988229922')

// async writing : expect callback, return type : void
// fs.writeFile('./contact-async.txt', 'Sham: +91 0000000000', (err)=>{})


// sync reading, have return type
// const result = fs.readFileSync('./contact.txt', 'utf-8')
// console.log(result)

// async reading, have return type
// fs.readFile('./contact-async.txt', 'utf-8', (err, result)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log(result)
//     }
// })




// Appending in file
fs.appendFileSync('./contact.txt', `\nSham: +91 637773778`)


// copy file f1 -> f2
// fs.copyFileSync('./contact.txt', './contacts.txt')

// deleting a file
// fs.unlinkSync('./contact.txt')

// all info about file
console.log(fs.statSync('./contacts.txt').isFile())

// making dir
fs.mkdirSync('test-dir/a/b/c', {recursive: true})