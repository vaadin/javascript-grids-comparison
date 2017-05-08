'use strict';
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const compression = require('compression');
const PORT = 3000;

// jQuery DataTables adapter for randomuser.me 
app.get('/people', (req, res) => {
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

app.use(compression());
app.use('/', express.static('src'));
app.listen(PORT);

console.log(`Server started on ${PORT}`);