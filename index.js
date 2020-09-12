'use strict';

const server = require('./lib/server.js');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const MONGODB_URI = 'mongodb://localhost:27017/apiserver';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.start();