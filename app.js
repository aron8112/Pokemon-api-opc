const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routerIndex = require('./router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use('/api', router);


module.exports = app; 