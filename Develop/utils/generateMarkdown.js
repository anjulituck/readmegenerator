// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// still updating these functions 
let licenseOption = '';

function renderLicenseBadge(license) {
    if(license === 'MIT') {
      licenseOption = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === 'APACHE 2.0'){
      licenseOption = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }else if (license === 'GPL'){
        licenseOption = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else{
      license === 'NONE'
      return licenseOption;
    }
  };
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} + ${licenseOption}
 
 ## Description

 ${data.description}
 
 ## Table of Contents 
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 - [Features](#features)
 - [Questions](#questions)
 - [Contributing](#contributing)
 - [Tests](#tests)
 
 
 ## Installation

 ${data.installation}
 
 ## Usage

 ${data.usage}

 ## Credits

 ${data.credits}

 ## License
 
 ${data.license}
 
 ## Features
 
 ${data.features}

 ## Questions

 ${data.questions}

 Email: ${data.email}
 GitHub Profile: https://github.com/${data.github}

 ## Contributing

 ${data.contributing}

 ## Tests
  
 ${data.tests}
  
  `;
}
//exporting function
module.exports = generateMarkdown;
