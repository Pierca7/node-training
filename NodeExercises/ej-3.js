var fs = require('fs');

var text = fs.readFileSync(process.argv[2]).toString();
var num = (text.split('\n')).length -1;
console.log(num);