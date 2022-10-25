const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const fileName = 'README.md';

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the projects title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project about?'
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for how to use your project'
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'List any contributors for your project'
    },

    {
        type: 'list',
        name: 'licenses',
        message: 'Please select a license:',
        choices: [
            'MIT',
            'Apache',
            'ISC',
            'GNU GPLv3',
            'No License'
        ],
    }

]

function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, function(err) {
        if (err) throw (err);
        console.log('Successfully generated!');
    });
};

function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile(fileName, data)
        });
};


init();