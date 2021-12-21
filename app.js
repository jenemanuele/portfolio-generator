const fs = require('fs');

const generatePage = require('./src/page-template.js');git 

const profileDataArgs = process.argv.slice(2, process.argv.lenght);

const [profile, github] = profileDataArgs;


fs.writeFile('index.html', generatePage(profile, github), err => {
    if (err) throw err; 

    console.log('Portfolio complete!  Check out index.html to see the output!');
});