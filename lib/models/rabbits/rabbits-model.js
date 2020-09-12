'use strict';

const mongoose = require('mongoose');

const Model = require('../mongo-collection');

const schema = mongoose.Schema({
  color: {type:String, required:true,},
  name: {type:String, required:true,},
});

const rabbitsSchema = mongoose.model('rabbits', schema);

module.exports = new Model(rabbitsSchema);