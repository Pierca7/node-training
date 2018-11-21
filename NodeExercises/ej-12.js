var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.method == 'POST'){
        req.on('data', (data) =>{
            res.write(data.toString().toUpperCase());
        });
    }
});

server.listen(process.argv[2]);