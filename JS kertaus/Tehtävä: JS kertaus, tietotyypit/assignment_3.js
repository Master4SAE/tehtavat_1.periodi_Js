side1 = prompt("Enter the lengths of three sides of a triangle. This is first side")
side2 = prompt("Enter the lengths of three sides of a triangle. This is Second side")
side3 = prompt("Enter the lengths of three sides of a triangle. This is Third side")

    if (side1 === side2 && side3 === side1) {
      document.querySelector('#target').innerHTML = "Equilateral";
    }
    else if (side1 === side2 || side2 === side3 || side1 === side3 ) {
      document.querySelector('#target').innerHTML = "isosceles";
  }
  else if (side1 != side2 && side2 != side3 && side1 !=side3) {
    document.querySelector('#target').innerHTML = "scalene ";
  }
