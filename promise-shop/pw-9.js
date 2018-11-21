function parsePromised(){
    var json = process.argv[2];
    var promise = new Promise((resolve, reject)=>{
        try {
            var pJson = JSON.parse(json);
        } catch (error) {
            reject(error.message);
        }
        resolve(jJson);
    });
    return promise;
}

parsePromised().then(parsePromised).catch(console.log)