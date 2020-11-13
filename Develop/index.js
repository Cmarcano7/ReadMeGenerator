var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown');

console.log("Welcome, allow me to help you create a ReadMe file");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
      
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
      
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of your project.',
      
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How do you run the tests for your project?',
      default: 'npm test',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain using your project further.',
      
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How can someone contribute to your project?',
      
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license does your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync("./utils/readmeFiles/" + fileName, generateMarkdown(data), function(err) {

      if (err) {
        return console.log(err);
      }
    
    });
};

// function to initialize program
function init() {

  //start with emtpy out each repective category so that the user will get a brand new readme or overwrite what there(going to try and save readme file to the system)
  //then run inquirer prompt program with questions and answers
  inquirer
    .prompt(questions)
    .then(answers => {
      // Use user feedback for... whatever!!
      writeToFile(answers.title + "_readme.md", answers)
      console.log("Generating ReadMe file please wait....")
    })
}

//function call to initialize program
init();

