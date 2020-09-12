// 'use strict';

// const mongoose = require('mongoose');

// const product = mongoose.Schema({
//   //id: { type: String, required: true, },
//   category: { type: String, required: true, },
//   name: { type: String, required: true, },
//   display_name: { type: String, required: true, },
//   description: { type: String, required: true, },
// });

// module.exports = mongoose.model('product', product)


'use strict';

const mongoose = require('mongoose');

const Model = require('../mongo-collection');

const schema = mongoose.Schema({
  category: { type: String, required: true, },
  name: { type: String, required: true, },
  display_name: { type: String, required: true, },
  description: { type: String, required: true, },
});

const productSchema = mongoose.model('product', schema)

module.exports = new Model(productSchema);