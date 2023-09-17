const express = require('express');
const service = require(`../services/analytic.service`);

const router = express.Router();

router.get('/overview', service.overview);

router.get('/analytics', service.analytics);

module.exports = router;
