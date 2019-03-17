<!-- # Bamazon -->
<h1>:b: Bamazon</h1>
<h3>Built With</h3>

<ul>
<li>Node.js</li>
<li>MySQL</li>
</ul>

<h3>Overview</h3> 
In this activity, creating an Amazon-like storefront with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory. 



![GitHub Logo](image/Webp.net-gifmaker.gif)



<h3>Customer View Requirement</h3>
<ol>
<li> Create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale.</li>
</ol>

<!-- ![GitHub Logo](image/All_items.jpg) -->



<!-- ![GitHub Logo](allProducts.PNG) -->


![GitHub Logo](image/question_1.PNG)




<ol start="2">
<li>The app should then prompt users with two messages.</li>

<!-- <li>The first should ask them the ID of the product they would like to buy.</li>
![GitHub Logo](image/)
<li>The second message should ask how many units of the product they would like to buy.</li>
![GitHub Logo](image/question)
</ul> -->
</ol>


<ol> 
<ul>
<li>The first should ask them the ID of the product they would like to buy.</li>
</ul>
</ol>



![GitHub Logo](image/question_1.PNG)


<ol> 
<ul>
<li>The second message should ask how many units of the product they would like to buy.</li>

</ul>
</ol>

![GitHub Logo](image/question.PNG)

<!-- <ul>
<li>The first should ask them the ID of the product they would like to buy.</li>
</ul> -->
<!-- ![GitHub Logo](image/)

<ul>
<li>The second message should ask how many units of the product they would like to buy.</li>
</ul>
![GitHub Logo](image/) -->

<ol start="3">
<li>Once the customer has placed the order, application should check if store has enough of the product to meet the customer's request.</li>

<ul>
 <li>If store does have enough of the product, app should fulfill the customer's order.</li>


 <ul>
 <li>SQL database should reflect the remaining quantity.</li>
 <li>Once the update goes through, show the customer the total cost of their purchase.</li>
 </ul>
 </ul>
</ol>


![GitHub Logo](image/orderComplete.PNG)


<ol start="4">
<li>If store doesn't have enough of the product to fulfill the customer's order, app should log a phrase like "Sorry! we don't have enough in stock, please choose a smaller quantity!", and then prevent the order from going through.</li>
</ol>

![GitHub Logo](image/notEnough.PNG)

<ol start="5">
<li>Once customer place the order, app should ask "Would you like to place another order (Yes/No)?"
</ol>

![GitHub Logo](image/yes_or_no.PNG)

<ol>
<ul>
<li>If the user enter "Yes" </li>
<ul>
<li>Should display all of the items available for sale and</li>
<li>App should ask "What is the item_id of the product you would like to buy?"</li>
</ul>
</ul>
</ol>

![GitHub Logo](image/yes.PNG)


<ol>
<ul>
<li>If the user enter "No" </li>
<ul>
<li>App should log a phrase like "Thank you for shopping with us! Come back soon!"</li>
</ul>
</ul>
</ol>


![GitHub Logo](image/no.PNG)