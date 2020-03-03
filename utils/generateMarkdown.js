function generateMarkdown(answers) {
  return `
  # Project Title
  ${answers.title}
  
  ## Description 
  ${answers.description}
  
  ## User Story
  
  As a:
   ${answers.role} 
  
  I can:
   ${answers.capabilities}
   
  So that I can: 
   ${answers.benefits}

  ---
  
  
  ## Table of Contents
  
  * [Installation] ${answers.installation}
  
  * [Usage] ${answers.usage}
  
  * [License] ${answers.license}
  
  
  ---
  
  ## Badges
    
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
    
  ## Tests
  ${answers.tests}


  ## For Questions Contact:

  [${answers.github}](${answers.html_url})


  ![${answers.github}](${answers.avatar_url})
  
  
  ---
  `;
}

module.exports = generateMarkdown;
