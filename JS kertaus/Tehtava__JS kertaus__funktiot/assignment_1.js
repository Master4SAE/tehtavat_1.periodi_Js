"use strict";
const item_one = prompt("enter three vegetables one by one (1)");
const item_two = prompt("enter three vegetables one by one (2)");
const item_three = prompt("enter three vegetables one by one (3)");
const fruits = [];

fruits.push("apple", "banana", "orange", " grape", "kiwi");

console.log(fruits);

console.log(fruits.length);

console.log(fruits[2]);

const lastitem = fruits[fruits.length -1];
console.log(lastitem);

const vegetables = [];

vegetables.push(item_one, item_two, item_three);

console.log(vegetables);
console.log(vegetables.length);
