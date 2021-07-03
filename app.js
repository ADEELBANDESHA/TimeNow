const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const HOME = fs.readFileSync('index.html')
const ABOUT = fs.readFileSync('index1.html')
const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(HOME);
    }
    else if (url == '/index1') {
        res.end(ABOUT);
    }

    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
