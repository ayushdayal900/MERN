const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    // console.log("Req is received.")
    // console.log(req)
    if(req.url == '/favicon.ico'){return res.end()}
    
    // true : parse query params
    const myUrl = url.parse(req.url, true);
    console.log(myUrl)

    const log = `${Date.now()}, ${req.method}, ${req.url} New Req Received.\n` 
    fs.appendFile('./log.txt', log, (error, data)=>{
        switch(myUrl.pathname){
            case '/': res.end('I am on /')
            break;
            case '/about': 
                const data = {
                    name: myUrl.query.name,
                    id: myUrl.query.id,
                    have: myUrl.query.have
                }
                res.end(`I am on /about 
                    name: ${data.name}, 
                    id: ${data.id},
                    have: ${data.have}`)
            break;
            case '/projects': res.end('I am on /projects')
            break;
            default:
                res.end('404')
        }
    })
})

server.listen(8000, () => {console.log('server started')})