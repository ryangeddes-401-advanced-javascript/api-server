// logger.js
// Execute a console.log() containing the request path, method, and the requestTime 
//property of the request object
// Import this into your server and set it up to run at the application 
//level for all routes

'use strict';

module.exports = (req, res, next) => {
  console.log('startime:', req._startTime);
  console.log('method:', req.method);
  console.log('path:', req.path);
  //console.log('Request Method:', req.route.stack[0].method);
  //console.log('Request Path:', req.route.path);
  next();
};