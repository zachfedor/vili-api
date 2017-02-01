'use strict';

import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
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


module.exports = router;
