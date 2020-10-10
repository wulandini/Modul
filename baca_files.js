var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {

    //baca file
    fs.readFile('indeks.html', (err, data) => {
        if (err) throw err;

        //kirim respon
        response.writeHead(200, {'content-Type': 'Text/html'});
        response.write(data);
        response.end();
    });
 
}).listen(8000);

console.log("server running on http://localhost:8000");