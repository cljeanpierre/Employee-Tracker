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