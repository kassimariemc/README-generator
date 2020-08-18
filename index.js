const inquirer = require("inquirer");
const markdownModule = require('./utils/generateMarkdown');
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    prefix: 'Hi! Welcome to your README generator. Lets get started \n',
    default: 'Project Title'
  },
  {
    type: 'input',
    name: 'version',
    message: 'What is the project version? (use empty value to skip)',
    default: ''
  },
  {
    type: 'input',
    name: 'project-url',
    message: 'What is the project URL? (use empty value to skip)',
    default: ''
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out? Please provide any screenshots or videos in this format: ![Alt Text](url)',
    default: ''
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. For any code blocks, please wrap them in backticks: `var example = true`. For bash commands use ```bash message ```',
    default: ''
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. For any code blocks, please wrap them in backticks: `var example = true`. Please provide any screenshots or videos in this format: ![Alt Text](url)',
    default: ''
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select what license you would like to include:',
    choices: ['MIT', 'ISC', 'Apache', 'GPL'],
    default: '0'
  },
  {
    type: 'list',
    name: 'contributing',
    message: 'Please select contributing guidelines:',
    choices: ['Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  Please make sure to update tests as appropriate.', '[Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)', 'No contributions accepted.'],
    default: '1'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
    default: ''
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
    default: ''
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide an email for users to contact you with any questions.',
    default: ''
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
      writeToFile('README', answers);
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
