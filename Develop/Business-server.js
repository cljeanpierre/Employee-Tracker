var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table")

var connection = mysql.createConnection({
  host: "localhost",

  // port
  port: 3306,

  // username
  user: "root",

  // Your password
  password: "Iluvbugs2!!",
  database: "company_profilesDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: ["add department", "add roles", "add employees", "view department", "view roles", "view employees", "update employee roles", "EXIT"]
    })
    .then(function (answer) {
      // based on user answer, post these functions
      switch (answer.action) {
        case "add department":
          return addDepartment();
          break;

        case "add roles":
          return addRoles();
          break;

        case "add employees":
          return addEmployees();
          break;

        case "view department":
          return viewDepartment();
          break;

        case "view roles":
          return viewRoles();
          break;

        case "view employees":
          return viewEmployees();
          break;

        case "update employee roles":
          return updateEmployeeRoles();
          break;

        default: "EXIT"
          console.log("You may close the application.");

      }

    });
}

function addDepartment() {
  inquirer.prompt({
    name: "department",
    type: "input",
    message: "What is the name of the department?"
  }).then(function (answer) {
    connection.query(
      "INSERT INTO department SET ?",
      { department_name: answer.department },
      function (err) {
        if (err) throw err;
        console.log("The department has been successfully added");
        //excute view function here
        viewDepartment();
      })
  }
  )
}

function addRoles() {
  inquirer.prompt([{
    name: "title",
    type: "input",
    message: "What is the employee's title?"
  },
  {
    name: "salary",
    type: "input",
    message: "What is the employee's salary?"
  },
  {
    name: "department_id",
    type: "input",
    message: "What is the employee's department id number?"
  }
  ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee_role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        },
        function (err) {
          if (err) throw err;
          console.log("The employee has been successfully added");
          viewEmployees();
        }
      );
    });
}

function addEmployees() {
  inquirer.prompt({
    name: "employeeF",
    type: "input",
    message: "What is the employee's first name?"
  }),
    inquirer.prompt({
      name: "employeeL",
      type: "input",
      message: "What is the employee's last name?"
    }).then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.employeeF,
          last_name: answer.employeeL
        },
        function (err) {
          if (err) throw err;
          console.log("The employee has been successfully added");
          viewEmployees();
        })
    }
    )
}

function viewDepartment() {
  console.log("Listing all departments...\n");
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    //Log all results of the SELECT statement
    console.log(res);
    start();
  })
}

function viewRoles() {
  connection.query("SELECT * FROM employee_role", function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  })
}

function viewEmployees() {
  console.log("Listing all employees...\n");
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.log(res);
    start();
  })
}

function updateEmployeeRoles() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the employee's title?"
      },
      {
        name: "salary",
        type: "input",
        message: "What is the employee's salary?"
      },
      {
        name: "department_id",
        type: "input",
        message: "What is the employee's department id number?"
      }
    ])
    .then(function (answer) {
      connection.query(
        "UPDATE employee SET ? WHERE ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        },
        function (err) {
          if (err) throw err;
          console.log("The employee has been successfully updated");
          viewEmployees();
        }
      );
    });
}
