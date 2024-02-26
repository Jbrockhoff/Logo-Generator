//Packages needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes.js');

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
        message: "Please select a shape:", 
        choices: ['Circle', 'Square', 'Triangle']
      },
      {
        name: 'shapeColor',
        type: 'input',
        message: 'Please input the color keyword or hexidecimal number to generate your shape color:'
      },
    ])

    //This function takes user input to write a new file to logo.svg
    .then((responses) => {
       let svg

       if (responses.shape === 'Circle') {
        svg = new Circle (responses.shapeColor, responses.text, responses.textColor)      
       };

       if (responses.shape === 'Square') {
        svg = new Square (responses.shapeColor, responses.text, responses.textColor)      
       };

       if (responses.shape === 'Triangle') {
        svg = new Triangle (responses.shapeColor, responses.text, responses.textColor)        
       };

        fs.writeFile('./output/logo.svg', svg.render(), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
        );
    })

