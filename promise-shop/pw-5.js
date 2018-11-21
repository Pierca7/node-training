var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

promise.then((data)=>{
    console.log(data);
});

console.log('MAIN PROGRAM')