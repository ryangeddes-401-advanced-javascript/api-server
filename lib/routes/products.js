'use strict';

const express = require('express');
const router = express.Router();

//local database
//let database = require('../../data/db.json');

const product = require('../models/products/products-collection');

//define routes

router.get('/products', getAll);
router.get('/products/:id', getOne);
router.put('/products/:id', update);
router.post('/products', create);
router.delete('/products/:id', destroy);

async function getAll(req, res, next){

  let data = await product.read();
  let results = {
    count: data.length,
    results: data
  };
  res.status(200).json(results);
  // product.read(req.body)
  //   .then(data => {
  //     console.log(data);
  //   });
};

async function getOne(req, res, next){
  //USE UIDD FOR MONGO ID
  let id = req.params.id;
  console.log(id);
  let record = await product.read(id);
  console.log(record);
  res.status(200).json(record);
  // let prod = database.products;
  // let id = req.params.id;
  // let output = prod.find(x => x.id === id);
  // console.log('product:', output);
  // res.status(200).json(output);
};

async function update(req, res, next){
  let id = req.params.id;
  console.log(id);
  let newRecord = req.body;
  console.log(newRecord);
  let record = await product.update(id, newRecord);
  res.status(200).json(record);


  // let prod = database.products;
  // let id = req.params.id;
  // let idx = prod.findIndex(x => x.id === id);
  // prod[idx] = req.body;
  // res.status(200).json(prod);
};

async function create(req, res, next){
  let record = await product.create(req.body);
  res.status(201).json(record);

  // //USING .THENS
  // product.create(req.body)
  // .then(result => res.status(201).json(result))
  // .catch(next);

  // console.log('what was added', req.body);
  // database.products.push(req.body);
  // res.status(201).json(req.body);
};

async function destroy(req, res, next){
  let id = req.params.id;
  await product.destroy(id);
  res.status(200).json(req.params)

  // let prod = database.products;
  // let id = req.params.id;
  // let idx = prod.findIndex(x => x.id === id);
  // prod.splice(idx,1);
  // res.status(200).json(prod);
};


// app.get('/products', (req, res) => {
//   let results = {
//     count: Object.keys(database).length,
//     results: database,
//   };
//   res.status(201).json(results);
// });

module.exports = router;