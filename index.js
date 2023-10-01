import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should users install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should users use your application?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is your project under?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests for your application?'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md has been successfully generated.');
        }
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        // Generate the README content
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the necessary dependencies, run:
\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
To run tests, use:
\`\`\`
${answers.tests}
\`\`\`

## Questions
If you have any questions, please reach out to [bazuluk989@gmail.com](mailto:bazuluk989@gmail.com).
        `;
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize the app
init();
