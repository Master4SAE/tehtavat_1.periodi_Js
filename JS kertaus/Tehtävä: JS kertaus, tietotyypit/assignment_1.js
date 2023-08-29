'use strict';
const celsius = prompt('Hey! Give me a temperature in Celsius!!');
const to_int = parseInt(celsius);
document.querySelector('#target').innerHTML = celsius + ' C The temperature you gave me is ' + (to_int * 9/5 + 32) +  ' Fahrenheit and ' + (to_int + 273.15) + ' Kelvin';
