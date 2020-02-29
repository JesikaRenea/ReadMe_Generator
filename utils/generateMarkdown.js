function generateMarkdown(answers) {
  return `
  # Your Project Title
  ${answers.title}
  
  ## Description 
  ${answers.description}
  
  ##User Story
  
  As a <${answers.role}> I can <${answers.capabilities}>, so that I can <${answers.benefits}>
  
  
  ## Table of Contents
  
  * [Installation](#${answers.installation})
  
  * [Usage](#${answers.usage})
  
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

  ## Questions

  For Questions contact:

  ![${answers.github}](${answers.avatar_url})
  
  
  ---
  `;
}

module.exports = generateMarkdown;
