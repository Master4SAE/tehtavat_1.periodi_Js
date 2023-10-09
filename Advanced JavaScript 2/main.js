'use strict'
import { restaurantRow } from './Components.js';
import { restaurantData } from './utils.js';

const data = await restaurantData()

const table = document.querySelector("table");

table.appendChild(restaurantRow(data));

document.getElementById("sodexo").addEventListener("click", async () => {
  const tBody= document.querySelector("tbody");
  tBody.innerHTML = '';
  const restaurants = await restaurantData();
  restaurantRow(restaurants, "Sodexo");
});


document.getElementById("compas").addEventListener("click", async () => {
  const tBody= document.querySelector("tbody");
  tBody.innerHTML = '';
  const restaurants = await restaurantData();
  restaurantRow(restaurants, "Compass Group");
});


document.getElementById("all").addEventListener("click", async () => {
  const tBody= document.querySelector("tbody");
  tBody.innerHTML = '';
  const restaurants = await restaurantData();
  restaurantRow(restaurants);
});



















