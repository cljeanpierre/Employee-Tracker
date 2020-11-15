var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table")

var connection = mysql.createConnection({
  host: "localhost",

  // port
  port: 5500,

  // username
  user: "root",

  // Your password
  password: "Iluvbugs2!!",
  database: "company_profilesDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
// run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "typeOfQuery",
      type: "list",
      message: "What would you like to do?",
      choices: ["add department", "add roles",  "add employees", "view department", "view roles", "view employees", "update employee roles", "quit"]
    })
    .then(function(answer) {
      // based on user answer, post these functions
    switch (answer.choices) {
      case 'add department':
        return addDepartment();
        break;

        case 'add roles':
        return addRoles();
        break;

        case 'add employees':
        return addEmployees();
        break;

        case 'view department':
        return viewDepartment();
        break;

        case 'view roles':
        return viewRoles();
        break;

        case 'view employees':
        return viewEmployees();
        break;

        case 'updateemployeeroles':
        return updateEmployeeRoles();
        break;

        default: 'quit'
        console.log("You may close the application.");
      
    }

    });
}

function addDepartment() {
  inquirer.prompt({
    name: "department",
    type: "input",
    message: "What is the name of the department?"
  }).then(function (answers) {
    const deptAns = answers.department;
    const query = "SELECT * FROM" 
    connection.query(query, deptAns, function(err){
      if(err) throw err;
      
    })
  } 
  )
}
