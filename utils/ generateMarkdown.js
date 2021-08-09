function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
        response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
        break;
    } return response
    

}

function renderLicenseLink(license) {
    switch(license) {
        case 'GNU GPL v3':
        response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        break;
    } return response 

}

function renderLicenseLink(license) {
    switch(license) {
        case 'Apache':
        response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        break;
    } return response 

}

    

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
