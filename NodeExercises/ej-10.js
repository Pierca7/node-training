var net = require('net');

var server = net.createServer(function (socket) {
    var date = new Date();
    var formatedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;
    socket.end(formatedDate);
});

server.listen(process.argv[2]);
