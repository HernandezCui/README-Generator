// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your Github Username",
        name: "github",
    },
    {
        type: "input",
        message: "What's your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "description",
    },
    {
        type: "list",
        message: "What license did you use for your project?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "BSD",
            "GPL",
            "None",
        ],
    },
    {
        type: "input",
        message: "what command should be run to install dependencies?",
        name: "installation",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
    },
    {
        type: "input",
        message: "Enter the contributors for this project",
        name: "contributors",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('Readme file created successfully')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).
    then(function (data) {
        var fileName = "README.md";
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
