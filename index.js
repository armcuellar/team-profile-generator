const inquirer = require('inquirer');
const fs = require('fs');
const isEmail = require('is-email');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateTemplate = require('./src/page-template');

var employeeArray = [];

const managerQuestions = () => {
    return inquirer.prompt([
        // Prompt to get Manager info
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name? (Required)",
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log(" Please enter your manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is employee id?',
            validate: id => {
                if (isNaN(id)) {
                    console.log(" Enter a valid number")
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is Manager's email (only valid email is accepted)",
            validate: email => {
                if (isEmail(email)) {
                    return true;
                }
                else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log(" Enter a valid number")
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    ])
}
const internQuestions = () => {
    return inquirer.prompt([
        // Prompt to get Manager info
        {
            type: 'input',
            name: 'name',
            message: "What is intern's name? (Required)",
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log(" Please enter name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is intern's employee id?",
            validate: id => {
                if (isNaN(id)) {
                    console.log(" Enter a valid number")
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is intern's email (only valid email is accepted)",
            validate: email => {
                if (isEmail(email)) {
                    return true;
                }
                else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is intern's school? (Required)",
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log(" Please enter school name!");
                    return false;
                }
            }
        }

    ]).then(response => {
        const { name, id, email, school } = response;
        const internData = new Intern(name, id, email, school);
        addEmployee(internData);
    })
}
const engineerQuestions = () => {
    return inquirer.prompt([
        // Prompt to get Manager info
        {
            type: 'input',
            name: 'name',
            message: "What is engineer's name? (Required)",
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log(" Please enter name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is engineer's employee id?",
            validate: id => {
                if (isNaN(id)) {
                    console.log(" Enter a valid number")
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is engineer's email (only valid email is accepted)",
            validate: email => {
                if (isEmail(email)) {
                    return true;
                }
                else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is engineer's GitHub Username? (Required)",
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log(" Please enter GitHub Username!");
                    return false;
                }
            }
        }

    ]).then(response => {
        const { name, id, email, gitHub } = response;
        const engineerData = new Engineer(name, id, email, gitHub);
        addEmployee(engineerData);
    })
}
const addEmployee = employeeData => {
    console.log(employeeData)
    // employeeData.teamMember.push(employeeData);

    employeeArray.push(employeeData)
    console.log(employeeArray)
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add employees, select one',
            choices: ['Intern', 'Engineer', 'No']
        },

    ])
        .then(employeeData => {
            if (employeeData.addEmployee === 'Intern') {
                return internQuestions();
            }
            else if (employeeData.addEmployee === 'Engineer') {
                return engineerQuestions();
            }
            else {
                return endLoop(employeeArray);
            }
        })
        .then()
}

const endLoop = finalData => {
    console.log(finalData)
    templateData = generateTemplate(finalData);
    console.log(templateData);
    writeToFile("dist/index.html", templateData);
}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

function init() {
    managerQuestions()
        .then(data => {
            const { name, id, email, officeNumber } = data;
            const managerData = new Manager(name, id, email, officeNumber);
            addEmployee(managerData);
        })

}

init();
// const mock = [{ "name": "Armando", "id": "1", "email": "Armando@armando.com", "role": "Manager", "officeNumber": "123456" }, { "name": "Two", "id": "2", "email": "two@two.com", "role": "Intern", "school": "two school" }, { "name": "three", "id": "3", "email": "three@three", "role": "Engineer", "gitHub": "three" }, { "name": "four", "id": "4", "email": "four@four", "role": "Intern", "school": "four school" }]

// endLoop(mock);
