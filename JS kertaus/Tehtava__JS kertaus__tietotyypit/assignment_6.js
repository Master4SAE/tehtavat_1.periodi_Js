
const asked_number = prompt("enter a positive integer so I can calculates the sum of all the natural numbers up to and including that integer using a for loop.");
let sum = 0;
  for (let i = 0; i <= asked_number ; i++ ) {
    sum += i
  }

  document.querySelector('#target').innerHTML = sum
