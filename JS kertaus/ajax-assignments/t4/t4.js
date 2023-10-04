
async function postData(url, data) {
  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.log('Error:', error);
  }
}

let dataToPost = {
  name: 'Sohaib',
  job: 'Full Stack Developer'
};

postData('https://reqres.in/api/users', dataToPost);

