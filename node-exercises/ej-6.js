var ej6Module = require('./ej-6-module');

var path = process.argv[2];
var ext = process.argv[3];

ej6Module(path, ext, function(err, data){
    if(err){
        return console.error(err); 
    }
    return console.log(data.join('\n'));
});
