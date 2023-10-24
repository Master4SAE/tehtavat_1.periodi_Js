'use strict';
;
var cart = [];
while (true) {
    var itemName = prompt("Please enter item name or empty string to end the shopping");
    if (itemName === "") {
        break;
    }
    var itemPrice = parseFloat(prompt("Give me item price"));
    var itemQuantity = parseFloat(prompt("give me item quantity"));
    var newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
var totalCost = cart.map(function (item) { return item.price * item.quantity; }).reduce(function (sum, cost) { return sum + cost; }, 0);
// Display the total cost to the user
console.log("Total cost of the shopping cart: $".concat(totalCost.toFixed(2)));
