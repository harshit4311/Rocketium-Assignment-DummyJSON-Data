# Node.js Dummy JSON Data Project

# Overview
This project sets up a Node.js server using Express to serve dummy JSON data. It includes functionality for basic filtering and sorting of the data.

# Project Setup

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the Repository**
```
git clone https://github.com/harshit4311/Rocketium-Assignment-DummyJSON-Data.git
cd Rocketium-Assignment-DummyJSON-Data
```

2. **Install Dependencies**
```
npm install
```
## Fetching Data

1. **Download Data**

The project uses a local data.json file stored in the src directory. You need to download the dummy JSON data from the following URL:
```
https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json
```

2. **Save Data**

Save the downloaded file as data.json in the src directory of your project.

## Running the Server
```
node src/server.js
```
## API Endpoints

### GET all data 
```
http://localhost:3000/get-data
```

Fetch the JSON data with optional filtering and sorting.

#### Query Parameters:

1. **filterKey (optional):**
 Filter the data by key

2. **filterValue (optional):**
 Filter the data by value

3. **sortKey (optional):**
 Sort the data by key

4. **sortOrder (optional):**
 Sort the data by order

#### Example Request:  
```
curl "http://localhost:3000/get-data?filterKey=category&filterValue=electronics&sortKey=price&sortOrder=asc"
```

#### Response:
The response will be a JSON array of filtered and/or sorted data.

## Contributing

Feel free to open issues or submit pull requests to improve the project. Your contributions are welcome!
