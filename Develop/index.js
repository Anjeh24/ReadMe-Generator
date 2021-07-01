// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
   
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'Project',
      message: 'Can you briefly Describe the project?',
    },
    {
      type: 'input',
      name: 'Content',
      message: 'Could you enter the main contents of this project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is the project installed?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Explain how the project will be used',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the license used',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Enter the name(s) of all parties that contributed towards this project',
      },
      {
        type: 'input',
        name: 'Test',
        message: 'How can the project be tested.',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Enter your Github username, link to Github profile, and email for contact.',
      },

  

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) =>
      err ? console.log(err) : console.log('Successfully created file');

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers)){
        const response = generateMarkdown(answers);
        console.log(response);
        writeToFile('ReadMe.Md', response)
    }


    
}

// Function call to initialize app
init();
