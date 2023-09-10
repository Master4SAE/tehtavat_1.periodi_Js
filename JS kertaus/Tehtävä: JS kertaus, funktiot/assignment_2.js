"use strict";

const numbers = [];
const number_one = prompt("Enter five numbers, one by one (1)");
const number_two = prompt("Enter five numbers, one by one (2)");
const number_three = prompt("Enter five numbers, one by one (3)");
const number_four = prompt("Enter five numbers, one by one (4)");
const number_five = prompt("Enter five numbers, one by one (5)");

numbers.push(Number(number_one), Number(number_two), Number(number_three), Number(number_four), Number(number_five));

console.log(numbers);

const number_6 = prompt("Enter the last number");
const number_6_asNumber = Number(number_6);
numbers.push(number_6_asNumber);

const check = numbers.includes(number_6_asNumber);
if (check == true) {
  console.log("this number is found in the array");
}
else{
  console.log ("number is not found in the array");
}

let delte = numbers.pop();
console.log(delte)

let sorted_list = numbers.sort()
console.log(sorted_list)


