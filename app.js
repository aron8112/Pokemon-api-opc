const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routerIndex = require('./router');

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

app.use('/api', routerIndex);

app.listen(proccess.env.PORT || 3000);

module.exports = app; 