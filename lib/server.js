// index.js at the root of your repository, which will act as the “entry point” to your server.
// should require lib/server.js
// should require dotenv, reading PORT from your .env file
// It should call the .start() method from the server with the PORT set in your environment
// lib/server.js which will serve as your server ‘module’ … will contain all of the logic for the server
// Must export an object with a start() method (it should not start on it’s own)


'use strict';
//3rd party libraries

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


//custom middleware, libraries, and routers
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const logger = require('./middleware/logger');
const timestamp = require('./middleware/timestamp');
const productRouter = require('./routes/products');

// turns {} into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 3rd Party middleware
app.use(morgan('dev'));
app.use(cors());

//custom middleware
app.use(logger);
app.use(timestamp);


// Database
//let database = require('../data/db.json');
// let productdb = database.products;
//console.log(Object.keys(database).length);

/*--------------------------------------------------------/
--------------------------ROUTES--------------------------
/--------------------------------------------------------*/

//routers
app.use(productRouter);

app.get('/', (req, res) => {
  console.log('proof of life');
  res.status(200).send('I am alive');
});


//and repeat for categories

app.get('/categories', (req, res) => {
  let results = {
    count: database.categories.length,
    results: database.categories,
  };
  res.status(201).json(results);
});

app.get('categories/:id', (req, res) => {
  let cat = database.categories;
  let id = req.params.id;
  let output = cat.find(x => x.id === id);
  console.log('category:', output);
  res.status(200).json(output);
});

app.post('/categories', (req, res) => {
  console.log('what was added', req.body);
  database.categories.push(req.body);
  res.status(201).json(req.body);
});

app.put('/categories/:id', (req, res) => {
  let cat = database.categories;
  let id = req.params.id;
  let idx = cat.findIndex(x => x.id === id);
  cat[idx] = req.body;
  res.status(200).json(cat[idx]);
});

app.delete('/categories/:id', (req, res) => {
  let cat = database.categories;
  let id = req.params.id;
  let idx = cat.findIndex(x => x.id === id);
  cat.splice(idx,1);
  res.status(200).json(cat);
});

//error handlers
app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server:app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};