function generateMarkdown(answers) {
  return `
  # Project Title
  ${answers.title}
  
  ## Description 
  ${answers.description}
  
  ## User Story
  
  As a:
   ${answers.role} 
  
  I want to:
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
  

  ## Screenshots
![index.html](/images/index_ss.png)
![portfolio.html](/images/portfolio_ss.png)
![contact.html](/images/contact_ss.png)


    
  ## Tests
  ${answers.tests}

  ## Links 

  [Visit Portfolio Page](https://${answers.github}.github.io/)

  [Github Repo: ${answers.title}](https://insertURL)

  [Deployed Heroku App](https://inserturl)

  ## For Questions Contact:

  ${answers.github}:


  [![${answers.github}](${answers.avatar_url})](${answers.html_url})

  [${answers.github}](${answers.html_url})
  
    ---
  `;
}

module.exports = generateMarkdown;
