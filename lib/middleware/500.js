// 500.js
// Sends a 500/Server Error message as the response (does not call .next())
// Import this into your server and set it up to be “used” as the last route
'use strict';

module.exports = (err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err });
};