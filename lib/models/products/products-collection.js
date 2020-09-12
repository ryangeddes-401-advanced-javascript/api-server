'use strict';

const schema = require('./products-shema');
const express = require('express');
const { options } = require('../../routes/api-v1');

class ProductCollection{

  constructor() {
  }

  read(_id) {
    if (_id) {
      return schema.find({_id});
    }
    else {
      return schema.find({});
    }
  }

  create(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, newRecord){
    return schema.findByIdAndUpdate(_id, newRecord, [options.new=true]);
  }

  destroy(_id){
    return schema.findByIdAndRemove(_id);
  }


}


module.exports = new ProductCollection();