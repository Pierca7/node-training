var fs = require('fs');

module.exports = function(path, ext, callback){
    fs.readdir(path, function(err,list){
        if(err){
            return callback(err);
        }
        var filtered = [];
        list.forEach(element => {
            var extension = element.substring(element.length-ext.length);
            if (ext == extension && element!=ext){
                filtered.push(element);
            }
        });
        return callback(null, filtered);
    });
}
