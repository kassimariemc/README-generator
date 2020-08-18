// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![Badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  [${data.license}](https://choosealicense.com/licenses/${data.license}/)

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  [Github Profile](https://github.com/${data.username})
  Please email me with any questions! <${data.email}>

`;
}

module.exports = generateMarkdown;
