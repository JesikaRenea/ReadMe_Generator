const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// const questions = [

// ];

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "GitHub Username:"
        },
        {
            type: "input",
            name: "title",
            message: "Enter Project Title:"
        },
        {
            type: "input",
            name: "description",
            message: "Enter Project Description:"
        },
        {
            type: "input",
            name: "installation",
            message: "Enter Installation Requirements:",
            default: "npm i"
        },
        {
            type: "input",
            name: "usage",
            message: "Enter Project Usage:",
            default: "n/a"
        },
        {
            type: "list",
            name: "license",
            message: "License:",
            choices: [
             "Apache 2.0    [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
             "MIT           [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
             "GPL 3.0       [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", 
             "None"]
        },
        {
            type: "input",
            name: "role",
            message: "User Story: As A (Enter Role of User):"
        },
        {
            type: "input",
            name: "capabilities",
            message: "User Story: I want to (Enter Project Capabilties):"
        },
        {
            type: "input",
            name: "benefits",
            message: "User Story: So that I can (Enter Project Benefits):"
        },
    ])
};





promptUser()
    .then(function (answers) {
        return api.getUser(answers.github).then(({data}) => {
            console.log(data);
            const readMe = generateMarkdown({...data, ...answers});

            return writeFileAsync("README.md", readMe);

        })
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });


