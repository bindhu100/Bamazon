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

connection.connect(function (err) {
  if (err) throw err;

  console.log(chalk.bold.bgBlueBright.white("\n WELCOME TO BAMAZON ! See Something New, Every Day !!! \n"));
  // console.log(chalk.bold.bgCyanBright.white("\n SEE SOMETHING NEW, EVERY DAY \n"));
  allProducts();
});

function allProducts() {
  // to display all data from database
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
    // ************************************************

    // for (var i = 0; i < res.length; i++) {
    //   console.table({'Product ID':res[i].item_id,
    //    'Product Name':res[i]. product_name,
    //    'Department':res[i].department_name,
    //     'Price':res[i].price,
    //     'Quantity': res[i].stock_quantity,});
    // }

    // *************************************
    selectProduct();
  })
}

// function  selectProduct() {
//   // query the database for all items for sale
//   connection.query("SELECT * from products;", function (err, results, fields) {
//     if (err) throw err;
//     else {
//       // console log all products
//       console.table(results);

//     }
//     pickProduct();

//   }

//   )
// }


function selectProduct() {
  inquirer
    .prompt([
      {
        name: "product",
        type: "input",
        message: (chalk.yellow("What is the item_id of the product you would like to buy?"))

      },

      // *******************8
      // {
      //   name: "product",
      //   // type: "input",
      //   message: console.log("We have " + kk + " " + ll + "s in stock for your order!")

      // },
      // *************
      {
        name: "quantity",
        type: "input",
        message: (chalk.green("How many would you like to buy?"))
      }
    ])

    .then(function (answer) {


      var product = answer.product;
      var quantity = answer.quantity;

      var queryProducts = "SELECT * FROM products WHERE ?";
      var cost
      connection.query(queryProducts, { item_id: product }, function (err, res) {
        var productInfo = res[0];
        // if (err) throw err;
        if (quantity > productInfo.stock_quantity) {
          console.log("");
          console.log(chalk.redBright("Sorry! we don't have enough in stock, please choose a smaller quantity!"));
          console.log("");

          selectProduct();


        }

        else {

          if (quantity <= productInfo.stock_quantity) {
            console.log("");
            console.log(chalk.blueBright("We have " + quantity + " " + productInfo.product_name + " in stock for your order!"))
            console.log("");
            console.log("");
            console.log(chalk.magenta("Thank you for your order!"));
            console.log("");
          }
          if (cost = quantity * productInfo.price) {
            console.log("");
            console.log(chalk.greenBright("The total cost of your order is $" + cost + ".00"));
            console.log("");
          }

          var queryUpdate = "UPDATE products SET ? WHERE ?"
          connection.query(queryUpdate, [{ stock_quantity: answer.quantity }, { item_id: product }], function (err, res) {
            if (err) throw err;
            else {
              console.log("");
              console.log(chalk.cyan("Inventory has been updated!"));
              console.log("");


              inquirer
                .prompt({
                  name: 'next',
                  type: "input",
                  message: (chalk.blueBright('Would you like to place another order (Yes/No)?')),
                })
                .then(function (answer) {
                  if (answer.next === "Yes") {
                    allProducts();
                  } else {
                    connection.end()
                    console.log("");
                    console.log(chalk.green("Thank you for shopping with us! Come back soon!"))
                    console.log("");
                  }

                });


            }
          })
        }


      })

    })


}