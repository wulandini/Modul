var http = require( 'http' );

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.white('Hello <b>World</b>!');
    res.end();
})

server.listen(8000)
console.log("server running on http://localhost:8000");