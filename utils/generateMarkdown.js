// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}
  ![License Badge](https://img.shields.io/badge/License-${data.license}-green.svg)

  ### GitHub Username: ${data.username}

  ### GitHub Email Address: ${data.email}

  ## Description
  ${data.description}

  ## Table of Contents 
  *[Installation](#installation)
  *[Usage](#usage)
  *[Tests](#tests)
  *[License](#license)
  *[Contributions](#contributors)
  *[Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Tests
  ${data.tests}

  ## License
  This project is license under ${data.license}.

  ## Contributors
  ${data.contributors}

  ## Questions 
  For any questions or concerns about any information regarding this project, please reach out through this email: ${data.email}.
  You can view more about the creators projects at https://github.com/${data.github}. 
  
  `;
}

module.exports = generateMarkdown;
