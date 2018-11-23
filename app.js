const request = require('request');

//Username provided as argument
const username = process.argv[2];

//If an username wasn't provided, end the program
if(!username) throw new Error('You must provide an username in order to do the search.');

//Request URL and header
const options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
        'User-Agent': 'pierca7' //GitHub API requirement
    }
};

//Callback function
function callback(error, response, body) {
    if(error){
        console.log('I cannot connect to the server');
    }
    else{
        const amountRepos = body.length; //Amount of repos            
        if(amountRepos == 0){
            console.log('No repositories');
        }
        else if(amountRepos == 3){
            console.log('There are three repositories');
        }
        else if(amountRepos>3){
            console.log('There are a lot of repositories');
        }
    }    
}

request(options, callback);