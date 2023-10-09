'use strict'
const baseUrl = 'https://student-restaurants.azurewebsites.net';

export const restaurantData =  async()=>{
  const endpoint = `/api/v1/restaurants`;

  try {
    let response = await fetch(baseUrl + endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    return data;
  } catch (error) {
    return console.log('Error:', error);
  }
};

export const fetchDailyMenu = async(restaurantId, language) => {
  const endpoint = `/api/v1/restaurants/daily/${restaurantId}/${language}`;
  try {
    let response = await fetch(baseUrl + endpoint);

    if (response.ok) {
        let menu = await response.json();
        return menu
      }
      else {
        let errorData = await response.json();
        console.error(`Error ${response.status}: ${errorData.message}`);
      }
  }
  catch (error) {
  console.error('Network or other error:', error);
  }
};




