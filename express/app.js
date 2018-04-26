const express = require('express');
const pgp = require('pg-promise')(/*options*/);

const db = pgp('postgres://postgres:example@localhost:5432/mrplanner');
const employeesRouter = require('./empolyeesRouter');
const app = express();

app.use(function(req, res, next) {
  req['db'] = db;
  next();
});

app.use(express.json());

app.get('/', function(req, res) {
  res.send('Hello world');
});

app.use('/employees', employeesRouter);

app.listen(3000, function() {
  console.log('Example app');
});
