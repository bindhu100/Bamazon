
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products(
  item_id INT NOT NULL,
  product_name VARCHAR (200) NOT NULL,
  department_name VARCHAR (200),
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES 
("Ab Roller","Fitness",18.00,400),
("Prismacolor","Arts & Crafts",30.00,300),
("Floor Mats","Auto Parts & Accessories",30.00,100),
("Beneath a Scarlet Sky","Books",10.00,50),
("Samsung Galaxy","Cell Phones",50.00,150),
("Office Chair Desk","Office Products",80.00,50),
("Mini Desktop Catapult","Handmade",25.00,200),
("Echo Dot","Electronics",60.00,40),
("Raised Wood Planter","Garden",85.00,60),
("Pet Seat Belt","Pet Supplies",10.00,100);





