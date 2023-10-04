async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData('https://reqres.in/api/users/1');
