var inquirer = require('inquirer');
var fs = require('fs');
var generate = require('./utils/generateMarkdown');

console.log("Welcome, allow me to help you create a ReadMe file")

// Function to check if user inputted value
const emptyField = moreValidationChecks => ({
  validate: input => {
    if (input === '') {
      return 'Please provide a valid value'
    }
    return moreValidationChecks ? moreValidationChecks(input) : true
  }
});

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      ...emptyField(),
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of your project.',
      ...emptyField(),
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
      ...emptyField(),
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the general usage of your project?',
      ...emptyField(),
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who do you want to credit for this project?',
      ...emptyField(),
    },
    {
      type: 'confirm',
      name: 'tableOfContents',
      message: 'Would you like a table of contents',
      default: true,
    },
];

// function to write README file
function writeToFile(fileName, data) {
    //vars for the answers the users submit
    
    // var data = user inputted data will be placed here to auto generate their responses into the template Readme file on hand

};

// function to initialize program
function init() {

  //start with emtpy out each repective category so that the user will get a brand new readme or overwrite what there(going to try and save readme file to the system)
  //then run inquirer prompt program with questions and answers
  inquirer
    .prompt(questions)
    .then(answers => {
      // Use user feedback for... whatever!!
      
    })
}



 //function call to initialize program
init();

