'use strict';

const schema = require('./products-shema');
const express = require('express');

class ProductCollection{

  constructor() {
  }

  read(id) {
    if (id) {
      return schema.find({id});
    }
    else {
      return schema.find({});
    }
  }

  create(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(id, newRecord){
    return schema.findByIdAndUpdate(id, newRecord);
  }

  destroy(id){
    return schema.findByIdAndRemove(id);
  }


}


module.exports = new ProductCollection();