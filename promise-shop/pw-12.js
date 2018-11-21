var qhttp = require('q-io/http');


qhttp.read('http://localhost:1337').then(function(value){
    console.log(JSON.parse(value))
});