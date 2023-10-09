'use strict'
import { restaurantRow } from './Components.js';
import { restaurantData } from './utils.js';

const data = await restaurantData()

const table = document.querySelector("table");

table.appendChild(restaurantRow(data));



















