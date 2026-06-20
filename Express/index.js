const express = require('express')
const http = require('http')

const app = express();

app.get('/', (req,res)=>{
    return res.end(`Hello ${req.query.name}`)
})

app.get('/about', (req,res)=>{
    return res.end('About Page')
})

app.listen(8082, () => (console.log('Server Started')))