const express = require('express');
const router = express.Router();
const validateFields = require('../middlewares/validateFields');
const { check } = require('express-validator');
const { UserServices } = require('./services');

router.post('/signup', [
    check('name').notEmpty().isString(),
    check('password').notEmpty().isStrongPassword(),
    check('region').notEmpty().isString()
], validateFields, UserServices.signup);

router.post('/login', [
    check('name').notEmpty().isString(),
    check('password').notEmpty().isStrongPassword(),
], validateFields, UserServices.login);


module.exports = router;