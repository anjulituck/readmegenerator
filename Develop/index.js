// TODO: Include packages needed for this application

//importing inquirer & file system (fs)
const inquirer = require("inquirer");
const fs =require("fs");
// imported itself
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of this project?'
    },
    {
        type: 'input',
        name:'description',
        message: 'What is this project about?'

    },
    {
        type: 'input',
        name:'installation',
        message: 'What instructions are needed to install the project?'
    },
    {
        type: 'list',
        name:'license',
        message: 'What license do you need?',
        choices: ["MIT", "APACHE 2.0", "GPL", "NONE"]
    }


];



// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
 return fs.writeFile(fileName,data, function(err) {
 if (err) return console.log(err);
 console.log('Hello World');
 })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    // PROMISE
    .then((responses) => {
        console.log('gonna make README')
        //using spread operator
        writeToFile('README.md', generateMarkdown({...responses}))
    }) 
}

// Function call to initialize app
init();
