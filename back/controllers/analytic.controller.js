const express = require('express');
const service = require(`../services/analytic.service`);
const passport = require('passport');
const router = express.Router();

router.get(
    '/overview',
    passport.authenticate('jwt', { session: false }),
    service.overview
);

router.get(
    '/analytics',
    passport.authenticate('jwt', { session: false }),
    service.analytics
);

module.exports = router;
