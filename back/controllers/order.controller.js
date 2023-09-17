const express = require('express');
const service = require(`../services/order.service`);

const router = express.Router();

router.get('/', service.getAll);

router.post('/', service.create);

module.exports = router;
