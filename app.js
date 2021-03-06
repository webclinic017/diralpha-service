const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(express.json());

app.use(helmet());

app.use('/', require('./routes/index'));

module.exports = app;
