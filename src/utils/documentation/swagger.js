const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const Swagger = require('./swagger.json');

router.use('/', swaggerUi.serve, swaggerUi.setup(Swagger));

module.exports = router;