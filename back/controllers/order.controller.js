const express = require('express');
const service = require(`../services/order.service`);

const router = express.Router();

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    service.getAll
);

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    service.create
);

module.exports = router;
