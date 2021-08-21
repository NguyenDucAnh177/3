const http = require('http')
const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) =>{
    res.setHeader('Content-type', 'text/html')
    switch(req.url){
        case '/home':
            res.end('<h1>Home page</h1>');
            break;
        case '/about':
            res.end('<h1>About page</h1>') ;
            break;
        default:
            res.end('<h1 style ="color:red">Not found</h1>');
            break;
    }
})


server.listen(port, hostname, ()=>{
    console.log('Server is running!' + port);
})