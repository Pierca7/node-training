function attachTitle(s){
    var str = 'DR. ' + s;
    return str;
}

var promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle).then(console.log);