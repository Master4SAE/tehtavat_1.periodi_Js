'use strict'
const numbers = [];

while (true) {
  const enter_number = prompt("Enter a number (or 'done' to finish):");
  if (enter_number === 'done'){
    break;
  }
  else {
    const number_to_int = parseFloat(enter_number);

    if(!isNaN(number_to_int))
    {
      numbers.push(number_to_int);
    }
    else
    {
      alert("Please enter a valid number or 'done' to finish.");
    }
  }
}
console.log(numbers)

let evenNumbersString = "";

for (const i of numbers) {
  if (i % 2 === 0) {
    evenNumbersString += i + " ";
  }
}
document.querySelector('#target').innerHTML = evenNumbersString + "are even";
