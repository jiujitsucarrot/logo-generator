const inquirer = require('inquirer');
const generateLogo = require('./lib/generateLogo.js');

function main () {
    inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to three characters:'
        },

        {
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):'
        },

        {
            name: 'shape',
            type: 'list',
            message: 'Choose a shape:',
            choices: ['triangle', 'circle', 'square']
        },

        {
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):'
        }
    ])

    .then(answers => {
        generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);

        console.log("Generated logo.svg");
    })

    .catch(error => {
        console.error("An error occurred:", error);
    });
}

main();