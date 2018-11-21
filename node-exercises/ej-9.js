var http = require('http');

url1 = process.argv[2];
url2 = process.argv[3];
url3 = process.argv[4];

http.get(url1, function(response1){
    var dataString1 = '';
    response1.on('data', function(data){
        dataString1+=data.toString();
    });
    response1.on('end', function(){
        console.log(dataString1);

        http.get(url2, function(response2){
            var dataString2 = '';
            response2.on('data', function(data){
                dataString2+=data.toString();
            });
            response2.on('end', function(){
                console.log(dataString2);

                http.get(url3, function(response3){
                    var dataString3 = '';
                    response3.on('data', function(data){
                        dataString3+=data.toString();
                    });
                    response3.on('end', function(){
                        console.log(dataString3);
                    });                
                });

            });        
        });

    });
})