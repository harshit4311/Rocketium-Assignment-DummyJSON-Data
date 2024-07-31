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
    if(err) {
      return res.status(500).send('Error reading data file');
    }

    let json_data = JSON.parse(data);

    // Filter the data
    const filter = req.query.filter;
    if(filter) {
      json_data = json_data.filter(item => item.includes(filter));
    }

    // Sort the data
    const sort = req.query.sort;
    if(sort) {
      json_data = json_data.sort((a, b) => {
        if(a[sort] < b[sort]) {
          return -1;
        }

        if(a[sort] > b[sort]) {
          return 1;
        }

        return 0;
      });
    }

    res.json(json_data);
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
