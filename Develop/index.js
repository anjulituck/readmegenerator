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
        message: 'What is this project about? Why did you build this and what did you learn?'
    },
    {
        type: 'input',
        name:'installation',
        message: 'What instructions are required to install the project?'
    },
    {
        type: 'input',
        name:'usage',
        message: 'What can this project be used towards?'
    },
    {
        type: 'input',
        name:'credits',
        message: 'Who helped you with this project? Any 3rd parties or tutorials you would like to give credit for helping this project?'
    }, 
    {
        type: 'list',
        name:'license',
        message: 'What license do you need?',
        choices: ["MIT", "APACHE 2.0", "GPL", "NONE"]
    },
    {
        type: 'input',
        name:'features',
        message: 'What features and issues were worked on during this project?'
    }, 
    {
        type: 'input',
        name:'email',
        message: 'What is your email?'
    }, 
    {
        type: 'input',
        name:'github',
        message: 'What is your GitHub username? No need for the @ sign.'
    }, 
    {
        type: 'input',
        name:'questions',
        message: 'What instructions are needed to contact you with additional questions?'
    }, 
    {
        type: 'input',
        name:'contributing',
        message: 'How can other users contribute to this project?'
    }, 
    {
        type: 'input',
        name:'tests',
        message: 'Describe what tests were taken for this project.'
    }

];



// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
 return fs.writeFile(fileName,data, function(err) {
 if (err) return console.log(err);
 //console.log('Hello World');
 })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    // PROMISE
    .then((responses) => {
        //console.log('gonna make README')
        //using spread operator
        writeToFile('README.md', generateMarkdown({...responses}))
    }) 
}

// Function call to initialize app
init();
