const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
// console.log(fs)
// console.log(inquirer)

// array of questions for user
const questions = inquirer.prompt( [{
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type : "input",
    name: "title",
    message: "What is your project's name?"
},
{
    type: "input",
    name: "projectDescription",
    message: "Please write a short description of your project"
},
{
    type: "list",
    name: "licenseChoices",
    message: "What kind of license should your project have?",
    choices: [
        {
            name: "MIT",
            value: "https://img.shields.io/badge/License-MIT-yellow.svg"
    },
    {
            name: "APACHE 2.0",
            value: "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
    },
    {
            name: "GPL 3.0",
            value: "https://img.shields.io/badge/License-GPLv3-blue.svg"
    }, 
    {
            name: "BSD 3.0",
            value: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
    },
    {
            name: "none"
    }
]
},
{
    type: "input",
    name: "licenseLink",
    message: "Please provide a link to the license you want to use:"
},
{
    type: "input",
    name: "command",
    message: "What command should be run to install dependencies?",
    default: "npm i"
},
{
    type: "input",
    name: "testCommand",
    message: "What command should be run to run tests?",
    default: "npm test",
},
{
    type: "input",
    name: "userInstructions",
    message: "What does the user need to know about using the repo?"
},
{
    type: "input",
    name: "userContribution",
    message: "What does the user need to know about contributing to the repo?"
}
])
.then((data) => {
    console.log(data)
    writeToFile('test.md', data)
})
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('test.md', generateMarkdown(data), function (err){
        // console.log(data.name.projectDescription)
        if (err) {console.log(err.message)}
        else {console.log("Story ")}
    })
}



// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
