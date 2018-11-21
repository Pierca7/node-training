var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000').then(function(value){
    qhttp.read('http://localhost:7001/'+value.toString()).then(function(value2){
        console.log(JSON.parse(value2.toString()));
    });
});