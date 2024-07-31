// Script to set up a Node.js server using the Express.js framework.

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const dataPath = path.join(__dirname, 'data.json');

app.use(express.json());

// Endpoint to get the dummy data
app.get('/get-data', (req, res) => {
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data file');
    }

    let jsonData = JSON.parse(data);

    // Filtering
    const filter = req.query.filter;
    if (filter) {
      jsonData = jsonData.filter(item => item.includes(filter));
    }

    // Sorting
    const sort = req.query.sort;
    if (sort) {
      jsonData = jsonData.sort((a, b) => {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
      });
    }

    res.json(jsonData);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
