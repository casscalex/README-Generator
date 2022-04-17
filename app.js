const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'What dose your project do?',
    }
]


const commandLineArgs = process.argv;
console.log(commandLineArgs);
// write README File
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// initialize app
function run() {
    inquirer.prompt(form).then(inquierResponses => {
        console.log('README Generator');
        writeToFile('README.md', generateMarkdown({...inquierResponses}));
    });
}
// call to initialize app
run();

