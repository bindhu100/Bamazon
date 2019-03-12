var mysql = require("mysql");
var inquirer = require("inquirer");
// npm install console.table 
var table = require("console.table");
// npm install chalk
const chalk = require('chalk');


var connection = mysql.createConnection({
  host: "localhost",

  // Your port
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(chalk.yellowBright("\nWELCOME TO BAMAZON\n"));
  allProducts()
});

function allProducts(){
  // to display all data from database
connection.query("SELECT * FROM products", function(err,res){
  if (err) throw err;
  console.table(res);
})
}



