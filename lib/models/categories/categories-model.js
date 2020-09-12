'use strict';

const mongoose = require('mongoose');

const Model = require('../mongo-collection');

const schema = mongoose.Schema({
  name: { type: String, required: true, },
  description: { type: String, required: true, },
});

const categorySchema = mongoose.model('category', schema)

module.exports = new Model(categorySchema);