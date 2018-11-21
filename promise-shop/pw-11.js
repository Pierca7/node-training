function all(promise1, promise2){
    var array = [];
    var promise = new Promise((resolve, reject) =>{
        resolve(promise1
        .then(r1 => array.push(r1))
        .then(() => promise2)
        .then(r2 => array.push(r2))
        .then(() => array));
    });
    return promise;
}

all(getPromise1(), getPromise2()).then(console.log);