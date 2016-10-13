'use strict';

const express = require('express');
const app = express();


/*
 * Home Route
 */
app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});


/*
 * Project Routes
 */
app.get('/projects', (req, res) => {
  res.json({
    data: [{
      id: 1,
      name: 'project one',
    }, {
      id: 2,
      name: 'project two',
    }]
  });
});


/*
 * Start Server
 */
app.listen(3000, function() {
  console.log('Vili API running on http://localhost:3000');
});
