// 404.js
// Sends a 404/Not-Found message as the response (does not call .next())
// Import this into your server and set it up to be “used” after your other routes
'use strict';

module.exports = (req, res, next) => {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'Not Found'});
};