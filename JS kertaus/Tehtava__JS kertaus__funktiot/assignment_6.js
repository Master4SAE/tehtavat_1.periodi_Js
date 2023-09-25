'use strict'

const movieList = [];

const howMany = parseFloat(prompt("Enter how many movies to  rate"));
let counter = 1;
while (counter <= howMany){

  alert("enter the name and rating of each movie. Ratings on a scale of 1 to 5.");

  const movieName = prompt("Enter movie name");
  const movieRating = parseFloat(prompt("Enter rating on scale 1 to 5."));

  const movieDetails = {
    name: movieName,
    rating: movieRating
  };

  movieList.push(movieDetails);

  counter = counter +1;
}
const sortedList = movieList.sort((a, b) => b.rating - a.rating);

console.log(sortedList);

console.log(sortedList[0]);

document.querySelector('#target').innerHTML = 'Title: ' + sortedList[0].name + ' Rating: ' + sortedList[0].rating



const targetElement = document.querySelector('#target1');

if (sortedList.length > 0) {
  let htmlContent = '<ul>';
  sortedList.forEach(movie => {
    htmlContent += `<li>Title: ${movie.name}, Rating: ${movie.rating}</li>`;
  });
  htmlContent += '</ul>';
  targetElement.innerHTML = htmlContent;
} else {
  targetElement.innerHTML = 'No movies to display.';
}









