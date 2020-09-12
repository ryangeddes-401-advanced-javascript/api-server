'use strict';

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/apiserver';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  read(_id) {
    if (_id) {
      return this.schema.find({_id});
    }
    else {
      return this.schema.find({});
    }
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, newRecord){
    return this.schema.findByIdAndUpdate(_id, newRecord);
  }

  destroy(_id){
    return this.schema.findByIdAndRemove(_id);
  }

}

module.exports = Model;