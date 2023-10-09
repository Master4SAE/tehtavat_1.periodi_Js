'use strict'
import { fetchDailyMenu } from './utils.js';

export const restaurantRow = (restaurant, filterCompany = null) => {
  console.log(restaurant)
  const tBody= document.querySelector("tbody");

  const filteredRestaurants = filterCompany ?
  restaurant.filter(item => item.company === filterCompany) : restaurant;
  console.log(filteredRestaurants)

  filteredRestaurants.forEach(item => {
    const name = item.name;
    const address = item.address;

    const tableRow = document.createElement('tr');
    const tableCellname = document.createElement('td');
    const tableCelladdress = document.createElement('td');

    tableCellname.textContent=(name);
    tableCelladdress.textContent=(address);

    tableRow.appendChild(tableCellname);
    tableRow.appendChild(tableCelladdress);

    tBody.appendChild(tableRow);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';

    tableCellname.addEventListener("click", async(event) => {

      tableCellname.classList.toggle("highlight");
      const dialog = document.querySelector('dialog');

      if (tableCellname.classList.contains('highlight')) {
        // Clear the existing content in the dialog
        dialog.innerHTML = '';

        // Create a table to display restaurant details
        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');
        const tableRow = document.createElement('tr');

        const tableCellname = document.createElement('td');
        const tableCelladdress = document.createElement('td');
        const tableCellpostalCode = document.createElement('td');
        const tableCellcity = document.createElement('td');
        const tableCellphoneNumber = document.createElement('td');
        const tableCellcompany = document.createElement('td');

        tableCellname.textContent = item.name;
        tableCelladdress.textContent = item.address;
        tableCellpostalCode.textContent = item.postalCode;

        tableCellcity.textContent = item.city;
        tableCellphoneNumber.textContent = item.phone;
        tableCellcompany.textContent = item.company;

        tableRow.appendChild(tableCellname);
        tableRow.appendChild(tableCelladdress);
        tableRow.appendChild(tableCellpostalCode);
        tableRow.appendChild(tableCellcity);
        tableRow.appendChild(tableCellphoneNumber);
        tableRow.appendChild(tableCellcompany);

        tableBody.appendChild(tableRow);
        table.appendChild(tableBody);

        const menu = await fetchDailyMenu(item._id, 'en');

        menu.courses.forEach(element => {
          const menuTableRow = document.createElement('tr');
          const menuTableCellName = document.createElement('td');
          const tableCellprice = document.createElement('td');
          const tableCelldiets = document.createElement('td');

          menuTableCellName.textContent=(element.name);
          tableCellprice.textContent=(element.price);
          tableCelldiets.textContent=(element.diets);


          menuTableRow.appendChild(menuTableCellName);
          menuTableRow.appendChild(tableCellprice);
          menuTableRow.appendChild(tableCelldiets);
          tableBody.appendChild(menuTableRow);
          table.appendChild(tableBody);
        });

        dialog.appendChild(table);
        dialog.appendChild(closeBtn);

        dialog.showModal();


      }

      closeBtn.addEventListener("click", (event) => {
        tableCellname.classList.remove('highlight')
        dialog.innerHTML = '';
        dialog.close();
      });

    });

  });
  return tBody;
};





