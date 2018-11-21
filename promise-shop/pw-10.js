function alwaysThrows(){
    throw 'OH NOES';
}

function iterate(i){
    console.log(i);
    return i+1;
}

var promise = Promise.resolve(iterate(1));

promise.then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).catch(function(err){
    console.log(err);
})