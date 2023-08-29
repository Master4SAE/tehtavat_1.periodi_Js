
side1 = prompt("Enter your score for a course assessment. So i can determine your grade my friend :)")
side = parseInt(side1);
if (side <= 39) {
    document.querySelector('#target').innerHTML = "Your grade is 0!";
  }

  else if (side <= 51) {
    document.querySelector('#target').innerHTML = "Your grade is 1!";
  }
  else if (side <= 63) {
    document.querySelector('#target').innerHTML = "Your grade is 2! ";
  }

  else if (side <= 75) {
    document.querySelector('#target').innerHTML = "Your grade is 3! ";

  }
  else if (side <= 87) {
    document.querySelector('#target').innerHTML = "Your grade is 4! ";
  }
  else if (side <= 100) {
    document.querySelector('#target').innerHTML = "Your grade is 5! ";
  }

