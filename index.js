const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('Lib/shapes.js');

function writeToFile(fileName, userChoice) {
    let logo = "";
    logo = '<logo version="1.1" width="300" height="300" mxlns="http://www.w3.org/2000/svg">';
    logo += "<g>";

    let shapeChoice;
    if (userChoice.shapes === "Circle") {
        shapeChoice = new Circle();
        logo += `<circle cx="150" cy="125" r="75" fill="${userChoice.shapeColor}"/>`
        logo += `text x="150" y="130" text-anchor="middle" font-size="45" fill="${userChoice.textColor}">${userChoice.textChoice}</text>`;
    } else if (userChoice.shapeChoice === "Triangle") {
        shapeChoice = new Triangle();
        logo += `<polygon points="125, 30 50, 200 200, 200" fill="${userChoice.shapeColor}"/>`
        logo += `<text x="125" y="150" text-anchor="middle" font-size="44" fill="${userChoice.textColor}">${userChoice.textChoice}</text>`;
    } else {
        shapeChoice = new Square();
        logo += `<rect x="85" y="55" width+"125" height="125" fill="${userChoice.shapeColor}"/>`;
        logo += `<text x="150" y="130" text-anchor="middle" font-size="45" fill="${userChoice.textColor}">${userChoice.textChoice}</text>`;
    }

    logo += "</g>";
    logo += "</logo>";

    fs.writeFile(fileName, logo, (err) => {
        err ? console.log(err) : console.log("Simple Logo Created.")
    })
}

function commandPrompts() {
    inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'textChoice',
            message: 'Choose up to three letters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Provide your choice of color for the text. Hex codes also work here.'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Provide your choice of color for the shape. Hex codes also work here.',
        },
        {
            type: 'checkbox',
            name: 'shapeChoice',
            message: 'Which shape would you like?',
            choices: ['Circle', 'Triangle', 'Square']
        }
    ])
    .then((userChoice) => {
        if (userChoice.textChoice.length > 3) {
            console.log("No more than three letters may be chosen.")
        } else {
            writeToFile("logo.svg", userChoice)
        }
    })
}

commandPrompts();