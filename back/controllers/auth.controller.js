const express = require('express');
const service = require(`../services/auth.service`);

const router = express.Router();

router.post('/login', service.login);

router.post('/register', service.register);

module.exports = router;
