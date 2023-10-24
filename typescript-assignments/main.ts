'use strict'
//Write a TypeScript program that calculates the total cost of a shopping cart.
// The cart contains items with their prices. 
interface Item {
    name: string;
    price: number;
    quantity: number;
};
const cart: Item[] = [];
while (true) {
  const itemName = prompt("Please enter item name or empty string to end the shopping") as string;
  if (itemName === "") {
    break;
  }
  const itemPrice = parseFloat(prompt("Give me item price") as string);
  const itemQuantity = parseFloat(prompt("give me item quantity")as string);
  const newItem: Item = { name: itemName, price: itemPrice, quantity: itemQuantity };
  cart.push(newItem);
}

// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
