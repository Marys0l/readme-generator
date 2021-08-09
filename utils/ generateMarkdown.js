function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
        response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
        break;
        case 'GPL v3':
        response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        break;
        case 'Apache':
        response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        break;
    } return response 
}

function generateMarkdown(data) {
    return `#${data.title}
    ${renderLicenseBadge(data.license)}
  
    
#### Table of Contents
1. [Project Description](#project-description)
2. [Installation Instructions](#installation)
3. [Usage Information](#usage)
4. [Contribution ](#contribution)
5. [Test Instructions](#testing)
6. [License](#license)
7. [Questions](#questions)
## Description
* ${data.description}
## Instructions
* ${data.installation}
## Usage 
* ${data.usage}
## Contributing
* ${data.contribution}
## Tests
* ${data.testing}
## License
* licensed under the ${data.license}
## Questions
* Please feel free to send me an email for addtional information
${data.email}
* Follow me on Github at [${data.github}](http://github.com/${data.github})`; 
}

module.exports = generateMarkdown;
