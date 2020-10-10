var http = require ('http');

var server = http.createServer(function (req,res) {
    res.end( "hi, selamat datang di node js" ) ;
});

server.listen(8000);

console.log("server running on http://localhost:8000");