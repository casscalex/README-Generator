// packages installed
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// questions asked
const form = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'tile',
        message: 'What is your repository name?'
    },
    { 
        type: 'input',
        name: 'description',
        message: 'Enter a description of your?',
    }
]

// write README File
function writeToFile(data) {
    return fs.writeFile('README.md', generateMarkdown(data), err => {
        if (err) {
            return console.log(err);
        }
    })
}

// initialize app
function init() {
    inquirer.prompt(form).then((data) => {
        console.log('Generating README: ');
        console.log(data);
        writeToFile(data);
    })
}
// call to initialize app
init();

