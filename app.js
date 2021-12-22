const fs = require('fs');
const generatePage = require('./src/page-template.js'); 

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [profile, github] = profileDataArgs;

console.log(profile, github);

const pageHTML = generatePage(profile, github);

fs.writeFile('index.html', pageHTML, err => {
    if (err) throw err; 

    console.log('Portfolio complete!  Check out index.html to see the output!');
});