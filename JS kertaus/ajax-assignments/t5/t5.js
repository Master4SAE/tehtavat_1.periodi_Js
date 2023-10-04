'use strict'
async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    data.forEach(item => {
      const tableBody= document.querySelector("table");
      const tableRow = document.createElement('tr');
      const tableCellname = document.createElement('td');
      const tableCelladdress = document.createElement('td');

      tableCellname.textContent=(item.name);
      tableCelladdress.textContent=(item.address);

      tableRow.appendChild(tableCellname);
      tableRow.appendChild(tableCelladdress);

      tableBody.appendChild(tableRow);
      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Close';

      tableCellname.addEventListener("click", (event) => {
        tableCellname.classList.toggle("highlight");

        const dialog = document.querySelector('dialog');

        if (tableCellname.classList.contains('highlight')) {
          // Clear the existing content in the dialog
          dialog.innerHTML = '';
          async function fetchDailyMenu(restaurantId, language) {
            const baseUrl = 'https://student-restaurants.azurewebsites.net';
            const endpoint = `/api/v1/restaurants/daily/${restaurantId}/${language}`;

            try {
              let response = await fetch(baseUrl + endpoint);

              if (response.ok) {
                let menu = await response.json();
                console.log(menu.courses);
                menu.courses.forEach(element => {
                  const tableRow = document.createElement('tr');
                  const tableCellname = document.createElement('td');
                  const tableCellprice = document.createElement('td');
                  const tableCelldiets = document.createElement('td');

                  tableCellname.textContent=(element.name);
                  tableCellprice.textContent=(element.price);
                  tableCelldiets.textContent=(element.diets);


                  tableRow.appendChild(tableCellname);
                  tableRow.appendChild(tableCellprice);
                  tableRow.appendChild(tableCelldiets);
                  tableBody.appendChild(tableRow);

                });




              } else {
                let errorData = await response.json();
                console.error(`Error ${response.status}: ${errorData.message}`);
              }
            } catch (error) {
              console.error('Network or other error:', error);
            }
          };
          fetchDailyMenu(item._id, 'en');

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

  } catch (error) {
    console.log('Error:', error);
  }
}
fetchData('https://student-restaurants.azurewebsites.net/api/v1/restaurants');

