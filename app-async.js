const request = require('request-promise-native');

//Username provided as argument.
const username = process.argv[2];

//If an username wasn't provided, end the program.
if(!username) throw new Error('You must provide an username in order to do the search.');

async function getNumberOfRepos(user){

    //Request URL and header.
    const options = {
        url: `https://api.github.com/users/${user}/repos`,
        headers: {
            'User-Agent': 'pierca7' //GitHub API requirement
        }
    };

    //Get number of repositories.
    try {
        const repos = await (request.get(options));
        const amountRepos = repos.length;
        if(amountRepos == 0){
            console.log('No repositories');
        }
        else if(amountRepos == 3){
            console.log('There are three repositories');
        }
        else if(amountRepos > 3){
            console.log('There are a lot of repositories');
        }
    } catch (error) {
        console.log('I cannot connect to the server');
    }
}

getNumberOfRepos(username);

         




