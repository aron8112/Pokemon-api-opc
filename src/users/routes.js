const express = require('express');
const router = express.Router();
const UserServices = require('./services');

router.post('/signup', UserServices.signup);
router.post('/login', UserServices.login);


module.exports = router;