// timestamp.js
// Put the current timestamp (formatted like a proper date) on the request object in a property called requestTime
// Import this into your server and set it up to run at the application level for all routes

'use strict';

module.exports = (req, res, next) => {
  req.requestTime = new Date().toString();
  console.log('Request Time:', req.requestTime);
  next();
};