'use strict';
const express = require('express');
const app = express();
const router = express.Router();

const cors = require('cors');
const fetch = require('node-fetch');

// Fetch users from randomuser


router.get('/people', (req, res) => {
  const query = req.query;
  const page = Math.floor(query.start / query.length);
  fetch(`https://randomuser.me/api?seed=abc&page=${page}&results=${query.length}`)
    .then(r => r.json())
    .then(users => {
      res.json({
        draw: query.draw,
        recordsTotal: 1000000000,
        recordsFiltered: 1000000000,
        data: users.results
      });
    });
});

app.use(cors());
app.use('/', router);
app.listen(8080);

console.log('Server started on 8080');