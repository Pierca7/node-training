var fs = require('fs');

var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(err,list){
    if(err){
        return console.error(err);
    }
    var filtered = [];
    list.forEach(element => {
        var extension = element.substring(element.length-ext.length);

        if (ext == extension && element!=ext){
            filtered.push(element);
        }
    });
    console.log(filtered.join('\n'));
});