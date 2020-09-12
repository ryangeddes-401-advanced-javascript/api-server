'use strict';

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/apiserver';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Model {



}


module.exports = Model;