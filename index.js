// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description"
    },
    {
        type: "input",
        name: "installation",
        message: "How is it installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use it?"
    },
    {
        type: "input",
        name: "contribution",
        message: "How can people contribute?"
    },
    {
        type: "input",
        name: "test",
        message: "How can people test it?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a lisence",
        choices: ["Apache 2.0", "GNU General Public v3.0", "MIT", "Boost Software 1.0", "Creative Commons Zero 1.0 Universal", "No License"]
    },
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Creating README file!");
        writeToFile("README_new.md", generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
