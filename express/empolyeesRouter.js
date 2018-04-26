const express = require('express');


const router = express.Router();

router.get('/', function(req, res) {

  req.db.any('SELECT * FROM "employees"')
    .then(function (data) {
      console.log('DATA:', data);
      res.json(data);
    })
    .catch(function (error) {
      console.log('ERROR:', error);
    });
});

router.post('/', function(req, res) {
  req.db.one('INSERT INTO employees ("name") VALUES (${name}) RETURNING *', {
    name: req.body.name
  })
    .then(function (data) {
      console.log('User was created, id:', data);
      res.json(data);
    })
    .catch(function (error) {
      console.log('ERROR:', error);
    });

});

module.exports = router;
