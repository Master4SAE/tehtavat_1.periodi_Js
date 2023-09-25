const x1 = prompt("To Calculate Euclidean distance give me X1");
const x2 = prompt("To Calculate Euclidean distance give me X2");
const y1 = prompt("To Calculate Euclidean distance give me Y1");
const y2 = prompt("To Calculate Euclidean distance give me Y2");
distance = ((x2 - x1)**2 + (y2 - y1)**2)

document.querySelector('#target').innerHTML = "The distance is " + Math.sqrt(distance)
