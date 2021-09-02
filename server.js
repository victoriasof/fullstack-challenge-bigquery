const express = require('express');
const cors = require('cors');

const app = express();

const {BigQuery} = require('@google-cloud/bigquery');

const options = {
  keyFilename: 'bigQuery.json',
  projectId: 'full-stack-challenge-323806',
};

const bigquery = new BigQuery(options);

async function getBigQueryData() {
  const response = await bigquery.query({
    query: `
      SELECT * FROM \`full-stack-challenge-323806.demo_data.pricing\`
    `
  });
  // console.log(response);
  return response;
}
// getBigQueryData();

app.get('/api/products', cors(), async (req, res) => {
 
  const data = await getBigQueryData();
  // console.log(data);

  res.json(data);
});

// app.get('/api/products', cors(), (req, res) => {
//   const products = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];

//   res.json(products);
// });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);