const express = require('express');
const cors = require('cors');

const app = express();

//https://cloud.google.com/bigquery/docs/authentication/service-account-file#node.js

const {BigQuery} = require('@google-cloud/bigquery');

const options = {
  keyFilename: 'full-stack-challenge-323806-425e8a7f27b9.json',
  projectId: 'full-stack-challenge-323806',
};

//https://cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries

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

//got error "promise pending" ...added async, await: 
app.get('/api/products', cors(), async (req, res) => {
 
  const data = await getBigQueryData();
  // console.log(data);

  res.json(data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);