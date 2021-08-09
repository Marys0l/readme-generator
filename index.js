const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/ generateMarkdown.js')

    const questions = [
        {
           type: 'input',
           message: 'What is the title of your project?',
           name: 'title'
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description'
        },
        {
            type: 'prompt',
            message: 'What are the installation instructions for your project?',
            name: 'installation'
        },
        {
           type: 'prompt',
           message: 'What is the Usage for your project?',
           name: 'usage' 
        },
        {
            type: 'prompt',
            message: 'What are the contribution guidleines for your project?',
            name: 'contribution'
        },
        {
            type: 'prompt',
            message: 'How can your project be tested',
            name: 'testing'
        },
        {
            type: 'list',
            message: 'What license did you use for your project? ',
            choices: ['MIT','GPL v3','Apache'],
            name: 'license'
        },
        {
            type: 'prompt',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'prompt',
            message: 'What is your email address so users can reach you?',
            name: 'email'
        },
    ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.error(err);
        };
      
        console.log("READme Created!");
      });

}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        writeToFile('README.md', generateMarkdown(data));
        console.log(data);
    }).catch(function (err) {
        console.error(err)
    }) 
}
init()