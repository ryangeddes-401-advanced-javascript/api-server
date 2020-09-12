'use strict';

const express = require('express');
const router = express.Router();

router.param('model', getModel);
router.param('id', getId);

router.get('/:model', getAll);
router.get('/:model/:id', getOne);
router.put('/:model/:id', update);
router.post('/:model', create);
router.delete('/:model/:id', destroy);


//const productModel = require('../models/products/products-collection');


function getModel(req, res, next){

  const modelName = req.params.model;
  const idName = req.params.id;
  console.log('modelname', modelName);
  console.log('id', idName);
  // //step 2 check to see if file exists

  if (fileExist(modelName)){
    req.model = require(`../models/${modelName}/${modelName}-collection`);
  }  
  else{
    console.log('MODEL DOES NOT EXIST')
  }
  next();
}

function fileExist(modelName){
//https://dev.to/reiallenramos/create-an-express-api-static-and-dynamic-routes-33lb
  const fs = require('fs')
  const path = `./lib/models/${modelName}/${modelName}-collection.js`;
  try {
    if (fs.existsSync(path)) {
      return true
    }
    else{
      return false;
    }
  } catch(err) {
    console.error(err.message)
  }

}

function getId(req, res, next){
let id = req.params.id;
console.log('getId', id);


}

async function getAll(req, res, next){
  try{
    let data = await req.model.read();
    let results = {
      count: data.length,
      results: data
    };
    res.status(200).json(results);
} catch(err){
    next('no model')
    console.error(err.message)
}

};

async function getOne(req, res, next){
  let id = req.params.id;
  let record = await req.model.read(id);
  res.status(200).json(record);
};

async function update(req, res, next){
  let id = req.params.id;
  let newRecord = req.body;
  let record = await product.update(id, newRecord);
  res.status(200).json(record);
};

async function create(req, res, next){
  let record = await product.create(req.body);
  res.status(201).json(record);

};

async function destroy(req, res, next){
  let id = req.params.id;
  await product.destroy(id);
  res.status(200).json(req.params)

};




module.exports = router;