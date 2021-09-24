
# Full stack challenge BigQuery 

Dynamically created results table based on data from a Google Cloud Project, accessible by API. 

Accessed Bigquery table called ‘demo_data.pricing’ in the ‘full-stack-challenge-323806’ project. 

When we add new rows to the bigquery table, they should show up (after refresh) in the UI table.


#### Tools used: 

● Frontend framework: React

● Bigquery API

● Bigquery Node.js SDK


#### React Express Starter Pack
For the react-express project I started with a boilerplate: https://github.com/bradtraversy/react_express_starter

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Google Cloud documentation: 

Installing Cloud SDK: https://cloud.google.com/sdk/docs/install

Authorizing Cloud SDK tools: https://cloud.google.com/sdk/docs/authorizing
``` bash
gcloud auth login
```
Authenticating with a service account key file: https://cloud.google.com/bigquery/docs/authentication/service-account-file#node.js

BigQuery API Client Libraries: https://cloud.google.com/bigquery/docs/reference/libraries
``` bash
npm install --save @google-cloud/bigquery
```
Quickstart: Using client libraries: https://cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries


## Result:

![bigQueryChallenge](https://user-images.githubusercontent.com/68014127/134636325-e9c8fe38-a965-4833-9bf3-24e50c326f68.png)




