const inquirer = require("inquirer");
const markdownModule = require('./utils/generateMarkdown');
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out? Please provide any screenshots or videos in this format: ![Alt Text](url)'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. For any code blocks, please wrap them in backticks: `var example = true`.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. For any code blocks, please wrap them in backticks: `var example = true`.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select what license you would like to include:',
    choices: ['MIT', 'ISC', 'Apache', 'GPL']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are your contributing guidelines? Leave blank if you would like to include the default: Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.',
    default: 'Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  Please make sure to update tests as appropriate.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide an email for users to contact you with any questions.'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName + ".md", markdownModule(data), function(err) {
    if(err) { 
      console.log(err); 
    }
    else {
      console.log("success!");
    }
  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(answers =>
    {
      writeToFile(README, answers);
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error.isTtyError);
      } else {
        // Something else when wrong
        console.log(error);
      }
    });
}

// function call to initialize program
init();
