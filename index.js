const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// const questions = [

// ];

function promptUser() {
    return inquirer.prompt([
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
        message: "Enter Installation Requirements:"
      },
      {
        type: "input",
        name: "usage",
        message: "Enter Project Usage:"
      },      {
        type: "input",
        name: "credits",
        message: "Credits:"
      },
      {
        type: "input",
        name: "license",
        message: "License:"
      },
      {
        type: "input",
        name: "github",
        message: "GitHub Username:"
      },
      {
        type: "input",
        name: "github-picture",
        message: "GitHub Profile Picture URL:"
      },
      {
        type: "input",
        name: "role",
        message: "User Story: Enter Role of User"
      },
      {
        type: "input",
        name: "capabilities",
        message: "User Story: Enter Project Capabilties"
      },
      {
        type: "input",
        name: "benefits",
        message: "User Story: Enter Project Benefits"
      },
    ])
    // .then(answers => {
    //     console.log(answers);
    //   });
  };


  function generateReadMe(answers) {
    return `
# Your Project Title
${answers.title}

## Description 
${answers.description}

##User Story

As a <${answers.role}> I can <${answers.capabilities}>, so that I can<${answers.benefits}>


## Table of Contents

* [Installation](#${answers.installation})

* [Usage](#${answers.usage})

* [Credits](#${answers.credits})

* [License](#${answers.license})


---

## Badges

${answers.badges}

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing
${answers.contributing}


## Tests
${answers.tests}


---
`
  };

  
promptUser()
.then(function(answers) {
  const readMe = generateReadMe(answers);

  return writeFileAsync("README.md", readMe);
})
.then(function() {
  console.log("Successfully wrote to README.md");
})
.catch(function(err) {
  console.log(err);
});




// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();


