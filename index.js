'use strict';

const server = require('./lib/server.js');
const PORT = process.env.PORT;

//It should call the .start() method from the server with the PORT set in your environment

server.start();