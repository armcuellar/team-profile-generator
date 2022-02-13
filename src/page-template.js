const Manager = require("../lib/Manager")

const generateCards = employeeArray => {
    return `
    ${employeeArray
            .map(({ name, id, role, email, school, gitHub, officeNumber }) => {
                if (gitHub) {
                    var value = "Github: " + '<a href="https://github.com/' + gitHub + '">' + gitHub + '</a>';
                }
                else if (school) {
                    var value = "School: " + school;
                }
                else if (officeNumber) {
                    var value = "Office Number: " + officeNumber;
                }
                return `<div class="card mw-50 col-lg-4" id="newBackground"  style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${role}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}"> ${email}</a></li>
                    <li class="list-group-item">${value}</li>
                </ul>
            </div>`
            }).join("")}
            `
};


const generateTemplate = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>

    <body>
        <header class="d-flex justify-content-center">
            <h1>My Team</h1>
        </header>
        <main class="container">
        <div class="row justify-content-center">
            ${generateCards(data)}
        </div>
        </main>

    </body>

    </html>`

}

module.exports = generateTemplate