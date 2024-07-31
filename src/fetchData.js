// Script to fetch and store the dummy data.

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';
const dataPath = path.join(__dirname, 'data.json');

async function fetchData() {
  try {
    const response = await axios.get(url);
    fs.writeFileSync(dataPath, JSON.stringify(response.data, null, 2));
    console.log('Data was fetched and stored successfully.');
  } 
  catch(error) {
    console.error('Error while fetching data:', error);
  }
}

fetchData();
