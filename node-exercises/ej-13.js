var http = require('http');
var url  = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
        var request = url.parse(req.url, true);
        var date = new Date(request.query.iso);
        if(request.pathname == '/api/parsetime'){
            res.end(JSON.stringify(
            {
                hour: date.getHours(),
                minute:date.getMinutes(),
                second:date.getSeconds()
            }
            ));
        }
        if(request.pathname == '/api/unixtime'){
            res.end(JSON.stringify(
            {
                unixtime: date.getTime()
            }
            ));
        }        

});

server.listen(process.argv[2]);