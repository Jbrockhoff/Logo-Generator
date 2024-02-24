//Packages needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes')
const generateLogo = require('./lib/generateLogo')

//creates prompt questions for user input
inquirer
    .prompt([
        {
        name: "text",
        type: "input",
        message: "Please enter up to three characters for your logo:",
      },
      {
        name: "textColor",
        type: "input",
        message: "Please input the color keyword or hexidecimal number to generate your text color:",
      },
      {
        name: "shape",
        type: 'list',
        message: ['Square', 'Circle', 'Triangle']
      },
      {
        name: 'shapeColor',
        type: 'input',
        message: 'Please input the color keyword or hexidecimal number to generate your shape color'
      },
    ])

    //This function uses the generateLogo.js to write a new file to 
    .then((responses) => {
        const logo = generateLogo(responses);

        fs.writeFile('./output/logo.svg', logo, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
        );
    })

